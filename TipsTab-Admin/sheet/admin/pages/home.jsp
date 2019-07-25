<%-- $Id$ --%>
<%@page import="com.zoho.sheet.util.ClientUtils"%>
<%@page import="com.zoho.sheet.util.ClientUtils.ResourceType"%>
<%@page import="com.adventnet.zoho.websheet.model.util.Constants"%>
<%@page import="com.adventnet.zoho.websheet.model.util.DocumentUtils"%>
<%@page import="com.adventnet.iam.security.SecurityUtil"%>
<%@page import="com.zoho.sheet.admin.AdminActionConstants"%>
<%@page import="com.adventnet.zoho.websheet.model.UserProfile.AccessType"%>
<%@page import="com.adventnet.zoho.websheet.model.util.EnginePropertyUtil"%>

<%
	String js_path = ClientUtils.getPath(ResourceType.UNCOMPRESSED_JS, request); 
	String css_path= ClientUtils.getPath(ResourceType.CSS, request);
	String imageContext = ClientUtils.getPath(ClientUtils.ResourceType.COMMON_IMAGE, request);
	String contextPath = request.getContextPath();
	boolean isSheetAdmin = true; //request.isUserInRole("SheetAdmin");;
	String zohoDocsUrl = EnginePropertyUtil.getSheetPropertyValue("ZohoDocsURL");
%>

<!DOCTYPE html>

<html>

	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title> Admin Console </title>	<%-- No i18N --%>
		<link rel="stylesheet" type="text/css" href = "<%=css_path%>/admin/adminConsole.css">

		<script src="<%=js_path%>jquery-2.0.2.min.js"></script>	<%--NO OUTPUTENCODING--%>
		<link href = "<%=imageContext + Constants.rebrand_Properties.getProperty("favIconURL")%>"  rel="SHORTCUT ICON"> <%--NO OUTPUTENCODING--%>
	</head>	

	<body>		
		
		<div style="padding:0 10px; float:right">
			<div class="logo"></div>
			<div class="title">ADMIN CONSOLE </div>	<%-- No i18N --%>
		</div>
		
		<div id="consoleContainer" class="continerBox">
			
			<div class="wrapper">
				<ul id="barMenu" class="menu">
					<li class="active" data-association="#debugContiner"><a href="#">Debug</a></li>	<%-- No i18N --%>
					<%if(isSheetAdmin){%>
						<li data-association="#savehelperContiner"><a href="#" onclick="return saveHelper.init()">Save Helper</a></li>	<%-- No i18N --%>
						<li data-association="#bannerContiner"><a href="#" onclick="return BannerEditor.init();">Banner</a></li>	<%-- No i18N --%>
						<li data-association="#commentHelperContiner"><a href="#" onclick="return CommentHelper.init()">Comment</a></li>	<%-- No i18N --%>					
						<li data-association="#imagemigrationContainer"><a href="#" onclick="ImageMigration.setValuesfromserver();">Migration</a></li>	<%-- No i18N --%>	
						<li data-association="#deletechathistory"><a href="#" onclick="chatHistory.clearCache();">Delete Chat History</a></li><%--No I18N--%>	
						
						<li data-association="#redisConsoleContainer"><a href="#" onclick="return Redis.init();">Redis Console</a></li><%--No I18N--%>	
						<li data-association="#redirectToHopen"><a href="#" onclick="return Redirect.init()">Newclient Redirect</a></li><%--No I18N--%>	
						<li data-association="#systemTemplatesManager"><a href="#" onclick="return SystemTemplatesManager.init()">System Templates Manager</a></li><%--No I18N--%>
						<li data-association="#tipsContainer"><a href="#" >Tips and Tricks</a></li>
					<%}%>
					<li data-association="#conversionServerContainer"><a href="#" onclick="return CS.init();">Conversion Servers</a></li><%--No I18N--%>
					
				</ul>
			</div>

			<div>
				<div style="margin: 0px auto; width: 95%;">
					<div class="container">
						<jsp:include page="debug.jsp"/>
						<%if(isSheetAdmin){%>
							<jsp:include page="BannerEditorPage.jsp"/>						
							<jsp:include page="savehelper.jsp"/>
							<jsp:include page="commenthelper.jsp"/>	
							<jsp:include page="ImageMigration.jsp"/>
							<jsp:include page="DeleteChatHistory.jsp"/>
							<jsp:include page="RedisConsole.jsp"/>
							<jsp:include page="redirecthopen.jsp"/>
							<jsp:include page="SystemTemplatesManager.jsp"/>		
							<jsp:include page="TipsTab.jsp"/>
						<%}%>
						<jsp:include page="ConversionServer.jsp"/>	
										
					</div>
				</div>
			</div>
		
		</div>

		<script src="<%=js_path%>admin/admin.js"></script>
		<script src="<%=js_path%>AjaxRequest.js"></script>
		<script src="<%=js_path%>ActionConstants.js"></script>
		<script src="<%=js_path%>appevent.js"></script>
		<%if(isSheetAdmin){%>
			<script src="<%=js_path%>admin/savehelper.js"></script>
			<script src="<%=js_path%>admin/commenthelper.js"></script>
			<script src="<%=js_path%>admin/bannermanager.js"></script>
			<script src="<%=js_path%>admin/ImageMigration.js"></script>
			<script src="<%=js_path%>admin/Deletechathistory.js"></script>
			<script src="<%=js_path%>admin/RefreshBanner.js"></script>
			<script src="<%=js_path%>admin/RedisConsole.js"></script>
			<script src="<%=js_path%>admin/redirecthopen.js"></script>
			<script src="<%=js_path%>admin/SystemTemplatesManager.js"></script>
			<script src="<%=js_path%>admin/TipsTab.js"></script>
			
		<%}%>
		<script src="<%=js_path%>admin/ConversionServer.js"></script>
			
		<script type="text/javascript">

			var AdminActionConstants = <%=AdminActionConstants.getActionConstantsInJson()%> ;

			var DOCS_SERVER_URL = "<%=zohoDocsUrl%>";
			$( document ).ready( function() {
				admin.setCsrfFields("<%=SecurityUtil.getCSRFParamName(request)%>","<%=SecurityUtil.getCSRFCookieName(request)%>");
			});

			var ctxpath = '<%=request.getContextPath()%>/sheet/';	//NO I18N
			var docCtxPath = '<%=DocumentUtils.getDocumentContextPath(AccessType.AUTH, request)%>';
		</script>

		
	</body>
</html>
