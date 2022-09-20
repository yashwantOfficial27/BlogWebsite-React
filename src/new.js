if(source_application.toUpperCase() == 'POS')
{
    tabpage.openDrillDownPage(CUSTOMERINVOICE);
}
else
{
    tabpage.openDrillDownPage(CUSTOMERINVOICEBCK);
}

if(source_application.toUpperCase() == 'POS')
{
    tabpage.openDrillDownPage(CUSTOMERCREDITINVOICE);
}
else
{
    tabpage.openDrillDownPage(CUSTOMERCREDITINVOICEBCK);
}


public static const CUSTOMERINVOICE:String 			 	 = "acct/custinvoice/components/CustomerInvoice.swf"
public static const CUSTOMERINVOICEBCK:String     	 =  "acct/custinvoicewholesale/components/CustomerInvoiceWholesale.swf";


public static const CUSTOMERCREDITINVOICE:String     =  'acct/custcreditinvoice/components/CustomerCreditInvoice.swf';
public static const CUSTOMERCREDITINVOICEBCK:String    	 =   "acct/custcreditinvoicewholesale/components/CustomerCreditInvoiceWholesale.swf";


private var source_application:String;

source_application = XML(__local.reportObj.customReportDataGrid.selectedItem).source_application;



