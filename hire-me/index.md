---
layout: layouts/base.njk
title: Hire me
templateClass: tmpl-contact
eleventyNavigation:
  key: Hire me ☞
  order: 4
---

<h1>Ready To Start A Project Together?</h1>
<p>I'd love to work with you. Fill out the form below to tell me more:</p>
<form name="contact-form" method="POST" data-netlify="true">
  <label for="subject">
    <input name="subject" type="hidden" value="Hire form inquiry from samantha-andrews.com"/>
  </label>
  <div class="form__input-wrap">
    <label>
      Name
      <input class="form__input form__contact-input" type="text" name="name" required/>
    </label>
  </div>
  <div class="form__input-wrap">
    <label>
      Email address
      <input class="form__input form__contact-input" type="email" name="email" required/>
    </label>
  </div>
  <div>
    <label>
      Message
      <textarea class="form__text-area form__contact-input" name="message" required></textarea>
    </label>
  </div>
    <button class="button form__input form__button" type="submit">Hire me today ☞</button>
    <p class="form__aside-text">I'll reply within 24 hours!</p>
</form>
