import Puppeteer from 'puppeteer'
import Dotenv from 'dotenv'

Dotenv.config()

type Env = {
  [variable: string]: string
}

export const {
  BASEURL,
  NODE_ENV
} = process.env as Env

export const Browser = (headless = true) =>
	Puppeteer.launch({
		headless: headless ? "chrome" : false,
		ignoreHTTPSErrors: true,
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
		timeout: 60000, // Increase timeout to 60 seconds
	});
