//Copyright 2009 WwW.AlilG.COM
//YOU ARE NOT ALLOW TO EDIT THIS FILE!
function stripc(string) {
	output="";
	valid="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,";
    for (var i=0; i<string.length; i++)
       if (valid.indexOf(string.charAt(i))!==-1)
          output+=string.charAt(i);
    return output;
}
function longst(item)
{
	el('xblk').innerHTML = el('xblk').innerHTML + '<div style="margin-left:2px;"><span style="color:#CCCCCC">me: </span>'+item+'</div>';
	el('xblk').scrollTop = el('xblk').scrollHeight
	item = item.replace(/_/g,'');
	scafix.push(item);
	if(LNGST=="")
	{
		LNGST = item;
	}
	else
	{
		LNGST += "___"+item;
	}
}
var LNGST = "";
var siefix = false;
var scafix = Array();
var scafix2 = Array();
function jusc(piker, trim)
{
	patroon = /^[0-9-a-z-A-Z. ]+$/
	if(piker.keyCode == 13)
	{
		if(trim.value !== "")
		{
			if(!patroon.test(trim.value))
			{
				trim.value = "";
				alert('Your name must contain only english alpha or numbers\n\na b c d e f g h i j k l m n o p q r s t u v w x y z\n\nEnglish numbers:\n0 1 2 3 4 5 6 7 8 9');
				return;
			}
			else
			{
			var _n = trim.value;
			trim.disabled = "disabled";
			limo(_n)
			}
		}
	}
}

function jaraghe()
{
	var anyy = false;
	NOT_OPTIONAL = Array();
	for(var i=0;i<DNDCZ.length;i++)
	{
		if(DNDCZ[i][2] >0 && DNDCZ[i][3]>0)
		{
		var DOMIN_x4 = letCPU2(el(DNDCZ[i][0]));
		if(DOMIN_x4[1].length>0 || DOMIN_x4[0].length>0)
		{
			anyy = 1;
		}
		if(DOMIN_x4[1].length>0)
		{
			//var DP = _root.getNextHighestDepth();
			//gux_3.duplicateMovieClip("FROCECAP_"+(FROCECAP.length), DP);
			//var mm = eval("FROCECAP_"+(FROCECAP.length));
			//FROCECAP.push("FROCECAP_"+(FROCECAP.length));
			
			//mm._x = (((int(DNDCZ[i][2])-1) * 60) + 14) - 9;
			//mm._y = (((int(DNDCZ[i][3])-1) * 60) + 12) - 8;	
			
			NOT_OPTIONAL.push(DNDCZ[i][0]);
		}
		}
	}
	if(!anyy)
	{
		clearInterval(utntival);
		clearInterval(_lovil);
		rnoal();
		
		new bskcm(_BASE+"?mkcj5="+mymatch+"&&ikr="+__ikiroll+"&&jk=0_0_0&&sbiti=n", "xml", i, "get", "cnc5");
		turner = 0;
		utn(0)
		alert("YOU HAVE LOST THE GAME");
		stopall();
		mymatch = 0;
	}
}

function stopall()
{
	clearInterval(utntival);
		clearInterval(_lovil);
		el('isturn').style.visibility = "hidden"
		el('simL').style.visibility = "hidden"
}

function kH(e)																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																				{																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						var pK = e ? e.which : window.event.keyCode;
return pK != 13;
}

document.onkeypress = kH;																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																				if (document.layers) document.captureEvents(Event.KEYPRESS);

function cni(item,n)
{
	clearInterval(_lovil);
	rnoal();
	var i = "";
	el('ldng').style.display = "none";
	el('ldng2').style.display = "block";
	el('ldng2').innerHTML = '<div style="padding:30px">challengin player<br>&quot;'+n+'&quot;<br><a href="javascript:cno('+item+')">Cancel</a></div>';
	el('hld').style.display = "none";
	new bskcm(_BASE+"?mkcj="+item+"&&ikr="+__ikiroll, "xml", i, "get", "cni"+item);
}
function cno(item)
{
	clearInterval(_lovil);
	rnoal();
	var i = "";
	el('ldng').style.display = "none";
	el('ldng2').style.display = "none";
	el('hld').style.display = "block";
	new bskcm(_BASE+"?mkcj2="+item+"&&ikr="+__ikiroll, "xml", i, "get", "cncl"+item);
	//_lovil = setInterval(dop, $GAMESPEED*1000);
}

function rnoal(item)
{
	for(var i=0;i<GLORzCCLNOR.length;i++)
	{
		if(item)
		{
			if(item == GLORzCCLNOR[i])
			{
				GLORzCCLNOR[i].abort();
			}
		}
		else
		{
			GLORzCCLNOR[i].abort();
		}
	}
	GLORzCCLNOR=[];
	GLORzCCLNOR=Array();
}

function limo(item)
{
	var i = "";
	//var e = "";
	//e.parentNode.innerHTML = '<div class="cm_loading">loading<span style="width:auto;margin-top:6px" align="center" id="blogskc___GRub'+i+'"></span></div>';
	GRUBe = 'alilg___GRub'+i;
	GRUBt = _TillABORT/1000;
	//grub();
	el('ldng').style.display = "block";
	el('ldng2').style.display = "none";
	el('hld').style.display = "none";
	new bskcm(_BASE+"?xbit=e"+i+"&&n="+item+"&&tmo="+$TIMEOUT, "xml", i, "get", "si");
}

GRUBe = '';
GRUBt = 0;//_TillABORT;
__ikiroll = 0;
function grub()
{
	GRUBt = GRUBt - 1
	if(GRUBt > 0)
	el(GRUBe).innerHTML = GRUBt;
	if(GRUBt > 1)
	{
		setTimeout('grub();', 1000);
	}
}

_hsT = location.host;
_hsP = location.pathname;
_hspro = location.protocol;
_BASE = _hspro+"//"+_hsT+_hsP;

_TillABORT = 2000;
HTTP_USER_AGENT = navigator.userAgent.toLowerCase();
$SEND_RECEIVE_PROBLEM = "There is a problem during send and receive data between you and server\n\nplease try again";

var DST = null;
var mydec = null;
_aGn = new String(navigator.userAgent);
_aGn = _aGn.toLowerCase();

function bskcm(xml_url, kind, ajaxfor, method, ds)
{
	this.get_http = function()
	{
		if (typeof XMLHttpRequest != "undefined")
		{
			return new XMLHttpRequest();
		}
		else if (window.ActiveXObject)
		{
			var aVersions = [ "MSXML2.XMLHttp.5.0","MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp","Microsoft.XMLHttp"];
			for (var i = 0; i < aVersions.length; i++)
			{
				try {	var oXmlHttp = new ActiveXObject(aVersions[i]);
				return oXmlHttp;
				} catch (oError)
				{
					
				}
			}
		}
		else
		{
			alert("NO XML SUPPORT");
			return;
		}
	}
	
	
	this.ajax = function(xml_url, kind, ajaxfor, method, dsf)
	{
		this._kind = kind;
		this._ajaxfor = ajaxfor;
		this.method2 = method;
		
		//GRUBt = 0;
		var XMLOBJECT = new this.get_http();
		
		XMLOBJECT.open(method, xml_url, true);
		if(method=="post")
		{
			XMLOBJECT.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		}
		
		XMLOBJECT.onreadystatechange = function ()
		{			
			if (XMLOBJECT.readyState == 4)
			{
				if (XMLOBJECT.status == 200)// || XMLOBJECT.status == 304)
				{	
					if(requestTimer)
					{
						clearTimeout(requestTimer);
					}
					GRUBt = 0;
if(!XMLOBJECT.responseText)
{
return false;
}
					var sct = XMLOBJECT.getResponseHeader("Content-Type");
					if($SERVERSIDE_DEBUG)
					{
						if($SERVERSIDE_DEBUG_TYPE==1)
						{
							el('DBUGGG').value = XMLOBJECT.responseText;
						}
						else
						{
							el('DBUGGG').value = el('DBUGGG').value + XMLOBJECT.responseText;
						}						
					}
					if(method=="get")
					{
					if(_aGn.indexOf("msie") != -1 && _aGn.indexOf("opera") == -1)
					{
						var ajaxed = new iexml();
						ajaxed.loadXML(XMLOBJECT.responseText);
					}
					else
					{
						var ajaxed = XMLOBJECT.responseXML;
					}
					var rnpls = false;
					if(dsf.match(/cniXXX/) || dsf.match(/si/))
					{
						el('ldng').style.display = "none";
						el('ldng2').style.display = "none";
						el('hld').style.display = "block";
					}
					var XML = ajaxed.documentElement;
					var _lng = XML.getElementsByTagName("cm").length;
					var _lng2 = XML.getElementsByTagName("acr").length;
					var _lng3 = XML.getElementsByTagName("cac").length;
					var _lng4 = XML.getElementsByTagName("c3c").length;
					var _lng5 = XML.getElementsByTagName("c4c").length;
					var _lng6 = XML.getElementsByTagName("c5c").length;
					var _lng7 = XML.getElementsByTagName("ccc").length;
					var _id = XML.attributes.item(0).nodeValue;
					var dlh = '';
					if(_lng7>0)
					{
						var _pz = XML.getElementsByTagName("ccc")[0];
						_pz = _pz.childNodes[0].firstChild.nodeValue;
						_pz = _pz.split("___");
						for(var t=0;t<_pz.length;t++)
						{
							el('xblk').innerHTML = el('xblk').innerHTML + '<div style="margin-left:2px;"><span style="color:#666666">match: </span>'+_pz[t]+'</div>';
						}						
						el('xblk').scrollTop = el('xblk').scrollHeight
					}
					if(_IPOS == "L" && _lng2>0)
					{
						for(var i=0;i<_lng2;i++)
						{
							var _kz = XML.getElementsByTagName("acr")[i];
							el('nvk').innerHTML = el('nvk').innerHTML+ '<div style="top:-3px;position:absolute;float:left;margin-left:145px;width:260px;height:73px;background-color:#FC0;border:1px solid #000" id="clckz'+parseInt(_kz.childNodes[1].firstChild.nodeValue)+'"><div align="center" style="margin-top:5px;font-family:Tahoma, Geneva, sans-serif;font-size:8pt;font-weight:bold">you are begin challenged for a match by<br><div style="font-size:18px">"'+_kz.childNodes[0].firstChild.nodeValue+'"</div><div style="margin-top:4px"><input onclick="acc('+parseInt(_kz.childNodes[1].firstChild.nodeValue)+')" type="button" style="padding:2px;border:solid 1px #999" value="ACCEPT"><input onclick="rej('+parseInt(_kz.childNodes[1].firstChild.nodeValue)+')" type="button" style="margin-left:6px;padding:2px;border:solid 1px #999" value="REJECT"></div></div></div>';
							el('clckz'+parseInt(_kz.childNodes[1].firstChild.nodeValue)).style.display = "block";
						}
					}
										
					if(_IPOS == "L" && _lng3>0)
					{
						for(var i=0;i<_lng3;i++)
						{
							var _ckz = XML.getElementsByTagName("cac")[i];
							el('nvk').removeChild(el('clckz'+_ckz.childNodes[0].firstChild.nodeValue));
						}
					}
					
					if(_IPOS == "L" && _lng4>0)
					{
						var _ckz = XML.getElementsByTagName("c3c")[0];
						slkd(_ckz.childNodes[0].firstChild.nodeValue);
						mymatch = _ckz.childNodes[1].firstChild.nodeValue;
					}
					
					if(_IPOS == "L" && _lng5>0)
					{
						el('nvk').innerHTML = el('nvk').innerHTML+ '<div style="top:-3px;position:absolute;float:left;margin-left:5px;width:100px;height:73px;background-color:#FF0000;border:1px solid #000" id="clckzLrej"><div align="center" style="color:#FFF;margin-top:5px;font-family:Tahoma, Geneva, sans-serif;font-size:8pt;font-weight:bold">challange request refused.</div></div>';
						setTimeout("el('nvk').removeChild(el('clckzLrej'))", 2000);
						el('ldng').style.display = "none";
						el('ldng2').style.display = "none";
						el('hld').style.display = "block";
					}
					
					if(dsf.match(/si/))
					{
						_lovil = setInterval(dop, $GAMESPEED*1000);
						_loviK = 1;
						__ikiroll = _id;
						rnpls = 1;
					}
					else if(dsf.match(/dp/))
					{
						el('hld').innerHTML = '';
						rnpls = 1;
						LNGST = "";
						var attl = XML.getElementsByTagName("att").length;
						if(attl>0)
						{
						var att = XML.getElementsByTagName("att")[0];
						var ir = att.childNodes[0].firstChild.nodeValue;
						for(var j=0;j<ir;j++)
						{
							scafix[j] = "";
						}
						}
					}
					else if(dsf.match(/cni/))
					{
						rnoal();
						_lovil = setInterval(dop, $GAMESPEED*1000);
					}
					else if(dsf.match(/cncl/))
					{
						rnoal();
						_lovil = setInterval(dop, $GAMESPEED*1000);
					}
					else if(dsf.match(/cnc2/))
					{
						rnoal();
						_lovil = setInterval(dop, $GAMESPEED*1000);
					}
					else if(dsf.match(/cnc3/))
					{
						rnoal();
						_lovil = setInterval(dop, $GAMESPEED*1000);
					}
					else if(dsf.match(/cnc5/))
					{
						//
						var ayyl = XML.getElementsByTagName("ayy").length;
						if(ayyl>0)
						{
						var ayy = XML.getElementsByTagName("ayy")[0];
						var ir = ayy.childNodes[0].firstChild.nodeValue;
						if(SFSLONG[2] == ir)
						{
						SFSLONG = Array();
						}
						}
					}
					
					if(rnpls)
					{
					if(_lng > 0)
					{
						if(REVg_TO_l)
						{
							el('ldng').style.display = "none";
						el('ldng2').style.display = "none";
						el('hld').style.display = "block";
						}
						for(var i=0;i<_lng;i++)
						{
							var _cm = XML.getElementsByTagName("cm")[i];
							if(_cm.childNodes[3].firstChild.nodeValue=="1")
							{
							var _clme = '<span style="color:#FF0000;font-weight:bold;font-size:8pt;">busy</span>'
							}
							else
							{
							var _clme = '<a href="javascript:cni('+_cm.childNodes[0].firstChild.nodeValue+',\''+_cm.childNodes[1].firstChild.nodeValue+'\')">Challenge</a>'
							}
							if(_id == _cm.childNodes[0].firstChild.nodeValue)
							{
								_clme = ''
							}
							
							dlh = '<div style="margin-right:3px;margin-top:3px;width:370px;height:26px;background-color:#6b645a"><div style="float:left;margin-left:3px;"><div style="margin-top:5px;">'+_cm.childNodes[1].firstChild.nodeValue+'</div></div><div style="float:right;margin-right:5px;"><div style="margin-top:5px;">'+_clme+'</div></div></div>' + dlh;

						}
						el('hld').innerHTML = '<div class="uc1" style="" align="center">'+dlh+'</div>';
					}
					else
					{

					}
					}
					
					if(_IPOS == "L" && _lng4>0)
					{
						turner = 1;
						siefix = "r";
						utn(1)
						_sbtl();
					}
					if(_IPOS == "G" && _lng6>0)
					{

						var _ckz = XML.getElementsByTagName("c5c")[0];
						var _lk = _ckz.childNodes[3].firstChild.nodeValue;
						_lk = _lk.split("_");
						
						if(parseInt(_lk[2]) == 0 || parseInt(_lk[1]) == 0)
						{
							clearInterval(utntival);
							alert("YOU HAVE WON THE GAME");
							stopall();
							return false;
						}
						
						var xx = 8-parseInt(_lk[2]);
						var yy = 8-parseInt(_lk[1]);
						var ii = _lk[0];
						ii = ii.replace(/RRE/, '');
						ii = ii.replace(/BRE/, '');
						//ii = parseInt(ii);
						ii = (12 - parseInt(ii)) + 1
						
		var chopperchopx = false;
		for(var i=0;i<UPDCZ.length;i++)
		{
			if(UPDCZ[i][0] == 'BRE'+ii)
			{
				SQX[ UPDCZ[i][2] ][ UPDCZ[i][3] ] = "n";
				SQX[xx+1][yy+1] = "PU";
				UPDCZ[i] = Array(UPDCZ[i][0], UPDCZ[i][1], xx+1, yy+1);
				chopperchopx = UPDCZ[i][0];
			}					
		}
		
						
		if(chopperchopx && yy+1 == 8)
		{
			var ___v = 'black';
			if(siefix=="b")
			{
				___v = 'red';
			}
			el(chopperchopx).style.backgroundImage = 'url(\''+___v+'_queen.png\')';
			if(navigator.appName == 'Microsoft Internet Explorer')
	{
		var bg = el(chopperchopx).currentStyle.backgroundImage;
		var mypng = bg.substring(5,bg.length-2);
		el(chopperchopx).style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+mypng+"', sizingMethod='scale')";
		el(chopperchopx).style.backgroundImage = "URL('img/clean.gif')";
	}
	
	
			PROMO = 1;
		}
		
						var a = ((parseInt(xx)*50));
						var b = ((parseInt(yy)*50));
						el('BRE'+ii).style.left = a+"px";
						el('BRE'+ii).style.top = b+"px";
						
						
						var hjvij = _lk[3];
						
						if(hjvij!=="n")
						{
						hjvij = hjvij.split(".");
						
						
						for(var jk=0;jk<hjvij.length;jk++)
						{
							var sq = (12 - parseInt(hjvij[jk])) + 1
							
							for(var i=0;i<DNDCZ.length;i++)
							{
								if(DNDCZ[i][0] == 'RRE'+sq)
			{
				SQX[ DNDCZ[i][2] ][ DNDCZ[i][3] ] = "n";
				DNDCZ[i] = Array(null, null, null, null);
			}					
		}
		
							el('RRE'+sq).style.top = (-200)+"px";
						}
						
						}
						jaraghe();
						turner = 1;
						utn(1)
						rnoal();
						_lovil = setInterval(dop, $GAMESPEED*1000);
					}
					
					}
					else if(method=="post")
					{
					var i = XMLOBJECT.responseText;
					var is = i.split('______');
					
					}
				}
				else
				{
					GRUBt = 0;
				}
			}
		}
		
		if(method == "get")
		{
			var narenjack = null;
		}
		else if(method == "post")
		{
			var m = grube(dsf);
			var narenjack = m;
		}
		XMLOBJECT.send(narenjack);
			GLORzCCLNOR.push(XMLOBJECT);
		if(method=="get")
		{
		var requestTimer = setTimeout(function() {
		XMLOBJECT.abort();
		}, _TillABORT);
		}
		else if(method="post")
		{
		var requestTimer = setTimeout(function() {
		XMLOBJECT.abort();
		alert($SEND_RECEIVE_PROBLEM);
		}, _TillABORT);
		}
	}	
	this.ajax(xml_url, kind, ajaxfor, method, ds)
}

function wlzng()
{
	
}

function el(e)
{
	var i = document.getElementById(e);
	return i;
}

function iexml()
{
	var aVersions = [ "MSXML2.DOMDocument.5.0", "MSXML2.DOMDocument.4.0", 
					 " MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument"," Microsoft.XmlDom"];
	for (var i = 0; i < aVersions.length; i++)
	{
		try
		{
			var oXmlDom = new ActiveXObject(aVersions[i]);
			return oXmlDom;
		}
		catch (oError)
		{
				
		}
	}
	throw new Error("MSXML is not installed.");
}

if($GAMESPEED < 3)
$GAMESPEED = 3;
if($GAMESPEED > 9)
$GAMESPEED = 9;

_lovil = false;
_loviK = false;
stwell = "ichnur";
GLORzCCLNOR = Array();
function dop()
{
	if(_loviK == 1)
	{
		var i = "";
		if(SFSLONG.length>0)
		{
			new bskcm(SFSLONG[0]+zzrollEND, "xml", i, "get", "cnc5"+SFSLONG[1]);
		}
		else
		{
			//new bskcm(_BASE+"?im="+__ikiroll+"&&wlz="+stwell+"&&lgns="+LNGST+"&&qz="+mymatch+"&&tmo="+$TIMEOUT+zzrollEND, "xml", i, "get", "dp");
			var jk = "";
			var jkl = scafix.length;
			for(var j=0;j<scafix.length;j++)
			{
				if(scafix[j]!=="")
				{
				if(jk=="")
				{
		jk = scafix[j];
	}
	else
	{
		jk += "___"+scafix[j];
	}
			}
			}
			new bskcm(_BASE+"?im="+__ikiroll+"&&wlz="+stwell+"&&lgns="+jk+"&&lgns2="+jkl+"&&qz="+mymatch+"&&tmo="+$TIMEOUT+zzrollEND, "xml", i, "get", "dp");
		}
	}
}

var REVg_TO_l = false;
function g2lobby()
{
	if(confirm("Are you sure?\nleave the game table and go to lobby?"))
	{
		zzrollEND = "&&zr="+__ikiroll;
		var i = 0;
		mymatch = 0;
		el('ldng').style.display = "block";
		el('ldng2').style.display = "none";
		el('hld').style.display = 'none';
		el('stnk').style.display = "block";
		el('hld2').style.zIndex = 0;
		el('hld2').innerHTML = '';
		el('hld2').style.display = 'none';
		el('dimen').innerHTML = '';
		el('ldng').style.display = "block";
		el('ldng2').style.display = "none";
		el('hld').style.display = "none";
		turner = 1;
		el('isturn').style.visibility = "hidden"
		el('simL').style.visibility = "hidden"
		clearInterval(utntival);
		mymatch = 0;
		_IPOS = "L";
		SFSLONG = Array();
		REVg_TO_l = 1;
	}	
}
var zzrollEND = "";
function acc(item)
{
	clearInterval(_lovil);
	rnoal();
	var i = "";
	new bskcm(_BASE+"?mkcj3="+item+"&&ikr="+__ikiroll, "xml", i, "get", "cnc2"+item);
	el('nvk').removeChild(el('clckz'+item))
	mymatch = item;
	turner = 0;
	siefix = "b";
	utn(0)
	_sbtl();
}

function rej(item)
{
	clearInterval(_lovil);
	rnoal();
	var i = "";
	new bskcm(_BASE+"?mkcj4="+item+"&&ikr="+__ikiroll, "xml", i, "get", "cnc3"+item);
	el('nvk').removeChild(el('clckz'+item))
}

function ise(item){
	if (item%2 == 0)
		return true;
	else
		return false;
}
mcGLINIAHA = null;
function _sbtl()
{
	scafix = Array();
	scafix2 = Array();
	SFSLONG = Array();
	if(turner)
	{
		var percut = "black";
		var depcut = "red";
		mcGLINIAHA = 1;
	}
	else
	{
		var percut = "red";
		var depcut = "black";
		mcGLINIAHA = 2;
	}
	
	_IPOS = "G";
	var m = '';
	var b = '<div style="float:left;width:50px;height:50px;background-color:#000000;background-image:url(\'black_square.gif\')"></div>';
	var w = '<div style="float:left;width:50px;height:50px;background-color:#FFFFFF;background-image:url(\'white_square.gif\')"></div>';
	for(var i=0;i<8;i++)
	{
		var k = 0;
		var s = '';
		for(var j=0;j<8;j++)
		{
			if(ise(i+k))
			{
				s += w;
			}
			else
			{
				s += b;
			}
			k++;
		}
		m += s +'<br>';
	}
	
	var dimen = 1;
	var dimen2 = 1;
	var dimDV = Array();
	
	var STJK = Array(Array(2, 0),Array(4, 0),Array(6, 0),Array(8, 0),Array(1, 1),Array(3, 1),Array(5, 1), Array(7, 1),Array(2, 2),Array(4, 2),Array(6, 2),Array(8, 2),Array(1, 3),Array(3, 3),Array(5, 3),Array(7, 3),Array(2, 4),Array(4, 4),Array(6, 4),Array(8, 4),Array(1, 5),Array(3, 5),Array(5, 5),Array(7, 5),Array(2, 6),Array(4, 6),Array(6, 6),Array(8, 6),Array(1, 7),Array(3, 7),Array(5, 7), Array(7, 7));
	
	p = "";
	for(var i=0;i<10;i++)
{
	SQX[i] = Array();
	for(var j=0;j<10;j++)
	{
		SQX[i][j] = "n";
	}
}
	for(var i=0;i<STJK.length;i++)
	{
		if(STJK[i][1]<3)
		{
		p += '<div style="left:'+((STJK[i][0]-1)*50)+'px;top:'+(STJK[i][1]*50)+'px;position:absolute;width:50px;height:50px;background-image:url(\''+percut+'_pawn.png\');" id="BRE'+dimen+'"></div>';
		dimDV.push('BRE'+dimen);
		UPDCZ.push(Array('BRE'+dimen, 0, (STJK[i][0]), (STJK[i][1]+1)));
		SQX[(STJK[i][0])][(STJK[i][1]+1)] = "PU";
		dimen++;
		}
	}	
	for(var i=0;i<STJK.length;i++)
	{
		if(STJK[i][1]>4)
		{
		p += '<div onmousedown="event.preventDefault ? event.preventDefault() : event.returnValue = false" disabled="disabled" style="cursor:pointer;left:'+((STJK[i][0]-1)*50)+'px;top:'+(STJK[i][1]*50)+'px;position:absolute;width:50px;height:50px;background-image:url(\''+depcut+'_pawn.png\');" id="RRE'+dimen2+'"></div>';
		dimDV.push('RRE'+dimen2);
		DNDCZ.push(Array('RRE'+dimen2, 0, (STJK[i][0]), (STJK[i][1]+1)));
		SQX[(STJK[i][0])][(STJK[i][1]+1)] = "PD";
		dimen2++;
		}
	}
	var h = '<div style="width:400px;height:400px;">'+m+'</div>';
	el('hld').style.display = 'none';
	el('hld2').style.display = 'block';
	el('hld2').style.zIndex = 3;
	el('hld2').innerHTML = h;
	el('stnk').style.display = "none";	
	el('dimen').innerHTML = p;	
	if(navigator.appName == 'Microsoft Internet Explorer')
	{
	for(var i=0;i<dimDV.length;i++)
	{
		var bg = el(dimDV[i]).currentStyle.backgroundImage;
		var mypng = bg.substring(5,bg.length-2);
		el(dimDV[i]).style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+mypng+"', sizingMethod='scale')";
		el(dimDV[i]).style.backgroundImage = "URL('img/clean.gif')";
	}
	}
	for(var i=1;i<13;i++)
	{
	}
	for(var i=1;i<9;i++)
	{
		for(var j=1;j<9;j++)
		{
		}
	}
	

}
function in_array(value, arr)
{
	var key;
	for (key in arr)
    {
        if (arr[key] === value)
        {
			return value;
		}
    }
	return null;
}

function letCPU2(_SUPERdie)
{
	var iCAN = Array();
	iCAN = [];
	var iCAP = Array();
	iCAP = [];
	for(var i=0;i<DNDCZ.length;i++)
	{
		if(_SUPERdie)
		{
			for(var i3=0;i3<DNDCZ.length;i3++)
			{
				if( DNDCZ[i3][0] == _SUPERdie.id)
				{
					i = i3;
				}
			}
		}
		var XX = parseInt(DNDCZ[i][2]);
		var YY = parseInt(DNDCZ[i][3]);
		if(DNDCZ[i][1] == 0)
		{
			if(SQX[XX+1][YY-1] == "n" && XX<8 && YY>1)
			{
				if(!in_array( (XX+1)+"_"+(YY-1), vijobox ))
				{
					iCAN.push( Array((XX+1) +"_"+ (YY-1) , DNDCZ[i][0]) );
				}
			}
			else if(SQX[XX+1][YY-1] == "PU")
			{
				if(SQX[XX+2][YY-2] == "n" && XX<7 && YY>2)
				{
					if(!in_array( (XX+1)+"_"+(YY-1), vijobox )  &&   !in_array( (XX+2)+"_"+(YY-2), vijobox ))
					{
						iCAP.push( Array((XX+2) +"_"+ (YY-2) , DNDCZ[i][0]) );
						ALLOWEDinallCAX.push( Array((XX+1) +"_"+ (YY-1) , DNDCZ[i][0], iALLOWEDinallCAXi) );
						ALLOWEDinallCAXseez.push( Array((XX+1) +"_"+ (YY-1), ((XX+2) +"_"+ (YY-2)) ));
					}
				}
			}			
			if(SQX[XX-1][YY-1] == "n" && XX>1 && YY>1)
			{
				if(!in_array( (XX-1)+"_"+(YY-1), vijobox ))
				{
				iCAN.push( Array((XX-1) +"_"+ (YY-1) , DNDCZ[i][0]) );
				}
			}
			else if(SQX[XX-1][YY-1] == "PU")
			{
				if(SQX[XX-2][YY-2] == "n" && XX>2 && YY>2)
				{
					if(!in_array( (XX-1)+"_"+(YY-1), vijobox )  &&  !in_array( (XX-2)+"_"+(YY-2), vijobox ))
					{
					iCAP.push( Array((XX-2) +"_"+ (YY-2) , DNDCZ[i][0]) );
					ALLOWEDinallCAX.push( Array((XX-1) +"_"+ (YY-1) , DNDCZ[i][0], iALLOWEDinallCAXi) );
					ALLOWEDinallCAXseez.push( Array((XX-1) +"_"+ (YY-1), ((XX-2) +"_"+ (YY-2)) ));
					}
				}
			}
		}
		else if(DNDCZ[i][1] == 1)
		{
			if(SQX[XX+1][YY-1] == "n" && XX<8 && YY>1)
			{
				if(!in_array( (XX+1)+"_"+(YY-1), vijobox ))
				{
				iCAN.push( Array((XX+1) +"_"+ (YY-1) , DNDCZ[i][0]) );
				}
			}
			else if(SQX[XX+1][YY-1] == "PU")
			{
				if(SQX[XX+2][YY-2] == "n" && XX<7 && YY>2)
				{
					if(!in_array( (XX+1)+"_"+(YY-1), vijobox )  &&   !in_array( (XX+2)+"_"+(YY-2) ,vijobox ))
					{
					iCAP.push( Array((XX+2) +"_"+ (YY-2) , DNDCZ[i][0]) );
					ALLOWEDinallCAX.push( Array((XX+1) +"_"+ (YY-1) , DNDCZ[i][0], iALLOWEDinallCAXi) );
					ALLOWEDinallCAXseez.push( Array((XX+1) +"_"+ (YY-1), ((XX+2) +"_"+ (YY-2)) ));
					}
				}
			}			
			if(SQX[XX-1][YY-1] == "n" && XX>1 && YY>1)
			{
				if(!in_array( (XX-1)+"_"+(YY-1) , vijobox ))
				{
				iCAN.push( Array((XX-1) +"_"+ (YY-1) , DNDCZ[i][0]) );
				}
			}
			else if(SQX[XX-1][YY-1] == "PU")
			{
				if(SQX[XX-2][YY-2] == "n" && XX>2 && YY>2)
				{
					if(!in_array( (XX-1)+"_"+(YY-1) , vijobox )  &&   !in_array( (XX-2)+"_"+(YY-2) , vijobox ))
					{
					iCAP.push( Array((XX-2) +"_"+ (YY-2) , DNDCZ[i][0]) );
					ALLOWEDinallCAX.push( Array((XX-1) +"_"+ (YY-1) , DNDCZ[i][0], iALLOWEDinallCAXi) );
					ALLOWEDinallCAXseez.push( Array((XX-1) +"_"+ (YY-1), ((XX-2) +"_"+ (YY-2)) ));
					}
				}
			}
			if(SQX[XX-1][YY+1] == "n" && XX>1 && YY<7)
			{
				if(!in_array( (XX-1)+"_"+(YY+1) , vijobox))
				{
				iCAN.push( Array((XX-1) +"_"+ (YY+1) , DNDCZ[i][0]) );
				}
			}
			else if(SQX[XX-1][YY+1] == "PU")
			{
				if(SQX[XX-2][YY+2] == "n" && XX>2 && YY<6)
				{
					if(!in_array( (XX-1)+"_"+(YY+1), vijobox )  &&   !in_array( (XX-2)+"_"+(YY+2) , vijobox ))
					{
					iCAP.push( Array((XX-2) +"_"+ (YY+2) , DNDCZ[i][0]) );
					ALLOWEDinallCAX.push( Array((XX-1) +"_"+ (YY+1) , DNDCZ[i][0], iALLOWEDinallCAXi) );
					ALLOWEDinallCAXseez.push( Array((XX-1) +"_"+ (YY+1), ((XX-2) +"_"+ (YY+2)) ));
					}
				}
			}
			if(SQX[XX+1][YY+1] == "n" && XX<8 && YY<8)
			{
				if(!in_array( (XX+1)+"_"+(YY+1) , vijobox ))
				{
				iCAN.push( Array((XX+1) +"_"+ (YY+1) , DNDCZ[i][0]) );
				}
			}
			else if(SQX[XX+1][YY+1] == "PU")
			{
				if(SQX[XX+2][YY+2] == "n" && XX<7 && YY<7)
				{
					if(!in_array( (XX+1)+"_"+(YY+1) , vijobox )  &&   !in_array( (XX+2)+"_"+(YY+2) , vijobox ))
					{
					iCAP.push( Array((XX+2) +"_"+ (YY+2) , DNDCZ[i][0]) );
					ALLOWEDinallCAX.push( Array((XX+1) +"_"+ (YY+1) , DNDCZ[i][0], iALLOWEDinallCAXi) );
					ALLOWEDinallCAXseez.push( Array((XX+1) +"_"+ (YY+1), ((XX+2) +"_"+ (YY+2)) ));
					}
				}
			}
		}
		if(_SUPERdie)
		{
			i = 20000;
		}
	}
	return Array(iCAN, iCAP);
}
var UPDCZ = Array();
var DNDCZ = Array();
var UPDCZ_BK = Array();
var DNDCZ_BK = Array();
var SQX = Array();
var vijobox = Array();
var ALLOWEDinallCAP = Array();
var ALLOWEDinallCAN = Array();
var iALLOWEDinallCAXi = 1;
var ALLOWEDinallCAX = Array();
var ALLOWEDinallCAXseez = Array();
var ORIENTAL_BOXTERa = Array();
var ORIENTAL_BOXTERb = Array();
var ORIENTAL_BOXTERc = Array();
var DUEL_CAPTURES = Array();

function on_move(e)
{
	if(callresponse_work)
	return false;
	if(document.all)e = event;
	if (e.target) _s = e.target;
	else if (e.srcElement) _s = e.srcElement;
	mouse_x = e.clientX;
	mouse_y = e.clientY;
	if(_s.parentNode.id == null)
	{
		return false;
	}	
	if(rini)
	{		
		el(rini).style.top = mouse_y - 37;
		el(rini).style.left = mouse_x - 80;
	}
}
function on_up()
{
	if(rini)
	{
		var a = el('xto').style.top;
		var b = el('xto').style.left;
		
		el('dimen').removeChild(el('xto'));
		el('dimen').removeChild(el('xto2'));
		rini = null;
		rgtt(rini2, a, b);
	}
	rini = null;
}
var REVTT;
var FROCECAP = Array();
var NOT_OPTIONAL = Array();
var utntival;
function utn(item)
{
	if(item==1)
	{
		el('isturn').style.visibility = "visible"
		el('simL').style.visibility = "hidden"
		clearInterval(utntival);
		utntival = setInterval(utn2, 400);
	}
	else
	{
		el('isturn').style.visibility = "hidden"
		el('simL').style.visibility = "visible"
		clearInterval(utntival);
		utntival = setInterval(utn3, 700);
	}
}
function utn2()
{
	if(el('isturn').style.visibility == "hidden")
	{
		el('isturn').style.visibility = "visible"
	}
	else
	{
		el('isturn').style.visibility = "hidden"
	}
}
function utn3()
{
	if(el('simL').style.visibility == "hidden")
	{
		el('simL').style.visibility = "visible"
	}
	else
	{
		el('simL').style.visibility = "hidden"
	}
}
function rgtt(item, a, b)
{
	a = Math.floor((parseInt(a)+25) / 50) + 1;
    b = Math.floor((parseInt(b)+25) / 50) + 1;
	var REJu = true;
	for(var p=0;p<NOT_OPTIONAL.length;p++)
	{
		if(NOT_OPTIONAL[p] == rini2.id)
		{
			REJu = false;
		}
	}
	if(!REJu || NOT_OPTIONAL.length==0)
	{
	if(a > 0 && a < 9 && b > 0 && b < 9)
	{
		var ALLOW = false;
		if(ALLOWEDinallCAP.length > 0)
	{
		for(var i = 0;i<ALLOWEDinallCAP.length;i++)
		{
			if(ALLOWEDinallCAP[i][0] == (b+"_"+a) && ALLOWEDinallCAP[i][1] == rini2.id)
			{
				ALLOW = true;
			}
		}
	}	
	else
	{
		for(var i = 0;i<ALLOWEDinallCAN.length;i++)
		{
			if(ALLOWEDinallCAN[i][0] == (b+"_"+a) && ALLOWEDinallCAN[i][1] == rini2.id)
			{
				ALLOW = true;
			}
		}
	}
		{
			if(SQX[b][a] !== "n")
			{
				ALLOW = false;
			}					
		}
		if(ALLOW)
		{
		var PROMO = false;
		if(a == 1)
		{
			var ___d = rini2.id;
			var ___v = 'red';
			if(siefix=="b")
			{
				___v = 'black';
			}
			el(rini2.id).style.backgroundImage = 'url(\''+___v+'_queen.png\')';
			if(navigator.appName == 'Microsoft Internet Explorer')
	{
		var bg = el(rini2.id).currentStyle.backgroundImage;
		var mypng = bg.substring(5,bg.length-2);
		el(rini2.id).style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+mypng+"', sizingMethod='scale')";
		el(rini2.id).style.backgroundImage = "URL('img/clean.gif')";
	}
			PROMO = 1;
		}
		for(var i=0;i<DNDCZ.length;i++)
		{
			if(DNDCZ[i][0] == rini2.id)
			{
				SQX[ DNDCZ[i][2] ][ DNDCZ[i][3] ] = "n";
				SQX[b][a] = "PD";
				
				DNDCZ[i] = Array(DNDCZ[i][0], DNDCZ[i][1], b, a);
				if(PROMO)
				{
					DNDCZ[i][1] = 1;
				}
			}					
		}		
		var sfa = a;
		var sfb = b;
		a = ((a*50)-50);
		b = ((b*50)-50);
		var skulaz = "n";
		if(parseInt(rini2.style.left) !== b || parseInt(rini2.style.top) !== a)
		{
		rini2.style.left = b+"px";
		rini2.style.top = a+"px";
		var v = sfb+"_"+sfa;
		for(var u=0;u<DUEL_CAPTURES.length;u++)
		{
			var ini = DUEL_CAPTURES[u];
			var mm = ini[1][1];
			var ss = ini[1][0];
			if(mm == rini2.id && ss == v)
			{
				var jj = ini[0].split("_");
				var jx = parseInt(jj[0]);
				var jy = parseInt(jj[1]);
				
				for(var i=0;i<UPDCZ.length;i++)
		{
			if(UPDCZ[i][2] == jx && UPDCZ[i][3] == jy)
			{
				SQX[ jx ][ jy ] = "n";
				if(skulaz=="n")
				{
					skulaz = UPDCZ[i][0].replace(/BRE/, '');
				}
				else
				{
					skulaz = skulaz+"."+UPDCZ[i][0].replace(/BRE/, '');
				}
				el(UPDCZ[i][0]).style.left = (-100)+"px";
				el(UPDCZ[i][0]).style.top = (-100)+"px";
				UPDCZ[i] = Array(null, null, null, null);
			}					
		}
			}
		}
		var ij = new String(rini2.id);
		var i = "";
		SFSLONG = Array();
		var jr = Math.random()
		SFSLONG.push(_BASE+"?mkcj5="+mymatch+"&&ikr="+__ikiroll+"&&jk="+ij+"_"+sfa+"_"+sfb+"&&sbiti="+skulaz+"&&jr="+jr);
		SFSLONG.push(item);
		SFSLONG.push(jr);
		turner = 0;
		utn(0)
		}
		}
	}
	}
}
var SFSLONG = Array();
function on_down(e)
{
	if(!turner)
	{
		return false;
	}
if(document.all)e = event;
if (e.target) _s = e.target;
else if (e.srcElement) _s = e.srcElement;
mouse_x = e.clientX;
mouse_y = e.clientY;
if(_s.id.match(/RRE/))
{
	var nb2 = document.createElement('div');
	nb2.style.position = "absolute";
	nb2.style.cursor = "pointer";
	nb2.style.left = _s.style.left;
	nb2.style.top = _s.style.top;
	nb2.style.width = "50px";
	nb2.style.height = "50px";
	nb2.style.backgroundImage = "url('black_square.gif')";
	nb2.style.opacity = 0.5;
	nb2.style.filter = "alpha(opacity:70)";
	nb2.setAttribute('id', 'xto2');
	el('dimen').appendChild(nb2);
	var nb = document.createElement('div');
	nb.style.position = "absolute";
	nb.style.cursor = "pointer";
	nb.style.left = _s.style.left;
	nb.style.top = _s.style.top;
	nb.style.width = "50px";
	nb.style.height = "50px";
	if(mcGLINIAHA==1)
	{
		nb.style.backgroundImage = "url('red_pawn.png')";
	}
	else
	{
		nb.style.backgroundImage = "url('black_pawn.png')";
	}	
	nb.setAttribute('id', 'xto');
	el('dimen').appendChild(nb);
	if(navigator.appName == 'Microsoft Internet Explorer')
	{
	var bg = el('xto').currentStyle.backgroundImage;
	var mypng = bg.substring(5,bg.length-2);
	el('xto').style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+mypng+"', sizingMethod='scale')";
	el('xto').style.backgroundImage = "URL('img/clean.gif')";
	}
	rini2 = _s;
	vijobox = Array();
ALLOWEDinallCAP = Array();
ALLOWEDinallCAN = Array();
ALLOWEDinallCAX = Array();
ALLOWEDinallCAXseez = Array();
ORIENTAL_BOXTERa = Array();
ORIENTAL_BOXTERb = Array();
ORIENTAL_BOXTERc = Array();
DUEL_CAPTURES = Array();
	for(var i=0;i<10;i++)
	{
		ORIENTAL_BOXTERa[i] = Array();
		for(var j=0;j<10;j++)
		{
			ORIENTAL_BOXTERa[i][j] = SQX[i][j];
		}
	}
	ORIENTAL_BOXTERb = Array();
	for(var i=0;i<UPDCZ.length;i++)
	{
		ORIENTAL_BOXTERb.push(Array(UPDCZ[i][0], UPDCZ[i][1], UPDCZ[i][2], UPDCZ[i][3]));
	}
	ORIENTAL_BOXTERc = Array();
	for(var i=0;i<DNDCZ.length;i++)
	{
		ORIENTAL_BOXTERc.push(Array(DNDCZ[i][0], DNDCZ[i][1], DNDCZ[i][2], DNDCZ[i][3]));
	}
	var DOMIN_x4 = letCPU2(rini2);
	if(DOMIN_x4[1].length>0)
	{
		for(var i=0;i<DOMIN_x4[1].length;i++)
		{
			goozmov(DOMIN_x4[1][i]);
			allRESTORE();
		}
	}
	else
	{
		for(var i=0;i<DOMIN_x4[0].length;i++)
		{
			ALLOWEDinallCAN.push(Array(DOMIN_x4[0][i][0], DOMIN_x4[0][i][1]))
		}
	}
	var newSEEZ = Array();
	var newSEEZa = Array();
	var newSEEZb = Array();
	for(var j=0;j<ALLOWEDinallCAXseez.length;j++)
	{
		newSEEZ.push(ALLOWEDinallCAXseez[j][0]+"__"+ALLOWEDinallCAXseez[j][1]);
		
		newSEEZa.push(ALLOWEDinallCAXseez[j][0]);
		newSEEZb.push(ALLOWEDinallCAXseez[j][1]);
	}
	DUEL_CAPTURES = Array();
	for(var i=0;i<ALLOWEDinallCAP.length;i++)
	{
		var ii = ALLOWEDinallCAP[i][0];
		var aa = ii.split("_");
		var xx = aa[0];
		var yy = aa[1];
		var dod = true;
		var sod = false;
		while(dod)
		{
		for(var j=0;j<newSEEZ.length;j++)
		{
			var nnn = newSEEZ[j];
			var ddd = nnn.split("__");
			if(ddd[1] == ii)
			{
				var d = ddd[0].split("_");
				var ix = parseInt(d[0]);
				var iy = parseInt(d[1]);
				var d2 = ddd[1].split("_");
				var lx = parseInt(d2[0]);
				var ly = parseInt(d2[1]);
				var tx = 0;
				var ty = 0;
				if(ix == parseInt(lx+1) && iy == parseInt(ly+1))
				{
					tx = lx+2;
					ty = ly+2;
				}
				else if(ix == parseInt(lx-1) && iy == parseInt(ly-1))
				{
					tx = lx-2;
					ty = ly-2;
				}
				else if(ix == parseInt(lx+1) && iy == parseInt(ly-1))
				{
					tx = lx+2;
					ty = ly-2;
				}
				else if(ix == parseInt(lx-1) && iy == parseInt(ly+1))
				{
					tx = lx-2;
					ty = ly+2;
				}
				var jj = ii;
				ii = tx+"_"+ty;
				DUEL_CAPTURES.push( Array(ix+"_"+iy, ALLOWEDinallCAP[i]) );
				dod = false;
				if(in_array(ii, newSEEZb))
				{
					dod = true;
				}
			}
		}
		}
	}
	if(DUEL_CAPTURES.length>0)
	{
	}
	rini = "xto";
}
}
sun = null;
function goozmov(_dice)
{
	cpumov2(_dice, null);
	var DOMIN_x4 = letCPU2(el(_dice[1]));
	for(var i=0;i<DOMIN_x4[1].length;i++)
	{		
		goozmov(DOMIN_x4[1][i])
	}
	if(DOMIN_x4[1].length==0)
	{
		iALLOWEDinallCAXi++;
		ALLOWEDinallCAP.push(_dice);
	}
}
function allRESTORE()
{
	vijobox = Array();
			SQX = Array();
			for(var i4=0;i4<10;i4++)
			{
				SQX[i4] = Array();
				for(var j=0;j<10;j++)
				{
					SQX[i4][j] = ORIENTAL_BOXTERa[i4][j];
				}
			}
			UPDCZ = Array();
			for(var i4=0;i4<ORIENTAL_BOXTERb.length;i4++)
			{
				UPDCZ.push(Array(ORIENTAL_BOXTERb[i4][0], ORIENTAL_BOXTERb[i4][1], ORIENTAL_BOXTERb[i4][2], ORIENTAL_BOXTERb[i4][3]));
			}
			DNDCZ = Array();
			for(var i4=0;i4<ORIENTAL_BOXTERc.length;i4++)
			{
				DNDCZ.push(Array(ORIENTAL_BOXTERc[i4][0], ORIENTAL_BOXTERc[i4][1], ORIENTAL_BOXTERc[i4][2], ORIENTAL_BOXTERc[i4][3]));
			}
}
function cpumov2(dL, _kLTC)
{
	var DM = dL[1];
	dL = dL[0].split("_");
	var DX = parseInt(dL[0]);
	var DY = parseInt(dL[1]);
		var PROMO = false;
		if(DY == 8)
		{
			PROMO = 1;
		}
		var poorX = null;
		var poorY = null;
		for(var i=0;i<DNDCZ.length;i++)
		{
			if(DNDCZ[i][0] == DM)
			{
				vijobox.push(DX+"_"+DY);
				vijobox.push(DNDCZ[i][2]+"_"+DNDCZ[i][3]);
				SQX[ DNDCZ[i][2] ][ DNDCZ[i][3] ] = "n";
				SQX[DX][DY] = "PD";
				if(DX > DNDCZ[i][2] && DY > DNDCZ[i][3])
				{
					poorX = DX - 1;
					poorY = DY - 1;
				}
				else if(DX < DNDCZ[i][2] && DY < DNDCZ[i][3])
				{
					poorX = DX + 1;
					poorY = DY + 1;
				}
				else if(DX > DNDCZ[i][2] && DY < DNDCZ[i][3])
				{
					poorX = DX - 1;
					poorY = DY + 1;
				}
				else if(DX < DNDCZ[i][2] && DY > DNDCZ[i][3])
				{
					poorX = DX + 1;
					poorY = DY - 1;
				}
				if(poorX)
				{
					for(var j=0;j<UPDCZ.length;j++)
					{
						if(UPDCZ[j][2] == poorX && UPDCZ[j][3] == poorY)
						{
							SQX[ poorX ][ poorY ] = "n";							
							UPDCZ[j] = Array(null, null, null, null);
						}			
					}
				}
				DNDCZ[i] = Array(DNDCZ[i][0], DNDCZ[i][1], (DX), (DY));
				if(PROMO)
				{
				}
			}					
		}
	if(_kLTC == 1)
	{
	}
	else
	{
	}
}
function cancelSelectionEvent(e)
{
	if(document.all)e = event;
	if (e.target) source = e.target;
	else if (e.srcElement) source = e.srcElement;
	if (source.nodeType == 3) 
	source = source.parentNode;
	if(source.tagName.toLowerCase()=='input')
	{
	return true;
	}
	else
	{
	return false;
	}
}
function cancelEvent()
{
	return false;
}
document.onmousemove = on_move;
document.onmousedown = on_down;
document.onmouseup = on_up;
document.onselectstart = cancelSelectionEvent;
document.ondragstart = cancelEvent;
var callresponse_work = false;
var rini = null;
var rini2 = null;
var turner = 1;
var mymatch = 0;
function slkd(item)
{
	_sbtl();
	if(turner==1)
	utn(1)
}
function __3()
{
	var _3x = document.getElementById('__3').getElementsByTagName("TBODY")[0];
	var row = document.createElement("TR");
	var row2 = document.createElement("TR");
	var row3 = document.createElement("TR");
	var td1 = document.createElement("TD");
	td1.setAttribute('width','5');
	var _31 = document.createElement("img");
	_31.setAttribute('src','img/sca_03.gif');
	td1.appendChild(_31);
	var td2 = document.createElement("TD");
	td2.setAttribute('width','410');
	td2.innerHTML = '<div style="height:5px;width:auto;background-image:url(\'img/sca_05.gif\')"></div>';
	var td3 = document.createElement("TD");
	td3.setAttribute('width','5');
	td3.setAttribute('align','right');
	var _31 = document.createElement("img");
	_31.setAttribute('src','img/sca_09.gif');
	td3.appendChild(_31);
	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	var td1 = document.createElement("TD");
	td1.innerHTML = '<div style="background-image:url(\'img/sca_15.gif\');width:5px;height:400px"></div>';
	var td2 = document.createElement("TD");
	td2.setAttribute('valign','top');
	td2.innerHTML = '<div id="ldng" align="center"><div style="padding:40px">please wait...</div></div><div id="ldng2" align="center"></div><div id="hld" style="font-size:9pt;width:392px;height:392px;overflow:auto;overflow-x:hidden;padding-left:2px;"><div style="margin:10px;margin-top:20px;"><img src="img/sca_19.gif"><div style="margin-top:2px;width:205px;height:31px;background-image:url(\'img/sca_21-23.gif\');"><input onKeyUp="jusc(event, this)" type="text" style="background-color:Transparent;margin-top:5px;width:180px;height:20px;color:#000;font-size:10pt"></div></div></div>';
	el('__4').innerHTML = '<a href="javascript:void(0)" onClick="g2lobby()"><img border="0" src="img/sca_49.gif"></a><div style="cursor:default;color:#666;font-size:8pt;font-family:Arial, Helvetica, sans-serif">&copy; alilg.com/scripts</div>';
	var td3 = document.createElement("TD");
	td3.setAttribute('valign','top');
	td3.innerHTML = '<div style="background-image:url(\'img/sca_16.gif\');width:5px;height:400px"></div>';
	row2.appendChild(td1);
	row2.appendChild(td2);
	row2.appendChild(td3);
	var td1 = document.createElement("TD");
	td1.setAttribute('width','5');
	var _31 = document.createElement("img");
	_31.setAttribute('src','img/sca_30.gif');
	td1.appendChild(_31);
	var td2 = document.createElement("TD");
	td2.setAttribute('width','410');
	td2.innerHTML = '<div style="height:5px;width:auto;background-image:url(\'img/sca_32.gif\')"></div>';
	var td3 = document.createElement("TD");
	td3.setAttribute('width','5');
	td3.setAttribute('align','right');
	var _31 = document.createElement("img");
	_31.setAttribute('src','img/sca_37.gif');
	td3.appendChild(_31);
	row3.appendChild(td1);
	row3.appendChild(td2);
	row3.appendChild(td3);
	_3x.appendChild(row);
	_3x.appendChild(row2);
	_3x.appendChild(row3);
}
window.onload = pumpit
_IPOS = "L";
window.onunload = lvt
function pumpit()
{
	el('subdimex').innerHTML = '<table width="410" cellpadding="0" id="__3" cellspacing="0" border="0" bgcolor="#a39889" style="position:absolute;left:10px;top:14px;"><tbody></tbody></table>';
	__3();
	if($SERVERSIDE_DEBUG)
	{
		var dbg = document.createElement("div");
		dbg.innerHTML = '<textarea style="font-size:9pt;margin-top:500px;width:600px;height:200px;" id="DBUGGG"></textarea>';
		document.body.appendChild(dbg);
	}
}
function lvt()
{
	clearInterval(_lovil);
	rnoal();
	new bskcm(_BASE+'?out='+__ikiroll+"_"+mymatch, "http", "", "get", "dpLK");	
}
function jusc2(piker, trim)
{
	if(piker.keyCode == 13)
	{
		if(trim.value !== "")
		{
			var _n = trim.value;
			_n = stripc(_n);
			longst(_n)
			trim.value = "";
		}
	}
}