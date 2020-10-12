---
layout: layouts/base.njk
title: Hire me
templateClass: tmpl-contact
eleventyNavigation:
  key: Hire me ☞
  order: 4
---

# Ready To Start A Project Together?

I'd love to work with you. Fill out the form below to tell me more:

<form name="contact-form" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <label class="form__label-hidden">Don’t fill this out if you're human <input name="bot-field" /></label>
  <label for="subject">
    <input name="subject" type="hidden" value="Hire form inquiry from samantha-andrews.com"/>
  </label>
  <div class="form__input-wrap">
    <label>
      Name
      <input class="form__input form__contact-input" type="text" name="name" placeholder="Spongebob Squarepants" required/>
    </label>
  </div>
  <div class="form__input-wrap">
    <label>
      Email address
      <input class="form__input form__contact-input" type="email" name="email" placeholder="spongebob@thekrustykrab.com" required/>
    </label>
  </div>
  <div>
    <label>
      Message
      <textarea class="form__text-area form__contact-input" name="message" placeholder="Hi Samantha, I've got a website project to talk to you about." required></textarea>
    </label>
  </div>
    <button class="button form__input form__button" type="submit">Hire me today ☞</button>
    <p class="form__aside-text">I'll reply within 24 hours!</p>
</form>
