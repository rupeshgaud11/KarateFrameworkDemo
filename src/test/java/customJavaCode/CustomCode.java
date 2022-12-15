package customJavaCode;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.nio.file.Files;
import java.util.Calendar;
import java.util.Random;

/**
 * 
 * @author rupesh
 * This class is used as custom java utility. 
 */
public class CustomCode {

	private static String timeStamp;
	/**
	 * This method writes data to the file when output of API response is in some different format like excel or csv file
	 */
	public static void writeData(String filename, String fileContent) 
			throws FileNotFoundException, UnsupportedEncodingException {
		PrintWriter writer = new PrintWriter(IPath.APIWriteDataPath + filename);
		writer.println(fileContent);
		writer.close();
	}
	
	public static void createExcelFile(byte[] data, String filename) throws IOException {
		timeStamp = Calendar.getInstance().getTime().toString().replace(" ", "_").replace(":", "_");
		File dest = new File(IPath.APIResponseResults + filename + "_" + timeStamp + ".xlsx");
		Files.write(dest.toPath(), data);
	}
	
	public static int getRandomNum() {
		
		Random r = new Random();
		return r.nextInt(1000);
	}
}
