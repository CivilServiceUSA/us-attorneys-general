![Civil Services Logo](https://cdn.civil.services/common/github-logo.png "Civil Services Logo")

__Civil Services__ is a collection of tools that make it possible for citizens to be a part of what is happening in their Local, State & Federal Governments.


115th United States Senate
===

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/CivilServiceUSA/api/master/LICENSE)  [![GitHub contributors](https://img.shields.io/github/contributors/CivilServiceUSA/api.svg)](https://github.com/CivilServiceUSA/api/graphs/contributors)

![Screenshot](screenshot.gif "Screenshot")

We have also built an interactive search tool that can show you some interesting demographic data on US Senators.

## [★ Search US Senators ⧁](https://civilserviceusa.github.io/us-attorneys-general/)


Introduction
===

This project provides the __[US Senate Data](./us-attorneys-general)__ ( JSON, XML, CSV, SQL & YML formats ) & Headshots.  See [Provided Data](#provided-data) below for full list of data in this project.


Data Source
---

Our team Manages the [115th Congress United States Senate Demographic Data](http://bit.ly/115th-congress-us-attorneys-general).  This document is Read Only for the general public.  If you would like to update this document, [Join our Slack Team](https://slack.civil.services/bkx7n2) to learn how.


Completed Tasks
---

We have completed the following Data Collection for this set of data. [Watch Project](https://github.com/CivilServiceUSA/us-attorneys-general/subscription) to be notified of updates.

- [X] US House Data Created
- [X] Representative Headshots Created
- [X] Images Uploaded to CDN
- [X] Published NPM Package


Senator Headshots
---

Civil Services created high-resolution photos for each US Senator and made them available in the following sizes:

* 1024 x 1024 pixels
* 512 x 512 pixels
* 256 x 256 pixels
* 128 x 128 pixels
* 64 x 64 pixels

You can either copy the `headshots` folder into your project, or we also offer a CDN.

If you are using the image `headshots/512x512/bernard-sanders.jpg` the CDN for that file would be `https://cdn.civil.services/senate/headshots/512x512/bernard-sanders.jpg`


Senator Data
---

This project offers data for the 115th United States Senate in the following formats:

* [CSV](us-attorneys-general/data/us-attorneys-general.csv)
* [JSON](us-attorneys-general/data/us-attorneys-general.json)
* [SQL](us-attorneys-general/data/us-attorneys-general.sql) & [SQL Table](us-attorneys-general/data/us-attorneys-general.table.sql) 
* [XML](us-attorneys-general/data/us-attorneys-general.xml)
* [YML](us-attorneys-general/data/us-attorneys-general.yml)

Provided Data
---

The following information is available for each Senator.

<details>
  <summary>Expand Details</summary>

Parameter               | Type   | Description
------------------------|--------|----------------
`state_name`            | string | Name of State
`state_state_name_slug` | string | Name of State converted to lowercase letters and spaces replaced with dashes
`state_code`            | string | Two Letter State Abbreviation
`state_code_slug`       | string | Two Letter State Abbreviation in lowercase letters
`class`                 | enum   | Senate to be divided into three classes for purposes of elections `['I','II','III']`
`bioguide`              | string | The alphanumeric ID for this Senator on http://bioguide.congress.gov ( http://bioguide.congress.gov/scripts/biodisplay.pl?index=C001075 )
`thomas`                | string | The numeric ID for this Senator ( not really used anymore )
`govtrack`              | string | The numeric ID for this Senator on GovTrack.us ( https://www.govtrack.us/congress/members/412630 )
`opensecrets`           | string | The alphanumeric ID for this Senator on OpenSecrets.org ( https://www.opensecrets.org/politicians/summary.php?cid=N00030245 )
`votesmart`             | string | The numeric ID for this Senator on VoteSmart.org ( http://votesmart.org/candidate/69494 )
`fec`                   | string | Federal Election Commission ID ( http://www.fec.gov/fecviewer/CandidateCommitteeDetail.do?candidateCommitteeId=H6AL04098 )
`maplight`              | string | The numeric ID for this Senator on MapLight.org  ( http://maplight.org/us-congress/legislator/127 )
`wikidata`              | string | The numeric ID for this Senator on wikidata.org ( https://www.wikidata.org/wiki/Q672671 )
`google_entity_id`      | string | Google Integration
`title`                 | enum   | Title of Senator
`party`                 | enum   | Political Party of Senator
`name`                  | string | Full Name of Senator
`name_slug`             | string | Full Name of Senator converted to lowercase letters and spaces replaced with dashes
`first_name`            | string | First Name of Senator
`middle_name`           | string | Middle Name of Senator
`last_name`             | string | Last Name of Senator
`name_suffix`           | string | Name Suffix of Senator
`goes_by`               | string | Name Senator Prefers to go by
`pronunciation`         | string | How to Pronounce Senator's Name
`gender`                | enum   | Gender of Senator
`ethnicity`             | enum   | Ethnicity of Senator
`religion`              | enum   | Religion of Senator
`openley_lgbtq`         | enum   | Senator is Openly LGBTQ
`date_of_birth`         | date   | Date of Birth of Senator
`entered_office`        | date   | Date Senator First Entered Office
`term_end`              | date   | Date Senator's Current Term Ends
`biography`             | string | Senator's Biography from Congress.gov
`phone`                 | string | Work Phone Number of Senator
`fax`                   | string | Work Phone Number of Senator
`latitude`              | float  | GPS Latitude of Office
`longitude`             | float  | GPS Longitude of Office
`address_complete`      | string | Work Mailing Address of Senator
`address_number`        | number | Mailing Address Number
`address_prefix`        | string | Mailing Address Prefix
`address_street`        | string | Mailing Address Street
`address_sec_unit_type` | string | Mailing Address Section Unit Type
`address_sec_unit_num`  | number | Mailing Address Section Unit Number
`address_city`          | string | Mailing Address City
`address_state`         | string | Mailing Address State
`address_zipcode`       | string | Mailing Address zipcode
`address_type`          | string | Mailing Address Type
`website`               | string | Senator's Website
`contact_page`          | string | Senator's Contact Page
`facebook_url`          | string | Facebook URL
`twitter_handle`        | string | Twitter Handle of Senator ( not always available )
`twitter_url`           | string | Twitter URL of Senator ( not always available )
`photo_url`             | string | Photo URL of Senator ( not always available )

* `photo_url` is available in the following sizes: 64x64, 128x128, 256x256, 512x512 & 1024x1024 ( defaults to 512x512 )

</details>