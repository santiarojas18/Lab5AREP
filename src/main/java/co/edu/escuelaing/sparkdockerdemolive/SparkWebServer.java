package co.edu.escuelaing.sparkdockerdemolive;

import static spark.Spark.*;

public class SparkWebServer {

    public static void main(String... args){
        port(getPort());

        //Static files:
        staticFiles.location("/public");
        get("hello", (req,res) -> "Hello Docker!");
        //En radianes
        get("/sin", (req, res) -> {
            double angle = Double.parseDouble(req.queryParams("angle"));
            double response = Math.sin(angle);
            return response;
        });
        //En radianes
        get("/cos", (req, res) -> {
            double angle = Double.parseDouble(req.queryParams("angle"));
            double response = Math.cos(angle);
            return response;
        });
        //Verifica si una cadena es palíndroma
        get("/palindrome", (req, res) -> {
            String word = req.queryParams("word");
            StringBuffer wordBuffer = new StringBuffer(word);
            String reverseWord = wordBuffer.reverse().toString();
            boolean response = word.equals(reverseWord);
            return response;
        });
        //Calcula la magnitud de un vector de dos componentes
        get("/vector", (req, res) -> {
            double x = Double.parseDouble(req.queryParams("x"));
            double y = Double.parseDouble(req.queryParams("y"));
            double response = Math.hypot(x,y);
            return response;
        });
    }

    private static int getPort() {
        if (System.getenv("PORT") != null) {
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 4567;
    }



}