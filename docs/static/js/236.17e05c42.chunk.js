"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[236],{4115:function(n,t,e){e.d(t,{Z:function(){return b}});var r,s,i,o=e(5861),a=e(8152),c=e(168),u=e(7757),l=e.n(u),p=e(2791),f=e(6488),d=e(4371),h=e(184),x=f.ZP.section(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  background-color: gray;\n  margin: 0 auto;\n  width: 100%;\n  min-height: 250px;\n"]))),g=f.ZP.span(s||(s=(0,c.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n  font-size: 16px;\n  color: white;\n  transition: opacity .5s;\n  margin: 0;\n  margin-bottom: 20px;\n  opacity: ",";\n"])),(function(n){return n.isVisible?1:0})),Z=f.ZP.span(i||(i=(0,c.Z)(["\n  font-size: 12px;\n  color: white;\n  font-weight: 700;\n  transition: opacity .5s;\n  opacity: ",";\n"])),(function(n){return n.isVisible?1:0})),b=function(){var n=(0,p.useState)({author:"",tag:"",text:""}),t=(0,a.Z)(n,2),e=t[0],r=t[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,o.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.mh.getRandomQuote();case 2:t=n.sent,r(t.data.quotes[0]);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)(x,{children:[(0,h.jsx)(g,{isVisible:!!e.text,children:e.text}),(0,h.jsx)(Z,{isVisible:!!e.author,children:e.author})]})}},1236:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r,s,i,o,a,c,u=e(168),l=e(2791),p=e(32),f=e(6488),d=e(184),h=f.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  background-color: #ffffff;\n\n  h6, h1 {\n    margin: 0;\n  }\n\n  h6 {\n    margin-bottom: 20px;\n  }\n"]))),x=(0,p.Pi)((function(n){var t=n.count;return(0,d.jsxs)(h,{children:[(0,d.jsx)("h6",{children:"TOTAL POSTS"}),(0,d.jsx)("h1",{children:"".concat(t)})]})})),g=e(5861),Z=e(8683),b=e(8152),v=e(7757),m=e.n(v),j=e(5671),y=e(3144),w=e(4098),k=e(8293),P=new(function(){function n(){(0,j.Z)(this,n),this.posts=[],this.error="",(0,w.rC)(this,{posts:w.LO,error:w.LO,postsLength:w.Fl,fetchPosts:w.ls.bound,deletePost:w.ls.bound,updatePost:w.ls.bound})}return(0,y.Z)(n,[{key:"fetchPosts",value:m().mark((function n(){var t,e;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.Z.getPosts();case 3:t=n.sent,e=t.data,this.posts=e.slice(0,10),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),this.error=n.t0.message||"Error while fetching post";case 11:case"end":return n.stop()}}),n,this,[[0,8]])}))},{key:"deletePost",value:m().mark((function n(t){var e;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.Z.deletePost(t);case 3:e=this.posts.findIndex((function(n){return n.id===t})),this.posts.splice(e,1),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),this.error=n.t0.message||"Error while deleting post";case 10:case"end":return n.stop()}}),n,this,[[0,7]])}))},{key:"updatePost",value:m().mark((function n(t,e){var r,s,i;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.Z.updatePost(t,e);case 3:r=n.sent,s=r.data,i=this.posts.findIndex((function(n){return n.id===t})),this.posts[i]=s,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),this.error=n.t0.message||"Error while updating post";case 12:case"end":return n.stop()}}),n,this,[[0,9]])}))},{key:"postsLength",get:function(){return this.posts.length}}]),n}()),C=e(9270),z=f.ZP.li(s||(s=(0,u.Z)(["\n  width: 500px;\n  background-color: #ffffff;\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  ","\n"])),(function(n){return n.isFetching?"filter: blur(2px);":""})),E=f.ZP.div(i||(i=(0,u.Z)(["\n  padding: 20px;\n  text-align: center;\n"]))),S=f.ZP.textarea(o||(o=(0,u.Z)(["\n  display: block;\n  width: 100%;\n  height: 200px;\n  padding: 10px;\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  resize: none;\n  border: none;\n  background-color: #e1e1e1;\n  color: #000000;\n\n  &:focus {\n    outline: 1px solid transparent;\n  }\n"]))),L=(0,f.ZP)(S)(a||(a=(0,u.Z)(["\n  height: 65px;\n  background-color: #000000;\n  color: #ffffff;\n"]))),F=(0,p.Pi)((function(n){var t=n.post,e=(0,l.useState)(!1),r=(0,b.Z)(e,2),s=r[0],i=r[1],o=(0,l.useState)({userId:0,id:"",title:"",body:""}),a=(0,b.Z)(o,2),c=a[0],u=a[1],p=(0,l.useState)(!1),f=(0,b.Z)(p,2),h=f[0],x=f[1],v=P.deletePost,j=P.updatePost;(0,l.useEffect)((function(){return u((0,Z.Z)({},t))}),[t]);var y=function(){var n=(0,g.Z)(m().mark((function n(){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),n.next=3,j(t.id,c);case 3:i(!s),x(!1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,d.jsxs)(z,{isFetching:h,children:[s?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(L,{value:c.title,onChange:function(n){n.target.value.length<100&&u((0,Z.Z)((0,Z.Z)({},c),{},{title:n.target.value}))}}),(0,d.jsx)(S,{value:c.body,onChange:function(n){n.target.value.length<400&&u((0,Z.Z)((0,Z.Z)({},c),{},{body:n.target.value}))}})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(L,{value:c.title,disabled:!0}),(0,d.jsx)(S,{value:c.body,disabled:!0})]}),(0,d.jsxs)(E,{children:[(0,d.jsx)(C.Z,{onClick:function(){return v(t.id)},children:"Delete post"}),!s&&(0,d.jsx)(C.Z,{color:"#7a7a7a",onClick:function(){i(!s)},children:"Edit post"}),s&&(0,d.jsx)(C.Z,{color:"#7a7a7a",onClick:y,children:"Save post"}),s&&(0,d.jsx)(C.Z,{color:"#afafaf",onClick:function(){i(!s),u((0,Z.Z)((0,Z.Z)({},c),{},{title:t.title,body:t.body}))},children:"Cancel changes"})]})]})})),O=e(7027),T=e(4115),V=f.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  box-sizing: border-box;\n  list-style: none;\n  padding: 0 10px;\n  margin-bottom: 80px;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: center;\n"]))),I=(0,p.Pi)((function(){var n=P.fetchPosts,t=P.postsLength,e=P.posts;return(0,l.useEffect)((function(){window.scrollTo(0,0),n()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(T.Z,{}),!!t&&(0,d.jsx)(x,{count:t}),e.length?(0,d.jsx)(V,{children:e.map((function(n){return(0,d.jsx)(F,{post:n},n.id)}))}):(0,d.jsx)(O.Z,{size:50}),(0,d.jsx)(T.Z,{})]})}))}}]);
//# sourceMappingURL=236.17e05c42.chunk.js.map