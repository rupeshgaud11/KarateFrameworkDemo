function fn() {

	var env = karate.env; // get env from TestRunner.java

	karate.log('Environment selected is - ', env);

	if (!env) {
		env = 'Test'; // default when karate.env not set
	}

	var config = { // base config
		baseUrl: 'https://integration.servicetag.services.signify.com',
		productInfo_tag1: '/api/servicetag/v18.1/servicetag/A538.130196889.0008',
		createProjectAPIPath: 'api/projects/v18.1/create',
		updateProjectPath: 'api/projects/v18.1/',
		token: 'Bearer eyJzdWIiOiJscm46aW90OmFhbTo6MjAwMDAwMDA2MTpwcmluY2lwYWw6dXNlcjpydXBlc2guZ2F1ZEBzaWduaWZ5LmNvbSIsImtpZCI6IjFkY2EzNTU4LWJhYmUtNGJjNS05Yjg3LTA3NTU2MTYzMTk3YyIsImlzcyI6InNpZ25pZnkuaW90IiwidHlwIjoiSldUIiwiZXhwIjoxNjcxMTMwODYwLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2YWM3ZDE0Yi00OTk5LTQ1ZDAtYWQyYi05NWRiNjUyOGMyN2IiLCJzdWIiOiJscm46aW90OmFhbTo6MjAwMDAwMDA2MTpwcmluY2lwYWw6dXNlcjpydXBlc2guZ2F1ZEBzaWduaWZ5LmNvbSIsImV4cCI6MTY3MTEzMDg2MCwiaW90X3R0Ijoic2lnbmlmeS5pb3QuYWNjZXNzLXRva2VuIiwiYXVkIjoibHJuOmlvdDphYW06OjIwMDAwMDAwNjE6OjoiLCJpc3MiOiJscm46aW90OmFhbTo6MDAwMDAwMTAwMDo6OiIsImlhdCI6MTY3MTEyNzI2MCwiaW90X29pZGNfc2NvcGVzIjoiZW1haWwgb3BlbmlkIHByb2ZpbGUiLCJpb3RfcHJpX2FjYyI6IjIwMDAwMDAwMzAiLCJpb3RfYXVpZCI6Ijg0ODVhZDcxLWE5OGQtM2UxNi1hODJmLTliYzBlYzY0MjkyZCIsInNpZCI6ImNmODAyOGM3LWNmYTEtNGY4OC04NDQyLTAxZjJkNjIyMzU1ZCIsImNsaWVudF9pZCI6IjFpYjYwM3dvZG5weXciLCJpb3RfdHYiOiIxIiwiaW90dG9rZW52ZXJzaW9uIjoiMSJ9.XjJXhTA-KI56P9EUUn9mlO6phI9zKbvoMTmiEOCyqGSu9MHZ-ImahYx-wf2EVABA1MwFjrd6d8Hn4i2ymcEhrmHWo_MusrDFk9HcjhvtxYs3fAYyLaJBnMzpU_j57w5w6icSpN3ON25s2d_ZaDc76Ng_XGcjWf98LbOcP7mJNWaAcMgSzGM4TRL_FOqJCRE6hcRW8WrclZuhKSNFj-FGcEqrJDEVLEoU_T5vHtjUNofJSjjied5L1fX9Q2Fr7uWDktzX65cvvnQl3-GWFlgwLzgoqY0W3oea36yxQyavM8szPX2UUnK1uEDjK409VHBaUqMldmgTzJNOAAbHeh5bI0auzFO0gY4HrdAP7XO-isODleWnpoiYt_DBQhvoWxo70KGYRNsNQ_T2h_HsQpXKpXiuZOHmwJnuWO2n64JwX3tZ4e0HOFV53C--Snkf69BoFuXBcA9GkKo-I-1VQKspeq0J4RxhjyirGgwhfEGWTcnqlFd0AARx9TeeMmYkAs3dV7fk_SWrrDDxzjwl6XYuINw7PKtXWNTJVJnLIebTYRGFI8dJx9c5A_nGM02AU7HvND05dNjVxqaTuKNJDjsKBTZgq1G7vzx5binM4FYloeLVFLZR-0vKyP5dZG5RL8db2PiJeUgboMHRCZxnjUNM-vXTGb8jQrtzn_TL52LdcnQ',
		apikey: 'b5hj34l15b134b5134kb5hjl34b624hjl',
		TRM_DB_ConnectionURLString: 'jdbc:sqlserver://192.168.100.220:6125;databaseName=TRM_Billing;integratedSecurity=true;encrypt=false'
	};

	// Variable value change on environment switch
	if (env == 'UAT') {

	} else if (env == 'Prod') {
		config.baseUrl = 'https://integration.servicetag.services.signify.com',
		config.productInfo_tag1 = '/api/servicetag/v18.1/servicetag/A538.130196889.0008',
		config.token = 'Bearer eyJzdWIiOiJscm46aW90OmFhbTo6MjAwMDAwMDA2MTpwcmluY2lwYWw6dXNlcjpydXBlc2guZ2F1ZEBzaWduaWZ5LmNvbSIsImtpZCI6IjFkY2EzNTU4LWJhYmUtNGJjNS05Yjg3LTA3NTU2MTYzMTk3YyIsImlzcyI6InNpZ25pZnkuaW90IiwidHlwIjoiSldUIiwiZXhwIjoxNjY4OTQxNzMwLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJjNTdmY2I3ZS0yYzUyLTQxOTAtODM4Mi0zM2QxNjIxZjM3YzAiLCJzdWIiOiJscm46aW90OmFhbTo6MjAwMDAwMDA2MTpwcmluY2lwYWw6dXNlcjpydXBlc2guZ2F1ZEBzaWduaWZ5LmNvbSIsImV4cCI6MTY2ODk0MTczMCwiaW90X3R0Ijoic2lnbmlmeS5pb3QuYWNjZXNzLXRva2VuIiwiYXVkIjoibHJuOmlvdDphYW06OjIwMDAwMDAwNjE6OjoiLCJpc3MiOiJscm46aW90OmFhbTo6MDAwMDAwMTAwMDo6OiIsImlhdCI6MTY2ODkzODEzMCwiaW90X29pZGNfc2NvcGVzIjoiZW1haWwgb3BlbmlkIHByb2ZpbGUiLCJpb3RfcHJpX2FjYyI6IjIwMDAwMDAwMzAiLCJpb3RfYXVpZCI6Ijg0ODVhZDcxLWE5OGQtM2UxNi1hODJmLTliYzBlYzY0MjkyZCIsInNpZCI6ImNmODAyOGM3LWNmYTEtNGY4OC04NDQyLTAxZjJkNjIyMzU1ZCIsImNsaWVudF9pZCI6IjFpYjYwM3dvZG5weXciLCJpb3RfdHYiOiIxIiwiaW90dG9rZW52ZXJzaW9uIjoiMSJ9.b3i6etYepN3UWsu8jYGTQFOTb4QFTBOT-YwUNWwmlFCUUXKpKmyAt9iCL0sWDm9IHS5HoN1n5-ocAeBfybdBmH1LZA7nK3GkzbAn4mUL9EuwbxVyG723KPFrl7KjZKXiO89h8oTC7lipE3RPHDrGveIuw1MB5Z-Qpp8lEhIt3BdlGuxeE4_g-s1eOM7tGqhCZyHlOrlntQk3MqSzuLQVhPg9cGhlu3mpgxfe_BDSCi_UE1hYoWizYgBzRmPe1plubtT3YF4JMZH4LbBKPGxJ8LSOKdU1g7euZlUZ2ABRDWlcb9AedMTVyPsn2NcEjHb5p15BSEp7se2jRvdIaDvHgWJjd4qSjGLPpHNvxXwu77yc9eOeSJAeN8p86P-cItwlGHB4r-21cYKRuvObyYMQSIoeUzFRX_DVn3ihCong58G8l-Rsa6PS_M4iWWDolI91YiPDnXAAEuQB-RJkAUL6dNP1R-UiHjONaaHGOwheClN1icYE-5MBaiYPL3_u4xlD2mUWqWCa_3oVqDOxi_8Ut8ki454fG5oBcfZUAkY4RvnOD_BTpOrq0z2CZYgItfoNS0VSrdJw2RnWYMOhtjeq0AZOpiMT9B8Ch94hg9T1JAx59sTR7mMQaPD6JTvePzRM-NZ3DjW2sm9rr6lGuEWzrxjvuYHRfGYuwlxi3m3GWMs',
		config.apikey = 'b5hj34l15b134b5134kb5hjl34b624hjl',
		config.TRM_DB_ConnectionURLString = 'jdbc:sqlserver://192.168.100.230:6145;databaseName=TRM_Billing;integratedSecurity=true;encrypt=false'
	}

	// Wait time for connection or server not responded within configure time
	karate.configure('connectTimeout', 10000); // 10 Second
	karate.configure('readTimeout', 10000); // 10 Second


	return config;
}