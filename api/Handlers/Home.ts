import { Request, Response } from 'express'
import Handler from './BaseHandler'

class HomeHandler extends Handler {

  public index(req: Request, res: Response): void {
		try {
			res.status(200).send({
				maintaner: "Angga <angga@anggastudio.com>",
				source: "https://github.com/anggastudio/hadith-api",
				endpoints: {
					list: {
						pattern: "https://api-hadis-pagi.anggastudio.com/books",
						description: "Returns the list of available Hadith Books.",
					},
					hadith: {
						pattern:
							"https://api-hadis-pagi.anggastudio.com/books/{name}?range={number}-{number}",
						example:
							"https://api-hadis-pagi.anggastudio.com/books/muslim?range=1-150",
						description:
							"Returns hadiths by range of number. (Note: For performance reasons, max accepted range: 300)",
					},
					spesific: {
						pattern:
							"https://api-hadis-pagi.anggastudio.com/books/{name}/{number}",
						example: "https://api-hadis-pagi.anggastudio.com/books/bukhari/52",
						description: "Returns spesific hadith.",
					},
				},
			});
		} catch (err) {
			// Use the correct method from BaseHandler
			this.handleHttpError(req, res, err as Error);
		}
	}
}

export default new HomeHandler()