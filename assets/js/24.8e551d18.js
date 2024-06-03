(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{451:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("摘要：在windows平台使用JRE环境中的keytool命令，生成平台签名证书\n")])]),s._v(" "),t("h1",{attrs:{id:"android平台签名证书-keystore-生成指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android平台签名证书-keystore-生成指南"}},[s._v("#")]),s._v(" Android平台签名证书(.keystore)生成指南")]),s._v(" "),t("ul",[t("li",[s._v("Android平台打包发布apk应用，需要使用数字证书（.keystore文件）进行签名，用于表明开发者身份。")]),s._v(" "),t("li",[s._v("Android证书的生成是自助和免费的，不需要审批或付费。")]),s._v(" "),t("li",[s._v("可以使用JRE环境中的keytool命令生成。以下是windows平台生成证书的方法：")])]),s._v(" "),t("h3",{attrs:{id:"安装jre环境-推荐使用jre8环境-如已有可跳过"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装jre环境-推荐使用jre8环境-如已有可跳过"}},[s._v("#")]),s._v(" 安装JRE环境（推荐使用JRE8环境，如已有可跳过）")]),s._v(" "),t("p",[s._v("可从Oracle官方下载jre安装包：https://www.oracle.com/technetwork/java/javase/downloads/index.html\n下面以Windows平台，jre安装目录为“C:\\Program Files\\Java\\jre1.8.0_201”为例，实际操作时请修改为自己安装目录\n"),t("strong",[s._v("建议将JRE安装路径添加到系统环境变量，已配置可跳过此章节")]),s._v("\n打开命令行（cmd），输入以下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("D:\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Program Files\\Java\\jre1.8.0_201'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v('in"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("第一行：切换工作目录到D:路径")]),s._v(" "),t("li",[s._v("第二行：将jre命令添加到临时环境变量中")])]),s._v(" "),t("h3",{attrs:{id:"生成签名证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成签名证书"}},[s._v("#")]),s._v(" 生成签名证书")]),s._v(" "),t("p",[s._v("使用keytool -genkey命令生成证书：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("keytool "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-genkey")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-alias")]),s._v(" testalias "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-keyalg")]),s._v(" RSA "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-keysize")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-validity")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-keystore")]),s._v(" test.keystore\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("testalias是证书别名，可修改为自己想设置的字符，建议使用英文字母和数字")]),s._v(" "),t("li",[s._v("test.keystore是证书文件名称，可修改为自己想设置的文件名称，也可以指定完整文件路径")]),s._v(" "),t("li",[s._v("36500是证书的有效期，表示100年有效期，单位天，建议时间设置长一点，避免证书过期")])]),s._v(" "),t("p",[s._v("回车后会提示：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Enter keystore password:  //输入证书文件密码，输入完成回车  \nRe-enter new password:   //再次输入证书文件密码，输入完成回车  \nWhat is your first and last name?  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入名字和姓氏，输入完成回车  \nWhat is the name of your organizational unit?  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入组织单位名称，输入完成回车  \nWhat is the name of your organization?  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入组织名称，输入完成回车  \nWhat is the name of your City or Locality?  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入城市或区域名称，输入完成回车  \nWhat is the name of your State or Province?  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入省/市/自治区名称，输入完成回车  \nWhat is the two-letter country code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this unit?  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //输入国家/地区代号（两个字母），中国为CN，输入完成回车  \nIs "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OU")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("O")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("L")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX correct?  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("no"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":  //确认上面输入的内容是否正确，输入y，回车  \n\nEnter key password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("testalias"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RETURN "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" same as keystore password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  //确认证书密码与证书文件密码一样（HBuilder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("HBuilderX要求这两个密码一致），直接回车就可以\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("以上命令运行完成后就会生成证书，路径为“D:\\test.keystore”。")]),s._v(" "),t("p",[t("strong",[s._v("注意：上述信息填写要规范，乱填有可能会影响应用上架应用市场。")])]),s._v(" "),t("p",[s._v("可以使用以下命令查看：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("keytool "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-list")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-keystore")]),s._v(" test.keystore  \nEnter keystore password: //输入密码，回车\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("会输出以下格式信息：")]),s._v(" "),t("div",{staticClass:"language-apl line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-apl"}},[t("code",[s._v("Keystore type"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" PKCS12    \nKeystore provider"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" SUN    \n\nYour keystore contains "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" entry    \n\nAlias name"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" test    \nCreation date"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("    \nEntry type"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" PrivateKeyEntry    \nCertificate chain length"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    \nCertificate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("    \nOwner"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" CN"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("Tester"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" OU"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("Test"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" O"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("Test"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" L"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("HD"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" ST"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("BJ"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" C"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("CN    \nIssuer"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" CN"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("Tester"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" OU"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("Test"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" O"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("Test"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" L"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("HD"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" ST"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("BJ"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v(",")]),s._v(" C"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("=")]),s._v("CN    \nSerial number"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("dd12840    \nValid from"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" Fri Jul "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" CST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" until"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" Sun Jul "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" CST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2119")]),s._v("    \nCertificate fingerprints"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("    \n         MD5"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("  F9"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("F6"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("C8"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("F"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("DB"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("AB"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("D"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("F"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("C"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("F"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("CE"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("E6"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("A"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("A5    \n         SHA1"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" BB"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("AC"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("E2"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("F"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("97")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("B"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("E7"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("D6"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("69")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("A3"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("A"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("EF"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("D2"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("F"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("A3"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("68")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("E7    \n         SHA256"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("D"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("E7"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("BC"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("FE"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("AF"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("A"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("A"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("BD"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("F"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("E"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("E5"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("D"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("F"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("D"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("74")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("F"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("F"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("E2"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v("EB"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v("    \nSignature algorithm name"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" SHA256withRSA    \nSubject Public Key Algorithm"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("-")]),s._v("bit RSA key    \nVersion"),t("span",{pre:!0,attrs:{class:"token dfn builtin"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("其中证书指纹信息（Certificate fingerprints）：")]),s._v(" "),t("ul",[t("li",[s._v("MD5\n证书的MD5指纹信息（安全码MD5）")]),s._v(" "),t("li",[s._v("SHA1\n证书的SHA1指纹信息（安全码SHA1）")]),s._v(" "),t("li",[s._v("SHA256\n证书的SHA256指纹信息（安全码SHA245）")])])])}),[],!1,null,null,null);t.default=e.exports}}]);