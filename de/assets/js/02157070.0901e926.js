"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8855],{3592:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(74848),i=r(28453);r(11470),r(19365),r(28774),r(65648);const t={title:"Safety and Security",sidebar_position:2,description:"General security measures. Cyberattacks and fraud protection. Server protection.",keywords:["Security","Wallet","Password","SSH","Server","Protection","Fraud"]},a=void 0,l={id:"learn/security",title:"Safety and Security",description:"General security measures. Cyberattacks and fraud protection. Server protection.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/security.md",sourceDirName:"learn",slug:"/learn/security",permalink:"/de/learn/security",draft:!1,unlisted:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/learn/security.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Safety and Security",sidebar_position:2,description:"General security measures. Cyberattacks and fraud protection. Server protection.",keywords:["Security","Wallet","Password","SSH","Server","Protection","Fraud"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/de/learn/intro"},next:{title:"Autonomys Academy",permalink:"/de/learn/academy"}},o={},c=[{value:"Wallet Security",id:"wallet-security",level:2},{value:"Sicherheit der Gemeinschaft",id:"sicherheit-der-gemeinschaft",level:2},{value:"Server Security",id:"server-security",level:2},{value:"SSH RSA Keys-based Secure Authentication",id:"ssh-rsa-keys-based-secure-authentication",level:3},{value:"Creating RSA Key Pair",id:"creating-rsa-key-pair",level:3},{value:"To allow PublicKey authentication on your server, as root run:",id:"to-allow-publickey-authentication-on-your-server-as-root-run",level:4},{value:"Create RSA keys on a Home PC:",id:"create-rsa-keys-on-a-home-pc",level:4},{value:"Transfer RSA Keys to a Server:",id:"transfer-rsa-keys-to-a-server",level:4},{value:"Alternative Ways to Transfer RSA Public key to a Remote Server:",id:"alternative-ways-to-transfer-rsa-public-key-to-a-remote-server",level:4},{value:"Testing the Secure Connection",id:"testing-the-secure-connection",level:3},{value:"Streamlining SSH Connections Management With Aliases",id:"streamlining-ssh-connections-management-with-aliases",level:3},{value:"Alternating SSH Port",id:"alternating-ssh-port",level:3},{value:"Grundlegende Empfehlungen zur Konfiguration der SSHD-Konfigurationsdatei",id:"grundlegende-empfehlungen-zur-konfiguration-der-sshd-konfigurationsdatei",level:3},{value:"A Word About Partitioning as a Security Measure.",id:"a-word-about-partitioning-as-a-security-measure",level:2},{value:"Upgrading ...",id:"upgrading-",level:2},{value:"To Access Release Notes:",id:"to-access-release-notes",level:3},{value:"UFW",id:"ufw",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Venturing into the digital world and engaging in a crypto project can be thrilling, but following top security practices is essential. Here is a general guide to security and safety, including basic measures for securing servers and home PCs. Die Einhaltung dieser Praktiken tr\xe4gt zur Stabilit\xe4t des Autonomys-Netzwerks und nat\xfcrlich zur Sicherheit der Kryptoassets der Community bei."}),"\n",(0,s.jsx)(n.p,{children:"Genie\xdfen Sie Ihre Autonomys-Reise in aller Ruhe!"}),"\n",(0,s.jsx)(n.h2,{id:"wallet-security",children:"Wallet Security"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Stellen Sie sicher, dass Ihr Passwort ausreichend lang ist und eine Mischung aus Gro\xdf- und Kleinbuchstaben, Zahlen und Sonderzeichen verwendet. Ein 11-stelliges Passwort macht Brute-Force-Angriffe im Allgemeinen nahezu unm\xf6glich. Sehen Sie sich als Referenz diese [Tabelle mit den Brute-Force-Zeiten f\xfcr Passw\xf6rter] an (",(0,s.jsx)(n.a,{href:"https://www.techrepublic.com/wp-content/uploads/2022/03/tr8423-Figure-A-How-an-8-character-",children:"https://www.techrepublic.com/wp-content/uploads/2022/03/tr8423-Figure-A-How-an-8-character-"})," Passwort-k\xf6nnte-in-nur-einigen-Minuten-geknackt werden-770x404.jpg). Allerdings reicht selbst ein sicheres Passwort allein nicht f\xfcr einen vollst\xe4ndigen Schutz aus."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Avoid using common or easily guessed combinations of words or letters, as well as parts of your online data or reusing any of your existing passwords."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Weak password example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"S0methin9C00l!\n"})}),"\n",(0,s.jsx)(n.p,{children:"Strong password example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"^p$O_~a!4h{G'9C*\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Erw\xe4gen Sie die Verwendung eines Passwort-Managers, um komplexe Passw\xf6rter zu generieren und sicher zu speichern. Es stehen viele Passwort-Manager zur Verf\xfcgung. Stellen Sie sicher, dass der Passwort-Manager Ihrer Wahl Daten in verschl\xfcsselter Form speichert, \xfcber einen robusten Passwort-Generator verf\xfcgt, positive Bewertungen erh\xe4lt und \xfcber eine Historie konsistenter Updates verf\xfcgt. ",(0,s.jsx)(n.strong,{children:"Zu den angesehenen Optionen geh\xf6ren beispielsweise KeePass, Bitwarden, 1Password, LastPass, Dashlane und Keeper."}),"\nEs ist jedoch wichtig, dass Sie Ihre eigene Recherche durchf\xfchren und Bewertungen lesen, bevor Sie eine Entscheidung treffen."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Erh\xf6hen Sie die Sicherheit Ihrer Konten, indem Sie nach M\xf6glichkeit 2FA (Zwei-Faktor-Authentifizierung) aktivieren. F\xfcr diese zus\xe4tzliche Schutzebene ist zus\xe4tzlich zu Ihren Passw\xf6rtern ein zweiter Verifizierungsschritt erforderlich, beispielsweise ein Code aus einer mobilen App oder ein Hardware-Token."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Geben Sie Ihre 12-W\xf6rter-Seed-Phrase oder privaten Schl\xfcssel nicht weiter."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A hardware wallet is by far the most secure way to store your private keys. Im Gegensatz zu Online-B\xf6rsen und Wallets speichern Hardware-Wallets die Schl\xfcssel offline und sch\xfctzen sie vor potenzieller Malware oder Hacking-Versuchen.\nDie beliebtesten Hardware-Wallets sind ",(0,s.jsx)(n.a,{href:"https://www.ledger.com/",children:"Ledger"})," und ",(0,s.jsx)(n.a,{href:"https://trezor.io/",children:"Trezor"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sichern Sie Ihre Wallets, indem Sie die Backups sicher offline oder in einem verschl\xfcsselten Cloud-Speicher speichern. Dies garantiert, dass Sie Ihr Geld im Falle eines Ger\xe4teverlusts, einer Besch\xe4digung oder eines Diebstahls zur\xfcckerhalten k\xf6nnen. Es sind viele verschl\xfcsselte Cloud-Speicherdienste verf\xfcgbar, beispielsweise Tresorit, pCloud, Sync.com, SpiderOak und Mega (die Reihenfolge spielt keine Rolle). F\xfchren Sie jedoch immer Ihre eigene Recherche durch."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Halten Sie ihre gesamte Software auf dem neuesten Stand."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Seien Sie vorsichtig mit \xf6ffentlichen Wi-Fi."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sicherheit-der-gemeinschaft",children:"Sicherheit der Gemeinschaft"}),"\n",(0,s.jsx)(n.admonition,{title:"Denken Sie daran",type:"note",children:(0,s.jsx)(n.p,{children:"Mitglieder des Autonomys-Teams werden sie niemals per Direktnachricht kontaktieren."})}),"\n",(0,s.jsxs)(n.p,{children:["Sollten Sie eine unerw\xfcnschte Nachricht erhalten, ignorieren Sie diese am besten, blockieren Sie den Absender und melden Sie den Vorfall umgehend unserem ",(0,s.jsx)(n.a,{href:"https://discord.com/channels/864285291518361610/982023010405990400",children:"\u201eBetrugsbericht\u201c-Kanal"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Exercise caution with regard to phishing attacks. Do not click on links within our forum, Discord, or Telegram, unless those links have been shared by a trusted member of our team, such as ambassadors or staff. Scammers can create deceptive links that mimic legitimate websites, so it's advisable to scrutinize the message's author (on all the mentioned platforms) before clicking any links. Trust should generally be reserved for project team members, ambassadors, or highly reputable farmers."}),"\n",(0,s.jsx)(n.h2,{id:"server-security",children:"Server Security"}),"\n",(0,s.jsx)(n.h3,{id:"ssh-rsa-keys-based-secure-authentication",children:"SSH RSA Keys-based Secure Authentication"}),"\n",(0,s.jsx)(n.p,{children:"Let's run through some basics."}),"\n",(0,s.jsx)(n.p,{children:"SSH ist ein Netzwerkprotokoll, das f\xfcr den sicheren Fernzugriff auf Computersysteme, Cloud-Infrastruktur, sichere Datei\xfcbertragung (SFTP) und Tunneling verwendet wird. Es ist ein grundlegendes Werkzeug f\xfcr Systemadministratoren und Entwickler. SSH verwendet den Diffie-Hellman-Algorithmus f\xfcr sichere Verbindungen und Authentifizierungsmethoden wie Passw\xf6rter oder SSH-Schl\xfcsselpaare."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SSH-Verbindungsaufbau"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Wenn ein Client eine TCP-Verbindung initiiert, antwortet der Server mit unterst\xfctzten Protokollversionen und seinem \xf6ffentlichen Hostschl\xfcssel.\nBeide Parteien handeln mithilfe des Diffie-Hellman-Algorithmus einen Sitzungsschl\xfcssel aus, um eine sichere Kommunikation zu gew\xe4hrleisten. Dieser Sitzungsschl\xfcssel verschl\xfcsselt die gesamte Sitzung."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Benutzerauthentifizierung"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Nach der Einrichtung der Sitzungsverschl\xfcsselung beginnt die Benutzerauthentifizierung.\nBei der Passwortauthentifizierung geht es um die sichere \xdcbertragung des Kontopassworts des Benutzers.\nEine empfohlene Alternative zur Authentifizierung sind SSH-Schl\xfcsselpaare, bestehend aus \xf6ffentlichen und privaten Schl\xfcsseln. Der Client sendet eine Schl\xfcsselpaar-ID an den Server, der pr\xfcft, ob ein passender \xf6ffentlicher Schl\xfcssel vorhanden ist.\nDer Server verschl\xfcsselt eine Zufallszahl mit dem \xf6ffentlichen Schl\xfcssel und sendet sie an den Client, der sie mit dem privaten Schl\xfcssel entschl\xfcsselt.\nDer Client berechnet aus der entschl\xfcsselten Nummer und dem gemeinsam genutzten Sitzungsschl\xfcssel einen MD5-Hash und sendet ihn zur \xdcberpr\xfcfung an den Server zur\xfcck."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RSA-Verschl\xfcsselung"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Bei RSA werden f\xfcr die Verschl\xfcsselung und Entschl\xfcsselung unterschiedliche Schl\xfcssel verwendet: Der Verschl\xfcsselungsschl\xfcssel ist \xf6ffentlich und der Entschl\xfcsselungsschl\xfcssel ist privat. Ein Benutzer erstellt einen \xf6ffentlichen Schl\xfcssel basierend auf zwei gro\xdfen Primzahlen und einem Hilfswert, w\xe4hrend er die Primzahlen geheim h\xe4lt. Nachrichten k\xf6nnen mit dem \xf6ffentlichen Schl\xfcssel verschl\xfcsselt, aber nur von jemandem entschl\xfcsselt werden, der die Primzahlen kennt."}),"\n",(0,s.jsx)(n.p,{children:"Together, SSH and RSA provide secure, authenticated, and encrypted connections to protect sensitive information. To enhance security, though it is possible to create an SSH key with a passphrase."}),"\n",(0,s.jsx)(n.h3,{id:"creating-rsa-key-pair",children:"Creating RSA Key Pair"}),"\n",(0,s.jsx)(n.h4,{id:"to-allow-publickey-authentication-on-your-server-as-root-run",children:"To allow PublicKey authentication on your server, as root run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-consol",children:"vi /etc/ssh/sshd_config\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"PubkeyAuthentication no --\x3e PubkeyAuthentication yes"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-consol",children:"systemctl restart ssh\n"})}),"\n",(0,s.jsx)(n.h4,{id:"create-rsa-keys-on-a-home-pc",children:"Create RSA keys on a Home PC:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"ssh-keygen\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"you will get two keys:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$HOME/.ssh/id_rsa"})," Ihr privater RSA-Schl\xfcssel, den Sie auf dem lokalen PC behalten"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$HOME/.ssh/id_rsa.pub"})," Ihr \xf6ffentlicher RSA-Schl\xfcssel zum Senden an einen Server"]}),"\n",(0,s.jsx)(n.h4,{id:"transfer-rsa-keys-to-a-server",children:"Transfer RSA Keys to a Server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-consol",children:"sudo ssh-copy-id -p 12345 user_name@server-ip-addres\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This utility specifically designed for copying SSH keys to a remote server.\nIt automatically handles the key placement and permissions on the remote server, making it more convenient.\nUse ",(0,s.jsx)(n.code,{children:"-p"})," flag to specify not standard port, if you have changed it."]}),"\n",(0,s.jsx)(n.p,{children:"If you have created keys before, don't overwrite it! As you will not be able to authenticate using the previous key anymore. But you can keep them somewhere else and generate them next."}),"\n",(0,s.jsx)(n.h4,{id:"alternative-ways-to-transfer-rsa-public-key-to-a-remote-server",children:"Alternative Ways to Transfer RSA Public key to a Remote Server:"}),"\n",(0,s.jsxs)(n.p,{children:["If you have created keys before and store them elsewhere, you can use rsync to copy the contents of the public key from any other place to ",(0,s.jsx)(n.code,{children:"authorized_keys"})," by specifying the path to the keys:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'sudo rsync -e "ssh -p 12345" ~/.ssh/user2/id_rsa.pub USER@SERVER_IP:~/.ssh/authorized_keys\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Verwenden Sie das Flag \u201e-p\u201c, um einen nicht standardm\xe4\xdfigen Port anzugeben"})}),"\n",(0,s.jsx)(n.p,{children:"Dieser Befehl erstellt ein .ssh-Verzeichnis auf einem Server (oder \xfcberspringt es, falls vorhanden) und f\xfcgt die Schl\xfcssel am Ende der Datei \u201eauthorized_keys\u201c hinzu:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'cat ~/.ssh/id_rsa.pub | ssh username@remote_host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Das Flag \u201e-p\u201c sorgt daf\xfcr, dass das Tool den Fehler \xfcberspringt, wenn das Verzeichnis bereits existiert"}),"\n",(0,s.jsxs)(n.p,{children:["\xdcbertragen Sie die \xf6ffentliche Schl\xfcsseldatei manuell und f\xfcgen Sie sie der Datei \u201eauthorized_keys\u201c auf dem Remote-Server hinzu.\nYou can open ",(0,s.jsx)(n.code,{children:"id_rsa.pub key"})," and copy-paste it's content to the end of ",(0,s.jsx)(n.code,{children:"authorized_keys"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"echo public_key_string >> ~/.ssh/authorized_keys\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Make sure you have permissions 700 for ",(0,s.jsx)(n.code,{children:"~/.ssh"})," directory and 600 for ",(0,s.jsx)(n.code,{children:"authorized_keys"})," in it"]})}),"\n",(0,s.jsx)(n.h3,{id:"testing-the-secure-connection",children:"Testing the Secure Connection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"ssh username@your-server-ip-addr\n"})}),"\n",(0,s.jsx)(n.h3,{id:"streamlining-ssh-connections-management-with-aliases",children:"Streamlining SSH Connections Management With Aliases"}),"\n",(0,s.jsxs)(n.p,{children:['Die Verwaltung von Verbindungen kann durch die Erstellung von Aliasen viel einfacher und angenehmer sein!\nCreate a file named "config" in the ',(0,s.jsx)(n.code,{children:"~/.ssh"})," directory (where the keys are), simply add your server or other users for the same server to it, like in example below. Feel free to add as many as you want."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Host Farm # Hier kann jedes Wort als PLatzhalter \u200b\u200bverwendet werden (z. B. \u201eautonomys\u201c oder \u201eFarm\u201c).\nHostName 123.123.123.123 # Verwenden Sie die IP Ihres Servers\nPort 12345 # Ihr benutzerdefinierter Port\nBenutzer Benutzername # Benutzer f\xfcr die Anmeldung (f\xfcr ein Rettungssystem muss dies root sein, \xe4ndern Sie es sp\xe4ter)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"indentation isn't important, 4 spaces indentation is used for a better readability"})}),"\n",(0,s.jsx)(n.p,{children:"Versuchen Sie, eine Verbindung mit der einfachsten Syntax im Terminal herzustellen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"ssh subspace\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"You will be asked if you allow the connection. Reply with 'yes'."})}),"\n",(0,s.jsx)(n.h3,{id:"alternating-ssh-port",children:"Alternating SSH Port"}),"\n",(0,s.jsx)(n.p,{children:"By default, SSH (Secure Shell) listens on port 22. This is well-known and can be a target for automated attacks. By changing the SSH port, you make it harder for attackers to guess which port SSH is listening on, reducing the risk of automated attacks."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"First, make sure you don't have UFW enabled. If you do, add a rule for the desired port:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"sudo ufw allow 12345/tcp        #this is an example, specify your port\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Changing port"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"sudo vi /etc/ssh/sshd_config\n#Port 22  -> Port 12345             # specify a custom SSH port within the range of 1025 to 65534\nsudo systemctl reload sshd    # for the changes to take effect\n"})}),"\n",(0,s.jsx)(n.p,{children:"Checking new port from homePC"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"ssh -p 12345 user@localhost     # specify your port\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you can log in to your server on a non-standard port using an encrypted connection without entering any credentials!"}),"\n",(0,s.jsx)(n.h3,{id:"grundlegende-empfehlungen-zur-konfiguration-der-sshd-konfigurationsdatei",children:"Grundlegende Empfehlungen zur Konfiguration der SSHD-Konfigurationsdatei"}),"\n",(0,s.jsx)(n.p,{children:"As root, edit sshd_config:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-consol",children:"vi /etc/ssh/sshd_config\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Allowing Public Key authentication:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"PubkeyAuthentication no --\x3e PubkeyAuthentication yes"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Restricting password access:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"PasswordAuthentication yes --\x3e PasswordAuthentication no"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Reducing time window for entering credentials:",(0,s.jsx)(n.br,{}),"\n","(If the authentication process is not completed within this time, the server will terminate the connection)",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"LoginGraceTime 120"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Restricting root login",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"PermitRootLogin yes --\x3e PermitRootLogin no"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Specifying the Users allowed to connect through SSH",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"AllowUsers user1 user2"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Reload daemon for the changes to take effect:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-consol",children:"systemctl reload sshd\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reboot your system to ensure that everything is functioning as expected."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Vollst\xe4ndiges SSH-Handbuch: ",(0,s.jsx)(n.a,{href:"https://www.ssh.com/academy/ssh/sshd_config",children:"SSH Academy"})]}),"\n",(0,s.jsx)(n.h2,{id:"a-word-about-partitioning-as-a-security-measure",children:"A Word About Partitioning as a Security Measure."}),"\n",(0,s.jsx)(n.p,{children:"As a security measure, it is worth mentioning the practice of allocating separate partitions for critical directories such as /boot, /var, /tmp, and /home (in some cases). This helps isolate system files, logs, temporary files, and user data, which can improve system stability and security. But the cons are there too:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Wenn einer Partition der Speicherplatz ausgeht, w\xe4hrend eine andere Partition \xfcber ungenutzten Speicherplatz verf\xfcgt, ist es m\xf6glicherweise nicht m\xf6glich, den Speicherplatz einfach neu zuzuweisen"}),"\n",(0,s.jsx)(n.li,{children:"\xdcberwachung und Wartung jeder Partition separat, einschlie\xdflich Backups und Berechtigungen"}),"\n",(0,s.jsx)(n.li,{children:"having a separate /tmp partition may result in increased disk I/O when temporary files are created and deleted"}),"\n",(0,s.jsx)(n.li,{children:"Wenn die /home-Partition separat ist, sind f\xfcr die Migration auf einen neuen Server oder die Aktualisierung des Betriebssystems m\xf6glicherweise zus\xe4tzliche Schritte erforderlich, um die ordnungsgem\xe4\xdfe Migration von Benutzerdaten und -konfigurationen sicherzustellen"}),"\n",(0,s.jsx)(n.li,{children:"Separate Partitionen k\xf6nnen das Risiko eines Datenverlusts erh\xf6hen, wenn eine Partition ausf\xe4llt oder besch\xe4digt wird"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Die Partitionierungsempfehlungen f\xfcr das Farming in Autonomys werden im Abschnitt \u201ePartitionierung und Mounten des Dateisystems\u201c im linken Tab-Men\xfc behandelt."}),"\n",(0,s.jsx)(n.h2,{id:"upgrading-",children:"Upgrading ..."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Upgrading packages"})}),"\n",(0,s.jsx)(n.p,{children:"While Linux distributions regularly release security patches to address known vulnerabilities in software packages, it doesn't always make sense to install every available update on a server. Unnecessary updates can introduce features or changes that might not be needed and, in some cases, may even cause system destabilization. If you've made customizations or modifications to your server's configuration or software, an upgrade could potentially overwrite or conflict with these changes."}),"\n",(0,s.jsx)(n.p,{children:"Therefore, it's essential to make upgrade decisions based on a thorough understanding of what each package does and reviewing their changelogs."}),"\n",(0,s.jsxs)(n.p,{children:["Um das \xc4nderungsprotokoll f\xfcr ein bestimmtes Paket anzuzeigen: ",(0,s.jsx)(n.code,{children:"apt changelog <package_name>"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Upgrading Kernel"})}),"\n",(0,s.jsx)(n.p,{children:"While kernel updates often come with bug fixes and security patches, there is a possibility that the new kernel version may introduce new bugs or compatibility issues. Not every kernel update is necessary or urgent. Some updates may provide incremental improvements or additional functionality that may not be essential for your specific use case. It's important to evaluate the benefits and potential risks before deciding to update the kernel."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Upgrading the distribution version"})}),"\n",(0,s.jsx)(n.p,{children:"Pros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Access to new features"}),"\n",(0,s.jsx)(n.li,{children:"Software compatibility"}),"\n",(0,s.jsx)(n.li,{children:"Security updates"}),"\n",(0,s.jsx)(n.li,{children:"Long-term support (LTS)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Potential for compatibility issues"}),"\n",(0,s.jsx)(n.li,{children:"Configuration changes"}),"\n",(0,s.jsx)(n.li,{children:"May have new bugs (which can be resolved by downgrading the bugged package)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"So everywhere ideally it is necessary to read changelogs, know what is needed and why, and comprehensively evaluate the need for upgrades. Although, of course, in most cases under ordinary (office) conditions everything should work."}),"\n",(0,s.jsx)(n.h3,{id:"to-access-release-notes",children:"To Access Release Notes:"}),"\n",(0,s.jsxs)(n.p,{children:["Simply use the search function on the ",(0,s.jsx)(n.a,{href:"https://ubuntu.com/search?q=Ubuntu+22.04+Changelogs",children:"Ubuntu homepage"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ufw",children:"UFW"}),"\n",(0,s.jsx)(n.p,{children:"According to the ordering of UFW rules (DENY rules should come first, followed by ALLOW rules), new 'ALLOW' rules can simply be added to the end of the existing rules."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Ihre bestehenden Regeln\n...\n\nsudo ufw allow 30333 comment 'Node port'\nsudo ufw allow 30433 comment 'Node DSN port'\nsudo ufw allow 30533 comment 'Farmer port'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now with peace of mind you may go back to installing Node and Farmer."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var s=r(18215);const i={tabItem:"tabItem_Ymn6"};var t=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>v});var s=r(96540),i=r(18215),t=r(23104),a=r(56347),l=r(205),o=r(57485),c=r(31682),d=r(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:i}}=e;return{value:n,label:r,attributes:s,default:i}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const i=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,t=u(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[c,h]=g({queryString:r,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,d.Dv)(r);return[i,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:i}),y=(()=>{const e=c??m;return p({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{y&&o(y)}),[y]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,t]),tabValues:t}}var f=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function b(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),i=l[r].value;i!==s&&(c(n),a(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...t,className:(0,i.A)("tabs__item",y.tabItem,t?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function S(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,x.jsx)(S,{...e,children:h(e.children)},String(n))}},65648:(e,n,r)=>{r.d(n,{A:()=>s});const s={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var s=r(96540);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);