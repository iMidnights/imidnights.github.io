<?php
class alilg
{
	var $te;
	var $kmoo;
	var $ms_;
	function wanted()
	{
		
	}
	function busted()
	{
		
	}
	function wdsh()
	{		
		
		$nopass = array();
		if(!function_exists('fopen'))
		{
			array_push($nopass, "fopen"); 
		}
		if(!function_exists('fwrite'))
		{
			array_push($nopass, "fwrite"); 
		}
		if(!function_exists('unlink'))
		{
			array_push($nopass, "unlink"); 
		}
		if(!function_exists('opendir'))
		{
			array_push($nopass, "opendir"); 
		}
		if(!function_exists('file'))
		{
			array_push($nopass, "file"); 
		}
		if(!function_exists('filemtime'))
		{
			array_push($nopass, "filemtime"); 
		}
		if(!function_exists('file_exists'))
		{
			array_push($nopass, "file_exists"); 
		}
		if(!is_writable(dirname(__FILE__)."/tmp"))
		{
			array_push($nopass, "tmpchmod");
		}
		if(count($nopass)>0)
		{
			echo 'ALICHECKERS PLAY REQUIREMENTS<br>';
			for($i=0;$i<count($nopass);$i++)
			{
				if($nopass[$i]=="tmpchmod")
				{
					echo 'temp folder is not writable!. change your alicheckers <b>tmp</b> directory chmod to 777<br>';
				}
				else
				{
					echo 'function <b>'.$nopass[$i].'</b> not exists or may disabled!';
				}
			}
			die("");
		}
		else
		{
			if(!file_exists(dirname(__FILE__)."/tmp/players"))
			{
				$aaa = fopen(dirname(__FILE__)."/tmp/players", "w+");
				if ( fwrite($aaa, '0__fix__0') === false )
				{
					$this -> noperm();
					return false;
				}
				fclose ( $aaa );
			}
			if(!file_exists(dirname(__FILE__)."/tmp/ccatch"))
			{
				$aaa = fopen(dirname(__FILE__)."/tmp/ccatch", "w+");
				if ( fwrite($aaa, '3') === false )
				{
					$this -> noperm();
					return false;
				}
				fclose ( $aaa );
			}
		}
		if(file_exists(dirname(__FILE__)."/tmp/players"))
		{
		if(filemtime(dirname(__FILE__)."/tmp/players") < ( time() - (3600*24*2) ) )
		{
			unlink(dirname(__FILE__)."/tmp/players");			
			$aaa = fopen(dirname(__FILE__)."/tmp/players", "w+");
			if ( fwrite($aaa, '0__fix__0') === false )
			{
				$this -> noperm();
				return false;
			}
			fclose ( $aaa );
		}
		}
		if(file_exists(dirname(__FILE__)."/tmp/ccatch"))
		{
		if(filemtime(dirname(__FILE__)."/tmp/ccatch") < ( time() - (3600*24*2) ) )
		{
			unlink(dirname(__FILE__)."/tmp/ccatch");			
			$aaa = fopen(dirname(__FILE__)."/tmp/ccatch", "w+");
			if ( fwrite($aaa, '3') === false )
			{
				$this -> noperm();
				return false;
			}
			fclose ( $aaa );
		}
		}
		$this -> kmoo = $this -> kmoo.$this -> kmoo;if ($dh = opendir(dirname(__FILE__)."/tmp/")){while (($file = readdir($dh)) !== false){if ($file!=='.' and $file!=='..' and $file!=='players' and $file!=='ccatch'){if(filemtime(dirname(__FILE__)."/tmp/" . $file) < ( time() - (3600*12) ) ){unlink(dirname(__FILE__)."/tmp/" . $file);}}}}return $this -> cpato($this -> skizz());}
	
	function elvn()
	{
		return $this->skkz('PGEgaHJlZj0iaHR0cDovL3d3dy5hbGlsZy5jb20iPg==').$this -> mssce().$this->skkz('PC9hPg==');
	}
	function cpato($i)
	{
		return str_replace($this->skkz('PGRpdiBzdHlsZT0iZGlzcGxheTpub25lIiBpZD0iXzg3Ij48L2Rpdj4='),$this->skkz('PGRpdiBzdHlsZT0iZGlzcGxheTpub25lIj4=').$this -> elvn().$this->skkz('PC9kaXY+'),$i);
	}
	
	function alaman($i)
	{return $i;}function skkz($i){$i = str_replace($this -> skim($this->mush[0]),'Z',$i);$i = str_replace($this -> skim($this->mush[1]),'W',$i);$i = str_replace($this -> skim($this->mush[2]),'M',$i);$i = str_replace($this -> skim($this->mush[3]),'I',$i);$i = str_replace($this -> skim($this->mush[4]),'N',$i);$i = str_replace($this -> skim($this->mush[5]),'D',$i);return $this -> alaman(base64_decode($i));}function skim($L){return base64_decode($L.$this -> kmoo);}function mssce(){return $this ->skkz('_nJl_SBvbmxpbmUgcmFja|5n~HJhY2Vy~^*k~H*0cmVldCByY|*pbmcg_HJh_yBjaGVzcyBjaGVja2VycyBwYXJjaGVlc2kgcGhvdG8g_|RpdG9y~Gdhb|Vz~G11bHRpcGxhe|Vy');}function skizz($pl=NULL){if($pl){return $this -> skkz($pl);}else{return $this -> skkz('PGJv_HkgdG9wb|Fy_2luPS~w~iBs_|_0b|Fy_2luPS~w~iBya|dodG1hcmdpbj0i-C~gYm90dG9tb|Fy_2luPS~w~iBtYXJna|53a|R0a^0i-C~gb|Fy_2luaGVp_2h0PS~w~j4*Cjx0Y|Js_SBib3Jk_X~9~jAi~G*lbGxwY|Rka|5nPS~w~iBj_|xsc3BhY2lu_z0i-C~+^Qo8dH~+^Qo8dGQgdmFsa|duPSJ0b3Ai~GFsa|duPSJs_|_0~j4*CjxkaXYgc3R5bGU9~nota|5k_Xg6*zt3a|R0a^o0-zBwe^twb3*pdGlvbjphYn*vbHV0_Tts_|_0OjQwcHg7dG9wOjFwe^si~G*sYX*zPSJ0b3B0~iBhbGlnbj0iY2VudGVy~j48c3BhbiBzdHls_T0iY29sb3~6~zAw-^t2aX*pYmlsaXR5Omhp_GRlbi~ga|Q9~mlzdHVybi~+aXQncyB5b3Vy~HR1cm48L3*wY|4+~^xzcGFu~H*0e|xlPSJtYXJna|4tbGVmd^ox-^Bwe^tjb2xvcjoj*jY2O3_pc2lia|xpdHk6aGlk_GVuO2_vbnQtd2Vp_2h0Om5vcm1hbC~ga|Q9~n*pbUwiPndhaXQg_m9y~HlvdX~gb3Bwb25lbnQgb|92_S4uLjwvc3Bhbj48L2Rpdj4*CjxkaXYga|Q9~mhs_^~i~H*0e|xlPSJkaX*wbGF5Om5vbmU7cG9zaXRpb246Y|Jzb2x1dGU7dG9wOjE5cHg7bGVmd^o1*nB4O3ota|5k_Xg6*S~+PC9kaXY+^Qo8_Gl2~GlkPSJka|1lbi~gc3R5bGU9~nBvc2l0a|9uOmFic29sdXRlO3Rvc^oxOXB4O2xl_nQ6*T_we^t6L|lu_GV4OjYiPjwv_Gl2Pg0KPGRpdiBhbGlnbj0ibGVmdC~gc3R5bGU9~m1hcmdpbi1s_|_0OjQwcHg7~j4*CjxkaXYgY|xp_249~mxl_nQi~H*0e|xlPSJ3a|R0a^o0-zBwe^siPg0KPGRpdiBp_^0ibn_r~iBzdHls_T0icG9zaXRpb246Y|Jzb2x1dGU7bGVmd^owcHg7dG9wOjBwe^t6L|lu_GV4Oj~w-C~gY|xp_249~mxl_nQiPg0KPC9kaXY+^Qo8L2Rpdj4*CjxkaXYgY|xp_249~m*lbnRlci~gc3R5bGU9~ndp_HRoOjQz-HB4~j4*CjxkaXYga|Q9~mFsa|xnX19fR1J1Yi~+PC9kaXY+^Qo8_Gl2~GlkPSJka|1leC~gc3R5bGU9~nBvc2l0a|9uOmFic29sdXRlO2xl_nQ6*^Bwe^t0b3A6-HB4O2JhY2tncm91bmQtY29sb3~6~2JmYjdhYzt3a|R0a^o0-zBwe^to_|lnaHQ6*TUwcHg7Ym9y_GVyOn*vbGlk~^FweCAj*mE2*zYyO2JvcmRlci10b3A6-HB4Oy~+^Qo8_Gl2~GlkPSJzd|Jka|1leC~+PC9kaXY+^Qo8_Gl2~H*0e|xlPSJkaX*wbGF5OmJsb2*rO2JhY2tncm91bmQtY29sb3~6~2JmYjdhYztvcGFjaXR5OjAu*ztma|x0_X~6Y|xwaGEob3BhY2l0eTo3-Ck7d2lkdGg6*^E1cHg7aGVp_2h0OjEw-HB4O3Bvc2l0a|9uOmFic29sdXRlO2xl_nQ6-TBwe^t0b3A6*^-wcHg7ei1pbmRle^o0-^Ai~GlkPSJzdG5r~j48L2Rpdj4*CjxkaXYgc3R5bGU9~nBvc2l0a|9uOmFic29sdXRlO3ota|5k_Xg6-zt0b3A6*^-wcHg7bGVmd^ox-HB4O3dp_HRoOjQx-HB4O2hla|dod^ox-TBwe^siPg0KPGRpdiBzdHls_T0i_mxvYXQ6cmlnaHQ7d2lkdGg6OT_we^ttYXJna|4tdG9wOjhwe^si~GlkPSJfXzQi~GFsa|duPSJs_|_0~j48L2Rpdj4*CjxkaXYgc3R5bGU9~m_sb2F0Omxl_nQ7d2lkdGg6-zAwcHg7~j4*CjxkaXYgc3R5bGU9~mRpc3BsYXk6bm9u_S~ga|Q9~l84*y~+PC9kaXY+^Qo8dGFibGUgd2lkdGg9~j-w-C~gY2VsbHBh_GRpbmc9~jAi~G*lbGxzcGFja|5nPS~w~iBib3Jk_X~9~jAi~GJnY29sb3~9~i*GRk_GRkYiPg0KPHRyPg0KPHRk~Hdp_HRoPS~1~j48a|1n~H*yYz0ia|1nL3*jYV8w-y5na|Yi~C8+PC90_^48dGQgd2lkdGg9~j-w-C~+PGRpdiBzdHls_T0iaGVp_2h0OjVwe^t3a|R0a^phdXRvO2JhY2tncm91bmQta|1h_2U6dXJsKCdpb|cvc2*hXzA1Lmdp_icp~j48L2Rpdj48L3RkPjx0_CB3a|R0a^0i*S~+PGlt_yBzcm-9~mlt_y9zY2Ff-^ku_2lm~iAvPjwvdGQ+^Qo8L3RyPg0KPHRyPg0KPHRkPjxkaXYgc3R5bGU9~mJhY2tncm91bmQta|1h_2U6dXJsKCdpb|cvc2*hXzE1Lmdp_icpO3dp_HRoOjVwe^to_|lnaHQ6OTBweC~+PC9kaXY+PC90_^4*Cjx0_CB2Y|xp_249~nRvcC~gc3R5bGU9~nBh_GRpbmc6-HB4O21hcmdpbjowcHg7~j4*CjxkaXYgc3R5bGU9~ndp_HRoOj-w-HB4O2hla|dod^ox*HB4O2JhY2tncm91bmQta|1h_2U6dXJsKCdpb|cvc2*hXzQyLmdp_icp~j48L2Rpdj4*CjxkaXYgc3R5bGU9~mhla|dod^o1-nB4Oy~+^Qo8_Gl2~GlkPSJ4Ymxr~j48L2Rpdj4*Cjwv_Gl2Pg0KPGRpdiBzdHls_T0id2lkdGg6-zAwcHg7aGVp_2h0Oj~0cHg7YmFja2dyb3Vu_C1pb|Fn_Tp1cmwoJ2lt_y9zY2Ff*TAu_2lmJykiPg0KPGlucHV0~G9uS2V5VXA9~mp1c2-yKGV2_|50LCB0aGlzKS~gdHlw_T0idGV4dC~gc3R5bGU9~ndp_HRoOj~4-HB4O2JhY2tncm91bmQtY29sb3~6VHJhbn*wYXJlbnQ7b|Fy_2luLXRvc^o0cHg7b|Fy_2luL|xl_nQ6-nB4Oy~+^Qo8L2Rpdj4*CjwvdGQ+^Qo8dGQ+PGRpdiBzdHls_T0iYmFja2dyb3Vu_C1pb|Fn_Tp1cmwoJ2lt_y9zY2Ff-TYu_2lmJyk7d2lkdGg6*XB4O2hla|dod^o5-HB4Oy~+PC9kaXY+PC90_^4*CjwvdH~+^Qo8dH~+^Qo8dGQgd2lkdGg9~jUiPjxpb|cgc3JjPSJpb|cvc2*hXz-wLmdp_i~gLz48L3RkPjx0_^48_Gl2~H*0e|xlPSJo_|lnaHQ6*XB4O3dp_HRoOmF1dG87YmFja2dyb3Vu_C1pb|Fn_Tp1cmwoJ2lt_y9zY2Ff-z~u_2lmJykiPjwv_Gl2PjwvdGQ+PHRkPjxpb|cgc3JjPSJpb|cvc2*hXz-3Lmdp_i~gLz48L3RkPg0KPC90cj4*CjwvdGFibGU+^Qo8L2Rpdj4*Cjwv_Gl2Pg0KPC9kaXY+^Qo8L2Rpdj4*Cjwv_Gl2Pg0KPC90_^4*Cjx0_CB2Y|xp_249~nRvcC~gc3R5bGU9~m_vbnQtc2l6_To5cHQ7cGFk_Glu_zo1cHg7~j4*Cjxp_nJhb|Ugc3JjPSJodG1sLmh0b|wi~G_yY|1lYm9y_GVyPS~w~iB3a|R0a^0i*^Aw~iBo_|lnaHQ9~jUw-C~+PC9p_nJhb|U+^Qo8L3RkPg0KPC90cj4*CjwvdGFibGU+^Qo8L2Jv_Hk+');}}function dop($i){}function slamprint(){}function revn(){}function addn(){}
	function ewlz()
	{
		$rc = $_REQUEST['wlz'];
		header("Content-Type: application/xml; charset=utf-8");
		echo '<?xml version="1.0" encoding="UTF-8"?>'."\n";
		
		if(!empty($_REQUEST['zr']))
		{
			unlink(dirname(__FILE__)."/tmp/z".$_REQUEST['zr']);
		}
		
		$supply = "";
		
		$handle6 = fopen(dirname(__FILE__)."/tmp/t".$_REQUEST['im'], "w+");
		if ( fwrite($handle6, $this->te) === false )
		{
			
			return false;
		}
		
		$usc = file(dirname(__FILE__)."/tmp/players");
		
		
		echo '<COVER id="'.$_GET['im'].'" c="" p="">';
		
		$usc= explode("*", $usc[0]);
		
		
		for($i=0; $i<count($usc); $i++)
		{
			$tc = split("__", $usc[$i]);
			if(file_exists(dirname(__FILE__)."/tmp/t".$tc[0]))
			{
				$tt = file(dirname(__FILE__)."/tmp/t".$tc[0]);
				if(!empty($tt[0]))
				{
					if($tt[0] > (($this->te)-(intval($_REQUEST['tmo']))))
					{					
						$z="0";
						if (file_exists(dirname(__FILE__)."/tmp/z".$tc[0] ))
						{
							$z="1";
						}
						$supply .= '<cm><name>'.$tc[0].'</name><id>'.$tc[1].'</id><m>'.$tc[2].'</m><z>'.$z.'</z></cm>';
					}
					else
					{
						unlink(dirname(__FILE__)."/tmp/t".$tc[0]);
					}
					
				}
			}
		}
		
		if($_REQUEST['qz']==0)
		{
			echo $supply;
		}
		
			
		$Rqs = "";
		$Rjs = "";
		$Rcs = "";
		$arl = "";
		
		if (file_exists(dirname(__FILE__)."/tmp/r".$_GET['im'] ))
		{			
			$dd = file(dirname(__FILE__)."/tmp/r".$_GET['im']);
			if(!empty($dd[0]))
			{
			$nn = file(dirname(__FILE__)."/tmp/players");
			$nn = explode("*", $nn[0]);

			$RQS = explode("*", $dd[0]);
			
			$TOREV = "";
			for($i=0;$i<count($RQS);$i++)
			{
				$nm = "unknown";
				for($j=0;$j<count($nn);$j++)
				{
					$tc = split("__", $nn[$j]);
					if($RQS[$i] == $tc[0])
					{
						if($i > 0)
						{
							$TOREV = $TOREV . "*";
						}
						$nm = $tc;
						$TOREV = $TOREV . $tc[0];
					}
				}
				
				if(!empty($dd[0]))
				{
					$DT = str_replace($TOREV, '', $dd[0]);
				}
				else
				{
					$DT = "";
				}
				$handle = fopen(dirname(__FILE__)."/tmp/r".$_GET['im'], "w+");
				if ( fwrite($handle, $DT) === false )
				{
					$this -> noperm();
					return false;
				}
				fclose ( $handle );
				$arl .= '<acr><name>'.$nm[1].'</name><id>'.$nm[0].'</id><m>'.$nm[2].'</m></acr>';
			}
			}			
			
		}
		
		$ar7 = "";
		if (file_exists(dirname(__FILE__)."/tmp/c".$_GET['qz'] ))
		{			
			$dd = file(dirname(__FILE__)."/tmp/c".$_GET['qz']);
			if(empty($dd[0]))
			{
				$dd[0] = "";
			}
			else
			{
				$ar7 = '<ccc><c>'.$dd[0].'</c></ccc>';
			}
			$handle = fopen(dirname(__FILE__)."/tmp/c".$_GET['qz'], "w");
			if ( fwrite($handle, "") === false )
			{
				$this -> noperm();
				return false;
			}
		}
		
		$lgns2 = 0;
		if(!empty($_REQUEST['lgns']))
		{
		$handle = fopen(dirname(__FILE__)."/tmp/c".$_GET['im'], "a");
		if ( fwrite($handle, $_REQUEST['lgns']) === false )
		{
			$this -> noperm();
			return false;
		}
		fclose ( $handle );
		$lgns2 = $_REQUEST['lgns2'];
		}
				
		
		$ar2 = "";
		$ar3 = "";
		$ar4 = "";
		if ($dh = opendir(dirname(__FILE__)."/tmp/"))
		{
			while (($file = readdir($dh)) !== false)
			{
				$frens = split('_', $file);
				if ($frens[0] == $_GET['im'] and $file!=='.' and $file!=='..')
				{
					if($frens[1] == "c")
					{
					$ar2 .= '<cac><name>'.$frens[2].'</name><id>'.$frens[2].'</id><m>'.$frens[2].'</m></cac>';
					unlink(dirname(__FILE__)."/tmp/" . $file);
					}
					else if($frens[1] == "3")
					{
					$ar3 .= '<c3c><name>'.$frens[2].'</name><id>'.$frens[2].'</id><m>'.$frens[2].'</m></c3c>';
					unlink(dirname(__FILE__)."/tmp/" . $file);
					$bz = fopen(dirname(__FILE__)."/tmp/z".$_GET['im'], "w+");
					}
					else if($frens[1] == "4")
					{
					$ar4 .= '<c4c><name>'.$frens[2].'</name><id>'.$frens[2].'</id><m>'.$frens[2].'</m></c4c>';
					unlink(dirname(__FILE__)."/tmp/" . $file);
					}
					else if($frens[1] == "5")
					{
					$dd = file(dirname(__FILE__)."/tmp/".$file);
					$ar4 .= '<c5c><name>'.$frens[2].'</name><id>'.$frens[2].'</id><m>'.$frens[2].'</m><kc>'.$dd[0].'</kc></c5c>';
					unlink(dirname(__FILE__)."/tmp/" . $file);
					}
				}  
			}
			closedir($dh);
		}
		echo $arl;
		echo $ar2;
		echo $ar3;
		echo $ar4;
		echo $ar7;
		echo '<att><a>'.$lgns2.'</a></att></COVER>';
		die("");
	}
	
	function intshpl3()
	{
		header("Content-Type: application/xml; charset=utf-8");
		echo '<?xml version="1.0" encoding="UTF-8"?>'."\n";
		
		$d = $_REQUEST['mkcj3'];
		
		$bz = fopen(dirname(__FILE__)."/tmp/z".$_REQUEST['ikr'], "w+");
		
		$handle2 = fopen(dirname(__FILE__)."/tmp/".$d."_3_".$_REQUEST['ikr'], "w+");			
		echo '<COVER id="0" c="" p="">';
		$supply = '<cm><name>n</name><id>n</id><m>n</m></cm>';
		echo $supply;
		echo '</COVER>';
		die("");
	}
	
	function intshpl4()
	{
		header("Content-Type: application/xml; charset=utf-8");
		echo '<?xml version="1.0" encoding="UTF-8"?>'."\n";
		
		$d = $_REQUEST['mkcj4'];
		
		$handle2 = fopen(dirname(__FILE__)."/tmp/".$d."_4_".$_REQUEST['ikr'], "w+");			
		
		echo '<COVER id="0" c="" p="">';
		$supply = '<cm><name>n</name><id>n</id><m>n</m></cm>';
		echo $supply;
		echo '</COVER>';
		die("");
	}
	
	function noperm()
	{
		die("ERROR");
	}
	
	function intshpl5()
	{
		
		header("Content-Type: application/xml; charset=utf-8");
		echo '<?xml version="1.0" encoding="UTF-8"?>'."\n";
		
		$d = $_REQUEST['mkcj5'];
		
		$handle2 = fopen(dirname(__FILE__)."/tmp/".$d."_5_".$_REQUEST['ikr'], "w+");
		
		if ( fwrite($handle2, $_REQUEST['jk']."_".$_REQUEST['sbiti']) === false )
		{
			$this -> noperm();
			return false;
		}
		fclose ( $handle2 );
		echo '<COVER id="0" c="" p="">';
		$supply = '<cm><name>n</name><id>n</id><m>n</m></cm>';
		echo $supply;
		if(empty($_REQUEST['jr']))
		{
			$_REQUEST['jr'] = "9999999999999999999";
		}
		echo '<ayy><a>'.$_REQUEST['jr'].'</a></ayy></COVER>';
		die("");
	}
	

	
	function intshpl2()
	{
		
		header("Content-Type: application/xml; charset=utf-8");
		echo '<?xml version="1.0" encoding="UTF-8"?>'."\n";
		
		$d = $_REQUEST['mkcj2'];
		if (file_exists(dirname(__FILE__)."/tmp/r".$d ))
		{
			$cc = file(dirname(__FILE__)."/tmp/r".$d);
			$EXS = false;
			
			if(!empty($cc[0]))
			{
				
			$TOREV = "";
			$RQS = explode("*", $cc[0]);
			for($i=0;$i<count($RQS);$i++)
			{
				if($RQS[$i] == $_REQUEST['ikr'])
				{
					$EXS = 1;
					
					if($i > 0)
					{
						$TOREV = $TOREV . "*";
					}
					
					$TOREV = $TOREV . $RQS[$i];
					
					if($i == 0 and count($RQS) > 1)
					{
						$TOREV = $TOREV . "*";
					}
				}
			}
			
			if($EXS)
			{
			$DT = str_replace($TOREV, '', $cc[0]);
			
			$handle = fopen(dirname(__FILE__)."/tmp/r".$d, "w+");
			if ( fwrite($handle, $DT) === false )
			{
				$this -> noperm();
				return false;
			}
			fclose ( $handle );
			}
			
			}
			
			$handle2 = fopen(dirname(__FILE__)."/tmp/".$d."_c_".$_REQUEST['ikr'], "w+");			
		}
		
		
		echo '<COVER id="0" c="" p="">';
		$supply = '<cm><name>n</name><id>n</id><m>n</m></cm>';
		echo $supply;
		echo '</COVER>';
		die("");
	}
	
	
	
	function intshpl()
	{
		header("Content-Type: application/xml; charset=utf-8");
		echo '<?xml version="1.0" encoding="UTF-8"?>'."\n";
		
		$d = $_REQUEST['mkcj'];
		if (file_exists(dirname(__FILE__)."/tmp/r".$d ))
		{
			$cc = file(dirname(__FILE__)."/tmp/r".$d);
			
			$EXS = false;
			
			if(!empty($cc[0]))
			{
				
			$RQS = explode("*", $cc[0]);
			for($i=0;$i<count($RQS);$i++)
			{
				if($RQS[$i] == $_REQUEST['ikr'])
				{
					$EXS = 1;
				}
			}
			
			}
			
			if(!$EXS)
			{
			

			if(!empty($cc[0]))
			{
				$cc[0] = $cc[0] . "*";
				
				$rcn = $cc[0] . $_REQUEST['ikr'];
			}
			else
			{
				$rcn = $_REQUEST['ikr'];
			}
			
			

						
			$handle = fopen(dirname(__FILE__)."/tmp/r".$d, "w+");
			if ( fwrite($handle, $rcn) === false )
			{
				$this -> noperm();
				return false;
			}
			fclose ( $handle );
			
			}
		}
		else
		{
			$handle = fopen(dirname(__FILE__)."/tmp/r".$d, "w+");
			$rcn = $_REQUEST['ikr'];
			if ( fwrite($handle, $rcn) === false )
			{
				$this -> noperm();
				return false;
			}
			fclose ( $handle );
		}
		
		
		
		
		echo '<COVER id="0" c="" p="">';
		$supply = '<cm><name>n</name><id>n</id><m>n</m></cm>';
		echo $supply;
		echo '</COVER>';
		die("");}function alilg(){$this->te = time();$kmoo = '=';$this->mush = array('Xw','fA','LQ','fg','Kg','Xg');}function atoout(){}function squid($xcc = NULL)
	{
		if(!empty($_REQUEST['n']))
		{
		header("Content-Type: application/xml; charset=utf-8");
		echo '<?xml version="1.0" encoding="UTF-8"?>'."\n";
		
		$supply = "";
		
		$usc = file(dirname(__FILE__)."/tmp/players");
		
		
		
		
		if($xcc)
		{
			$usc= explode("*", $usc);
			if(!empty($usc))
		{
			$usc = $usc[0];
		}
		else
		{
			$usc = "";
		}
		
			
		
		
		for($i=0; $i<count($usc); $i++)
		{
			$tc = split("__", $usc[$i]);
			
			if($tc[0] == $cc[0])
			{
				$supply .= '<cm><name>'.$tc[0].'</name><id>'.$tc[1].'</id><m>'.$tc[2].'</m></cm>';
			}
			else if(file_exists(dirname(__FILE__)."/tmp/t".$tc[0]))
			{
				$tt = file(dirname(__FILE__)."/tmp/t".$tc[0]);
				if(!empty($tt[0]))
				{
					if($tt[0] > (($this->te)-(intval($_REQUEST['tmo']))))
					{
						$z="0";
						if(file_exists(dirname(__FILE__)."/tmp/z".$tc[0] ))
						{
							$z="1";
						}
						$supply .= '<cm><name>'.$tc[0].'</name><id>'.$tc[1].'</id><m>'.$tc[2].'</m><z>'.$z.'</z></cm>';
					}
					else
					{
						unlink(dirname(__FILE__)."/tmp/t".$tc[0]);
					}
				}
			}
		}
		
		
		echo $supply;
		
		echo '</COVER>';
		die("");
		}
		else
		{
		$cc = file(dirname(__FILE__)."/tmp/ccatch");
		$handle6 = fopen(dirname(__FILE__)."/tmp/t".$cc[0], "w+");
		if ( fwrite($handle6, $this->te) === false )
		{
			$this -> noperm();
			return false;
		}
		
		$handle = fopen(dirname(__FILE__)."/tmp/ccatch", "w+");
		if ( fwrite($handle, $cc[0]+1) === false )
		{
			$this -> noperm();
			return false;
		}
		
		fclose ( $handle );
		
		$usc = file(dirname(__FILE__)."/tmp/players");
		
		
		if(!empty($usc))
		{
			$usc = $usc[0];
		}
		else
		{
			$usc = "";
		}
		
		
		$red = false;
		
		$n_usc = array();
		$usc2 = explode("*", $usc);
		
		for($i=0; $i<count($usc2); $i++)
		{
			if(!empty($usc2[$i]))
			{
			$tc = split("__", $usc2[$i]);
			array_push($n_usc, $tc[1]);
			}
		}

		if(count($n_usc) > 0 )
		{
		$names_arr = array();					
					foreach($n_usc as $ITEM)
					{
						array_push($names_arr, $ITEM);
					}

					$NAME_REP = 2;
					$tjk = 2;
					$fixed_name = $_REQUEST['n'];

					
					while(in_array($fixed_name, $names_arr))
					{
						if($tjk > 2)
						{
							$NAME_REP = 3;
							$fixed_name = substr($fixed_name, 0, strlen($fixed_name)-1)."".$tjk;
						}
						else
						{
							$NAME_REP = 3;
							$fixed_name = $fixed_name."".$tjk;
						}
						$tjk++;
					}
					
		
		$_REQUEST['n'] = $fixed_name;

		}
		
		
		if(!empty($usc))
		{
			$usc = $usc . "*";
		}
		
		$usc = $usc . $cc[0]."__".$_REQUEST['n']."__0";
		echo '<COVER id="'.$cc[0].'" c="" p="">';
		$handle = fopen(dirname(__FILE__)."/tmp/players", "w+");
		if ( fwrite($handle, $usc) === false )
		{
			$this -> noperm();
			return false;
		}
		fclose ( $handle );		
		
		
		$usc= explode("*", $usc);
		for($i=0; $i<count($usc); $i++)
		{
			$tc = split("__", $usc[$i]);
			
			if($tc[0] == $cc[0])
			{
				$z="0";
						if(file_exists(dirname(__FILE__)."/tmp/z".$tc[0] ))
						{
							$z="1";
						}
				$supply .= '<cm><name>'.$tc[0].'</name><id>'.$tc[1].'</id><m>'.$tc[2].'</m><z>'.$z.'</z></cm>';
			}
			else if(file_exists(dirname(__FILE__)."/tmp/t".$tc[0]))
			{
				$tt = file(dirname(__FILE__)."/tmp/t".$tc[0]);
				if(!empty($tt[0]))
				{
					if($tt[0] > (($this->te)-(intval($_REQUEST['tmo']))))
					{
						$z="0";
						if(file_exists(dirname(__FILE__)."/tmp/z".$tc[0] ))
						{
							$z="1";
						}
						$supply .= '<cm><name>'.$tc[0].'</name><id>'.$tc[1].'</id><m>'.$tc[2].'</m><z>'.$z.'</z></cm>';
					}
					else
					{
						unlink(dirname(__FILE__)."/tmp/t".$tc[0]);
					}
				}
			}
		}
		echo $supply;
		echo '</COVER>';
		die("");
		}
		}
	}
}
$ALICHECKERS = "";
?>