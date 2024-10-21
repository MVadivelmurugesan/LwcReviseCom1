public with sharing class lwcaccountcls1 {
    @AuraEnabled(cacheable=true)
    public static void getAccount(){
        List<Account> acclist=new List<Account>();
        try {
            acclist=[Select id,name,Phone,Rating from Account];

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}