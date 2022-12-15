package runner;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class TestRunner {

	@BeforeClass
	public static void before() {
		System.setProperty("karate.env", "Test");
	}

	@Test
	public void parallel() {
//		Results results = Runner.builder().outputCucumberJson(true).path("classpath:features/CreateProject.feature")
//				.tags("@tag1").parallel(1);
		System.out.println("=========Test STart========");
		Results results = Runner.builder().outputCucumberJson(true).path("classpath:features").parallel(1);
		generateReport(results.getReportDir());
		Assert.assertTrue(results.getErrorMessages(), results.getFailCount() == 0);

	}

	public static void generateReport(String outputPath) {
		Collection<File> jsonFiles = FileUtils.listFiles(new File(outputPath), new String[] { "json" }, true);
		List<String> jsonPaths = new ArrayList<String>(jsonFiles.size());
		jsonFiles.forEach(file -> jsonPaths.add(file.getAbsolutePath()));
		Configuration config = new Configuration(new File("target"), "ServiceTag");
		ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
		reportBuilder.generateReports();

	}
}
