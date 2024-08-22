---
title: "Visualising (Public) Health (2022, 2023)"
subtitle: "interactive data visualisation"
date: 2023-03-14T07:07:07+01:00
draft: false
---

*on visualising & intepreting the data*

## 2022: The Job Seeking Flunctuations in Nursing (in Finland)

{{< rawhtml >}} 
<iframe title="Jobseekers and vacancies in nursing associate professionals during the month (2006 - 2022)" aria-label="Interactive line chart" id="datawrapper-chart-Kwgn9" src="https://datawrapper.dwcdn.net/Kwgn9/13/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="680" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
{{< /rawhtml >}}

In an introductory course to Information Design, I decided to investigate a dataset about the monthly number of jobseekers and vacancies in the Healthcare sector in Finland. The job seeker numbers and vacancies flunctuate mostly in a periodical pattern. Yet, there are still certain parts that we cannot easily explain, for example, the peaking amount of job seekers in early 2017. 

After digging up some news, some friends and I noticed a possible link between jobseeking and the immigration: [Something you may Care: data behind careworker in Finland (Autumn 2022)](https://www.figma.com/proto/rKyJDHJ89ELLG81i1tmDuE/Information-Design?page-id=0%3A1&node-id=2-8&viewport=236%2C-267%2C0.21&scaling=contain&starting-point-node-id=2%3A8)

[![Immigration heatmap](./images/immigration-heatmap.jpg)](./images/immigration-heatmap.jpg)
*Heatmap of immigration to Finland by month from January 2006 to December 2022*

## 2023: The Weekly Infectious Disease Case Count (in Singapore)

[![Hand Food Mouth Disease Weekly Count Heatmap](./images/2023--singapore-hand-foot-mouth.png)](./images/2023--singapore-hand-foot-mouth.png)

Here is a heatmap depicting the weekly infectious disease case count in Singapore from January 1, 2012 to December 31, 2022. ([interactive visualisation here](https://l-lu-u.github.io/singapore-weekly-infectious-disease-bulletin/))

At the beginning of the project, I was planning to map the dengue epidemic outbreaks with meteorological data, such as seasonal monsoons, humidity, or rainfall - as we understand that dengue is transmitted by Aedes species mosquitoes, which is often associated with weather conditions. ([trial version](https://l-lu-u.github.io/weekly-dengue-cases/))

[![Dengue plot](./images/dengue-plot.png)](./images/dengue-plot.png)
*Heatmap of immigration to Finland by month from January 2006 to December 2022*

However, when looking at the periodical pattern of dengue outbreaks, I start wondering - was the year 2021 less humid than 2022 or 2020? The answer is - no (after I checked the open data from the National Environment Agency, Singapore). During this process, I unexpectedly learnt quite a few things about epidemiology - for example, how construction sites, Covid-19 lockdowns, vector control fundings… these socio-economic situations can impact on contagious disease outbreaks. 

[![Relative humidity plot](./images/dengue-plot-humidity.png)](./images/dengue-plot-humidity.png)

Here is the very interesting thing I learnt about information design - it works more than the presentation of final outcomes, instead, it is often a means of inquiry. Beginning with visualising the information, I become curious about a phenomenon and start investigating more into it.