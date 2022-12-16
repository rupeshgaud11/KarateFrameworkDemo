Feature: Product Information Feature

#Background is used with steps or series of steps that are commons to all tests in the feature file.
#The steps which are defined under background will run before each and every scenario for a feature file.

Background:

# CALLING BEFORE SCENARIO: DATA INSERTION
* def beforeScenario = callonce read('file:src/test/java/hooksFeatures/before-scenario.feature@productInfo')

# CALLING AFTER SCENARIO: DATA DELETION AFTER SCENARIO
* configure afterScenario = function() { karate.call('file:src/test/java/hooksFeatures/after-scenario.feature@productInfo') }

# CALLING AFTER FEATURE: DATA DELETION
* configure afterFeature = function() { karate.call('file:src/test/java/hooksFeatures/after-feature.feature@productInfo') }

@First
Scenario: Get Luminaire Information

* url baseUrl
* path productInfo_tag1

Given header Authorization = token
And param key = apikey
And print 'sending request'

When method GET

Then status 200
Then print 'getting response\n'
Then print response
* print '\n' + response.luminaire.PRODUCT.brandName
* def brandName = response.luminaire.PRODUCT.brandName
And match brandName == 'Philips'
And print response.notes
And print response.notes[0].text
And match $.notes[0].text == 'dummy'
And match $.notes[*].text == ['dummy', 'installation in progress ', 'installation done']