import { readdirSync } from 'fs'

export type HadithContent = {
  number: number
  arab: string
  id: string
}

export type Hadith = {
  name: string
  id: string
  available: number
}

export type Hadiths = {
  [name: string]: HadithContent[]
}

const basePath = __dirname + '/../../books'
const allHadiths = readdirSync(basePath).reduce((acc, hadith) => {
  if (hadith.endsWith('.json')) {
    const name = hadith.replace(/.json/gi, '')
    acc[name] = require(`../../books/${hadith}`)
  }
  return acc
}, {} as Hadiths)

class HadithModel {
  public available(): Hadith[] {
    try {
			// Check if allHadiths is empty or undefined
			if (!allHadiths || Object.keys(allHadiths).length === 0) {
				console.error("No hadith books found. Check the books directory.");
				// Try to list the books directory contents
				const fs = require("fs");
				const path = require("path");
				const booksDir = path.join(__dirname, "../../books");

				if (fs.existsSync(booksDir)) {
					console.log(
						"Books directory exists. Contents:",
						fs.readdirSync(booksDir)
					);
				} else {
					console.log("Books directory does not exist at:", booksDir);
				}
			}

			return Object.entries(allHadiths || {}).map(([haditsName, data]) => ({
				name: `HR. ${this.beautyName(haditsName)}`,
				id: haditsName,
				available: data.length,
			}));
		} catch (error) {
			console.error("Error in available():", error);
			return [];
		}
  }

  public getByName(haditsName: string): HadithContent[] {
    return allHadiths[haditsName]
  }
  
  public getByNumberRange(hadits: HadithContent[], from: number, to: number): HadithContent[] {
    const data: HadithContent[] = []
    if (!hadits) throw new Error(`Not Available`)
    if (from > to) {
      for (from; from >= to; from--) {
        data.push(hadits[from - 1])
      }
    } else {
      for (from; from <= to; from++) {
        data.push(hadits[from - 1])
      }
    }
    return data
  }

  public getByNumber(hadits: HadithContent[], number: number): HadithContent | undefined {
    return hadits.find(hadith => hadith.number === number)
  }

  public beautyName(haditsName: string): string {
    const words = haditsName.split('-')
    return words.reduce((acc, word) =>
      acc + ` ${word[0].toUpperCase() + word.substr(1).toLowerCase()}`, '').trim()
  }
}

export default new HadithModel()
