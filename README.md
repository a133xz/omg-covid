#  Background
👨‍💻  👨‍🎨 ✍️

We came up with this project idea in February when everything was beginning to shut down. As each day passed, news from around the world was getting more and more surreal. Overwhelming. Blurry. So, we made this. It’s a collection of the historic ways the world is changing.

## 🗞 To contribute

We are collecting the biggest ways our world is changing due to COVID-19. It’s not an exhaustive archive, but we know we’re missing some interesting stories. We’d love your suggestions.

### Content

Your story suggestion should meet this criteria:

- It’s an interesting news story that shows how the world is changing due to COVID-19. This could be a big political story, or something related to individual impact.
- It’s more fact, less opinion (we won’t post anything without verifying sources)
- It’s significant, ergo making you think o m g

And this format:

- Story headline (`title`)
- Story description (`description`) - in less than four sentences
- The date it happened (`date`) - day and month (first three letters)
- Link (`link`) - the original news source
- Story type (`type`) - choose either `Borders`, `Business`, `Culture` or `Society`
  
Example:

```json
  {
    "title": "China cuts off the city of Wuhan,",
    "description": "home to 11 million people. Transportation is blocked, two days before Lunar New Year",
     "date": "23 Jan",
    "link": "https://www.businessinsider.com/wuhan-coronavirus-outbreak-how-china-coping-photos-2020-1?r=US&IR=T",
    "type": "Society"
  }
```

Please create a pull request adding the new story to `/src/data/stories.json`. Or, if you don´t speak code, please [fill this out]((https://github.com/a133xz/omg-covid/issues/new?template=add-story.md))

### Translations

We're planning to add language translations. If you're keen to help, please submit a [new issue](https://github.com/a133xz/omg-covid/issues/new?template=other.md) letting us know which language you're able to translate.

## 💻 Code

Issues and PRs are much appreciated. Please create a new branch and a PR to submit your suggestions.

### Project setup

This project is created with [Gridsome](https://gridsome.org/) and hosted in [Vercel](https://vercel.com)

- Make sure you have Yarn installed
- git clone https://github.com/a133xz/omg-covid
- `yarn` to install dependencies
- `yarn serve` to run locally
- `yarn build` to build the project

## 🎉 Big thanks

to [killedbygoogle](https://killedbygoogle.com/) and [isitcanceledyet](https://www.isitcanceledyet.com/) for serving as inspiration. Big thanks to everyone who’s helping the world navigate the scary happenings: workers, social distancers, and those putting the collective first. 

## Community is the answer

Send curiosities or cures to: omgcovid@gmail.com