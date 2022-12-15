Feature: update existing project

Background: 

	# Custom Class Object : Initialized java  class
		* def javaUtil = Java.type('customJavaCode.CustomCode');

@tag1
Scenario: Update Project

	# create a project
		* url baseUrl
    * path createProjectAPIPath
	
    * def key = {key:apikey}
    * def requestBody = read('file:src/test/resources/APIPayloads/CreateProjectPayload.json')
    * def randomNum = javaUtil.getRandomNum()
    * set requestBody.name = requestBody.name + randomNum
    * print '\nRequest Body :-'
    * print requestBody

    Given header Authorization = token
    And params key
    And request requestBody
    When method POST
    Then status 201
    And print '\n Response :- '
    And print response
    
    * def projectId = response.id
    
    * path updateProjectPath + projectId
    
    * set requestBody.city = 'Nagpur'
    
    Given header Authorization = token
    And params key
    And request requestBody
    When method PUT
    Then status 200
    And print '\n Response :- '
    And print response
    
    