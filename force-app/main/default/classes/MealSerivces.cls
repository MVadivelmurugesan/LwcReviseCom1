public with sharing class MealSerivces {
    @AuraEnabled(cacheable=true)
    public static string fetchmeal(String meal){
        Http h=new Http();
        HttpRequest hr=new HttpRequest();
        HttpResponse hs=new HttpResponse();
        hr.setEndpoint('https://www.themealdb.com/api/json/v1/1/search.php?s='+meal);
        hr.setMethod('GET');
        hs=h.send(hr);
        if(hs.getStatusCode()==200){
            String res= hs.getBody();
            System.debug('result' + res);
            return hs.getBody();
        }else {
            throw new CalloutException('Error with callout: ' + hs.getStatus());
        }
       
    }
}