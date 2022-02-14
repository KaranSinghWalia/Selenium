package sanveo.util;

import java.io.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import cucumber.api.Scenario;
import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.openqa.selenium.*;

import com.sanveo.SanveoBase;


public class TestUtil extends SanveoBase {

    static String DatabaseURL = prop.getProperty("databaseurl","databasename");
	static String DatabaseName = prop.getProperty("databasename");
	static String UserName = prop.getProperty("username");
	static String Password = prop.getProperty("password");
	public static String TESTDATA_SHEET_PATH = "D:/repos/various/eclipse-workspace/Catalystone/src/main/java/catalystone/testdata/CatalystoneTestData.xlsx";
	static Workbook book;
	static Sheet sheet;


//	// create an excel sheet
//	public static Object[][] getTestData(String sheetName) {
//		FileInputStream file = null;
//		try {
//			file = new FileInputStream(TESTDATA_SHEET_PATH);
//		} catch (FileNotFoundException e) {
//			e.printStackTrace();
//		}
//		try {
//			book = WorkbookFactory.create(file);
//		} catch (InvalidFormatException e) {
//			e.printStackTrace();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		sheet = book.getSheet(sheetName);
//		Object[][] data = new Object[sheet.getLastRowNum()][sheet.getRow(0).getLastCellNum()];
//		for (int i = 0; i < sheet.getLastRowNum(); i++) {
//			for (int k = 0; k < sheet.getRow(0).getLastCellNum(); k++) {
//				data[i][k] = sheet.getRow(i + 1).getCell(k).toString();
//			}
//		}
//		return data;
//	}

	public static void SqlConnection() throws ClassNotFoundException, SQLException{

		String DB = (DatabaseURL + ";"+ DatabaseName);

		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		System.out.println("driver loaded");
		Connection con = DriverManager.getConnection(DB,UserName,Password);
		smt = con.createStatement();
        System.out.println("Statement created");
	}

	public static Connection SQLConnection() throws ClassNotFoundException, SQLException
	{
		String DB = (DatabaseURL + ";"+ DatabaseName);
		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		return DriverManager.getConnection(DB,UserName,Password);
	}

	 public static String takeScreenshotAtEndOfTest(String screenshotName) throws IOException {

		 File srcFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		 String currentDir = System.getProperty("user.dir");
		 String path = currentDir + "/screenshots/" + screenshotName + ".png";
		 FileUtils.copyFile(srcFile, new File(path));
		 System.out.println(path);
		 return path;
	}

	public static byte[] getByteScreenshot() throws IOException {
		File src = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		byte[] fileContent = FileUtils.readFileToByteArray(src);
		return fileContent;
	}

	 public static String readJsonConfiguration(String environment, String value) throws IOException, ParseException {
		 JSONParser jsonParser = new JSONParser();
		 FileReader reader = new FileReader(System.getProperty("user.dir") + "\\src\\main\\java\\sanveo\\config\\config.json");
		//Read JSON file
		 Object obj = jsonParser.parse(reader);
		 JSONArray envList = (JSONArray) obj;

		 for(int i=0;i<envList.size();i++)
		 {
			 JSONObject env = (JSONObject) envList.get(i);
			 JSONObject envDetails = (JSONObject) env.get(environment);
			 if(envDetails != null){
				 return (String) envDetails.get(value);
			 }
		 }
		 return environment;
	 }
}
	
