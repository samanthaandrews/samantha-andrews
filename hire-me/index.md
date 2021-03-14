---
layout: layouts/base.njk
title: Hire me
description: Ready to start a project together? Hire Samantha Andrews to design and build your website.
templateClass: tmpl-contact
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
  <p>Select the <a href="{{ '/services' }}">service(s)</a> you're interested in:</p>
  <div class="form__input-wrap">
      <input type="checkbox" id="web design" name="web design" checked/>
      <label for="web design">Web design</label>
  </div>
  <div class="form__input-wrap">
      <input type="checkbox" id="digital product design" name="digital product design" />
      <label for="digital product design">Digital product design</label>
  </div>
  <div class="form__input-wrap">
      <input type="checkbox" id="creative career strategy session" name="creative career strategy session" />
      <label for="creative career strategy session">Creative career strategy session</label>
  </div>
  <div class="form__input-wrap">
      <input type="checkbox" id="other" name="other" />
      <label for="other">Other</label>
  </div>
  <div>
    <label>
      Message
      <textarea class="form__text-area form__contact-input" name="message" placeholder="Hi Samantha, I've got a website project to talk to you about." required></textarea>
    </label>
  </div>
    <button class="button form__input button__colorful" type="submit">Hire me today ☞</button>
    <p class="form__aside-text">I'll reply within 24 hours!</p>
</form>
