# Hadith - API

> Simple Islamic Hadith API with Indonesia Translation.

### Deploy

Already deployed in [https://api-hadis-pagi.anggastudio.com]. Fork this repo to make your own

### Available Hadith

- [X] Muslim
- [X] Bukhari
- [X] Tirmidzi
- [X] Nasai
- [X] Abu Daud
- [X] Ibnu Majah
- [X] Ahmad
- [X] Darimi
- [X] Malik

### Features

- [X] Arabic
- [X] Indonesia Translation

### Endpoint usage

- [X] `/books` = Returns the list of available Hadith Books.
- [X] `/books/{name}?range={number}-{number}` = Returns hadiths by range of number. **Example: [/books/bukhari?range=300-500](https://api.hadith.gading.dev/books/bukhari?range=300-500)**. *(Note: For performance reasons, max accepted range: 300)*
- [X] `/books/{name}/{number}` = Returns spesific hadith. **Example: [/books/muslim/5](https://api.hadith.gading.dev/books/muslim/5)**

### Example Response

> Fetching on [HR. Muslim No. 5](https://api.hadith.gading.dev/books/muslim/5)

[![/books/muslim/5</code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code></code>](https://raw.githubusercontent.com/gadingnst/hadith-api/master/screenshots/example-result.png)](https://raw.githubusercontent.com/gadingnst/hadith-api/master/screenshots/example-result.png)
