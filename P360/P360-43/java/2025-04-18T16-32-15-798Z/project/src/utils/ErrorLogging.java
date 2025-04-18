import java.util.logging.Level;
import java.util.logging.Logger;

public class ErrorLogging {

    private static final Logger LOGGER = Logger.getLogger( ErrorLogging.class.getName() );

    public static void logError(Exception e){
        LOGGER.log( Level.SEVERE, e.toString(), e);
    }
}