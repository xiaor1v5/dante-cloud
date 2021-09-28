"use strict";(self.webpackChunkeurynome_cloud_document=self.webpackChunkeurynome_cloud_document||[]).push([[201],{6803:(e,t,i)=>{i.r(t),i.d(t,{data:()=>d});const d={key:"v-34232cb1",path:"/others/Redis.html",title:"Redis 常见问题",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[1]、本地Redis使用127.0.0.1可以访问，使用IP地址无法访问",slug:"_1-、本地redis使用127-0-0-1可以访问-使用ip地址无法访问",children:[]},{level:2,title:"[2]、io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required",slug:"_2-、io-lettuce-core-rediscommandexecutionexception-noauth-authentication-required",children:[]},{level:2,title:"[3]、NOAUTH HELLO must be called with the client already authenticated, otherwise the HELLO AUTH ＜user＞",slug:"_3-、noauth-hello-must-be-called-with-the-client-already-authenticated-otherwise-the-hello-auth-user",children:[]}],filePathRelative:"others/Redis.md",git:{updatedTime:1631897274e3,contributors:[{name:"herodotus",email:"pointer_v@qq.com",commits:1}]}}},9932:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var d=i(6252);const o=(0,d.uE)('<h1 id="redis-常见问题" tabindex="-1"><a class="header-anchor" href="#redis-常见问题" aria-hidden="true">#</a> Redis 常见问题</h1><h2 id="_1-、本地redis使用127-0-0-1可以访问-使用ip地址无法访问" tabindex="-1"><a class="header-anchor" href="#_1-、本地redis使用127-0-0-1可以访问-使用ip地址无法访问" aria-hidden="true">#</a> [1]、本地Redis使用127.0.0.1可以访问，使用IP地址无法访问</h2><p>Redis默认只允许通过127.0.0.1访问，这是其自身的安全防护机制。如果想要使用IP地址进行访问，需要将其保护设置打开。</p><ul><li><strong>Windows 版</strong></li></ul><p>找到<code>redis.windows.conf</code>配置文件</p><ol><li><p>将<code>protected-mode</code> 参数改为no。</p></li><li><p>注释掉<code>bind 127.0.0.1</code></p></li><li><p>重启redis服务</p></li></ol><p><img src="/eurynome-cloud/images/redis/bind-ip.png" alt="Redis 密码"></p><ul><li><strong>Linux</strong></li></ul><ol><li><p>linux对应的是<code>redis.conf</code>文件</p></li><li><p>修改还是和windows一样</p></li><li><p>修改完成重启服务</p></li></ol><h2 id="_2-、io-lettuce-core-rediscommandexecutionexception-noauth-authentication-required" tabindex="-1"><a class="header-anchor" href="#_2-、io-lettuce-core-rediscommandexecutionexception-noauth-authentication-required" aria-hidden="true">#</a> [2]、io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required</h2><p>出现该错误，是由于Redis中设置密码，而代码中未读到Redis密码或配置文件中没有配置密码导致的。</p><ul><li><strong>解决办法</strong>：</li></ul><ol><li>首先用<code>Redis</code>客户端，比如：<code>redis-desktop-manager</code>，进行<code>Redis</code>的连接测试。如果无法连接，那么请检查密码输入是否正确、本地网络等相关环境；如果可以正常连接，请进行下一步。</li><li>检查<code>Nacos</code>中，<code>Redis</code>相关配置是否配置了密码。一定要注意格式，检查格式缩进是否正确、<code>yaml</code>配置“：”后面是否空了一格。如果确定配置正确，请进行下一步。</li><li>检查服务是否可以正常访问到<code>Nacos</code>服务器，是否可以正确读取<code>Nacos</code>中配置。</li></ol>',13),c=(0,d.Uk)("以上操作均确保无误应该就可以正常使用了，如果还有问题，那么就请尽可能的准备详尽的信息，在Gitee中提"),l={href:"https://gitee.com/herodotus/eurynome-cloud/issues",target:"_blank",rel:"noopener noreferrer"},n=(0,d.Uk)("Issue"),r=(0,d.uE)('<h2 id="_3-、noauth-hello-must-be-called-with-the-client-already-authenticated-otherwise-the-hello-auth-user" tabindex="-1"><a class="header-anchor" href="#_3-、noauth-hello-must-be-called-with-the-client-already-authenticated-otherwise-the-hello-auth-user" aria-hidden="true">#</a> [3]、NOAUTH HELLO must be called with the client already authenticated, otherwise the HELLO AUTH ＜user＞</h2><p>使用<code>spring boot data redis</code> 链接<code>redis sentinel</code>集群，会报此错。</p><p>原因是因为<code>redis sentinel</code>集群的<code>sentinel</code>配置文件没有配置密码，<code>sentinel</code>配置密码的方式和redis的密码配置方式一样，配置文件中加上<code>requirepass &lt;密码&gt;</code> 就行。</p><p>另外，<code>sentinel</code>中的<code>sentinel auth-pass &lt;master&gt; &lt;pass&gt;</code> 不是给<code>sentinel</code>配置密码，而是<code>sentinel</code>链接<code>redis master</code>的密码</p>',4),a={render:function(e,t){const i=(0,d.up)("OutboundLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[o,(0,d._)("p",null,[c,(0,d._)("a",l,[n,(0,d.Wm)(i)])]),r],64)}}}}]);