---
identifier: sunwaysa-bookings
title: SunwaySA Bookings
subtitle: Making spaces more accessible.
type: Case Study
cover_url: /assets/works/sunwaysa-bookings/booking.png
card:
  mobile: /assets/works/sunwaysa-bookings/card_mobile.png
  tablet: /assets/works/sunwaysa-bookings/card_tablet.png
  tablet_retina: /assets/works/sunwaysa-bookings/card_tablet@2x.png
  desktop: /assets/works/sunwaysa-bookings/card_desktop.png
  desktop_retina: /assets/works/sunwaysa-bookings/card_desktop@2x.png
description: >
  <strong class="project-inline-title">SunwaySA Bookings</strong> is an online booking platform focusing on delivering a seamless, simple and convenient booking experience. It was developed as part of my tenure in the Sunway University Student Council where I led this project.
responsibilities:
  - UI/UX Design
  - Front-end Development
  - Back-end Development
  - Strategy
---

## The Problem

### Uncertainty in availability
In an institution of over 15000 students, having your own personal private space for discussions and activities is not only important, but essential for productivity. Sunway University was a growing institution that despite the launch of new campus blocks, still faced the problem of having accessible private spaces for students. And while private discussion rooms were available, there was a huge element of uncertainty as bookings had to be made over the counter.

### Arduous bureaucracy
For leaders of clubs and societies on the otherhand, classrooms and function rooms can be booked for club meetings and activities — at the cost of a long and arduous process. Booking a meeting room for instance, requires multiple trips to multiple departments within the institution for approval, provided that the time slot you requested is available after having to check over the counter.

## The Approach
So when the student council was given the responsibility of managing a new Student Centre, we found ourselves just in the right position to help alleviate these issues, and perhaps set a benchmark in which other parts of the University can emulate.

<!--<div class="quote__title">Our solution?</div>-->

> An online booking platform focusing on delivering a seamless, simple and convenient booking experience.

To achieve this, we first looked on the web for existing solutions that met our needs. Unfortunately, our search yielded less than desirable results — a majority felt clunky or lacked support in some of our edge cases. In the end, we developed our own full stack booking platform using the latest technologies in order to deliver the experience that we were looking for.

## The Experience

### Intuitive time selection
One of the most, if not the most important element of any booking system is the UI component to select the booking slots. We wanted a component that was easy to use, fast, and less prone to errors. 

Multiple prototypes were created using AngularJS itself (should've used a prototyping tool in hindsight, heh). These prototypes were tested among dozens of users, with each of them given a specific scenario and goal to achieve. After multiple iterations, we found that the following worked the best:

<video src="/assets/works/sunwaysa-bookings/time-selector.mp4" preload autoplay loop></video>

<div class="list--circled" markdown="1">
1. Grid style time selector gives a quick overview on the availability of slots in one single view.
2. Rich and dynamic interactions provide a greater clarity of what actions are possible, and the possible outcomes of those actions.
3. Clearly defined boundaries to minimize any surprising displeasure (ie. validate up front, rather than later).
4. Time tooltips with duration to provide greater clarity on the user's selection.
5. Minimal time grid removing unnecessary distractions help to improve scannability.
5. Left aligned time markers help to better define time boundaries of each cell.
6. Highlighted days of week help to orient the user the day of each row.
</div>

### Seamless approval, or lack thereof
Existing booking systems used by the university require explicit approval from the administrators. They were needed to verify the authenticity of the booking and the user, and to prevent unnecessary abuse of the facilities. But this introduced a long period of uncertainty for the user in between the time the request was made, and the time the booking was (possibly) approved.

Our solution to this was to skip the need for approval altogether in the booking process. Achieving this required a huge concerted effort from behind the scenes, such as:

<div class="list--titled" markdown="1">
1. **Automatic booking validations**<br />
   Automatic booking validations (sounds fancier than it actually is) were simply automatic checks by the application to ensure that users can only book within defined parameters. Such as the maximum number of hours, the maximum number of bookings, or the range of days that can be booked. Of course, these limitations are stated clearly in the UI to prevent any surprise displeasure.
2. **Active moderation of the system**<br />
   These automatic validations however, can only do so much. To detect any other fringe cases of abuse, we rely on actively moderating the system. To assist with that, a [Telegram](https://telegram.org/) bot was developed to report on the activities in the system, allowing us to be easily notified of any odd behaviours.
3. **Tightly controlled user privileges**<br />
   Lastly, the access to the system is controlled. While all students of the university can register to make bookings, they are limited to stricter—but still reasonable—limitations. These limitations manifest as lesser maximum hours and smaller range of bookable days. Students which require greater booking privileges (such as leaders of societies) have the option to request to increase their limits via a simple form. Essentially, we moved the approval process from booking creation to here, and it only has to happen once!
</div>

The result is a seamless and fast booking experience for the user. All bookings made on the platform is automatically approved and is greeted with a large confirmation screen affirming the user of their booking slots. And when it's their slot, they would find that the room is ready and available for their use.

![Confirmation screen](/assets/works/sunwaysa-bookings/confirmation.png)

### Other little things
A scenario we often noticed at the end of meetings is a small little discussion to decide on the next meeting date. Sometimes, this decision is based on the availability of meeting rooms. To help streamline this process, we made the time selection page public facing, rather than hidden behind a login protected page. That's one minute less of being stuck in a meeting!


This seamless, simple and convenient booking experience also doesn't just exist on the desktop, but was made to be responsive to all kinds of devices. The result is a booking platform that offers a great experience whenever and wherever you are.

![Responsive views](/assets/works/sunwaysa-bookings/responsive.png)

## The Tech Stack
The entire stack of the booking platform was a custom solution. The back-end is made in Python using the [Flask](http://flask.pocoo.org/) microframework with MySQL as its primary database. The decision behind using Python was that it is a relatively easier language to pick up, allowing future maintainers to quickly pickup programming and understand the code. The student council is after all, a student-led organization that may or may not have the necessary professional expertise to maintain the system in the future.

The front-end is a single page application made using [AngularJS](https://angularjs.org/) which enabled us to provide the rich and dynamic interactions as mentioned earlier that would otherwise be difficult with traditional server rendered pages. This also helped to decouple the front end and back end, allowing easier development and testing.

The front-end and back-end communicates via a REST API, and authentication is performed via stateless JSON Web Tokens. Security was always our top priority by enabling HTTPS and salting + hashing passwords. These stateless, API driven development helped to create a modular codebase that's more easier to test, maintain and reason with.

## The Results
SunwaySA Bookings is actively used by hundreds of students in Sunway University for their meetings, discussions and activities everyday. To date, it has recorded more than 6000 bookings within 1.5 years of launching, which is an average of eleven bookings made per day! It has helped made private spaces more accessible to both students and student leaders than ever before.

As of now, it is currently used by both the Sunway University Student Council and Management to efficiently manage the Student Hub with four bookable spaces.

<div class="project-results">
  <div class="project-results__item">
    <span class="project-results__figure" data-counter>6450</span>
    <span class="project-results__label" markdown="1">bookings<sup>[1](#footnote-1)</sup></span>
  </div>
  <div class="project-results__item">
    <span class="project-results__figure" data-counter>906</span>
    <span class="project-results__label" markdown="1">users<sup>[1](#footnote-1)</sup></span>
  </div>
  <div class="project-results__item">
    <span class="project-results__figure" data-counter data-counter-suffix="/100">86</span>
    <span class="project-results__label" markdown="1">system usability score<sup>[2](#footnote-2)</sup></span>
  </div>
</div>

<a name="footnote-1"></a><sup>1</sup> Recorded as of March 2017 (1.5 years since launch)
<br />
<a name="footnote-2"></a><sup>2</sup> Recorded in a survey done in March 2016 with a sample size of n = 120

## Key Findings and Takeaways

> To deliver a great experience, the entire underlying system has to support it.

To achieve the experience that we were aiming for, it required a concerted effort from all layers of the platform. The user interface is only part of the solution, and not the answer.

The entire end-to-end experience has to be considered and carefully designed — from how the user discovers the service to how the user physically accesses his or her booked room. Furthermore, the administration and bureaucracy had to be planned around the specific experience we were aiming for, rather than the other way round.

![Home page](/assets/works/sunwaysa-bookings/home.png)
*Home page*

![Details page](/assets/works/sunwaysa-bookings/details.png)
*Details page*

![Login page](/assets/works/sunwaysa-bookings/login.png)
*Login page*
