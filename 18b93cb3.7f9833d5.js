(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a(116),m=a(124),o=a(114);t.default=function(){const{siteConfig:e}=Object(r.default)(),t=Object(o.useVersions)(),a=Object(o.useLatestVersion)(),n=t.find((e=>"current"===e.name)),s=t.filter((e=>e!==a&&"current"!==e.name)),i=`https://github.com/${e.organizationName}/${e.projectName}`;return l.a.createElement(m.a,{title:"Versions",description:"Spacemesh Platform docs versions page listing all documented site versions"},l.a.createElement("main",{className:"container margin-vert--lg"},l.a.createElement("h1",null,"Spacemesh Platform Documentation Versions"),a&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"next"},"Current version (Stable)"),l.a.createElement("p",null,"Here you can find the documentation for current released version."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,a.label),l.a.createElement("td",null,l.a.createElement(c.a,{to:a.path},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:`${i}/releases/tag/v${a.name}`},"Release Notes")))))),n!==a&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"latest"},"Next version (Unreleased)"),l.a.createElement("p",null,"Here you can find the documentation for work-in-process unreleased version."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,n.label),l.a.createElement("td",null,l.a.createElement(c.a,{to:n.path},"Documentation")))))),s.length>0&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),l.a.createElement("p",null,"Here you can find documentation for previous versions of the Spacemesh platform."),l.a.createElement("table",null,l.a.createElement("tbody",null,s.map((e=>l.a.createElement("tr",{key:e.name},l.a.createElement("th",null,e.label),l.a.createElement("td",null,l.a.createElement(c.a,{to:e.path},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:`${i}/releases/tag/v${e.name}`},"Release Notes"))))))))))}}}]);