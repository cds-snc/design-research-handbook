---
layout: page
title:  "Large scale testing"
lang: no
category: "Methods"
permalink: "/large-scale-testing/"
trans_url: "/fr-needed/"
---
### What is large scale testing?
Having many people to try using a website and measuring their behaviuor or response. Large scale testing yields appropriate **quantitative** measures of site's performance.
* Often, large scale testing requires so many people, it must be **automated**. Automated testing doesn't need a researcher to run sessions.
* Large scale results are easiest to interpret when comparing sites against each other, or **benchmarking**.

![Large scale usability testing process map]({{ site.baseurl}}/assets/img/large-scale-process.jpg)

### Key elements of large scale testing
#### Make a plan.
Like with any research, outline the goals or research questions driving your work. In particular:
  * **Select benchmark or comparator sites (the independent variables).**
 Find compare sites people already use to the complete a task. Or a previous version of your website.
  * **Select what you want to measure (the dependent variables).**
Select the metrics you want to measure on a website. These metrics should bear on your research question or goal. Reference your product's performance management framework. Common metrics include: task time, task completion rate, or participant confidence. Note whether metrics are *scalar* (like task time ) or *proportions* (like completion rate).
  * **Decide how many people to recruit.**
Use a statistical power calculator to decide how many participants you need. Almost all studies with quantitative results need more than 30 participants.

#### Select a recruiting source.
To get a large enough sample for your research, you can:
  * **Conduct many days of in-person intercept testing with incentives.**
 Spend several days conducting quick tests in a place with lots of people. You may be able to achieve the sample size you need.
  * **Use a participant panel**. Participant panel providers have large databases of people who want to participant in research (for a fee!). You provide a list of screening questions; they provide you a list of participants. You then send participants a link to your website and questions you want them to answer.
  * **Use a microtasking platform**. People complete small tasks on these websites in exchange for a small amount of money. Many academic researchers use microtasking platforms to recruit large, diverse groups of participants. Although cheaper and more diverse, it's harder to screen participants on microtasking platforms. If you need a narrower sample than "people who live in Canada", participant panels might be a better bet.

#### Instrument your website.
Participants use a version of your website that can measure their reactions. There are a few ways to do this:
  * **At the least, set up an analytics-equipped version of each site you want to test at unique URL**. Make sure Google Analytics gathers the metrics you want to collect. You'll steer test participants do this version of the website. You need to set up a special version for each site you want to include in your test. This approach works well for participant panels or microtaskers.
  * **Also, you can ask participants to complete a short survey after they use the websites.**
You can steer them to a short Google Form that contains SEQ, comprehension questions. Don't ask more than 5 questions. Do not collect any protected information from participants or ask public opinion research.

#### Pilot the test.
Ask a friend or colleague to try completing the same tasks and survey a participant would. Correct the issues they find.

#### Run the test.
Send the test to participants and begin collecting data. Watch data as it comes in an check for unusual results that could show bugs or test problems.

#### Analyze the data.
  * Start by visualizing your data. Make histograms that show the distribution of responses to each of your questions. Make bar charts that compare metrics between websites.
  * Calculate the average or percentage for each of your metrics. Compare the averages or percentages of the different websites you tested.
  * Remember, these metrics are an estimate of how the whole user base would respond to the website. Estimates should have a margin of error. You can calculate a margin of error using a confidence interval calculator for [proportions](http://www.sample-size.net/confidence-interval-proportion/) or [averages](http://www.sample-size.net/confidence-interval-mean/). If two margins of error overlap, it's unlikely the metrics are different among all users.

#### Assumptions of confidence interval calculations
Confidence interval and margin of error calculations make assumptions about your data:
- Your sample of people was random
- You have enough responses (so that the "sampling distribution is normal")
  - For proportions, like task completion, you need more than 10 successes or failures.
  - For averages, like task time, you need more than 30 participants
- Responses are independent, or don't affect each other.
  - You sample is less than 10% of the population size.
  - You sample without replacement. In other words, once some participates in this study, they can't take part again.
If your data doesn't meet these criteria, you can't calculate a confidence interval from it.
Learn more about confidence intervals and the math behind them at [Khan Academy](https://www.khanacademy.org/math/statistics-probability/confidence-intervals-one-sample)

### Tips for conducting usability testing at CDS
* Follow our [guidelines for respecting participants' privacy]({{ site.baseurl }}/privacy). Work with our policy team to create an ATIP-approved consent form before you get started. Speak to the policy analyst on your product team or ask Colin for more help.
* Usability testing as part of user research is generally exempt from [Government of Canada Public Opinion Research regulation](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/public-opinion-research-government.html#toc3). But follow [our POR tips]({{ site.baseurl }}/por) to steer clear of potential problems.

### Resources
#### From others
* Power calculators
  * [University of California, San Francisco power calculator for means (like average task time)](http://www.sample-size.net/sample-size-conf-interval-mean/)
  * [University of California, San Francisco power calculator for means (like average task time)](http://www.sample-size.net/sample-size-conf-interval-proportion/)
* Confidence interval calculators
  * [University of California, San Francisco power calculator for means (like average task time)](http://www.sample-size.net/confidence-interval-mean/)
  * [University of California, San Francisco power calculator for means (like average task time)](http://www.sample-size.net/confidence-interval-proportion/)
* [Using Mechanical Turk to collect survey responses](https://blog.mturk.com/tutorial-getting-great-survey-results-from-mturk-and-surveygizmo-dee93ff58561)
* [Khan Academic on calculating confidence intervals](https://www.khanacademy.org/math/statistics-probability/confidence-intervals-one-sample)

_- Last updated by Colin on May 21, 2019_
