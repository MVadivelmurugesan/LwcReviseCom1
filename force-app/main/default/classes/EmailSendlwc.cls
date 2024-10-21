public with sharing class EmailSendlwc {
    @AuraEnabled(cacheable=true)
    public static string uploadfile(String filename,String filecontent){
        try {
            return 'File uploaded successfully: ' + fileName;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}