Feature: Installation & Monitoring

  # To apply common parameters required for all scenarios, use Background keyword
  # To read data from file, use karate framework function : read
Background: 

	# Base Variables
    * url baseUrl
    * path createProjectAPIPath

	# Custom Class Object : Initialized java  class
		* def javaUtil = Java.type('customJavaCode.CustomCode');
@tag1
Scenario: Create project
    * def query = {key:apikey}
    * def requestBody = read('file:src/test/resources/APIPayloads/CreateProjectPayload.json')
    
    * def randomNum = javaUtil.getRandomNum()
    * set requestBody.name = requestBody.name + randomNum
    * print '\nRequest Body :-'
    * print requestBody

    Given header Authorization = token
    And params query
    And request requestBody
    When method POST
    Then status 201
    And print '\n Response :- '
    And print response
    And match response.id == '#notnull'
		And match response.installers[0] == 'om.mishra1@signify.com'