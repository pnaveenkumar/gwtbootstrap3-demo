$wnd.GwtBootstrap3Demo.runAsyncCallback38("function twc(){}\nfunction xwc(){}\nfunction zwc(){}\nfunction Awc(){Awc=J5;wwc=new zwc}\nfunction swc(){Mxb(this,uwc(new vwc))}\nfunction Zdc(a){Cmb.call(this,a);Ydc(this)}\nfunction mwc(a,b,c){bxb();xxb.call(this,a,b,c,(sec(),rec))}\nfunction vwc(){this.a=(new xwc,Awc(),wwc);ywc(this.a)}\nfunction hzc(a){var b;if(!a.F){b=new swc(new twc);a.F=b}return a.F}\nfunction gzc(a){var b;if(!a.D){b=new mwc(Cwb(_xb(a.a)),hzc(a),fzc(a));Vwb((cyb(a.a),b),oyb(cyb(a.a)));a.D=b}return a.D}\nfunction ywc(a){if(!a.a){a.a=true;uu((sA(),'.GPBYFDEEL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFL{margin-top:0 !important;}.GPBYFDEGL{margin-left:5px;}'));return true}return false}\nfunction uwc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new BSb;VMb(a,(b=new dPb(I_c),VMb(b,(c=new uRb,c.a='Offline',tRb(c),c)),VMb(b,(d=new SNb,VMb(d,(e=new IPb((I$b(),F$b)),K9((chb(),e.db),'GPBYFDEFL',true),kec(e.b,p5c),WMb(e,e.b,0),e)),VMb(d,new eec((j=new TDb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new H7(j.a)).a)),VMb(d,(f=new _Ec,sSb(f,(k=new TDb,k.a+=q5c,new H7(k.a)).a),K9(f.db,N_c,true),f)),VMb(d,new eec((l=new TDb,l.a+=r5c,new H7(l.a)).a)),VMb(d,(g=new _Ec,sSb(g,(m=new TDb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new H7(m.a)).a),K9(g.db,N_c,true),g)),K9(d.db,'GPBYFDEEL',true),d)),VMb(b,(h=new GRb,VMb(h,(n=new VRb,VMb(n,(o=new IPb(E$b),kec(o.b,'What is Offline?'),WMb(o,o.b,0),o)),n)),VMb(h,(p=new IRb,VMb(p,new Zdc((q=new TDb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new H7(q.a)).a)),p)),VMb(h,new SRb),h)),VMb(b,(i=new GRb,VMb(i,(r=new VRb,VMb(r,(s=new IPb(E$b),kec(s.b,'How to configure?'),WMb(s,s.b,0),s)),r)),VMb(i,(t=new IRb,VMb(t,new eec((u=new TDb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new H7(u.a)).a)),VMb(t,(v=new _Ec,sSb(v,(w=new TDb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new H7(w.a)).a),K9(v.db,N_c,true),v)),VMb(t,new eec((A=new TDb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new H7(A.a)).a)),VMb(t,(B=new _Ec,sSb(B,(C=new TDb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new H7(C.a)).a),K9(B.db,N_c,true),B)),VMb(t,new eec((D=new TDb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new H7(D.a)).a)),VMb(t,(F=new _Ec,sSb(F,(G=new TDb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new H7(G.a)).a),K9(F.db,N_c,true),F)),t)),VMb(i,new SRb),i)),b));return a}\nI5(355,229,b$c,Zdc);I5(797,47,SYc,mwc);var V$=kCb(y_c,'OfflinePresenter',797);I5(1017,TYc,UYc,swc);var $$=kCb(y_c,'OfflineView',1017);I5(1218,1,{},twc);var Z$=kCb(y_c,'OfflineView_BinderImpl',1218);I5(1219,1,{},vwc);var W$=kCb(y_c,'OfflineView_BinderImpl/Widgets',1219);I5(1500,1,{},xwc);var wwc;var Y$=kCb(y_c,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1500);I5(1501,1,{},zwc);_.a=false;var X$=kCb(y_c,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1501);I5(723,1,$$c);_.Ob=function wAc(){yzb(this.b,gzc(this.a.a))};KWc(im)(38);\n//# sourceURL=GwtBootstrap3Demo-38.js\n")
