document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67)) || (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
};

(function() {
    const _c = function() {
        const s = new Date();
        debugger;
        const e = new Date();
        if (e - s > 100) {
            document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:20%'>Access Denied.</h1>";
        }
    };
    setInterval(_c, 500);
})();

const _0x = ["i","o","m","value","\x2D\x2D\x20\x54\x68\x69\x73\x20\x66\x69\x6c\x65\x20\x77\x61\x73\x20\x70\x72\x6f\x74\x65\x63\x74\x65\x64\x20\x75\x73\x69\x6e\x67\x20\x4c\x75\x61\x20\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72\x0A\x0A","\x5c\x78","charCodeAt","toString","padStart","split","map","join","reverse","btoa","fromCharCode"];

function X(){
    const a=document.getElementById(_0x[0]),b=document.getElementById(_0x[2]).value,c=document.getElementById(_0x[1]);
    if(!a[_0x[3]])return;
    let d=_0x[4],e=a[_0x[3]];
    
    if(b==="1"){
        const f=e[_0x[9]]("")[_0x[10]](g=>_0x[5]+g[_0x[6]](0)[_0x[7]](16)[_0x[8]](2,"0"))[_0x[11]]("");
        c[_0x[3]]=d+`load("${f}")()`;
    }else if(b==="2"){
        const h=77,j=e[_0x[9]]("")[_0x[10]](k=>k[_0x[6]](0)+h)[_0x[12]]()[_0x[11]](",");
        c[_0x[3]]=d+`local _v={${j}} local _k=${h} local _s="" for i=#_v,1,-1 do _s=_s..string.char(_v[i]-_k) end (loadstring or load)(_s)()`;
    }else{
        const l=Math.floor(Math.random()*60)+20,m=window[_0x[13]](e[_0x[9]]("")[_0x[10]](n=>String[_0x[14]](n[_0x[6]](0)^l))[_0x[11]](""));
        c[_0x[3]]=d+`local _f="${m}" local _k=${l} local function _d(s) local b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/' s=s:gsub('[^'..b..'=]', '') return (s:gsub('.', function(x) if (x == '=') then return '' end local r,f='',(b:find(x)-1) for i=6,1,-1 do r=r..(f%2^i-f%2^(i-1)>0 and '1' or '0') end return r end):gsub('%d%d%d%d%d%d%d%d', function(x) local r=0 for i=1,8 do r=r+(x:sub(i,i)=='1' and 2^(8-i) or 0) end return string.char(r) end)) end local _r=_d(_f) local _e="" for i=1,#_r do _e=_e..string.char(string.byte(_r,i)~_k) end (loadstring or load)(_e)()`;
    }
}

function C(){
    const a=document.getElementById(_0x[1]);
    if(!a[_0x[3]])return;
    a.select();
    document.execCommand("copy");
    const b=document.querySelector(".btn-s");
    b.innerText="COPIED";
    setTimeout(()=>{b.innerText="COPY RESULT"},2000);
}
