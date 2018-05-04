webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinuxintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LinuxintPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LinuxintPage = (function () {
    function LinuxintPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LinuxintPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LinuxintPage');
    };
    return LinuxintPage;
}());
LinuxintPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-linuxint',template:/*ion-inline-start:"C:\Users\CyberBlack\Music\network\src\pages\linuxint\linuxint.html"*/'<!--\n  Generated template for the LinuxintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Linux Interviews</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="color:#666666; background: #f2f2f2;">\n  \n    <h4>1) What is Linux?</h4>\n    \n    Linux is an operating system based on UNIX, and was first introduced by Linus Torvalds. It is based on the Linux Kernel, and can run on different hardware platforms manufactured by Intel, MIPS, HP, IBM, SPARC and Motorola. Another popular element in Linux is its mascot, a penguin figure named Tux.\n    \n    \n    <h4> 2) What is the difference between UNIX and LINUX?</h4>\n    \n    Unix originally began as a propriety operating system from Bell Laboratories, which later on spawned into different commercial versions. On the other hand, Linux is free, open source and intended as a non-propriety operating system for the masses.\n    \n    <h4>  3) What is BASH?</h4>\n    \n    BASH is short for Bourne Again SHell. It was written by Steve Bourne as a replacement to the original Bourne Shell (represented by /bin/sh). It combines all the features from the original version of Bourne Shell, plus additional functions to make it easier and more convenient to use. It has since been adapted as the default shell for most systems running Linux.\n    \n    <h4>  4) What is Linux Kernel?</h4>\n    \n    The Linux Kernel is a low-level systems software whose main role is to manage hardware resources for the user. It is also used to provide an interface for user-level interaction.\n    \n    \n    \n    <h4>  5) What is LILO?</h4>\n    \n    LILO is a boot loader for Linux. It is used mainly to load the Linux operating system into main memory so that it can begin its operations.\n    \n    <h4>  6) What is a swap space?</h4>\n    \n    A swap space is a certain amount of space used by Linux to temporarily hold some programs that are running concurrently. This happens when RAM does not have enough memory to hold all programs that are executing.\n    \n    <h4>  7) What is the advantage of open source?</h4>\n    \n    \n     \n    Open source allows you to distribute your software, including source codes freely to anyone who is interested. People would then be able to add features and even debug and correct errors that are in the source code. They can even make it run better, and then redistribute these enhanced source code freely again. This eventually benefits everyone in the community.\n    \n    <h4> 8 ) What are the basic components of Linux?</h4>\n    \n    Just like any other typical operating system, Linux has all of these components: kernel, shells and GUIs, system utilities, and application program. What makes Linux advantageous over other operating system is that every aspect comes with additional features and all codes for these are downloadable for free.\n    \n    <h4> 9) Does it help for a Linux system to have multiple desktop environments installed?</h4>\n    \n    In general, one desktop environment, like KDE or Gnome, is good enough to operate without issues. It’s all a matter of preference for the user, although the system allows switching from one environment to another. Some programs will work on one environment and not work on the other, so it could also be considered a factor in selecting which environment to use.\n    \n    <h4> 10) What is the basic difference between BASH and DOS?</h4>\n    \n    The key differences between the BASH and DOS console lies in 3 areas:<br>\n    – BASH commands are case sensitive while DOS commands are not;<br>\n    – under BASH, / character is a directory separator and \ acts as an escape character. Under DOS, / serves as a command argument delimiter and \ is the directory separator<br>\n    – DOS follows a convention in naming files, which is 8 character file name followed by a dot and 3 character for the extension. BASH follows no such convention.\n    \n    <h4>  11) What is the importance of the GNU project?</h4>\n    \n    This so-called Free software movement allows several advantages, such as the freedom to run programs for any purpose and freedom to study and modify a program to your needs. It also allows you to redistribute copies of a software to other people, as well as freedom to improve software and have it released to the public.\n    \n    <h4>  12) Describe the root account.</h4>\n    \n    The root account is like a systems administrator account, and allows you full control of the system. Here you can create and maintain user accounts, assigning different permissions for each account. It is the default account every time you install Linux.\n    \n    <h4>   13) What is CLI?</h4>\n    \n    CLI is short for Command Line Interface. This interface allows user to type declarative commands to instruct the computer to perform operations. CLI offers an advantage in that there is greater flexibility. However, other users who are already accustom with using GUI find it difficult to remember commands including attributes that come with it.\n    \n    <h4>  14) What is GUI?</h4>\n    \n    GUI, or Graphical User Interface, makes use of images and icons that users click and manipulate as a way of communicating with the computer. Instead of having to remember and type commands, the use of graphical elements makes it easier to interact with the system, as well as adding more attraction through images, icons and colors.\n    \n    <h4>  15) How do you open a command prompt when issuing a command?</h4>\n    \n    To open the default shell (which is where the command prompt can be found), press Ctrl-Alt-F1. This will provide a command line interface (CLI) from which you can run commands as needed.\n    \n    <h4>  16) How can you find out how much memory Linux is using?</h4>\n    \n    From a command shell, use the “concatenate” command: cat /proc/meminfo for memory usage information. You should see a line starting something like: Mem: 64655360, etc. This is the total memory Linux thinks it has available to use.\n    \n    <h4>  17) What is typical size for a swap partition under a Linux system?</h4>\n    \n    The preferred size for a swap partition is twice the amount of physical memory available on the system. If this is not possible, then the minimum size should be the same as the amount of memory installed.\n    \n    <h4>  18) What are symbolic links?</h4>\n    \n    Symbolic links act similarly to shortcuts in Windows. Such links point to programs, files or directories. It also allows you instant access to it without having to go directly to the entire pathname.\n    \n    <h4> 19) Does the Ctrl+Alt+Del key combination work on Linux?</h4>\n    \n    Yes, it does. Just like Windows, you can use this key combination to perform a system restart. One difference is that you won’t be getting any confirmation message and therefore, reboot is immediate.\n    \n    <h4> 20) How do you refer to the parallel port where devices such as printers are connected?</h4>\n    \n    Whereas under Windows you refer to the parallel port as the LPT port, under Linux you refer to it as /dev/lp . LPT1, LPT2 and LPT3 would therefore be referred to as /dev/lp0, /dev/lp1, or /dev/lp2 under Linux.\n    \n    <h4> 21) Are drives such as harddrive and floppy drives represented with drive letters?</h4>\n    \n    No. In Linux, each drive and device has different designations. For example, floppy drives are referred to as /dev/fd0 and /dev/fd1. IDE/EIDE hard drives are referred to as /dev/hda, /dev/hdb, /dev/hdc, and so forth.\n    \n    <h4>  22) How do you change permissions under Linux?</h4>\n    \n    Assuming you are the system administrator or the owner of a file or directory, you can grant permission using the chmod command. Use + symbol to add permission or – symbol to deny permission, along with any of the following letters: u (user), g (group), o (others), a (all), r (read), w (write) and x (execute). For example the command chmod go+rw FILE1.TXT grants read and write access to the file FILE1.TXT, which is assigned to groups and others.\n    \n    <h4> 23) In Linux, what names are assigned to the different serial ports?</h4>\n    \n    Serial ports are identified as /dev/ttyS0 to /dev/ttyS7. These are the equivalent names of COM1 to COM8 in Windows.\n    \n    <h4>  24) How do you access partitions under Linux?</h4>\n    \n    Linux assigns numbers at the end of the drive identifier. For example, if the first IDE hard drive had three primary partitions, they would be named/numbered, /dev/hda1, /dev/hda2 and /dev/hda3.\n    \n    <h4>  25) What are hard links?</h4>\n    \n    Hard links point directly to the physical file on disk, and not on the path name. This means that if you rename or move the original file, the link will not break, since the link is for the file itself, not the path where the file is located.\n    \n    <h4>  26) What is the maximum length for a filename under Linux?</h4>\n    \n    Any filename can have a maximum of 255 characters. This limit does not include the path name, so therefore the entire pathname and filename could well exceed 255 characters.\n    \n    \n     \n    <h4>  27)What are filenames that are preceded by a dot?</h4>\n    \n    In general, filenames that are preceded by a dot are hidden files. These files can be configuration files that hold important data or setup info. Setting these files as hidden makes it less likely to be accidentally deleted.\n    \n    <h4> 28) Explain virtual desktop.</h4>\n    \n    This serves as an alternative to minimizing and maximizing different windows on the current desktop. Using virtual desktops, each desktop is a clean slate where you can open one or more programs. Rather than minimizing/restoring all those programs as needed, you can simply shuffle between virtual desktops with programs intact in each one.\n    \n    <h4>  29) How do you share a program across different virtual desktops under Linux?</h4>\n    \n    To share a program across different virtual desktops, in the upper left-hand corner of a program window look for an icon that looks like a pushpin. Pressing this button will “pin” that application in place, making it appear in all virtual desktops, in the same position onscreen.\n    \n    <h4> 30) What does a nameless (empty) directory represent?</h4>\n    \n    This empty directory name serves as the nameless base of the Linux file system. This serves as an attachment for all other directories, files, drives and devices.\n    \n    <h4>  31) What is the pwd command?</h4>\n    \n    The pwd command is short for print working directory command. It’s counterpart in DOS is the cd command, and is used to display the current location in the directory tree.\n    \n    <h4>  32) What are daemons?</h4>\n    \n    Daemons are services that provide several functions that may not be available under the base operating system. Its main task is to listen for service request and at the same time to act on these requests. After the service is done, it is then disconnected and waits for further requests.\n    \n    <h4>  33) How do you switch from one desktop environment to another, such as switching from KDE to Gnome?</h4>\n    \n    Assuming you have these two environments installed, just log out from the graphical interface. Then at the Log in screen, type your login ID and password and choose which session type you wish to load. This choice will remain your default until you change it to something else.\n    \n    <h4> 34) What are the kinds of permissions under Linux?</h4>\n    \n    There are 3 kinds of permissions under Linux:<br>\n    – Read: users may read the files or list the directory<br>\n    – Write: users may write to the file of new files to the directory<br>\n    – Execute: users may run the file or lookup a specific file within a directory\n    \n    <h4>  35) How does case sensitivity affect the way you use commands?</h4>\n    \n    When we talk about case sensitivity, commands are considered identical only if every character is encoded as is, including lowercase and uppercase letters. This means that CD, cd and Cd are three different commands. Entering a command using uppercase letters, where it should be in lowercase, will produce different outputs.\n    \n    <h4>  36) What are environmental variables?</h4>\n    \n    Environmental variables are global settings that control the shell’s function as well as that of other Linux programs. Another common term for environmental variables is global shell variables.\n    \n    <h4>  37) What are the different modes when using vi editor?</h4>\n    \n    There are 3 modes under vi:<br>\n    – Command mode – this is the mode where you start in<br>\n    – Edit mode – this is the mode that allows you to do text editing<br>\n    – Ex mode – this is the mode wherein you interact with vi with instructions to process a file\n    \n    <h4>  38) Is it possible to use shortcut for a long pathname?</h4>\n    \n    Yes, there is. A feature known as filename expansion allows you do this using the TAB key. For example, if you have a path named /home/iceman/assignments directory, you would type as follows: /ho[tab]/ice[tab]/assi[tab] . This, however, assumes that the path is unique, and that the shell you’re using supports this feature.\n    \n    <h4>  39) What is redirection?</h4>\n    \n    Redirection is the process of directing data from one output to another. It can also be used to direct an output as an input to another process.\n    \n    <h4>  40) What is grep command?</h4>\n    \n    grep a search command that makes use of pattern-based searching. It makes use of options and parameters that is specified along the command line and applies this pattern into searching the required file output.\n    \n    <h4> 41) What could possibly be the problem when a command that was issued gave a different result from the last time it was used?</h4>\n    \n    One highly possible reason for getting different results from what seems to be the same command has something to do with case sensitivity issues. Since Linux is case sensitive, a command that was previously used might have been entered in a different format from the present one. For example, to lists all files in the directory, you should type the command ls, and not LS. Typing LS would either result in an error message if there is no program by that exact name exist, or may produce a different output if there is a program named LS that performs another function.\n    \n    <h4>  42) What are the contents in /usr/local?</h4>\n    \n    It contains locally installed files. This directory actually matters in environments where files are stored on the network. Specifically, locally-installed files go to /usr/local/bin, /usr/local/lib, etc.). Another application of this directory is that it is used for software packages installed from source, or software not officially shipped with the distribution.\n    \n    <h4>  43) How do you terminate an ongoing process?</h4>\n    \n    Every process in the system is identified by a unique process id or pid. Use the kill command followed by the pid in order to terminate that process. To terminate all process at once, use kill 0.\n    \n    <h4> 44) How do you insert comments in the command line prompt?</h4>\n    \n    Comments are created by typing the # symbol before the actual comment text. This tells the shell to completely ignore what follows. For example: “# This is just a comment that the shell will ignore.”\n    \n    <h4>  45) What is command grouping and how does it work?</h4>\n    \n    You can use parentheses to group commands. For example, if you want to send the current date and time along with the contents of a file named OUTPUT to a second file named MYDATES, you can apply command grouping as follows: (date cat OUTPUT) > MYDATES\n    \n    <h4> 46) How do you execute more than one command or program from a single command line entry?</h4>\n    \n    You can combine several commands by separating each command or program using a semicolon symbol. For example, you can issue such a series of commands in a single entry:\n    \n    \n    ls –l cd .. ls –a MYWORK which is equivalent to 3 commands: ls -l cd.. ls -a MYWORK<br>\n    1<br>\n    ls –l cd .. ls –a MYWORK which is equivalent to 3 commands: ls -l cd.. ls -a MYWORK<br>\n    **Note that this will be executed one after the other, in the order specified.\n    \n    <h4>  47) Write a command that will look for files with an extension “c”, and has the occurrence of the string “apple” in it.</h4>\n    \n    Answer:<br>\n    \n    \n    Find ./ -name “*.c” | xargs grep –i “apple”<br>\n    1<br>\n     Find ./ -name “*.c” | xargs grep –i “apple”\n     \n    \n     <h4>  48) Write a command that will display all .txt files, including its individual permission.</h4>\n    \n    Answer:\n    \n    \n    ls -a -l *.txt<br>\n    1<br>\n    ls -a -l *.txt\n     \n    \n    <h4>  49) Write a command that will do the following:\n    -look for all files in the current and subsequent directories with an extension c,v<br>\n    -strip the,v from the result (you can use sed command)<br>\n    -use the result and use a grep command to search for all occurrences of the word ORANGE in the files.\n  </h4>\n    \n    Find ./ -name “*.c,v” | sed ‘s/,v//g’ | xargs grep “ORANGE”<br>\n    1<br>\n    Find ./ -name “*.c,v” | sed ‘s/,v//g’ | xargs grep “ORANGE”\n     \n    \n    <h4>  50) What, if anything, is wrong with each of the following commands?</h4>\n    a) ls -l-s<br>\n    b) cat file1, file2<br>\n    c) ls – s Factdir\n    \n    Answers:\n    a) there should be space between the 2 options: ls -l -s<br>\n    b) do not use commas to separate arguments: cat file1 file2<br>\n    c) there should be no space between hyphen and option label: ls –s Factdir\n    \n    <h4>  51) What is the command to calculate the size of a folder?</h4>\n    \n    To calculate the size of a folder use the command du –sh folder1.\n    \n    <h4>   52) How can you find status of a process?</h4>\n    \n    Use the command<br>\n    \n    ps ux\n    \n    <h4>  53) How can you check the memory status ?</h4>\n    \n    You can use the command<br>\n    \n    free -m  to display output in MB<br>\n    \n    free -g  to display output in GB\n    \n    <h4>  54) Explain how to color the Git console?</h4>\n    \n    To color the Git console  you can use the command git config—global color.ui auto.  In the command, the color.ui variable sets the default value for variable such as color.diff and color.grep.\n    \n    <h4>  55) How can you append one file to another in  Linux?</h4>\n    \n    To append one file to another in Linux you can use command cat file2 >> file 1.  The operator >> appends the output of the named file or creates the file if it is not created.  While another command cat file 1 file 2 > file 3 appends two or more files to one.\n    \n    <h4>  56) Explain how you can find a file  using Terminal?</h4>\n    \n    To find a file  you have to use command, find . –name “process.txt” .  It will look for the current directory for a file called process.txt.\n    \n    <h4>  57) Explain how you can create a folder using Terminal?</h4>\n    \n    To create a folder, you have to use command mkdir.  It will be something like these :  ~$ mkdir Guru99\n    \n    <h4>  58)  Explain how you can view the text file using Terminal?</h4>\n    \n    To view the text file, go to the specific folder where the text files are located by using the command cd and then type less filename.txt.\n    \n    <h4>  59) Explain how to enable curl on Ubuntu LAMP stack?</h4>\n    \n    To enable curl on Ubuntu , first install libcurl, once done use following command sudo/etc/init .d /apache2 restart or sudo service apache2 restart.\n    \n    <h4>   60) Explain how to enable root loging in Ubuntu?</h4>\n    \n    The command which enables root loging is<br>\n    \n    #sudo sh-c ‘echo “greater-show-manual-login=true” >>/etc/lightdm/lightdm.conf’\n    \n    <h4> 61) How you can run an Linux program in the background simultaneously when you start your Linux Server?</h4>\n    \n    By using nohup.  It will stop the process receiving the NOHUP signal and thus terminating it you log out of the program which was invoked with.  & runs the process in the background.\n    \n    <h4>  62) Explain how to uninstall the libraries in Linux?</h4>\n    \n    To uninstall the libraries in Linux, you can use command  sudo apt – get remove library_name\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\CyberBlack\Music\network\src\pages\linuxint\linuxint.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LinuxintPage);

//# sourceMappingURL=linuxint.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkqaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NetworkqaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NetworkqaPage = (function () {
    function NetworkqaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NetworkqaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NetworkqaPage');
    };
    return NetworkqaPage;
}());
NetworkqaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-networkqa',template:/*ion-inline-start:"C:\Users\CyberBlack\Music\network\src\pages\networkqa\networkqa.html"*/'<!--\n  Generated template for the NetworkqaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Networking QA</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="color:#666666; background: #f2f2f2;">\n\n    <h4>1) What is a Link?</h4>\n    \n    A link refers to the connectivity between two devices. It includes the type of cables and protocols used in order for one device to be able to communicate with the other.\n    \n    \n    <h4>2) What are the layers of the OSI reference model?</h4>\n    \n    There are 7 OSI layers: Physical Layer, Data Link Layer, Network Layer, Transport Layer, Session Layer, Presentation Layer and Application Layer.\n    \n    <h4>3) What is backbone network?</h4>\n    \n    A backbone network is a centralized infrastructure that is designed to distribute different routes and data to various networks. It also handles management of bandwidth and various channels.\n    \n    <h4>> 4) What is a LAN?</h4>\n    \n    LAN is short for Local Area Network. It refers to the connection between computers and other network devices that are located within a small physical location.\n    \n    <h4> 5) What is a node?</h4>\n    \n    \n    \n     \n    \n    A node refers to a point or joint where a connection takes place. It can be computer or device that is part of a network. Two or more nodes are needed in order to form a network connection.\n    \n    <h4> 6) What are routers?</h4>\n    \n    Routers can connect two or more network segments. These are intelligent network devices that store information in its routing table such as paths, hops and bottlenecks. With this info, they are able to determine the best path for data transfer. Routers operate at the OSI Network Layer.\n    \n    \n     \n    <h4>7) What is point to point link?</h4>\n    \n    It refers to a direct connection between two computers on a network. A point to point connection does not need any other network devices other than connecting a cable to the NIC cards of both computers.\n    \n    <h4> 8) What is anonymous FTP?</h4>\n    \n    Anonymous FTP is a way of granting user access to files in public servers. Users that are allowed access to data in these servers do not need to identify themselves, but instead log in as an anonymous guest.\n    \n    <h4> 9) What is subnet mask?</h4>\n    \n    A subnet mask is combined with an IP address in order to identify two parts: the extended network address and the host address. Like an IP address, a subnet mask is made up of 32 bits.\n    \n    <h4> 10) What is the maximum length allowed for a UTP cable?</h4>\n    \n    A single segment of UTP cable has an allowable length of 90 to 100 meters. This limitation can be overcome by using repeaters and switches.\n    \n    <h4>11) What is data encapsulation?</h4>\n    \n    Data encapsulation is the process of breaking down information into smaller manageable chunks before it is transmitted across the network. It is also in this process that the source and destination addresses are attached into the headers, along with parity checks.\n    \n    <h4>12) Describe Network Topology</h4>\n    \n    Network Topology refers to the layout of a computer network. It shows how devices and cables are physically laid out, as well as how they connect to one another.\n    \n    <h4>13) What is VPN?</h4>\n    \n    VPN means Virtual Private Network, a technology that allows a secure tunnel to be created across a network such as the Internet. For example, VPNs allow you to establish a secure dial-up connection to a remote server.\n    \n    <h4> 14) Briefly describe NAT.</h4>\n    \n    NAT is Network Address Translation. This is a protocol that provides a way for multiple computers on a common network to share single connection to the Internet.\n    \n    <h4> 15) What is the job of the Network Layer under the OSI reference model?</h4>\n    \n    The Network layer is responsible for data routing, packet switching and control of network congestion. Routers operate under this layer.\n    \n    <h4> 16) How does a network topology affect your decision in setting up a network?</h4>\n    \n    Network topology dictates what media you must use to interconnect devices. It also serves as basis on what materials, connector and terminations that is applicable for the setup.\n    \n    <h4>17) What is RIP?</h4>\n    \n    RIP, short for Routing Information Protocol is used by routers to send data from one network to another. It efficiently manages routing data by broadcasting its routing table to all other routers within the network. It determines the network distance in units of hops.\n    \n    <h4>18) What are different ways of securing a computer network?</h4>\n    \n    There are several ways to do this. Install reliable and updated anti-virus program on all computers. Make sure firewalls are setup and configured properly. User authentication will also help a lot. All of these combined would make a highly secured network.\n    \n    <h4>19) What is NIC?</h4>\n    \n    NIC is short for Network Interface Card. This is a peripheral card that is attached to a PC in order to connect to a network. Every NIC has its own MAC address that identifies the PC on the network.\n    \n    <h4>20) What is WAN?</h4>\n    \n    WAN stands for Wide Area Network. It is an interconnection of computers and devices that are geographically dispersed. It connects networks that are located in different regions and countries.\n    \n    <h4>21) What is the importance of the OSI Physical Layer?</h4>\n    \n    The physical layer does the conversion from data bits to electrical signal, and vice versa. This is where network devices and cable types are considered and setup.\n    \n    <h4> 22) How many layers are there under TCP/IP?</h4>\n    \n    There are four layers: the Network Layer, Internet Layer, Transport Layer and Application Layer.\n    \n    <h4> 23) What are proxy servers and how do they protect computer networks?</h4>\n    \n    Proxy servers primarily prevent external users who identifying the IP addresses of an internal network. Without knowledge of the correct IP address, even the physical location of the network cannot be identified. Proxy servers can make a network virtually invisible to external users.\n    \n    \n     \n    <h4>24) What is the function of the OSI Session Layer?</h4>\n    \n    This layer provides the protocols and means for two devices on the network to communicate with each other by holding a session.  This includes setting up the session, managing information exchange during the session, and tear-down process upon termination of the session.\n    \n    <h4> 25) What is the importance of implementing a Fault Tolerance System? Are there limitations?</h4>\n    \n    A fault tolerance system ensures continuous data availability. This is done by eliminating a single point of failure. However, this type of system would not be able to protect data in some cases, such as in accidental deletions.\n    \n    <h4>26) What does 10Base-T mean?</h4>\n    \n    The 10 refers to the data transfer rate, in this case is 10Mbps. The word Base refers to base band, as oppose to broad band. T means twisted pair, which is the cable used for that network.\n    \n    <h4> 27) What is a private IP address?</h4>\n    \n    Private IP addresses are assigned for use on intranets. These addresses are used for internal networks and are not routable on external public networks. These ensures that no conflicts are present among internal networks while at the same time the same range of private IP addresses are reusable for multiple intranets since they do not “see” each other.\n    \n    <h4>28) What is NOS?</h4>\n    \n    NOS, or Network Operating System, is specialized software whose main task is to provide network connectivity to a computer in order for it to be able to communicate with other computers and connected devices.\n    \n    <h4> 29) What is DoS?</h4>\n    \n    DoS, or Denial-of-Service attack, is an attempt to prevent users from being able to access the internet or any other network services. Such attacks may come in different forms and are done by a group of perpetuators. One common method of doing this is to overload the system server so it cannot anymore process legitimate traffic and will be forced to reset.\n    \n    <h4> 30) What is OSI and what role does it play in computer networks?</h4>\n    \n    OSI (Open Systems Interconnect) serves as a reference model for data communication. It is made up of 7 layers, with each layer defining a particular aspect on how network devices connect and communicate with one another. One layer may deal with the physical media used, while another layer dictates how data is actually transmitted across the network.\n    \n    <h4>31) What is the purpose of cables being shielded and having twisted pairs?</h4>\n    \n    The main purpose of this is to prevent crosstalk. Crosstalks are electromagnetic interferences or noise that can affect data being transmitted across cables.\n    \n    <h4> 32) What is the advantage of address sharing?</h4>\n    \n    By using address translation instead of routing, address sharing provides an inherent security benefit. That’s because host PCs on the Internet can only see the public IP address of the external interface on the computer that provides address translation and not the private IP addresses on the internal network.\n    \n    <h4> 33) What are MAC addresses?</h4>\n    \n    MAC, or Media Access Control, uniquely identifies a device on the network. It is also known as physical address or Ethernet address. A MAC address is made up of 6-byte parts.\n    \n    <h4> 34) What is the equivalent layer or layers of the TCP/IP Application layer in terms of OSI reference model?</h4>\n    \n    The TCP/IP Application layer actually has three counterparts on the OSI model: the Session layer, Presentation Layer and Application Layer.\n    \n    <h4> 35) How can you identify the IP class of a given IP address?</h4>\n    \n    By looking at the first octet of any given IP address, you can identify whether it’s Class A, B or C. If the first octet begins with a 0 bit, that address is Class A. If it begins with bits 10 then that address is a Class B address. If it begins with 110, then it’s a Class C network.\n    \n    <h4> 36) What is the main purpose of OSPF?</h4>\n    \n    OSPF, or Open Shortest Path First, is a link-state routing protocol that uses routing tables to determine the best possible path for data exchange.\n    \n    <h4>37) What are firewalls?</h4>\n    \n    Firewalls serve to protect an internal network from external attacks. These external threats can be hackers who want to steal data or computer viruses that can wipe out data in an instant. It also prevents other users from external networks from gaining access to the private network.\n    \n    <h4> 38) Describe star topology</h4>\n    \n    Star topology consists of a central hub that connects to nodes. This is one of the easiest to setup and maintain.\n    \n    <h4> 39) What are gateways?</h4>\n    \n    Gateways provide connectivity between two or more network segments. It is usually a computer that runs the gateway software and provides translation services. This translation is a key in allowing different systems to communicate on the network.\n    \n    <h4> 40) What is the disadvantage of a star topology?</h4>\n    \n    One major disadvantage of star topology is that once the central hub or switch get damaged, the entire network becomes unusable.\n    \n    <h4> 41) What is SLIP?</h4>\n    \n    SLIP, or Serial Line Interface Protocol, is actually an old protocol developed during the early UNIX days. This is one of the protocols that are used for remote access.\n    \n    <h4>42) Give some examples of private network addresses.</h4>\n    \n    10.0.0.0 with a subnet mask of 255.0.0.0<br>\n    172.16.0.0 with subnet mask of 255.240.0.0<br>\n    192.168.0.0 with subnet mask of 255.255.0.0\n    \n    <h4>43) What is tracert?</h4>\n    \n    Tracert is a Windows utility program that can used to trace the route taken by data from the router to the destination network. It also shows the number of hops taken during the entire transmission route.\n    \n    <h4>44) What are the functions of a network administrator?</h4>\n    \n    A network administrator has many responsibilities that can be summarize into 3 key functions: installation of a network, configuration of network settings, and maintenance/troubleshooting of networks.\n    \n    <h4>45) Describe at one disadvantage of a peer to peer network.</h4>\n    \n    When you are accessing the resources that are shared by one of the workstations on the network, that workstation takes a performance hit.\n    \n    <h4>46) What is Hybrid Network?</h4>\n    \n    A hybrid network is a network setup that makes use of both client-server and peer-to-peer architecture.\n    \n    <h4> 47) What is DHCP?</h4>\n    \n    DHCP is short for Dynamic Host Configuration Protocol. Its main task is to automatically assign an IP address to devices across the network. It first checks for the next available address not yet taken by any device, then assigns this to a network device.\n    \n    <h4>  48) What is the main job of the ARP?</h4>\n    \n    The main task of ARP or Address Resolution Protocol is to map a known IP address to a MAC layer address.\n    \n    <h4>49) What is TCP/IP?</h4>\n    \n    TCP/IP is short for Transmission Control Protocol / Internet Protocol. This is a set of protocol layers that is designed to make data exchange possible on different types of computer networks, also known as heterogeneous network.\n    \n    <h4> 50) How can you manage a network using a router?</h4>\n    \n    Routers have built in console that lets you configure different settings, like security and data logging. You can assign restrictions to computers, such as what resources it is allowed access, or what particular time of the day they can browse the internet. You can even put restrictions on what websites are not viewable across the entire network.\n    \n    <h4>51) What protocol can be applied when you want to transfer files between different platforms, such between UNIX systems and Windows servers?</h4>\n    \n    Use FTP (File Transfer Protocol) for file transfers between such different servers. This is possible because FTP is platform independent.\n    \n    <h4>52) What is the use of a default gateway?</h4>\n    \n    Default gateways provide means for the local networks to connect to the external network. The default gateway for connecting to the external network is usually the address of the external router port.\n    \n    <h4> 53) One way of securing a network is through the use of passwords. What can be considered as good passwords?</h4>\n    \n    Good passwords are made up of not just letters, but by combining letters and numbers. A password that combines uppercase and lowercase letters is favorable than one that uses all upper case or all lower case letters. Passwords must be not words that can easily be guessed by hackers, such as dates, names, favorites, etc. Longer passwords are also better than short ones.\n    \n    <h4>54) What is the proper termination rate for UTP cables?</h4>\n    \n    The proper termination for unshielded twisted pair network cable is 100 ohms.\n    \n    <h4> 55) What is netstat?</h4>\n    \n    Netstat is a command line utility program. It provides useful information about the current TCP/IP settings of a connection.\n    \n    <h4>56) What is the number of network IDs in a Class C network?</h4>\n    \n    For a Class C network, the number of usable Network ID bits is 21. The number of possible network IDs is 2 raised to 21 or 2,097,152. The number of host IDs per network ID is 2 raised to 8 minus 2, or 254.\n    \n    <h4>57) What happens when you use cables longer than the prescribed length?</h4>\n    \n    Cables that are too long would result in signal loss. This means that data transmission and reception would be affected, because the signal degrades over length.\n    \n    <h4>58) What common software problems can lead to network defects?</h4>\n    \n    Software related problems can be any or a combination of the following:<br>\n    – client server problems<br>\n    – application conflicts<br>\n    – error in configuration<br>\n    – protocol mismatch<br>\n    – security issues<br>\n    – user policy and rights issues\n    \n    <h4> 59) What is ICMP?</h4>\n    \n    ICMP is Internet Control Message Protocol. It provides messaging and communication for protocols within the TCP/IP stack. This is also the protocol that manages error messages that are used by network tools such as PING.\n    \n    <h4> 60) What is Ping?</h4>\n    \n    Ping is a utility program that allows you to check connectivity between network devices on the network. You can ping a device by using its IP address or device name, such as a computer name.\n    \n    <h4>61) What is peer to peer?</h4>\n    \n    Peer to peer are networks that does not reply on a server. All PCs on this network act as individual workstations.\n    \n    <h4> 62) What is DNS?</h4>\n    \n    DNS is Domain Name System. The main function of this network service is to provide host names to TCP/IP address resolution.\n    \n    <h4> 63) What advantages does fiber optics have over other media?</h4>\n    \n    One major advantage of fiber optics is that is it less susceptible to electrical interference. It also supports higher bandwidth, meaning more data can be transmitted and received. Signal degrading is also very minimal over long distances.\n    \n    <h4> 64) What is the difference between a hub and a switch?</h4>\n    \n    A hub acts as a multiport repeater. However, as more and more devices connect to it, it would not be able to efficiently manage the volume of traffic that passes through it. A switch provides a better alternative that can improve the performance especially when high traffic volume is expected across all ports.\n    \n    <h4>65) What are the different network protocols that are supported by Windows RRAS services?</h4>\n    \n    There are three main network protocols supported: NetBEUI, TCP/IP, and IPX.\n    \n    <h4>66) What are the maximum networks and hosts in a class A, B and C network?</h4>\n    \n    For Class A, there are 126 possible networks and 16,777,214 hosts<br>\n    For Class B, there are 16,384 possible networks and 65,534 hosts<br>\n    For Class C, there are 2,097,152 possible networks and 254 hosts<br>\n    \n    <h4>67) What is the standard color sequence of a straight-through cable?</h4>\n    \n    orange/white, orange, green/white, blue, blue/white, green, brown/white, brown.\n    \n    <h4>68) What protocols fall under the Application layer of the TCP/IP stack?</h4>\n    \n    The following are the protocols under TCP/IP Application layer: FTP, TFTP, Telnet and SMTP.\n    \n    <h4> 69) You need to connect two computers for file sharing. Is it possible to do this without using a hub or router?</h4>\n    \n    Yes, you can connect two computers together using only one cable. A crossover type cable can be use in this scenario. In this setup, the data transmit pin of one cable is connected to the data receive pin of the other cable, and vice versa.\n    \n    <h4>70) What is ipconfig?</h4>\n    \n    Ipconfig is a utility program that is commonly used to identify the addresses information of a computer on a network. It can show the physical address as well as the IP address.\n    \n    <h4>71) What is the difference between a straight-through and crossover cable?</h4>\n    \n    A straight-through cable is used to connect computers to a switch, hub or router. A crossover cable is used to connect two similar devices together, such as a PC to PC or Hub to hub.\n    \n    <h4>72) What is client/server?</h4>\n    \n    Client/server is a type of network wherein one or more computers act as servers. Servers provide a centralized repository of resources such as printers and files. Clients refers to workstation that access the server.\n    \n    <h4> 73) Describe networking.</h4>\n    \n    Networking refers to the inter connection between computers and peripherals for data communication. Networking can be done using wired cabling or through wireless link.\n    \n    <h4>74) When you move the NIC cards from one PC to another PC, does the MAC address gets transferred as well?</h4>\n    \n    Yes, that’s because MAC addresses are hard-wired into the NIC circuitry, not the PC. This also means that a PC can have a different MAC address when the NIC card was replace by another one.\n    \n    <h4> 75) Explain clustering support</h4>\n    \n    Clustering support refers to the ability of a network operating system to connect multiple servers in a fault-tolerant group. The main purpose of this is the in the event that one server fails, all processing will continue on with the next server in the cluster.\n    \n    <h4>76) In a network that contains two servers and twenty workstations, where is the best place to install an Anti-virus program?</h4>\n    \n    An anti-virus program must be installed on all servers and workstations to ensure protection. That’s because individual users can access any workstation and introduce a computer virus when plugging in their removable hard drives or flash drives.\n    \n    <h4> 77) Describe Ethernet.</h4>\n    \n    Ethernet is one of the popular networking technologies used these days. It was developed during the early 1970s and is based on specifications as stated in the IEEE. Ethernet is used in local area networks.\n    \n    <h4>78) What are some drawbacks of implementing a ring topology?</h4>\n    \n    In case one workstation on the network suffers a malfunction, it can bring down the entire network. Another drawback is that when there are adjustments and reconfigurations needed to be performed on a particular part of the network, the entire network has to be temporarily brought down as well.\n    \n    <h4>79) What is the difference between CSMA/CD and CSMA/CA?</h4>\n    \n    CSMA/CD, or Collision Detect, retransmits data frames whenever a collision occurred. CSMA/CA, or Collision Avoidance, will first broadcast intent to send prior to data transmission.\n    \n    <h4> 80) What is SMTP?</h4>\n    \n    SMTP is short for Simple Mail Transfer Protocol. This protocol deals with all Internal mail, and provides the necessary mail delivery services on the TCP/IP protocol stack.\n    \n    <h4>81) What is multicast routing?</h4>\n    \n    Multicast routing is a targeted form of broadcasting that sends message to a selected group of user, instead of sending it to all users on a subnet.\n    \n    <h4>82) What is the importance of Encryption on a network?</h4>\n    \n    Encryption is the process of translating information into a code that is unreadable by the user. It is then translated back or decrypted back to its normal readable format using a secret key or password. Encryption help ensure that information that is intercepted halfway would remain unreadable because the user has to have the correct password or key for it.\n    \n    <h4>83) How are IP addresses arranged and displayed?</h4>\n    \n    IP addresses are displayed as a series of four decimal numbers that are separated by period or dots. Another term for this arrangement is the dotted decimal format. An example is 192.168.101.2\n    \n    <h4>84) Explain the importance of authentication.</h4>\n    \n    Authentication is the process of verifying a user’s credentials before he can log into the network. It is normally performed using a username and password. This provides a secure means of limiting the access from unwanted intruders on the network.\n    \n    <h4> 85) What do mean by tunnel mode?</h4>\n    \n    This is a mode of data exchange wherein two communicating computers do not use IPSec themselves. Instead, the gateway that is connecting their LANs to the transit network creates a virtual tunnel that uses the IPSec protocol to secure all communication that passes through it.\n    \n    <h4>86) What are the different technologies involved in establishing WAN links?</h4>\n    \n    Analog connections – using conventional telephone lines; Digital connections – using digital-grade telephone lines; switched connections – using multiple sets of links between sender and receiver to move data.\n    \n    <h4>87) What is one advantage of mesh topology?</h4>\n    \n    In the event that one link fails, there will always be another available. Mesh topology is actually one of the most fault-tolerant network topology.\n    \n    <h4> 88) When troubleshooting computer network problems, what common hardware-related problems can occur?</h4>\n    \n    A large percentage of a network is made up of hardware. Problems in these areas can range from malfunctioning hard drives, broken NICs and even hardware startups. Incorrectly hardware configuration is also one of those culprits to look into.\n    \n    <h4>89) What can be done to fix signal attenuation problems?</h4>\n    \n    A common way of dealing with such a problem is to use repeaters and hub, because it will help regenerate the signal and therefore prevent signal loss. Checking if cables are properly terminated is also a must.\n    \n    <h4> 90) How does dynamic host configuration protocol aid in network administration?</h4>\n    \n    Instead of having to visit each client computer to configure a static IP address, the network administrator can apply dynamic host configuration protocol to create a pool of IP addresses known as scopes that can be dynamically assigned to clients.\n    \n    <h4> 91) Explain profile in terms of networking concept?</h4>\n    \n    Profiles are the configuration settings made for each user. A profile may be created that puts a user in a group, for example.\n    \n    <h4> 92) What is sneakernet?</h4>\n    \n    Sneakernet is believed to be the earliest form of networking wherein data is physically transported using removable media, such as disk, tapes.\n    \n    <h4> 93) What is the role of IEEE in computer networking?</h4>\n    \n    IEEE, or the Institute of Electrical and Electronics Engineers, is an organization composed of engineers that issues and manages standards for electrical and electronic devices. This includes networking devices, network interfaces, cablings and connectors.\n    \n    <h4>94) What protocols fall under the TCP/IP Internet Layer?</h4>\n    \n    There are 4 protocols that are being managed by this layer. These are ICMP, IGMP, IP and ARP.\n    \n    <h4> 95) When it comes to networking, what are rights?</h4>\n    \n    Rights refer to the authorized permission to perform specific actions on the network. Each user on the network can be assigned individual rights, depending on what must be allowed for that user.\n    \n    <h4> 96) What is one basic requirement for establishing VLANs?</h4>\n    \n    A VLAN is required because at switch level there is only one broadcast domain, it means whenever new user is connected to switch this information is spread throughout the network. VLAN on switch helps to create separate broadcast domain at  switch level. It is used for security purpose.\n    \n    <h4> 97) What is IPv6?</h4>\n    \n    IPv6 , or Internet Protocol version 6, was developed to replace IPv4. At present, IPv4 is being used to control internet traffic, butis expected to get saturated in the near future. IPv6 was designed to overcome this limitation.\n    \n    <h4> 98) What is RSA algorithm?</h4>\n    \n    RSA is short for Rivest-Shamir-Adleman algorithm. It is the most commonly used public key encryption algorithm in use today.\n    \n    <h4> 99) What is mesh topology?</h4>\n    \n    Mesh topology is a setup wherein each device is connected directly to every other device on the network. Consequently, it requires that each device have at least two network connections.\n    \n    <h4>100) what is the maximum segment length of a 100Base-FX network?</h4>\n    \n    The maximum allowable length for a network segment using 100Base-FX is 412 meters. The maximum length for the entire network is 5 kilometers.\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\CyberBlack\Music\network\src\pages\networkqa\networkqa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], NetworkqaPage);

//# sourceMappingURL=networkqa.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.gotohome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return IntroPage;
}());
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"C:\Users\CyberBlack\Music\network\src\pages\intro\intro.html"*/'<ion-content no-padding class="bg" scroll="false">\n    <h1 class="logo">COMPUTER<br>NETWORKS</h1>\n\n    <ion-slides pager loop="true" autoplay="2300" speed="1000" style="height:80%;">\n            <ion-slide>\n                <div>\n                    <img src="./assets/img/el1.png" />\n                    <p class="tx1">Step By Step<br>Networking Practicles</p>\n                </div>\n            </ion-slide>\n       \n            <ion-slide>\n                    <img src="./assets/img/el2.png" />\n                    <p class="tx1">Wireless Networking<br>Practicles</p>\n            </ion-slide>\n\n            <ion-slide>\n                    <img src="./assets/img/el3.png" />\n                    <p class="tx1">Linux Networking<br>Fundamentals</p>\n            </ion-slide>\n    </ion-slides>\n    <button ion-button block large class="btn" (click)="gotohome()">\n        Let\'s Start\n    </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\CyberBlack\Music\network\src\pages\intro\intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopspPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DesktopspPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DesktopspPage = (function () {
    function DesktopspPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DesktopspPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DesktopspPage');
    };
    return DesktopspPage;
}());
DesktopspPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-desktopsp',template:/*ion-inline-start:"C:\Users\CyberBlack\Music\network\src\pages\desktopsp\desktopsp.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Desktop Support QA</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="color:#666666; background: #f2f2f2;">\n\n    <h4>1) What is active directory?</h4>\n    \n    Active directory authorizes and authenticates all users and computers in a window domain network, ensuring the security of the computer and software. Through active directory various functions can be managed like creating admin users, connecting to printers or external hard drives.\n    \n    <h4> 2) What is DHCP and what it is used for?</h4>\n    \n    DHCP stands for dynamic host configuration protocol. It is used to allocate IP addresses to a large number of the computer system in a network.  It helps in managing the large number of IP’s very easily.\n    \n    <h4> 3) What is scope and super scope?</h4>\n    \n    Scope consists of an IP address like gateway IP, subnet mask, DNS server IP. It can be used to communicate with the other PCs in the network. The superscope becomes when you combine two or more scopes together.\n    \n    <h4>  4) What is DNS?</h4>\n    \n    DNS mean Domain Naming Service and it is used for resolving IP addresses to name and names to IP address. DNS is like a translator for computers, computers understand the number and not the alphabet. For example, if we type like hotmail.com, the computer don’t understand this so they use DNS which converts (hotmail.com) into (numbers) and then executes the command.\n    \n    <h4> 5) What is forward and reverse lookup in DNS?</h4>\n    \n    When we convert IP address into names is called Reverse lookup, while converting names into IP address is called Forward lookup.\n    \n    \n    <h4> 6) What is ‘A’ record and what is ‘MX record’?</h4>\n    \n    ‘A’ record is also known as host record, and it has ability to map the IP address by name. It is with this record that DNS can find out the IP address of a name. While, ‘MX record’ also known as mail exchanger record, by the help of ‘MX’ record, location of the mail server is identified.  The record is also found in DNS.\n    \n    <h4> 7) What is IPCONFIG command?</h4>\n    \n    IPCONFIG command is used to display the IP information of the computer assigned like DNS IP address and gateway IP address.\n    \n    <h4>  8) What would you use to connect two computers without using switches?</h4>\n    \n    \n     \n    Cross cables are used to connect two computers without using switches.\n    \n    \n     \n    <h4> 9) What is a domain?</h4>\n    \n    Domain is a set of computers which network recognizes by the internet. It can be used by centrally administer computers. It is created when you install active directory.\n    \n    <h4>10) Tell me if your system is infected by a virus how you will recover the data?</h4>\n    \n    You need to re-install another system, latest anti-virus software and an O.S with latest patches.  Before you start your system, connect the infected HDD as a secondary drive then scan and clean the infected hard drive. Once done, you can copy the files into the system.\n    \n    <h4> 11) What is the operating system?</h4>\n    \n    Operating system acts as an interpreter between computer application and hardware.  It works as an user interface.\n    \n    <h4> 12) What are the types of operating system or O.S?</h4>\n    \n    The two types of operating systems are:<br>\n    \n    NOS : Network Operating System. Examples of NOS- Windows NT, 2000,2003<br>\n    SOS : Simple Operating System. Examples of SOS – Windows 95,98, ME<br>\n    <h4> 13) Explain about RAS server?</h4>\n    \n    RAS means Remote Access Server.  It allows operating the tool or information that typically resides on a network or IT devices through combination of hardware and software, for example connecting to printer or file. It is usually used for mobile users who are in the network. It uses telephone line to provide connectivity to its users. It can also connect two or more than two offices in the network.\n    \n    <h4> 14) Explain about VPN server?</h4>\n    \n    VPN means Virtual Private Network. It is a private communications network often used by companies or organizations to communicate confidentially over a public network.  This is used by the mobile users in the network.\n    \n    <h4> 15) What is the difference between RAS and VPN server?</h4>\n    \n    RAS is truly a local area connection between two connections whereas, VPN is a local connection spread over large area.\n    \n    <h4> 16)  What is IAS server?</h4>\n    \n    IAS means Internet Authentication Service. For many types of network access like wireless, authenticating switch and remote access dial-up they perform accounting and auditing, centralized connection authentication and authorization.\n    \n    <h4>  17) What is Ping command?</h4>\n    \n    Between two or more devices, to check the physical IP connectivity Ping command is used.\n    \n    <h4> 18) What do you mean by clustering? What are the benefits?</h4>\n    \n    When one or more computers work together as a single system by sharing their resources is known as clustering.  The benefits of clustering are that it reduces the load on one single system by sharing the load also it is used for redundancy of the services.\n    \n    <h4> 19) What is a group?</h4>\n    \n    Group is a collection of the user account. It provides the simplified administration in the network.\n    \n    <h4> 20) What is a child domain?</h4>\n    \n    A child domain is the member domain of Windows 2000 Active Directory.\n    \n    <h4> 21) What are the benefits of a child domain?</h4>\n    \n    Benefits of child domain are:<br>\n    \n    Low network traffic<br>\n    Low administrative overhead<br>\n    Security boundary<br>\n    <h4>22) What is OU?</h4>\n    \n    OU means for Organizational Unit. It is a container within Active Directory which can hold users, groups and computers.  It is the smallest unit on which administrator can assign group policy settings.\n    \n    <h4> 23) Explain group policy?</h4>\n    \n    Group policy provides the stream line access to all the users in the network, it can be used to define the users security and networking policies.  By group policy you can keep control over certain function like not allowing the users to shut down the system or using the control panel or running the command. Group policy is applicable on active directory container like OU, site and Domain.\n    \n    <h4> 24) What is the difference between permission, rights and policy?</h4>\n    \n    “Policy” is assigned on active directory, like site, domain and OU. The “Rights” are assign to users and groups, whereas, the “Permission” is assigned for network resources like file, folders and printers.\n    \n    <h4>25) What is DC and ADC stands for?</h4>\n    \n    DC stands for domain controller and ADC stands for additional domain controller.\n    \n    ADC is a backup of domain controller. Domain controller is a server that checks the security measures like user id, password.\n    \n    <h4> 26) What is the difference between DC (Domain controller) and ADC ( Additional Domain Controller)?</h4>\n    \n    There is one difference between domain controller and additional domain controller, on DC all five operational roles are available while in ADC only three operational role is available.\n    \n    <h4> 27) What are the operational roles for DC (Domain controller) and ADC ( Additional Domain Controller)?</h4>\n    \n    Operational roles for DC (Domain controller) are:<br>\n    \n    Domain Naming Master<br>\n    Schema Master<br>\n    RID Master<br>\n    PDC Emulator<br>\n    Infrastructure Master<br>\n    Operational roles for ADC (Additional Domain Controller) are:<br>\n    \n    PDC Emulator<br>\n    RID Master<br>\n    Infrastructure Master<br>\n    <h4> 28) What is a “Default Gateway”?</h4>\n    \n    Default gateway is the IP address of the router in the network.  In any case, if the users wants to switch on to another network, or if they cannot locate their particular network than their query will be forwarded to default gateway.\n    \n    <h4>29) How you can take backup of emails in ms outlook?</h4>\n    \n    To take a back-up in the ms outlook, you have to go in control panel. In control panel you have to go under mail option and then open the data file, select personal folder and click on open folder. After that, you have to copy .pst and have to paste it wherever you want the backup.\n    \n    <h4>30) What is trusting domain and trusted domain?</h4>\n    \n    In trusting domain resources are available, while in trusted domain user’s account is available.\n    \n    <h4> 31) What is BUS speed?</h4>\n    \n    The rate of communication speed between microprocessor and RAM is known as BUS speed.\n    \n    <h4>32) Name the Active Directory Partitions?</h4>\n    \n    There are three types of active directory partitions\n    \n    Schema partition<br>\n    Configuration partition<br>\n    Domain partition<br>\n    <h4> 33) What is Fixboot?</h4>\n    \n    Fixboot write a new partition boot sector on to the system partition.\n    \n    <h4> 34) How many logical drive is it possible to fit on to a physical disk?</h4>\n    \n    The maximum number of the logical drive that can fit on a physical disk is 24, while the extended partition can only have 23 logical drives.\n    \n    <h4> 35) What is B Router?</h4>\n    \n    B router means Bridge router. To provide communication between two or more different network like computer to computer or computer to internet, B Router is used.\n    \n    <h4> 36) What is the major difference you can mention about Gateway and Router?</h4>\n    \n    Gateway works on different network architecture and router works on same network architecture.\n    \n    <h4> 37) What is packet?</h4>\n    \n    A packet is a logical grouping of information that comprises a header which contains user data and location information.\n    \n    <h4> 38) What is SCSI?</h4>\n    \n    SCSI stands for Small Computer System Interface. It is a standard electronic interface that allows personal computers to communicate with peripheral hardware such as disk drives, tape drives, printers, CD-ROM drives. In “SCSI” the rate of data transmission is fast.\n    \n    <h4>  39) How many classes are there for “IP addresses” and what are the ranges?</h4>\n    \n    They are segregated into five classes<br>\n    \n    Class A  ===          0 -126 ( 127 is reserved for loop back)<br>\n    Class B  ====    128- 191<br>\n    Class C  ====    192-223<br>\n    Class D  ====   224-239<br>\n    Class E  ====   240-255<br>\n    <h4>40) Explain the term FIXMBR?</h4>\n    \n    FIXMBR it is a repair tool. It repairs the Master boot record of the Partition Boot Sector.\n    \n    <h4>41) Explain the term SID?</h4>\n    \n    SID stands for Security Identifier. Every computer object has a unique ID which is known as SID.\n    \n    <h4>42) What is the difference between incremental backup and differential backup?</h4>\n    \n    Differential backups will select only files that are changed since the last backup.<br>\n    \n    Incremental backups will select only the data that has changed since the last backup.<br>\n    \n    Example, On Sunday you do a backup of a 5 text file each of 40 MB. Total backup size will be 200MB<br>\n    \n    On Monday you change 2 lines in just ONE of the text file.<br>\n    \n    Under Differential backup, only the changed text file will be backed up. Total backup size will be 40MB<br>\n    \n    Under Incremental backup, only the data corresponding to the 2 lines will be backed up.  Total backup size will be just in bytes.\n    \n    <h4> 43) What is the difference between server OS and desktop OS?</h4>\n    \n    Server OS gives centralized administration for users, shared resources and security while desktop OS gives access to only local administration.\n    \n    <h4> 44) What is the difference between the MSI file and .EXE file?</h4>\n    \n    MSI (Microsoft Installer) allows install, uninstall and repair the program with a single file, while .EXE file needs two files to install and uninstall the software. Also,.EXE file is able to detect the existing version of the software and give option to user to uninstall the program while MSI will instruct the users to use the add and remove program in control panel to remove the existing product first and then you can install the new program.\n    \n    <h4> 45) What is BSOD? How do you troubleshoot it?</h4>\n    \n    BSOD stands for blue screen of death. When there is some fault in OS or hardware then Windows can’t run the program and gives a blue screen with a code. To resolve this problem the best way is to reboot the system.  If it doesn’t work than boot the system in the safe mode.\n    \n    <h4> 46) What is PTR (Program Troube Record) record?</h4>\n    \n    This program record is used to check if the server name is connected with the IP address, it is exactly opposite to the ‘A’ record. This record is basically created in reverse lookup zone, so it is also known as Reverse DNS records or pointer record.\n    \n    PTR record= Give me an IP address and I will give you the name<br>\n    \n    ‘A’ record= Give me the name and I will give you the IP address\n    \n    <h4> 47)  What is reservation?</h4>\n    \n    Basically, the term “Reservation” is used in DHCP server. Some network equipment or computer system needs a specific IP address, in such case we make a reservation in DHCP server for that particular computer system.  By creating reservation it gives access to that particular IP address and at the same time prevents other computer system to use that IP address.\n    \n    <h4>48) What is SMTP server or POP server?</h4>\n    \n    POP stands for post office protocol. It is basically used for sending and receiving the mail.\n    \n    SMTP stands for simple mail transfer protocol. It is used for mail receiving purpose in the network.\n    \n    <h4> 49) What is RIS and why you use RIS?</h4>\n    \n    RIS stands for remote installation services. It is used to install image from a Window server to a new hardware.  We use RIS because installing OS every time using a CD would be more time-consuming.\n    \n    <h4> 50) What is “Bootloader”?</h4>\n    \n    Bootloader facilitates the loading of operating system on the system. It enables the booting process and gives OS option to the users while starting the system.\n</ion-content>\n'/*ion-inline-end:"C:\Users\CyberBlack\Music\network\src\pages\desktopsp\desktopsp.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DesktopspPage);

//# sourceMappingURL=desktopsp.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicalspPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TechnicalspPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TechnicalspPage = (function () {
    function TechnicalspPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TechnicalspPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TechnicalspPage');
    };
    return TechnicalspPage;
}());
TechnicalspPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-technicalsp',template:/*ion-inline-start:"C:\Users\CyberBlack\Music\network\src\pages\technicalsp\technicalsp.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Technical Support</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="color:#666666; background: #f2f2f2;">\n\n    <h4>1) Name some of the latest Computer Processors?</h4>\n    \n    Intel Pentium Quad Core, Intel I3, I5 and I7 processor are some of the latest Computer Processor.\n    \n    <h4>2) What does a ‘?’ sign in device manager indicate?</h4>\n    \n    When this sign appears, it indicates the device is not properly installed.  Such problem arises in case of brand new plug-in cards.\n    \n    <h4>3) How will you cope up with a customer, who complains about a brand new printer and system, and yet failing to get a proper print copy?</h4>\n    \n    The first thing I will ask the customer, whether the system is properly connected with the printer. The next thing would be to check the Device Driver. Many times it happens that if you install an incorrect Device Driver, the print copy would not be clear.\n    \n    <h4>4) How you keep yourself updated with the current technology?</h4>\n    \n    I keep myself connected with social networking sites, the first platform for any technological advancement news and also keep surfing on the latest technology on internet.\n    \n    <h4>5) What are the tools that will be helpful to you in identifying the problems and solving them?</h4>\n    \n    Manuals, Knowledge, team-members and experience are the tools that will be helpful to trouble shoot the problem and solving them.\n    \n    Hardware\n     \n    \n    <h4>6) What is the expected period of an average call while dealing with the customers?</h4>\n    \n    The expected period of an average call would be around 2-3 minutes, sometimes less or more depending on the problem complexity.\n    \n    <h4> 7) Why 8085 processor is called 8 bit processor?</h4>\n    \n    It is called 8 bit processor as it has 8 bit ALU (Arithmetic Logic Unit).\n    \n    \n     \n    <h4> 8) What is stack and can we use ROM as stack?</h4>\n    \n    Stack is a portion of RAM used for saving the content of the program counter and general purpose registers.  ROM cannot be used as a stack, as it is not possible to write on ROM.\n    \n    <h4> 9) What does it mean by interrupt?</h4>\n    \n    To perform a particular task, interrupt is a signal send by external device to the processor.\n    \n    <h4>10) What is a Microprocessor?</h4>\n    \n    A microprocessor is a program controlled device. It retrieves the data instructions from memory and decodes them, after decoding, it executes the instruction.\n    \n    <h4>11) What is Latch?</h4>\n    \n    It is a temporary storage device controlled by a timing signal, which can store 1 or 0.  It is a D-type flip flop storage device.\n    \n    <h4> 12) What is the disadvantage of microprocessor?</h4>\n    \n    It has a limitation on the size of the data, also most microprocessor does not support floating point operations.\n    \n    <h4> 13) What do you mean by DHCP?</h4>\n    \n    DHCP stands for Dynamic Host Configuration Protocol, it is a network protocol, and it enables the server to assign automatically, IP address to a computer.\n    \n    <h4>14) What do you mean by OSI?</h4>\n    \n    OSI stands for open system interconnection.  It is a standard description or a reference model of how message should be conveyed between any two points within a telecommunication network. It is made up of several layers and each layer provides services to the layer above.\n    \n    <h4>15) What is TCP/IP?</h4>\n    \n    TCP/IP stands for Transmission Control Protocol or Internet protocol.  It is used to connect hosts on the internet, by transferring data over the network.\n    \n    <h4>16) What are RJ45 and RJ11 connectors?</h4>\n    \n    RJ45 connectors are used for LAN/internet connections while RJ11 connectors are used for Table cable connectors.\n    \n    <h4>17) What do you mean by packaging a Microprocessor? What are the different packaging’s available?</h4>\n    \n    The process of packaging a microprocessor to the computer motherboard is known as a microprocessor.  The different types of microprocessor’s packaging are\n    \n    PGA<br>\n    SPGA<br>\n    SECC<br>\n    LGA<br>\n    <h4>18) Explain the Cache memory? What is the advantage of a processor having more cache memory?</h4>\n    \n    \n     \n    Cache memory is the memory area between Processor and Ram.  If the cache memory increases, the speed of the system will also increases.\n    \n    <h4> 19) What is over clocking? What are the advantages of over clocking?</h4>\n    \n    It is a process where the computer component is forced to run at a higher clock rate.\n    \n    The advantages of over clocking are:<br>\n    \n    Increases the CPU’s performance<br>\n    It is cost-saving<br>\n    Makes PC games and Applications to run faster\n    <h4> 20) What is chipset? How is it different from processor and motherboard?</h4>\n    \n     Chipset is one of the processing devices in a computer. It is a number of integrated circuits, designed to control how information travels between other components and processor. It is a group of microchip to work as a unit to perform one or more related functions. While motherboard is where all other components like CPU, Memory, Sockets for external connectors and drives are attached.  Chipset is a built in feature of Motherboard. While, processor is a main integrated circuit block, which does the function according to the instruction of a computer program.  It is based on the logical, arithmetical and input/output of the system.\n    \n     <h4> 21) What is heat sink and what is the use in the system?</h4>\n    \n    To lower the temperature of a device, a heat sink component is used. It is there on the microprocessor and if it is not functioning well then the computer will shut down automatically.\n    \n    <h4>22) What is Jumper and why you need it?</h4>\n    \n    Jumper is a metal bridge that closes an electric circuit. A jumper consists of a plastic plug that fits over a pair of protruding pins.  It is used to change the board’s parameters.\n    \n    <h4> 23) What are the different types of DRAM?</h4>\n    \n    The different types of DRAM are SRAM, VRAM, SGRAM, DDR-SDRAM\n    \n    <h4> 24) What might be the problem when you don’t see the display?</h4>\n    \n    Power related issues<br>\n    Heat sink related issues<br>\n    CPU fan related issues<br>\n    Improper Jumper settings<br>\n    <h4>25) What is SATA?</h4>\n    \n    SATA stands for Serial Advanced Technology Attachment.  It is high speed computer bus interface designed to connect the host bus adapters to mass storage devices, such as hard disk drives and optical drives.\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\CyberBlack\Music\network\src\pages\technicalsp\technicalsp.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TechnicalspPage);

//# sourceMappingURL=technicalsp.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/desktopsp/desktopsp.module": [
		280,
		5
	],
	"../pages/intro/intro.module": [
		279,
		4
	],
	"../pages/linuxc/linuxc.module": [
		276,
		3
	],
	"../pages/linuxint/linuxint.module": [
		277,
		2
	],
	"../pages/networkqa/networkqa.module": [
		278,
		1
	],
	"../pages/technicalsp/technicalsp.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataProvider = (function () {
    function DataProvider() {
        this.items = [
            {
                title: "10 Gigabit Ethernet – 10GbE (IEEE 802.3ae)",
                description: "802.3ae is the IEEE name for its 10 Gigabit Ethernet standard (also called 10GE, 10GbE or 10 Gb Ethernet). The 802.3ae standard is a supplement to the 802.3 standard that defines Ethernet. The IEEE formally ratified the standard on 12 June, 2002.The 10 Gigabit Ethernet version of Ethernet operates in full-duplex mode only and supports data transfer rates of 10 gigabits per second for distances up to 300 meters on multimode fiber optic cables and up to 40 kilometers on single mode fiber optic cables."
            },
            {
                title: ".dam",
                description: "In computer viruses .dam is part of the McAfee naming convention for viruses and Trojans. McAfee attaches the .dam suffix to the end of a virus name to indicate that the sample is damaged and will not actually run."
            },
            {
                title: ".dr",
                description: "In computer viruses .dr is part of the McAfee naming convention for viruses and Trojans. McAfee attaches the .dr suffix to the end of a virus names to indicate that it detected a dropper; a file that installs or drops other malware"
            },
            {
                title: "1000Base-T (IEEE 802.3ab)",
                description: "1000Base-T is a specification for Gigabit Ethernet over copper wire (IEEE Std. 802.3ab). This standard defines 1 Gb/s data transfer over distances of up to 100 meters using four pairs of CAT-5 balanced copper cabling and a 5-level coding scheme."
            },
            {
                title: "100Base-T (IEEE 802.3u) Fast Ethernet",
                description: "A networking standard that supports data transfer rates up to 100 Mbps (100 megabits per second). 100BASE-T is based on the older Ethernet standard. Because it is 10 times faster than Ethernet, it is often referred to as Fast Ethernet. Officially, the 100BASE-T standard is IEEE 802.3u."
            },
            {
                title: "10Base-2",
                description: "One of several adaptations of the Ethernet (IEEE 802.3) standard for Local Area Networks (LANs). The 10Base-2 standard (also called Thinnet) uses 50 ohm coaxial cable(RG-58 A/U) with maximum lengths of 185 meters. This cable is thinner and more flexible than that used for the 10Base-5 standard. The RG-58 A/U cable is both less expensive and easier to place."
            },
            {
                title: "10Base-T (Twisted Pair Ethernet)",
                description: "One of several adaptations of the Ethernet (IEEE 802.3) standard for Local Area Networks (LANs). The 10Base-T standard (also called Twisted Pair Ethernet) uses a twisted-pair cable with maximum lengths of 100 meters. The cable is thinner and more flexible than the coaxial cable used for the 10Base-2 or 10Base-5 standards."
            },
            {
                title: "10Base5",
                description: "The original cabling standard for Ethernet that uses coaxial cables. The name derives from the fact that the maximum data transfer speed is 10 Mbps, it uses baseband transmission, and the maximum length of cables is 500 meters"
            },
            {
                title: "2-205 rule",
                description: "A rule for the configuration of 100Base-T, or Fast Ethernet, networks. According to the rule, the maximum network distance, or network diameter, of two non-stackable network hubs connected by copper cabling cannot exceed 205 meters (approx. 672 feet)."
            },
            {
                title: "3COM",
                description: "One of the largest networking companies in the world. The name is derived from the prefixes of three terms -- computer, communication, and compatibility. The company was founded in 1979 by Dr. Robert Metcalfe, one of the co-inventors of Ethernet.3COM offers a wide array of products, with special emphasis on hubs, switches, routers, modems, and NICs."
            },
            {
                title: "4shared",
                description: "4shared is a free online file-sharing service that provides storage for music, video and photo files. Upon registering for an account 4shared will provide users with 10-GB of online storage space. However, files stored by users with free accounts are removed if you do not log in the account for 180 days.  4shared sets a 2048-MB size limitation per file."
            },
            {
                title: "5-4-3 rule",
                description: "Ethernet and IEEE 802.3 implement a rule, known as the 5-4-3 rule, for the number of repeaters and segments on shared access Ethernet backbones in a tree topology.The 5-4-3 rule divides the network into two types of physical segments: populated (user) segments, and unpopulated (link) segments. User segments have users' systems connected to them. Link segments are used to connect the network's repeaters together. The rule mandates that between any two nodes on the network, there can only be a maximum of five segments, connected through four repeaters, or concentrators, and only three of the five segments may contain user connections."
            },
            {
                title: "802.11 IEEE wireless LAN standards",
                description: "802.11 and 802.11x refers to a family of specifications developed by the IEEE for wireless LAN (WLAN) technology. 802.11 specifies an over-the-air interface between a wireless client and a base station or between two wireless clients. The IEEE accepted the specification in 1997. "
            },
            {
                title: "802.11a",
                description: "An extension to 802.11 specification developed by the IEEE for wireless LAN (WLAN) technology. 802.11 specifies an over-the-air interface between a wireless client and a base station or between two wireless clients. The 802.11a specification uses an orthogonal frequency division multiplexing encoding scheme rather than FHSS or DSSS and provides up to 54 Mbps in the 5GHz band."
            },
            {
                title: "802.11ac",
                description: " A wireless LAN (WLAN) specification under development by the IEEE (Institute of Electrical and Electronics Engineers) that delivers wireless data transfer rates in the range of 433 Mbps (Megabits per second) per spatial stream. With support for up to eight streams, the 802.11ac specification offers a theoretical maximum data transfer speed of more than 3Gbps (Gigabits per second), and can deliver 1.3Gbps transfer speeds with a more common three-antenna (three streams) design."
            },
            {
                title: "802.11ac Wave 2",
                description: "The 802.11ac -2013 update, or 802.11ac Wave 2, is an addendum to the original 802.11acwireless specification that utilizes MU-MIMO technology and other advancements to help increase theoretical maximum wireless speeds from 3.47 Gbps in the original spec to 6.93 Gbps in 802.11ac Wave 2."
            },
            {
                title: "802.11ad",
                description: "A wireless LAN (WLAN) specification under development by the IEEE (Institute of Electrical and Electronics Engineers) that will serve as the successor to the 802.11acspecification, which is also currently under development. The 802.11ad standard is expected to be approved by the IEEE in 2014.The 802.11ad specification operates in the 60GHz frequency band, as opposed to earlier 802.11 specifications such as 802.11ac, which operates in the 5 GHz range, and 802.11n, which operates in both the 5 GHz and 2.4 GHz ranges. It is also designed to offer much higher transfer rates than previous 802.11 specs, with a theoretical maximum transfer rate of up to 7Gbps (Gigabits per second)."
            },
            {
                title: "802.11ah",
                description: "802.11ah is a wireless LAN (WLAN) specification developed by the IEEE (Institute of Electrical and Electronics Engineers) that operates in frequency bands below one gigahertz (900 MHz) while delivering a range nearly twice that of previous Wi-Fi technologies.In addition to its extended range, another key benefit with the 802.11ah standard is its low power consumption needs, making it ideally suited for Internet of Things (IoT) devices used in smart homes and smart cities, connected cars, digital health care markets, and industrial and retail environments."
            },
            {
                title: "802.11b",
                description: "Also referred to as 802.11 High Rate or Wi-Fi, it is an extension to 802.11 specification developed by the IEEE for wireless LAN (WLAN) technology that applies to wireless LANS and provides 11 Mbps transmission (with a fallback to 5.5, 2 and 1 Mbps) in the 2.4 GHz band. 802.11b uses only DSSS. 802.11b was a 1999 ratification to the original 802.11 standard, allowing wireless functionality comparable to Ethernet."
            },
            {
                title: "802.11g",
                description: "An extension to 802.11 specification developed by the IEEE for wireless LAN (WLAN) technology that is used for transmission over short distances at up to 54-Mbps in the 2.4 GHz bands."
            },
            {
                title: "802.11n",
                description: "An extension to 802.11 specification developed by the IEEE for wireless LAN (WLAN) technology. 802.11n builds upon previous 802.11 standards by adding multiple-input multiple-output (MIMO)."
            },
            {
                title: "802.11r",
                description: "An extension to 802.11 specification developed by the IEEE for wireless LAN (WLAN) technology. 802.11r, also called Fast Basic Service Set (BSS) Transition, supports VoWi-Fi handoff between access points to enable VoIP roaming on a Wi-Fi network with 802.1Xauthentication."
            },
            {
                title: "802.16",
                description: "Commonly referred to as WiMAX or less commonly as WirelessMAN or the Air Interface Standard, IEEE 802.16 is a specification for fixed broadband wireless metropolitan access networks (MANs) that use a point-to-multipoint architecture. Published on April 8, 2002, the standard defines the use of bandwidth between the licensed 10GHz and 66GHz and between the 2GHZ and 11GHz (licensed and unlicensed) frequency ranges and defines a MAC layer that supports multiple physical layer specifications customized for the frequency band of use and their associated regulations. 802.16 supports very high bit rates in both uploading to and downloading from a base station up to a distance of 30 miles to handle such services as VoIP, IP connectivity and TDM voice and data."
            },
            {
                title: "802.1x",
                description: "Not to be confused with 802.11x, which is the term used to describe the family of 802.11 standards for wireless LAN technology, 802.1X is the IEEE standard for port-based Network Access Control for enabling restricted use of IEEE 802 LAN service access points (ports) to secure communication between authenticated and authorized devices."
            },
            {
                title: "@m",
                description: "In computer viruses, @m is part of the McAfee naming convention for viruses and Trojans. McAfee attaches the @m suffix to the end of a virus name to indicate that this virus can transmit itself via e-mail. The single m indicates that this is a low-volume transmission, usually one e-mail transmitted per e-mail that a user receives."
            },
            {
                title: "@mm",
                description: "In computer viruses @mm is part of the McAfee naming convention for viruses and Trojans. McAfee attaches the @mm suffix to the end of a virus name to indicate that this virus can transmit itself via e-mail. The double m indicates a high-volume transmission, usually hundreds of e-mails per infected machine."
            },
            {
                title: "AAA",
                description: "Short for authentication, authorization and accounting, a system in IP-based networking to control what computer resources users have access to and to keep track of the activity of users over a network.||||Authentication is the process of identifying an individual, usually based on a username and password. Authentication is based on the idea that each individual user will have unique information that sets him or her apart from other users.||||Authorization is the process of granting or denying a user access to network resources once the user has been authenticated through the username and password. The amount of information and the amount of services the user has access to depend on the user's authorization level.||||Accounting is the process of keeping track of a user's activity while accessing the network resources, including the amount of time spent in the network, the services accessed while there and the amount of data transferred during the session. Accounting data is used for trend analysis, capacity planning, billing, auditing and cost allocation."
            },
            {
                title: "AARP",
                description: "Short for AppleTalk Address Resolution Protocol, a protocol for mapping a device's physical hardware address to a temporary Appletalk network-assigned address in Macintosh computer LANs. When a protocol stack sends a data packet, the protocol address specifies the destination. The data link layer relies on AARP to translate the protocol address into the hardware address of the destination node."
            },
            {
                title: "AAUI",
                description: "Short for Apple Attachment Unit Interface, A 14-position, 0.050-inch-spaced ribbon contact connector.  Except for the pins that supply power, each AAUI signal has the same description, function, and electrical requirements as the AUI (Attachment Unit Interface) signal. The AAUI is the Apple standard used to connect Ethernet transceivers in early Power Macintosh and Quadra computers."
            },
            {
                title: "ABR",
                description: "Short for available bit rate, or Class C quality of service, an ATM bandwidth-allocation service that adjusts the amount of bandwidth based on the amount of traffic in the network. ABR service provides a guaranteed minimum bandwidth capacity but allows data to be bursted at higher capacities when the network is free."
            },
            {
                title: "AC/DC virus",
                description: "A malware worm that first appeared in July 2012, targeting Iranian nuclear facilities and turning infected PCs on at night before blasting the music band AC/DC's classic hit 'Thunderstruck'.The AC/DC virus follows several earlier attacks on Iran's nuclear program and oil facilities, including the Stuxnet and Flame viruses.  Iran has stated it believes the U.S. and Isreal are responsible for the attacks. "
            },
            {
                title: "access",
                description: " To use. For example, programs can access memory , which means they read data from or write data to main memory. A user can access files, directories, computers, or peripheral devices. More specifically, access often means to read data from or write data to a mass storage device. The time it takes to locate a single byte of information on a mass-storage device is called the access time.To visit a Web site."
            },
            {
                title: "access code",
                description: "Same as password, a series of characters and numbers that enables a user to access a computer."
            },
            {
                title: "access control",
                description: "Refers to mechanisms and policies that restrict access to computer resources. Also see ACL."
            },
            {
                title: "access control entry",
                description: "Abbreviated as ACE, access control entry is an entry in an access control list (ACL) that will grant or deny a user or group access to a resource."
            },
            {
                title: "accounting",
                description: "In information technology, accounting is the process of keeping track of a user's activity while accessing a network's resources, including the amount of time spent in the network, the services accessed while there and the amount of data transferred during the session. Accounting data is used for trend analysis, capacity planning, billing, auditing and cost allocation"
            },
            {
                title: "ACL - access control list",
                description: "Short for access control list, a set of data that informs a computer's operating system which permissions, or access rights, that each user or group has to a specific system object, such as a directory or file. Each object has a unique security attribute that identifies which users have access to it, and the ACL is a list of each object and user access privileges such as read, write or execute."
            },
            {
                title: "Active Directory",
                description: "A directory service from Microsoft that is a part of Windows 2000. It is an implementation of Internet standard directory and naming protocols that uses a database engine for transaction support and also supports a variety of application programming interface standards."
            },
            {
                title: "Active Directory Service Interfaces",
                description: "Active Directory Service Interfaces (ADSI) enable systems administrators and developers of scripts or C/C++ applications to easily query for and manipulate directory service objects. Active Directory Service Interfaces abstract the capabilities of different directory services from different network vendors to present a single set of directory service interfaces for managing network resources. Administrators and developers can use ADSI to manage the resources in a directory service, regardless of which network environment contains the resource. ADSI enables administrators to automate common tasks such as adding users and groups, managing printers, and setting permissions on network resources. "
            },
            {
                title: "active impostor acceptance",
                description: "In a biometric security system, when an impostor intentionally submits a modified or forged biometric sample as that of an authentic enrollee with the purpose of gaining access to a system using the enrollee's identity. The forged sample is compared to the enrollee's reference template. Active impostor acceptance implies that the impostor successfully gains entrance into the system using the falsified identity."
            },
            {
                title: "active reconnaissance",
                description: "The process of collecting information about an intended target of a malicious hack by probing the target system. Active reconnaissance typically involves port scanning in order to find weaknesses in the target system (i.e., which ports are left vulnerable and/or if there are ways around the firewall and routers). The process of exploiting the system can then be carried out once the hacker has found a way to access the system."
            }, {
                title: "ADC - Application Delivery Controller",
                description: "Application Delivery Controllers (ADCs) are an evolution of server load balancers (SLB) that combine traditional load-balancing capabilities with features like automatic application health checks, SSL offload, proxy and reverse proxy capabilities, RAM caching, TCP reuse, Web and DNS application firewalls (WAF and DAF) and application access management (AAM).Together these features in an Application Delivery Controller work to ensure that an enterprise's data center applications and networks remain highly available, accelerated and secure. At the heart of an Application Delivery Controller is its load-balancing capabilities, which automatically distribute processing and communications evenly across computer networks and servers so that no single device is overwhelmed, preventing potential downtime or performance degradation."
            },
            {
                title: "administrative domain",
                description: "A collection of networks, computers, and databases under a common administration, such as an enterprise's intranet. The devices that operate in a singular administrative domain share common security features that are administered across the network and the entities that are associated with it."
            },
            {
                title: "ADN - Application Delivery Network",
                description: "Application Delivery Network (ADN) is a suite of technologies developed to provide application availability, security, visibility and acceleration. ADNs are designed to ensure the safe and efficient distribution of business-critical applications across an enterprise's network."
            }, {
                title: "ADSI",
                description: "Short for Analog Display Services Interface (Bellcore standard). Short for Active Directory Service Interfaces (Microsoft)."
            }, {
                title: "adware",
                description: " Adware is software that contains advertisements embedded in the application. Adware is considered a legitimate alternative offered to consumers who do not wish to pay for software. There are many ad-supported programs, games or utilities that are distributed as adware (or freeware). Today we have a growing number of software developers who offer their goods as 'sponsored software' until you pay to register. This is the most common form of adware. If you're using legitimate adware, when you stop running the software, the ads should disappear, and you always have the option of disabling the ads by purchasing a software license key."
            }, {
                title: "AES",
                description: " Short for Advanced Encryption Standard, a symmetric 128-bit block data encryption technique developed by Belgian cryptographers Joan Daemen and Vincent Rijmen. The U.S government adopted the algorithm as its encryption technique in October 2000, replacing the DES encryption it used. AES works at multiple network layers simultaneously. The National Institute of Standards and Technology (NIST) of the U.S. Department of Commerce selected the algorithm, called Rijndael (pronounced Rhine Dahl or Rain Doll), out of a group of five algorithms under consideration, including one called MARS from a large research team at IBM.While the terms AES and Rijndael are used interchangeably, there are some differences between the two. AES has a fixed block size of 128-bits and a key size of 128, 192, or 256-bits, whereas Rijndael can be specified with any key and block sizes in a multiple of 32-bits, with a minimum of 128-bits and a maximum of 256-bits. Short for Audio Engineering Society, AES is a professional standards organization that is devoted exclusively to audio technology. Founded in 1948, AES is an international organization with a mission of uniting audio engineers, creative artists, scientists and students. AES currently has over 14,000 members and offers guest speakers, technical tours, demonstration, scientific presentations and exhibitions. The organization is also involved in the creation and maintenance of international standards in the areas of digital and analog audio engineering, communications technology, acoustics, media preservation and creative practice."
            }, {
                title: "AFP",
                description: " Short for AppleTalk Filing Protocol, the client/server file sharing protocol used in an AppleTalk network. A non-Apple network can only access data from an AppleShare file server by first translating into the AFP language. AFP over TCP/IP, a flavor of AFP, allows users to access AFP servers over TCP/IP networks.Short for Advanced Function Presentation, IBM's AFP platform is a published standard in the print industry for printing variable data at very high speeds with complete integrity. AFP incorporates other industry formats, including EPS, PDF, TIFF, GIF, JPEG, XML, XSL, PostScript, PCL and PPML.to cover the entire range of text, image, graphics, process color, highlight color and monochrome printing. AFP has the capability to print on standard printing device and deliver content via HTML, fax, e-mail or screen. [Adapted from the IBM Printers Web site]."
            }, {
                title: "air gap",
                description: "In networks, air gap is a type of security where the network is secured by keeping it separate from other local networks and the Internet. While this provides security, it also limits access to the network by clients."
            }, {
                title: "Airframe",
                description: "An open source cloud computing platform targeted at organizations in the thinking stage of adopting a private cloud services model or evaluating options and alternatives for private cloud solutions. Airframe is distributed by Piston, a San Francisco-based cloud computing startup.Airframe offers a simple installation process and Piston claims it can deliver on all of OpenStack's core capabilities, including compute, storage, networking and cloud management. The platform is intended as a stepping stone to the company's paid Piston Enterprise OpenStack product."
            }, {
                title: "AirWatch",
                description: "An enterprise mobility management (EMM) and mobile device management (MDM) provider that offers solutions for handling the management of mobile devices, applications and mobile content in the enterprise.AirWatch competes in the mobile device management market with other MDM companies such as Citrix Systems (Xenprise), Perimeter, SAP Sybase, IBM (Fiberlink), Oracle (Bitzer), Continuum and MobileIron. Founded in 2003, AirWatch was recently acquired by VMware in January 2014 for $1.54 billion."
            }, {
                title: "All-to-all broadcast",
                description: "In distributed computing, AAB or All-to-all broadcast is the process where every node broadcasts its information to all other nodes. "
            }, {
                title: "Aloha",
                description: "A protocol for satellite and terrestrial radio transmissions. In pure Aloha, a user can transmit at any time but risks collisions with other users' messages. 'Slotted Aloha' reduces the chance of collisions by dividing the channel into time slots and requiring that the user send only at the beginning of a time slot. Aloha was the basis for Ethernet, a local area network protocol. Aloha Networks, Inc. -- A San Francisco-based company specializing in providing satellite-based Internet access to large Internet Service Providers. Founded by the inventor of the Aloha system, Norman Abramson.@loha @home -- software from Media Synergy (www.mediasyn.com) that allows a user to add graphics, animation, and sound to e-mail messages."
            }, {
                title: "Amazon EC2",
                description: "Short for Amazon Elastic Computer Cloud, Amazon EC2 is a commercial Web service from Amazon's Web Services (AWS) that lets customers 'rent' computing resources from the EC2 cloud. EC2 provides storage, processing, and Web services to customers. EC2 is a virtual computing environment, that enables customers to use Web service interfaces to launch instances with a variety of operating systems, load them with your custom applications, manage your network's access permissions, and run your image using as many or few systems as you need."
            }, {
                title: "amplifier repeater",
                description: "A repeater that cannot distinguish between a data signal and transmission noise along a network. An amplifier repeater will receive the signal and amplify it regardless of the integrity of the signal."
            }, {
                title: "Android mobile security",
                description: "Mobile security applications for Google's Android platform help protect Android smartphone and tablet mobile devices from malware threats as well as unauthorized access following accidental loss or theft of the device.Additional security features frequently offered by Android mobile security apps include securing data on the device, VPN connectivity for protecting data in transit, scanning websites for potential phishing schemes or other fraudulent activity, helping users locate their device if lost or stolen, and more.Android mobile security applications are available from Google as well as well-known third-party security vendors such as Lookout, Avast, Kaspersky, Symantec and Qihu."
            }, {
                title: "ANSI Bomb",
                description: "Character sequences that reprogram specific keys on the keyboard. If ANSI.SYS is loaded, some bombs will display colorful messages, or have interesting, but usually unwanted graphical effects."
            }, {
                title: "anti-adware",
                description: "Anti-adware refers to any software utility that scans your system and removes adware, spyware, keyloggers, trojans, and other malicious code from your computer. Some of these programs are undetectable to anti-virus software and many users now use an anti-adware utility in addition to anti-virus software to protect their system."
            }, {
                title: "anti-malware",
                description: "Anti-malware is software tools and programs designed to identify and prevent malicious software, or malware, from infecting computer systems or electronic devices. Anti-malware tools can also include malware removal capabilities. The phrase anti-malware can range from code integrated with other software programs or in the operating system itself to third-party tools that scan for and remove a wide variety of malware variants.Also spelled as antimalware, anti-malware software is commonly thought of as software tools for desktops and laptops, but anti-malware tools also abound for servers, workstations and mobile devices like smartphones and tablets."
            },
            {
                title: "AntiExe",
                description: "A boot sector virus that can infect floppy boot records and hard disk master boot records. AntiExe will infect hard drives only when an attempt to boot from an infected diskette is made. Once the virus has infected the hard drive, all non-write-protected floppies used in the machine will be infected. AntiExe was first discovered in February, 1995."
            },
            {
                title: "antivirus program",
                description: "A utility that searches a hard disk for viruses and removes any that are found. Most antivirus programs include an auto-update feature that enables the program to download profiles of new viruses so that it can check for the new viruses as soon as they are discovered."
            },
            {
                title: "AODV - Ad Hoc On-Demand Distance Vector",
                description: "Short for Ad Hoc On-Demand Distance Vector, AODV is a routing protocol for ad hoc mobile networks with large numbers of mobile nodes. The protocol's algorithm creates routes between nodes only when the routes are requested by the source nodes, giving the network the flexibility to allow nodes to enter and leave the network at will. Routes remain active only as long as data packets are traveling along the paths from the source to the destination. When the source stops sending packets, the path will time out and close.AODV supports both unicast and multicast."
            }, {
                title: "AP - Access Point",
                description: "Short for Access Point, a hardware device or a computer's software that acts as a communication hub for users of a wireless device to connect to a wired LAN. APs are important for providing heightened wireless security and for extending the physical range of service a wireless user has access to."
            }, {
                title: "APPC",
                description: "Short for Advanced Program-to-Program Communications. Also known as LU 6.2 and based on IBM's SNA, APPC is a communication protocol that transaction programs in a distributed computing environment can use to talk to each other. Using APPC, interconnected systems can communicate and share the processing of programs. It consists of two interfaces: programming and data-exchange. The programming interface replies to requests from programs requiring communication; the data-exchange interface establishes sessions between programs.APPC is an open standard and is supported on most platforms."
            }, {
                title: "Appending Virus",
                description: "A virus that inserts a copy of its malicious code at the end of the file. The goal of an appending virus is not to harm the host program, but to modify it to hold the virus code and then be able to run itself."
            }, {
                title: "AppleTalk",
                description: "An inexpensive local-area network (LAN) architecture built into all Apple Macintosh computers and laser printers. AppleTalk supports Apple's LocalTalk cabling scheme, as well as Ethernet and IBM Token Ring. It can connect Macintosh computers and printers, and even PCs if they are equipped with special AppleTalk hardware and software."
            }, {
                title: "ApplianSys",
                description: "The name of a UK-based company that designs, builds and markets server appliances. The company's products and services include network management, messaging and security server appliances."
            }, {
                title: "application gateway",
                description: "Also known as application proxy or application-level proxy, an application gateway is an application program that runs on a firewall system between two networks. When a client program establishes a connection to a destination service, it connects to an application gateway, or proxy. The client then negotiates with the proxy server in order to communicate with the destination service. In effect, the proxy establishes the connection with the destination behind the firewall and acts on behalf of the client, hiding and protecting individual computers on the network behind the firewall. This creates two connections: one between the client and the proxy server and one between the proxy server and the destination. Once connected, the proxy makes all packet-forwarding decisions. Since all communication is conducted through the proxy server, computers behind the firewall are protected."
            }, {
                title: "Application Service Provider",
                description: "Abbreviated as ASP, a third-party entity that manages and distributes software-based services and solutions to customers across a wide area network from a central data center.In essence, ASPs are a way for companies to outsource some or almost all aspects of their information technology needs. They may be commercial ventures that cater to customers, or not-for-profit or government organizations, providing service and support to end users.According to ASPnews.com, ASPs are broken down into five subcategories:"
            }, {
                title: "application sharing",
                description: "A feature of many videoconferencing applications that enables the conference participants to simultaneously run the same application. The application itself resides on only one of the machines connected to the conference."
            }, {
                title: "application virtualization",
                description: "Application virtualization is layered on top of other virtualization technologies, such as storage virtualization or machine virtualization to allow computing resources to be distributed dynamically in real time. In standard computing, applications install their settings onto the host operating system, hard-coding the entire system to fit that application's needs. With application virtualization, each application brings down its own set of configurations on-demand, and executes in a way so that it sees only its own settings. This leaves the host operating system and existing settings unaltered.Also called application service virtualization."
            }, {
                title: "APT - advanced persistent threat",
                description: "An advanced persistent threat (APT) is a  targeted attack by cyber criminals or in some cases government institutions that uses multiple phases to first stealthily penetrate a network while avoiding detection and then obtain valuable information over an extended period of time. Advanced persistent threats are highly complex threats that differ from traditional threats in that they are targeted, persistent, evasive and extremely advanced."
            }, {
                title: "arbitrated loop",
                description: "A Fibre Channel standard defining a loop topology where up to 126 devices can communicate with one another using an arbitrated access protocol."
            }, {
                title: "ARCnet",
                description: "Short for Attached Resource Computer network, ARCnet is one of the oldest, simplest, and least expensive types of local-area network. ARCnet was introduced by Datapoint Corporation in 1977. It uses a token-ring architecture, supports data rates of 2.5 Mbps, and connects up to 255 computers. A special advantage of ARCnet is that it permits various types of transmission media -- twisted-pair wire, coaxial cable, and fiber optic cable -- to be mixed on the same network."
            }, {
                title: "Armored Virus",
                description: "A type of virus that has been designed to thwart attempts by analysts from examining its code by using various methods to make tracing, disassembling and reverse engineering more difficult. An Armored Virus may also protect itself from antivirus programs, making it more difficult to trace. To do this, the Armored Virus attempts to trick the antivirus program into believing its location is somewhere other than where it really is on the system."
            }, {
                title: "ARP - Address Resolution Protocol",
                description: "Short for Address Resolution Protocol, a network layer protocol used to convert an IP address into a physical address (called a DLC address), such as an Ethernet address. A host wishing to obtain a physical address broadcastsan ARP request onto the TCP/IP network. The host on the network that has the IP address in the request then replies with its physical hardware address.There is also Reverse ARP (RARP)which can be used by a host to discover its IP address. In this case, the host broadcasts its physical address and a RARP server replies with the host's IP address."
            }, {
                title: "ARP spoofing",
                description: "Also referred to as ARP poison routing (APR) or ARP cache poisoning, a method of attacking an Ethernet LAN by updating the target computer's ARP cache with both a forged ARP request and reply packets in an effort to change the Layer 2 Ethernet MAC address (i.e., the address of the network card) to one that the attacker can monitor. Because the ARP replies have been forged, the target computer sends frames that were meant for the original destination to the attacker's computer first so the frames can be read. A successful APR attempt is invisible to the user."
            }, {
                title: "AS",
                description: "An Autonomous System (AS) is a group of networks under mutual administration that share the same routing methodology. An AS uses an internal gateway protocol and common metrics to route packets within the AS and uses an external gateway protocol to route packets to other Autonomous Systems."
            }, {
                title: "ASIX Electronics Corporation",
                description: "The corporate name of a fabless semiconductor supplier with focus on networking, communication and connectivity applications. ASIX Electronics develops a number of computer networking controllers, including embedded networking solutions for Fast Ethernet and Gigabit Ethernet. The company was founded in May 1995 in Hsinchu Science Park, Taiwan."
            }, {
                title: "asynchronous groupware",
                description: "Groupware that enables multiple participants to collaborate but not in real time, at the same time. Asynchronous groupware includes e-mail, version control systems, or collaborative writing systems. Contrast with synchronous groupware."
            }, {
                title: "ATM - Asynchronous Transfer Mode",
                description: "Short for Asynchronous Transfer Mode, a network technology based on transferring data in cells or packets of a fixed size. The cell used with ATM is relatively small compared to units used with older technologies. The small, constant cell size allows ATM equipment to transmit video, audio, and computer data over the same network, and assure that no single type of data hogs the lineSome people think that ATM holds the answer to the Internet bandwidth problem, but others are skeptical. ATM creates a fixed channel, or route, between two points whenever data transfer begins. This differs from TCP/IP, in which messages are divided into packets and each packet can take a different route from source to destination. This difference makes it easier to track and bill data usage across an ATM network, but it makes it less adaptable to sudden surges in network traffic.When purchasing ATM service, you generally have a choice of four different types of service"
            }, {
                title: "ATM OAM Ping",
                description: "The ATM OAM Ping feature sends an ATM Operation, Administration and Maintenance (OAM) packet to confirm the connectivity of a specific permanent virtual circuit (PVC). The status of the PVC is displayed when a response to the OAM packet is received. The ATM OAM Ping feature allows the network administrator to verify PVC integrity and facilitates ATM network troubleshooting."
            }, {
                title: "Atom",
                description: "When written as AToM, it is short for Any Transport over MPLS, a technology developed by Cisco for transporting Layer 2 packets over an IP/MPLS backbone. The technology is designed to let ISPs combine multiple disparate data networks -- such as Ethernet, ATM, Frame Relay, and Serial/PPP networks -- onto a single MPLS-based backbone to save operational costs.  AToM is sometimes called Layer 2 MPLS.Atom is the name of an XML-based Web content and metadata syndication format, and an application-level protocol for publishing and editing Web resources belonging to periodically updated Web sites. All Atom feeds must be well-formed XML documents, and are identified with the application/atom+xml media type."
            }, {
                title: "attenuation",
                description: "Reduction of signal strength during transmission. Attenuation is the opposite of amplification, and is normal when a signal is sent from one point to another. If the signal attenuates too much, it becomes unintelligible, which is why most networks require repeaters at regular intervals. Attenuation is measured in decibels"
            }, {
                title: "attenuation crosstalk ratio",
                description: "Also known as headroom, attenuation crosstalk ratio (ACR) is the difference between attenuation and crosstalk at a given frequency along a cable. Measured in decibels, ACR is a calculation used in networking transmission to assure that a signal transmitted across a twisted-pair cable is stronger at the receiving end than any interference signals imposed on that same pair by crosstalk from adjacent pairs."
            }, {
                title: "audit trail",
                description: "A record showing who has accessed a computer system and what operations he or she has performed during a given period of time. Audit trails are useful both for maintaining security and for recovering lost transactions. Most accounting systems and database management systems include an audit trail component. In addition, there are separate audit trail software products that enable network administrators to monitor use of network resources."
            }, {
                title: "AUI",
                description: "Short for Attachment Unit Interface, the portion of the Ethernet standard that specifies how a cable is to be connected to an Ethernet card. AUI specifies a coaxial cable connected to a transceiver that plugs into a 15-pin socket on the network interface card (NIC)."
            }, {
                title: "authentication",
                description: "The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual."
            }, {
                title: "authorization",
                description: "The process of granting or denying access to a network resource. Most computer security systems are based on a two-step process. The first stage is authentication, which ensures that a user is who he or she claims to be. The second stage is authorization, which allows the user access to various resources based on the user's identity."
            }, {
                title: "Auto ID",
                description: "Short for automatic identification, Auto ID is the term used to describe the process of automatic data collection and identification that occurs in real-time. Bar code technology is considered to be a type of Auto ID."
            }, {
                title: "auto partitioning",
                description: "An Ethernet technology that isolates malfunctioning ports, devices and/or network lines from the rest of the network, stopping the transmission of data from flowing through the faulty network element. Auto partitioning is one method networks use to ensure that no data is lost during transmission.When a network detects a malfunction, such as collisions along the network, a disconnected port, a jamming signal or even the wrong type of or degraded wiring, the faulty element is automatically partitioned (i.e., further data is stopped from traveling the suspicious path) so that the integrity of the entire network is not compromised."
            }, {
                title: "Auto-Negotiation",
                description: "Auto-Negotiation is a technology that was introduced by National Semiconductor to the IEEE 802.3u 100BASE-T working group in the Spring of 1994 as a result of the need for a mechanism to accommodate multi-speed network devices.  It's a mechanism that takes control of the cable when a connection is established to a network device. Auto-Negotiation detects the various modes that exist in the device on the other end of the wire and advertises it own abilities to automatically configure the highest performance mode of interoperation. As a standard technology, this allows simple, automatic connection of devices that support a variety of modes from a variety of manufacturers. [Source: An Introduction to Auto-Negotiation]Auto-Negotiation was previously called NWay. The term is often seen written as either Auto-Negotiation or as one word, autonegotiation."
            }, {
                title: "autodiscovery",
                description: "Term used to describe a set of tools that collects data on a network and records any changes made to the network assets. This could be changes made to memory, software versions, storage, new or deleted files and so on. In RSS terminology, autodiscovery is the process used by spiders to look for RSS content. When audodiscovery is enabled for your RSS feed, browsers and aggregators can then automatically detect the RSS feed, making it easier for users to subscribe to it."
            }, {
                title: "AV Killer",
                description: "Short for antivirus Killer, a malicious tool used to disable a user's antivirus program to help elude detection. AV killers may also attempt to disable firewalls."
            }, {
                title: "avahi",
                description: "avahi is a service auto-discovery that is installed by default on Debian and Ubuntu systems. On a Linux box avahi can be used for a number of things, including networked music sharing. Avahi runs mDNS plus DNS-SD: that is, multicast DNS plus DNS service discovery. Multicast DNS means that each equipped host stores its own DNS records. DNS-SD uses the same technology, but in addition to regular DNS information, hosts also publish service instance information: they announce what services they provide and how to contact those services. "
            }, {
                title: "Axerra Networks",
                description: "Axerra Networks is the corporate name of a provider of circuit emulation and service emulation solutions over packet access networks. Axerra Networks uses a technology called 'Pseudowire' to provide a full-service alternative to TDM access.  Pseudowires convert any access network including Carrier Ethernet, broadband wireless including WiMAX, cable HFC, xDSL, and xPON into a multiservice alternative to TDM access.  The company, Axerra Networks, was established in November 2000."
            }, {
                title: "backdoor access (computing)",
                description: "Backdoor is an undocumented way of gaining access to a program, online service or an entire computer system. A backdoor will bypass normal authentication mechanisms. It is written by the programmer who creates the code for the program and is often only known by the programmer and is a potential security risk.  Also called a trapdoor."
            }, {
                title: "backhaul",
                description: " In wireless network technology, to transmit voice and data traffic from a cell site to a switch, i.e., from a remote site to a central site.In satellite technology, to transmit data to a point from which it can be uplinked to a satellite.To transmit data to a network backbone."
            }, {
                title: "backpressure",
                description: "bak´presh-&r) (n.) Also referred to as backpressure flow control, a condition wherein a switch causes a transmitting device to hold off on sending data packets until the switch��s bottleneck has been eliminated (i.e., when its buffers holding data have been emptied). In order to create backpressure, the switch either broadcasts false collision detection signals or sends packets back to the originating device if the buffer is full."
            }, {
                title: "Banker Trojan",
                description: "In computer and network security terminology, a Banker Trojan-horse (commonly called Banker Trojan) is a malicious program used in an attempt to obtain confidential information about customers and clients using online banking and payment systems."
            }, {
                title: "baseband",
                description: "The original band of frequencies of a signal before it is modulated for transmission at a higher frequency. A type of data transmission in which digital or analog data is sent over a single unmultiplexed channel, such as an Ethernet LAN. Baseband transmission use TDM to send simultaneous bits of data along the full bandwidth of the transmission channel.Compare with broadband."
            }, {
                title: "bastion host",
                description: "A bastion host is a gateway between an inside network and an outside network. Used as a security measure, the bastion host is designed to defend against attacks aimed at the inside network.Depending on a network's complexity and configuration, a single bastion host may stand guard by itself, or be part of a larger security system with different layers of protection."
            }, {
                title: "BECN",
                description: "Short for backward explicit congestion notification. A Frame Relay message that notifies the sending device that there is congestion in the network. A BECN bit is sent in the opposite direction in which the frame is traveling, toward its transmission source."
            }, {
                title: "Berkeley Packet Filter",
                description: "The Berkeley Packet Filter (BPF) is a new architecture for user-level packet capture. BPF provides a raw interface to data link layers in a protocol-independent fashion. All packets on the network, even those destined for other hosts, are accessible through this mechanism. "
            }, {
                title: "BGAN",
                description: "BGAN, or Broadband Global Area Network is a satellite based uplink that provides broadband speeds. BGAN provides seamless network coverage across about 85 percent of the world's land mass, so users can get broadband wherever they roam, not just in major metropolitan areas. With a single BGAN device, you can access broadband data applications at speeds up to half a megabit per second and make a phone call at the same time. BGAN terminals are compact, lightweight and can be carried as easily as a laptop. A fully functional broadband mobile office can be set up and shut down in minutes. The smallest BGAN terminal weighs less than one kilo. BGAN supports the latest IP services and traditional circuit-switched voice and data. Integrating seamlessly with corporate networks, it also supports legacy applications and provides an easy upgrade path to IP."
            }, {
                title: "BGP",
                description: "Short for Border Gateway Protocol, an exterior gateway routing protocol that enables groups of routers (called autonomous systems) to share routing information so that efficient, loop-free routes can be established. BGP is commonly used within and between Internet Service Providers (ISPs). The protocol is defined in RFC 1771."
            }, {
                title: "Big Blue",
                description: "A slang name for International Business Machines Corporation (IBM). Blue is IBM's corporate color."
            }, {
                title: "Big Red Switch",
                description: "BRS or Big Red Switch is a phrase used to describe an immediate shut down of a system using the main or emergency power switch (e.g., 'Hit the BRS'). The term originated from the emergency pull switch on an older IBM mainframe or the power switch on an older IBM PC, which is a large red button. Today, it is considered to be hacker slang for any computer power button or switch."
            }, {
                title: "Bimodal virus",
                description: "Also called a Boot Sector Infector, a bimodal virus is one that infects both boot records and files on the computer system."
            }, {
                title: "binder",
                description: " A tool that combines two or more files into a single file, usually for the purpose of hiding one of them. Commonly associated with Trojan horses, where the Trojan is bound to a real file, such as a text file that opens with Notepad or other program. The users believe they are opening a safe file, and that is what appears on the screen, but at the same time the file is running, the Trojan is also running, usually undetected by the user.Same as linker."
            }, {
                title: "biometric engine",
                description: "The aspect of a biometric security system that administers the biometric data during the enrollment, capture, extraction, comparison and matching stages of the process. The biometric engine is a software program that works in conjunction with the hardware devices that a biometric system uses."
            }, {
                title: "biometrics",
                description: " Biometrics generally refers to the study of measurable biological characteristics. In computer security, biometrics refers to authentication techniques that rely on measurable physical characteristics that can be automatically checked."
            }, {
                title: "bit bucket",
                description: "(bit buk´it) (n.) jargon. A computer's trash can or recycle bin. In networking scenarios, the term is used to refer to the place where a firewall, router or proxy has discarded a packet."
            }, {
                title: "bit stuffing",
                description: "The practice of adding bits to a stream of data. Bit stuffing is required by many network and communications protocols for the following reasons:To prevent data being interpreted as control information. For example, many frame-based protocols, such as X.25, signal the beginning and end of a frame with six consecutive 1 bits. Therefore, if the actual data being transmitted has six 1 bits in a row, a zero is inserted after the first 5 so that the dat is not interpreted as a frame delimiter. Of course, on the receiving end, the stuffed bits must be discarded.For protocols that require a fixed-size frame, bits are sometimes inserted to make the frame size equal to this set size.For protocols that required a continuous stream of data, zero bits are sometimes inserted to ensure that the stream is not broken.The Challenges of Cloud "
            }, {
                title: "BizTalk Server",
                description: "BizTalk Server is Microsoft's central platform for Enterprise Application Integration (EAI) and Business Process Management (BPM) and embodies the integration and automation capabilities of XML and Web Services technologies. BizTalk Server functions as a process execution engine and as a multi-transport hub for messaging and document transformations. It is a Windows Server System product that helps customers efficiently and effectively integrate systems, employees and trading partners.BizTalk is a registered trademark of Microsoft."
            }, {
                title: "black hole",
                description: "Slang term for a router that goes down (offline) and whose absence goes undetected by other routers on the network. Packets that are forwarded to that router simply get dropped and never arrive at their destination. Black holes are unable to generate destination unreachable messages, so users are left unaware that data is being lost."
            }, {
                title: "BlackHole Exploit Kit",
                description: "A type of crimeware Web application developed in Russia to help hackers take advantage of unpatched exploits in order to hack computers via malicious scripts planted on compromised websites. Unsuspecting users visiting these compromised sites would be redirected to a browser vulnerability-exploiting malware portal website in order to distribute banking Trojans or similar malware through the visiting computer.Blackhole exploit kits are based on PHP and a MySQL backend and incorporate support for exploiting the most widely used and vulnerable security flaws in order to provide hackers with the highest probability of successful exploitation. The kits typically target versions of the Windows operating system and applications installed on Windows platforms."
            }, {
                title: "blended threat",
                description: "Blended threats combine the characteristics of viruses, worms, Trojan Horses, and malicious code with server and Internet vulnerabilities to initiate, transmit, and spread an attack. By using multiple methods and techniques, blended threats can rapidly spread and cause widespread damage. Characteristics of blended threats include: causes harm, propagates by multiple methods, attacks from multiple points, and exploits vulnerabilities."
            }, {
                title: "blind drop",
                description: "In malware and virus terminology, a blind drop is a message board, forum, BBS or other Internet site where attackers and botnet nodes can anonymously post or check for messages and new instructions."
            }, {
                title: "block",
                description: " In word processing, a block is a group of characters that you have marked to perform some action on them. For example, to move a section of text, you must first block it. This is sometimes called a block move."
            }, {
                title: "blockchain",
                description: "Blockchain refers to a type of data structure that enables identifying and tracking transactions digitally and sharing this information across a distributed network of computers, creating in a sense a distributed trust network. The distributed ledger technology offered by blockchain provides a transparent and secure means for tracking the ownership and transfer of assets."
            }, {
                title: "Blowfish",
                description: "A symmetric encryption algorithm designed by Bruce Schneier in 1993 as an alternative to existing encryption algorithms, such as DES. Blowfish is a 64-bit block cipher (i.e., a cryptographic key and algorithm are applied to a block of data rather than single bits) that uses a key length that can vary between 32 and 448 bits. Blowfish is available for free use by any, and the technology is  not patented and free of license."
            }, {
                title: "BLS",
                description: "Short for Basic Link Service, and also called Link Service, it is a Fibre Channel request and response protocol used by all devices."
            }, {
                title: "bluebugging",
                description: "Bluebugging allows skilled individuals to access the mobile phone commands using Bluetooth wireless technology without notifying or alerting the phone's user. This vulnerability allows the hacker to initiate phone calls, send and read SMS, read and write phonebook contacts, eavesdrop on phone conversations, and connect to the Internet. As with all the attacks, the hacker must be within a 10 meter range of the phone. This is a separate vulnerability from bluesnarfing and does not affect all of the same phones as bluesnarfing. "
            }, {
                title: "bluejacking",
                description: "Bluejacking allows phone users to send business cards anonymously using Bluetooth wireless technology. Bluejacking does not involve the removal or alteration of any data from the device. These business cards often have a clever or flirtatious message rather than the typical name and phone number. Bluejackers often look for the receiving phone to ping or the user to react. They then send another, more personal message to that device. Once again, in order to carry out a bluejacking, the sending and receiving devices must be within 10 meters of one another. Phone owners who receive bluejack messages should refuse to add the contacts to their address book. Devices that are set in non-discoverable mode are not susceptible to bluejacking"
            }, {
                title: "bluesnarfing",
                description: "Bluesnarfing allows hackers to gain access to data stored on a Bluetooth enabled phone using Bluetooth wireless technology without alerting the phone's user of the connection made to the device. The information that can be accessed in this manner includes the phonebook and associated images, calendar, and IMEI (International Mobile Equipment Identity). By setting the device in non-discoverable, it becomes significantly more difficult to find and attack the device. Without specialized equipment the hacker must be within a 10 meter range of the device while running a device with specialized software. Only specific older Bluetooth enabled phones are susceptible to bluesnarfing. "
            }, {
                title: "bogon",
                description: "Derived from the slang term of bogus (non-existent or fake), in Internet terminology the the term bogon is often used to describe a bogus IP address; or more specifically, the use of an address or a route object that is not properly authorized by the entity to which the address, or resource, was originally assigned."
            }, {
                title: "Booter services",
                description: "A service offered by cyber criminals that provides paying customers with distributed denial of service (DDoS) attack capabilities on demand. According to this article on eWeek, Booter services, or Booters, are Web-based services that do DDoS for hire at very low prices and are very hard to take down."
            }, {
                title: "bootkit",
                description: "Bootkits are an advanced form of rootkits that take the basic functionality of a rootkit and extend it with the ability to infect the master boot record (MBR) or volume boot record (VBR) so that the bootkit remains active even after a system reboot.Bootkits are designed to not only load from the master boot record but also remain active in the system memory from protected mode through the launch of the operating system and during the computer’s active state."
            }, {
                title: "BPDU - bridge protocol data unit",
                description: "Acronym for bridge protocol data unit. BPDUs are data messages that are exchanged across the switches within an extended LAN that uses a spanning tree protocol topology. BPDU packets contain information on ports, addresses, priorities and costs and ensure that the data ends up where it was intended to go. BPDU messages are exchanged across bridges to detect loops in a networktopology. The loops are then removed by shutting down selected bridge interfaces and placing redundant switch ports in a backup, or blocked, state."
            }, {
                title: "BPL",
                description: "Abbreviated as BPL, broadband over power line is a technology that allows Internet data to be transmitted over utility power lines. To use BPL the subscriber needs to use a special broadband modem (phone, cable or satellite) that plugs into an electrical outlet. Internet services are received via radio waves over electrical lines, using many of the same frequencies that are traditionally used for ham radio. There are two types of BPL: in-building BPL technology, which uses the electrical wiring within a building and access BPL, which uses the electrical power distribution grid to provide broadband Internet access. "
            }, {
                title: "BPL repeater",
                description: "In Access broadband over power line (BPL) systems, a BPL repeater is a device used to boost the distance the signal can travel. broadband over power line (BPL). A typical BPL signal travels only for 1,000 to 3,000 feet down line, and a BPL repeater can be used to increase the distance the signal can travel. There is often a decrease in system performance when a repeater is used. Also called a BPL regenerator."
            }, {
                title: "BRAS",
                description: "rt for Broadband Remote Access Server, it is the aggregation point for the subscriber traffic. It provides aggregation capabilities (e.g. IP, PPP, ATM) between the Regional/Access Network and the NSP or ASP. Beyond aggregation it is also the injection point for policy management and IP QoS in the Regional/Access Networks."
            }, {
                title: "bridge",
                description: "A device that connects two local-area networks (LANs), or two segments of the same LAN that use the same protocol, such as Ethernet or Token-Ring."
            }, {
                title: "broadband",
                description: "The term broadband is used to describe a type of data transmission in which a single medium (wire) can carry several channels at once. Cable TV, for example, uses broadband transmission. In contrast, baseband transmission allows only one signal at a time.Most communications between computers, including the majority of local-area networks, use baseband communications. An exception is B-ISDN networks, which employ broadband transmission."
            }, {
                title: "broadcast",
                description: "To simultaneously send the same message to multiple recipients. Broadcasting is a useful feature in e-mail systems. It is also supported by some fax systems.In networking, a distinction is made between broadcasting and multicasting. Broadcasting sends a message to everyone on the network whereas multicasting sends a message to a select list of recipients."
            }, {
                title: "broadcast address",
                description: "A special type of networking address that is reserved for sending messages to all machines on a given network segment. Generally, a broadcast address is a MAC destination address of all F's."
            }, {
                title: "broadcast storm",
                description: "A state in which a message that has been broadcast across a network results in even more responses, and each response results in still more responses in a snowball effect. A severe broadcast storm can block all other network traffic, resulting in a network meltdown. Broadcast storms can usually be prevented by carefully configuring a network to block illegal broadcast messages."
            }, {
                title: "brouter",
                description: " Short for bridge router and pronounced BROW-ter, a device that functions as both a router and a bridge. A brouter understands how to route specific types of packets, such as TCP/IP packets. Any other packets it receives are simply forwarded to other network(s) connected to the device (this is the bridge function)."
            }, {
                title: "browser hijacker",
                description: "A specific type of spyware that will allow a hacker or malicious perpetrator to spy on the infected computer's Internet browsing activity. Using a browser hijacker the person responsible for the spyware can deliver pop-up ads, reset the browser homepage, or direct the browser to Web sites the victim would not normally visit."
            }, {
                title: "browser modifier",
                description: "A program that is used to change your Web browser settings without the consent of the user. A browser hijacker is a type of browser modifier."
            }, {
                title: "buffer overflow",
                description: "The condition wherein the data transferred to a buffer exceeds the storage capacity of the buffer and some of the data 'overflows' into another buffer, one that the data was not intended to go into. Since buffers can only hold a specific amount of data, when that capacity has been reached the data has to flow somewhere else, typically into another buffer, which can corrupt data that is already contained in that buffer.Malicious hackers can launch buffer overflow attacks wherein data with instructions to corrupt a system are purposely written into a file in full knowledge that the data will overflow a buffer and release the instructions into the computer��s instructions."
            }, {
                title: "burst",
                description: "A set of bits, bytes or characters grouped together for transmission.An intermittent asynchronous transmission of a specific amount of data. Contrast with streaming."
            }, {
                title: "bus network",
                description: "A network in which all nodes are connected to a single wire (the bus) that has two endpoints. Ethernet 10Base-2 and 10Base-5 networks, for example, are bus networks. Other common network types include star networks and ring networks."
            }, {
                title: "BYOA – Bring Your Own Apps",
                description: "Short for Bring Your Own Applications as well as Build Your Own Apps, BYOA is an evolution of the term BYOD (Bring Your Own Device) in the consumerization of IT that refers to the growing use of personal apps by employees for increased productivity in their work environments.Examples of Bring Your Own Apps span the gamut of third-party cloud storage and sync applications such as Dropbox, collaboration apps like Skype and GoToMeeting, work productivity apps like Google Docs and Evernote and social networking apps like LinkedIn."
            }, {
                title: "BYOC - Bring Your Own Cloud",
                description: "A term similar to BYOD (Bring Your Own Device) in which corporate employees utilize their own personal clouds or a combination of public or private cloud services from third-party cloud providers instead of the company's own cloud services.Bring Your Own Cloud (BYOC), or Build Your Own Cloud, provides employees with the flexibility to store and access data such as documents, images, videos and other files via a wide variety of cloud options, but it can do so at the expense of corporate control, and it can present potential security risks to the enterprise when security policies and best practices aren’t implemented or followed."
            }, {
                title: "BYON – Bring Your Own Network",
                description: "BYON, or Bring Your Own Network, is an evolution of the term BYOD (Bring Your Own Device) in the consumerization of IT that refers to the growing use of personal networks by employees for increased productivity in their work environments."
            }, {
                title: "CAM - channel access method or computer-aided manufacturing",
                description: " Short for channel access method, a protocol for how data is transmitted in the bottom two layers of the OSI model. CAMs describe how networking systems put data on the network media, how low-level errors are dealt with, and how the network polices itself. Polling, contention and token passingare three examples of CAMs."
            }, {
                title: "CAMP - Cloud Application Management for Platforms",
                description: "Cloud Application Management for Platforms (CAMP) is a specification designed to ease management of applications, including packaging and deployment, across public and private cloud computing platforms.According to the technology vendors behind the CAMP specification, which includes CloudBees, Cloudsoft Corporation, Huawei, Oracle, Rackspace, Red Hat and Software AG, CAMP is intended to provide a common basis for developing multi-cloud management tools as well as a REST-based approach to application management."
            }, {
                title: "CAN - campus-area network",
                description: "CAN is an acronym for campus-area network. An interconnection of local-area networks within a limited geographical space, such as a school campus or a military base."
            }, {
                title: "capture",
                description: "To save a particular state of a program. The term capture often refers to saving the information currently displayed on a display screen. You can capture the screen to a printer or to a file. The act of saving a display screen is called a screen capture.ideo capturerefers to storing video images in a computer. The recording of keystrokes during the definition of a macro."
            }, {
                title: "card skimming",
                description: "The act of using a skimmer to illegally collect data from the magnetic stripe of a credit, debit or ATM card. This information, copied onto another blank card's magnetic stripe, is then used by an identity thief to make purchases or withdraw cash in the name of the actual account holder.Skimming works by replacing a card reader like an ATM with a camouflaged counterfeit card reader. The counterfeit reader records all of the data on a credit, debit or ATM card as it passes through the skimmer. In addition to ATMs, other locations where card skimming happens include restaurants, taxis or other businesses where an employee will take the card from the actual account holder in order to run the charge. In these instances, the thief has fitted the card reader with a skimmer, or uses a hand-held skimmer hidden in a pocket."
            }, {
                title: "CARP - Common Address Redundancy Protocol",
                description: "CARP is an acronym for Common Address Redundancy Protocol. It is a free alternative to the Virtual Router Redundancy Protocol (VRRP) and the Hot Standby Router Protocol (HSRP).The primary purpose of CARP is to allow multiple hosts on the same network segment to share an IP address. CARP works by allowing a group of hosts on the same network segment to share an IP address. This group of hosts is referred to as a redundancy group. The redundancy group is assigned an IP address that is shared among the group members. Within the group, one host is designated the master and the rest as back-ups. The master host is the one that currently holds the shared IP. It responds to any traffic or ARP requests directed towards it. Each host may belong to more than one redundancy group at a time."
            }, {
                title: "carrier",
                description: "carrier signal: A frequency in a communications channel modulated to carry analog or digitalsignal information. For example, an FM radio transmitter modulates the frequency of a carrier signal and the receiver processes the carrier signal to extract the analog information. An AM radio transmitter modulates the amplitude of a carrier signal.carrier system: A communications system providing a number of point-to-point channels through some type of multiplexing. T-1 and T-3 carrier services are examples of carrier systems that can be used between points in a Wide Area Network (WAN).carrier service provider: A company offering telephone and data communications between points in a state or in one or more countries. The Regional Bell Operating Companies (RBOCs) are example of carriers."
            }, {
                title: "Castanet",
                description: "Castanet is software from Marimba, Inc. of Mountain View, CA (www.marimba.com) that helps administrators install and update applications and information across a network.For example, if a number of users on a network use a version of Microsoft Word that's been recently updated, the administrator can use Castanet to update the users' versions without physically installing each new package. Castanet will examine the old and the new versions, identify differences (a process called differencing), and send the changes to each user. Castenet uses channels, usually containing one kind of application, to send information to users, who receive them with a desktop application called a tuner. Administrators control content at the back-end with a transmitter."
            }, {
                title: "Cat-5",
                description: "ort for Category 5, network cabling that consists of four twisted pairs of copper wire terminated by RJ45 connectors. Cat-5 cabling supports frequencies up to 100 MHz and speeds up to 1000 Mbps. It can be used for ATM, token ring, 1000Base-T, 100Base-T, and 10Base-Tnetworking.Computers hooked up to LANs are connected using Cat-5 cables, so if you're on a LAN, most likely the cable running out of the back of your PC is Category 5.Cat-5 is based on the EIA/TIA 568 Commercial Building Telecommunications Wiring Standard developed by the Electronics Industries Association as requested by the Computer Communications Industry Association in 1985."
            }, {
                title: "Cat-5e",
                description: "Short for Category 5 Enhanced, Cat-5e network cabling is used as a cabling infrastructure for 10BASE-T (Ethernet), full duplex 100BASE-TX (Fast Ethernet) and 1000BASE-T (Gigabit Ethernet, or GbE) networks.  The Cat 5e standard provides performance of up to 100 MHz and can be used up to a maximum length of 100 meters.As with Category 5 (Cat-5) cables, Cat 5e cables typically consist of four unshielded twisted pairs (UTP) of copper wire terminated by RJ45 connectors.   Cat 5e is distinguished from the original Cat 5 standard primarily in its performance requirements.  Cat 5e has stricter specifications in a number of areas, including Near-End Crosstalk (NEXT), Power Sum Equal-Level Far-End Crosstalk (PS-ELFEXT), attenuation and return loss.The Cat 5e standard was first released in 1999 as part of the Telecommunications Industry Association’s TIA/EIA-568-5-A document specification.  The Cat 5e cable standard is backward compatible with the Cat 3 and Cat 5 cable standards."
            }, {
                title: "Cat-6",
                description: "Short for Category 6, Cat-6 network cabling is used as the cabling infrastructure for 10BASE-T (Ethernet), 100BASE-TX (Fast Ethernet), 1000BASE-T (Gigabit Ethernet, or GbE) and 10GBASE-T (10-Gigabit Ethernet, or 10 GbE) networks. The Cat 6 standard provides performance of up to 250 MHz (500 MHz for the newer Cat 6a standard) and can be used up to a maximum length of 100 meters (55 meters for 10GBASE-T networks).The Cat 6 standard was first released in 2002 as part of the Telecommunications Industry Association’s TIA/EIA-568-B.2-1 document specification.  Cat 6 is backward compatible with the Cat 3, Cat 5 and Cat 5e cable standards, and as with Cat 5 and Cat 5e cabling, Cat 6 cables consist of four unshielded twisted pairs (UTP) of copper wire terminated by RJ45 connectors. In addition to its support for higher performance than the Cat 5 specification, the Cat 6 standard also includes more stringent specifications for crosstalk and system noise. While Cat 6 is expected to supersede both Cat 5 and Cat 5e cabling in the future, all three types of cables continue to be popular for use in network installations."
            }, {
                title: "Cat-7",
                description: "Short for Category 7, Cat-7 network cabling is used as a cabling infrastructure for 1000BASE-T (Gigabit Ethernet, or GbE) and 10GBASE-T (10-Gigabit Ethernet, or 10 GbE) networks.  The Cat 7 standard provides performance of up to 600 MHz  (1000 MHz for the Cat-7a, or Augmented Category 7 standard) and can be used up to a maximum length of 100 meters.Category 7 cable is able to achieve higher performance than preceding Ethernet standards such as Cat 5, Cat 5e and Cat 6 by requiring each of its twisted wire pairs to be fully shielded.  This is known as Screen Shielded Twisted Pair (SSTP) or Screened Foiled Twisted Pair (SFTP) wiring, and it almost completely eliminates alien crosstalk while significantly improving noise resistance.The Cat 7 standard was published in 2002 by the International Organization for Standardization (ISO) and is also known as Class F cabling.  While more expensive than Cat 5e and Cat 6 cabling, Cat-7 cabling does have a 15-year lifecycle (compared to estimated 10-year lifecycles for Cat 5e and Cat 6), which helps improve its overall return on investment (ROI). "
            }, {
                title: "CBR",
                description: "Short for constant bit rate, or Class A quality of service, an ATM bandwidth-allocation service that requires the user to determine a fixed bandwidth requirement at the time the connection is set up so that the data can be sent in a steady stream. CBR service is often used when transmitting fixed-rate uncompressed video."
            }, {
                title: "CCK",
                description: "Short for Complementary Code Keying, a set of 64 eight-bit code words used to encode data for 5.5 and 11Mbps data rates in the 2.4GHz band of 802.11b wireless networking. The code words have unique mathematical properties that allow them to be correctly distinguished from one another by a receiver even in the presence of substantial noise and multipath interference.CCK works only in conjunction with the DSSS technology that is specified in the original 802.11 standard. It does not work with FHSS. CCK applies sophisticated mathematical formulas to the DSSS codes, permitting the codes to represent a greater volume of information per clock cycle. The transmitter can then send multiple bits of information with each DSSS code, enough to make possible the 11Mbps of data rather than the 2Mbps in the original standard."
            }, {
                title: "CCNA",
                description: "Acronym for Cisco Certified Network Associate indicates a foundation in and apprentice knowledge of networking. CCNA certified professionals can install, configure, and operate LAN, WAN, and dial access services for small networks (100 nodes or fewer), including but not limited to use of these protocols: IP, IGRP, Serial, Frame Relay, IP RIP, VLANs, RIP, Ethernet, Access Lists. *"
            }, {
                title: "CDDI - Copper Data Distribution Interface",
                description: "Abbreviation of Copper Data Distribution Interface, a network technology capable of carrying data at 100 Mbps over unshielded twisted pair (UTP) cable. CDDI is a trade name of Crescendo Communications (acquired by Cisco Systems in 1993) and commonly used instead of the general term Twisted Pair Physical Layer Medium (TP-PMD). TP-PMD is the general ANSI standard name for this FDDI -like service.CDDI cable lengths are limited to 100 meters."
            }, {
                title: "CDN - Content Delivery Network",
                description: "CDN is short for content delivery network.A content delivery network (CDN) is a system of distributed servers (network) that deliver pages and other Web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server.This service is effective in speeding the delivery of content of websites with high traffic and websites that have global reach. The closer the CDN server is to the user geographically, the faster the content will be delivered to the user. CDNs also provide protection from large surges in traffic."
            }, {
                title: "cell",
                description: "In spreadsheet applications, a cell is a box in which you can enter a single piece of data. The data is usually text, a numeric value, or a formula. The entire spreadsheet is composed of rows and columns of cells. A spreadsheet cell is analogous to a field in database management systems.  Individual cells are usually identified by a column letter and a row number. For example, D12specifies the cell in column D and row 12.In communications and networking, a fixed-size packet of data.In cellulartelephone systems, a geographic area."
            }, {
                title: "cell relay",
                description: "A data transmission technology based on transmitting data in relatively small, fixed-size packets or cells. Each cell contains only basic path information that allows switching devices to route the cell quickly. Cell relay systems can reliably carry live video and audio because cells of fixed size arrive in a more predictable way than systems with packets or frames of varying size.Asynchronous Transfer Mode (ATM) is the cell relay standard set by the CCITT organization. ATM uses a cell of 53 bytes."
            }, {
                title: "cellphone virus",
                description: "A cellphone (also called a mobile phone) virus is the equivalent to a computer virus, only it infects consumer cellphones and spreads by way of MMS attachments, Bluetooth transfers, and Internet downloads. The most common type of cellphone virus is one that travels from computers to cellphones by way of infected files that are downloaded from the Internet. However cellphone-to-cellphone viruses, while less common, do exist.The first known cellphone virus was called Cabir and was detected in June 2004 by Kaspersky Labs. The Cabir worm was coded to infect Symbian OS cellphones. Cabir was designed to scan for all accessible phones using Bluetooth technology, and send a copy of itself to the first one found. Setting your phone into a non-discoverable (hidden) Bluetooth mode will protect your phone from the Cabir worm. But, once the phone is infected it will try to infect other systems even if you try to disable Bluetooth from system settings. In 2005 Cabir's source code became widely available on the Internet."
            }, {
                title: "Cells in Frames",
                description: "A specification that enables ATM cells to be carried in Ethernet packets. This makes it possible to implement the ATM protocol while using existing Ethernet equipment, especially network interface cards (NICs). CIF provides the advantages of ATM, such as Quality of Service (QoS), without the usual hardware expense."
            }, {
                title: "central tunneling",
                description: "In VPN technology, central tunneling is the process of forcing all traffic from a remote VPN through a central site. Central tunneling allows additional security as remote VPN users are protected by a firewall at the central site, and also enables NAT, IDS, IPS and anti-virus and spam filtering. Central tunneling does increase bandwidth at the central site."
            }, {
                title: "centralized network",
                description: "A type of network where all users connect to a central server, which is the acting agent for all communications. This server would store both the communications and the user account information. Most public instant messaging platforms use a centralized network. Also called centralized server-structure."
            }, {
                title: "CERT/CC",
                description: "Short for the Computer Emergency Response Team Coordination Center. CERT was started in December 1988 by the Defense Advanced Research Projects Agency, which was part of the U.S. Department of Defense, after the Morris Worm disabled about 10% of all computers connected to the Internet. CERT/CC is located at the Software Engineering Institute, a federally funded research center operated by Carnegie Mellon University.Cert/CC studies Internet security vulnerabilities, provides services to Web sites that have been attacked and publishes security alerts. CERT/CC's research activities include the area of WAN computing and developing improved Internet security. The organization also provides training to incident response professionals."
            }, {
                title: "Certificate bandit",
                description: "A hacker that breaks into a Certificate Authority (CA) company in order to issue fake certificates that help bogus websites masquerade as authentic sites such as Google, Skype and Microsoft.Certificate bandits were responsible for two major certificate breaches in 2011, when the Comodo and DigiNotar CAs were both duped into issuing fake certificates. The potential damage from the work of certificate bandits is often mitigated by the major Web browser vendors like Microsoft, Mozilla and Apple issuing updates to their browsers that block the fake certificates issued by the hacked CAs. In order to prevent damage from certificate bandits, though, this does require that users keep their browsers updated with the latest releases and patches."
            }, {
                title: "certification authority",
                description: "Abbreviated as CA, a trusted third party organization or company that issues digital certificates used to create digital signatures and public-private key pairs. The role of the CA in this process is to guarantee that the individual granted the unique certificate is, in fact, who he or she claims to be. Usually, this means that the CA has an arrangement with a financial institution, such as a credit card company, which provides it with information to confirm an individual's claimed identity. CAs are a critical component in data security and electronic commerce because they guarantee that the two parties exchanging information are really who they claim to be."
            }, {
                title: "challenge-response",
                description: "A common authentication technique whereby an individual is prompted (the challenge) to provide some private information (the response). Most security systems that rely on smart cards are based on challenge-response. A user is given a code (the challenge) which he or she enters into the smart card. The smart card then displays a new code (the response) that the user can present to log in.In biometrics, challenge response is the term used to describe the method by which the identification of a person is detected based on voluntary or involuntary responses. Challenge response is a type of biometric system security."
            }, {
                title: "CHAP",
                description: "Short for Challenge Handshake Authentication Protocol, a type of authentication in which the authentication agent (typically a network server) sends the client program a random value that is used only once and an ID value. Both the sender and peer share a predefined secret. The peer concatenates the random value (or nonce), the ID and the secret and calculates a one-way hash using MD5. The hash value is sent to the authenticator, which in turn builds that same string on its side, calculates the MD5 sum itself and compares the result with the value received from the peer. If the values match, the peer is authenticated."
            }, {
                title: "Check Point Software Technologies",
                description: "Check Point Software Technologies Ltd. is the corporate name of a security vendor that offers security for networks, data and endpoints, unified under a single management framework. Check Point customers include tens of thousands of businesses and organizations of all sizes including all Fortune 100 companies. Some of the company's products and services include ZoneAlarm, IAS appliances, software blades, and Check Point security products. Check Point Software Technologies Ltd. was founded in 1993."
            }, {
                title: "CHMOD",
                description: "Short for change mode, chmod is a UNIX command that changes the access permissions of files or directories in order to read, write or execute files."
            }, {
                title: "choke packet",
                description: "A specialized packet that is used for flow control along a network. A router detects congestion by measuring the percentage of buffers in use, line utilization and average queue lengths. When it detects congestion, it sends choke packets across the network to all the data sources associated with the congestion. The sources respond by reducing the amount of data they are sending."
            }, {
                title: "chunk",
                description: "Chunk, also called a data chunk, by RFC2960 SCTP (Stream Control Transmission Protocol) standards it is the term used to describe a unit of information within an SCTP packet that contains either control information or user data."
            }, {
                title: "CIM",
                description: "Short for Common Information Model, an industry standard, developed by the Distributed Management Task Force (DMTF), for describing data about applications and devices so that administrators and software management programs can control applications and devices on different platforms in the same way, ensuring interoperability across a network.Using techniques of object-oriented programming, CIM provides a consistent definition and structure of data, including expressions for elements such as object classes, properties, associations and methods.For example, if an enterprise bought four different servers from four different vendors, and networked them together, using CIM the administrator can view the same information about each of the devices, such as manufacturer and serial number, the device��s model number, its location on the network, its storage capacity, and its relationship to the applications that run throughout the network."
            }, {
                title: "cipher text",
                description: "In cryptography, cipher text (ciphertext) is data that has been encrypted. Cipher text is unreadable until it has been converted into plain text (decrypted) with a key."
            }, {
                title: "CIR",
                description: "Short for committed information rate, a specified amount of guaranteed bandwidth (measured in bits per second) on a Frame Relay service. Typically, when purchasing a Frame Relay service, a company can specify the CIR level they wish. The Frame Relay network vendor guarantees that frames not exceeding this level will be delivered. It's possible that additional traffic may also be delivered, but it's not guaranteed."
            }, {
                title: "circuit switching",
                description: "A type of communications in which a dedicated channel (or circuit) is established for the duration of a transmission. The most ubiquitous circuit-switching network is the telephone system, which links together wire segments to create a single unbroken line for each telephone call.The other common communications method is packet switching, which divides messages into packets and sends each packet individually. The Internet is based on a packet-switching protocol, TCP/IP.Circuit-switching systems are ideal for communications that require data to be transmitted in real-time. Packet-switching networks are more efficient if some amount of delay is acceptable."
            }, {
                title: "Cisco Discovery Protocol",
                description: "The Cisco Discovery Protocol (CDP) was developed by Cisco Systems. It's primarily used to obtain the protocol addresses of neighboring devices and also to discover the platform of those devices.  It can also be used to show information about the interfaces your router uses. CDP is media and protocol-independent, and runs on all Cisco-manufactured equipment including routers, bridges, access servers, and switches. CDP runs only over the data link layer enabling two systems that support different network-layer protocols to learn about each other. CDP Version-2 (CDPv2) is the most recent release of the protocol and provides more intelligent device tracking features."
            }, {
                title: "Cisco EnergyWise",
                description: "Cisco EnergyWise is a Green IT technology that takes a network-based approach to communicate messages that measure and control energy between network devices and endpoints. With Cisco EnergyWise the network discovers Cisco EnergyWise manageable devices, monitors their power consumption, and takes action based on business rules to reduce power consumption.  Cisco EnergyWise uses a unique domain-naming system to query and summarize information from large sets of devices, making it simpler than traditional network management capabilities. Cisco EnergyWise has a management interface that allow facilities and network management applications to communicate with endpoints and each other using the network as a unifying fabric. The management interface uses standard SNMP or SSL to integrate Cisco and third-party management systems. "
            }, {
                title: "Cisco Systems",
                description: "One of the leading manufacturers of network equipment. Cisco's primary business is in internetworking products, such as routers, bridges, and switches."
            }, {
                title: "Class C network",
                description: "In a 32-bit IP address, the number of bits used to identify the network and the host vary according to the network class of the address. In a Class C network, the first 3 bits, or the high-order bits, are always '110.' The next 21 bits are used to define the Class C network, and the final eight bits are used to identify the host. The IP address is represented in dotted decimal notation of four 8-bit fields, or octets, that have been converted from binary to decimal numbers."
            }, {
                title: "clickjack attack",
                description: "Clickjacking, or clickjack attack, is a vulnerability used by an attacker to collect an infected user's clicks. The attacker can force the user to do all sort of things from adjusting the user's computer settings to unwittingly sending the user to Web sites that might have malicious code. Also, by taking advantage of Adobe Flash or JavaScript, an attacker could even place a button under or over a legitimate button, making it difficult for users to detect."
            }, {
                title: "client-server architecture",
                description: "Client-server architecture (client/server) is a network architecture in which each computer or process on the network is either a client or a server.Servers are powerful computers or processes dedicated to managing disk drives (file servers), printers (print servers), or network traffic (network servers). Clients are PCs or workstations on which users run applications. Clients rely on servers for resources, such as files, devices, and even processing power."
            }, {
                title: "Clipper chip",
                description: "An encryption chip designed under the auspices of the U.S. government. The government's idea was to enforce use of this chip in all devices that might use encryption, including computers, modems, telephones, and televisions. The government would control the encryption algorithm, thereby giving it the ability to decrypt any messages it recovered."
            }, {
                title: "cloud",
                description: "Also referred to as a network cloud. In telecommunications, a cloud refers to a public or semi-public space on transmission lines (such as T1 or T3) that exists between the end points of a transmission. Data that is transmitted across a WAN enters the network from one end point using a standard protocol suite such as Frame Relay and then enters the network cloud where it shares space with other data transmissions. The data emerges from the cloud -- where it may be encapsulated, translated and transported in myriad ways -- in the same format as when it entered the cloud. A network cloud exists because when data is transmitted across a packet-switched network in a packet, no two packets will necessarily follow the same physical path. The unpredictable area that the data enters before it is received is the cloud."
            }, {
                title: "cloud app",
                description: "Short for cloud application, cloud app is the phrase used to describe a software application that is never installed on a local computer. Instead, it is accessed via the Internet."
            }, {
                title: "cloud app policy",
                description: "Cloud app policy refers to policies and procedures put in place by enterprises to ensure that the usage of cloud applications by employees complies with the overall corporate security plan as well as regulatory requirements."
            }, {
                title: "cloud enablement",
                description: "The process of making available one or more of the following services and infrastructures to create a public cloud computing environment:cloud provider: A service provider who offers customers storage or software solutions available via a public network, usually the Internet.client: The customer who uses the cloudapplication: the application that runs the cloud infrastructure"
            }, {
                title: "cloud host",
                description: "A cloud host is a server that provides hosting services, frequently Web hosting, to customers via multiple connected servers that comprise a cloud.  Whereas standalone servers and virtual servers typically present customers with limited scalability options and the potential for service disruption, a cloud host can provide customers with seamless scalability, increased accessibility, superior reliability and potential cost savings."
            }, {
                title: "cloud hosting",
                description: "Hosting services that are provided to customers via multiple connected servers that comprise a cloud, as opposed to being provided by a single server or virtual server.  While security and lack of full control of data are the most frequently cited concerns with cloud hosting, there are numerous benefits possible with cloud hosting, including increased reliability and accessibility, seamless scalability and cost efficiency.Cloud hosting is also sometimes referred to as server on-demand hosting, cloud server hosting or cluster server hosting."
            }, {
                title: "cloud OS",
                description: "A buzzword that is used in place of Platform as a Service (PaaS) to denote an association to cloud computing."
            }, {
                title: "cloud provider",
                description: "A service provider that offers customers storage or software services available via a private (private cloud) or public network (cloud). Usually, it means the storage and software is available for access via the Internet."
            }, {
                title: "cloud server hosting",
                description: "Cloud server hosting is when hosting services are made available to customers on demand via the Internet. Rather than being provided by a single server or virtual server, cloud server hosting services are provided by multiple connected servers that comprise a cloud. Cloud server hosting is also sometimes referred to as cluster server hosting or server on-demand hosting.Cloud server hosting offers the advantages of increased accessibility and reliability, seamless scalability and potential cost savings, as customers are freed from having to invest in on-premises servers and hardware, and they pay only for the resources they consume.  On the other hand, security and lack of access and full control are potential concerns with cloud server hosting."
            }, {
                title: "cloud service",
                description: "A cloud service is any service made available to users on demand via the Internet from a cloud computing provider's servers as opposed to being provided from a company's own on-premises servers. Cloud services are designed to provide easy, scalable access to applications, resources and services, and are fully managed by a cloud services provider."
            }, {
                title: "cloud-native app",
                description: "Cloud-native app is a term promoted by VMware to refer to apps that are installed in cloud-based virtual machines. According to VMware, cloud-native apps differ from traditional applications in several keys areas, including:Cloud-native apps use an elastic infrastructureCloud-native apps need to provision instances of themselves through an APICloud-native apps must be able to scale up and down at a rapid rate, with the ability to offer thousands or even hundreds of thousands of nodes or instancesCloud-native apps are autonomic in nature, with the ability to detect and work around failures, and if one or more nodes are lost, new nodes are spun up extremely quickly"
            }, {
                title: "cluster virus",
                description: "A type of computer virus that associates itself with the execution of programs by modifying directory table entries to ensure the virus itself will start when any program on the computer system is started.  If infected with a cluster virus it will appear as if every program on the computer system is infected; however, a cluster virus is only in one place on the system."
            }, {
                title: "clustering",
                description: "Connecting two or more computers together in such a way that they behave like a single computer. Clustering is used for parallel processing, load balancing and fault tolerance.Clustering is a popular strategy for implementing parallel processing applications because it enables companies to leverage the investment already made in PCs and workstations. In addition, it's relatively easy to add new CPUs simply by adding a new PC to the network.Microsoft's clustering solution for Windows NT systems is called MSCS."
            }, {
                title: "CMIP",
                description: "Short for Common Management Information Protocol, and pronounced see-mip, an OSI standard protocol used with the Common Management Information Services (CMIS). CMIS defines a system of network management information services. CMIP was proposed as a replacement for the less sophisticated Simple Network Management Protocol (SNMP) but has not been widely adopted. CMIP provides improved security and better reporting of unusual network conditions."
            }, {
                title: "CNA",
                description: "Short for Converged Network Adapter, CNA is a technology that supports data networking (TCP/IP) and storage networking (Fibre Channel) traffic on a single I/O adapter. CNAs support both Enhanced Ethernet and Fiber Channel over Ethernet (FCoE)."
            }, {
                title: "coaxial cable",
                description: "A type of wire that consists of a center wire surrounded by insulation and then a grounded shield of braided wire. The shield minimizes electrical and radio frequency interference.Coaxial cabling is the primary type of cabling used by the cable television industry and is also widely used for computer networks, such as Ethernet. Although more expensive than standard telephone wire, it is much less susceptible to interference and can carry much more data."
            }, {
                title: "Coinbit",
                description: "Coinbit is a Trojan horse designed to steal users' Bitcoin wallets. Coinbit targets Windows computers by homing in on the standard file location for a Bitcoin wallet before e-mailing the wallet to an address designated by the creator of the malware. The malware 's full name is Infostealer.Coinbit, and it was first discovered in the wild in June 2011.Bitcoin is a popular decentralized virtual currency exchanged peer to peer and earned by users through the process of mining, or contributing a computer's CPU cycles to mathematically generating new Bitcoin. Bitcoin wallets can be encrypted, which can help prevent Trojans like Coinbit from using brute force to open a wallet, especially when strong passwords are used."
            }, {
                title: "COLD - Computer Output to Laser Disk",
                description: "Computer Output to Laser Disk (COLD) is the storage of data on optical disk, such as CD-ROMs. Storing large volumes of data on laser disk, as opposed to microfiche or microfilm, lets the user access and search this information on a computer, avoid the duplication and security costs of protecting physical documents or film, and more readily distribute information."
            }, {
                title: "cold standby",
                description: "cōld stand´bī) (n.) A method of redundancy in which the secondary (i.e., backup) system is only called upon when the primary system fails. The system on cold standby receives scheduled data backups, but less frequently than a warm standby. Cold standby systems are used for non-critical applications or in cases where data is changed infrequently."
            }, {
                title: "collapsed backbone",
                description: "A network backbone that consists of the backplane of a single switch, rather than multiple switches connected together. From the ports of the single switch, cables connect to the hubs of individual LAN segments.Collapsed backbones are typically used for mid-sized LAN networks. The architecture is easier to manage, easier to keep secure and less costly as there are fewer networking devices.However, a collapsed backbone architecture typically uses more cabling over longer distances and a failure in the central switch will cause the whole network to go offline."
            }, {
                title: "collateral hacking",
                description: "Collateral hacking refers to when a company's critical data is compromised as a result of a third party in possession of the company's sensitive data being hacked. Rather than directly hacking into a company, collateral hackers go through a third party in order to get to the company’s sensitive data. Collateral hacking frequently results in additional companies having their data compromised, as the third party firm will often have the data of numerous companies stored on the hacked server or resource. The security concern of collateral hacking has become more prevalent with the increasing popularity of companies storing sensitive data via server virtualization, in the cloud or with other third-party storage hosting services. "
            }, {
                title: "collision",
                description: "The situation that occurs when two or more devices attempt to send a signal along the same channel at the same time. The result of a collision is generally a garbled message. All computer networks require some sort of mechanism to either prevent collisions altogether or to recover from collisions when they do occur."
            }, {
                title: "collision detection",
                description: " In networks, collision detection is the process by which a node determines that a collision has occurred. Collisions occur with most networks, so a protocol is required to recover from such events. Ethernet uses CSMA/CDas its collision detection and recovery system. In virtual reality environments, collision detection is a program interface that determines how close a user is to a real physical objects and will stop their movement before colliding with the object."
            }, {
                title: "collision domain",
                description: "A group of Ethernet or Fast Ethernet devices in a CSMA/CD LAN that are connected by repeaters and compete for access on the network. Only one device in the collision domain may transmit at any one time, and the other devices in the domain listen to the network in order to avoid data collisions.A collision domain is sometimes referred to as an Ethernet segment."
            }, {
                title: "command-line scanner",
                description: "On Unix-based platforms a command-line scanner is a scanning tool that disinfects viruses, worms and Trojan horses in all major file types."
            }, {
                title: "Communication Streaming Architecture",
                description: "A communications interface technology developed by Intel that directly connects the Memory Controller Hub (the chip that controls the memory) to the I/O controller hub (the network interface) to eliminate network traffic through the PCI bus. The interface allows for full-duplex data transmission at gigabit speeds. Also, memory read and write operations have lower latencies because data moves directly from the network interface to RAM."
            }, {
                title: "companion virus",
                description: "A type of computer virus that compromises a feature of DOS that enables software with the same name, but different extensions, to operate with different priorities. For example you may have program.exe on your computer, and the virus may create a file called program.com. When the computer executes program.exe, the virus runs program.com before program.exe is executed. In many cases, the real program will run so users believe that the system is operating normally and aren't aware that a virus was run on the system."
            }, {
                title: "comparison",
                description: "In a biometric security system, the process of measuring a biometric sample with a stored reference template."
            }, {
                title: "composite applications",
                description: "Applications that consist of pieces of other applications. Composite applications bring this information together in one place. For example, salespeople have disparate software applications that make it possible to do their jobs: software for contacts, ERP, a file system, and so on. May also be called custom applications, portals, Web applications, Web services, or complex applications. "
            }, {
                title: "computer business",
                description: "A broad term for a commercial entity involved in the computer industry. Examples of computer businesses include hardware and software manufacturers and retailers, software developers, PC repair and service companies, computer training firms, computer networking businesses, computer consultants and more."
            }, {
                title: "Computer Network Technician",
                description: "A Computer Network Technician is an information technology professional engaged in various businesses to build and troubleshoot computer networks. These individuals focus on setup, repair, and troubleshooting of both hardware and software products that are incorporated in a business’s operations.Other common and related job titles used to describe computer network technician includes the following:Computer network administrator / controller / operator / technicianLAN (local area network) administrator / controller / operator / technicianNetwork administrator / controller / operator / techniciansystem administratorWide area network (WAN) administrator / controller / operator / technician"
            }, {
                title: "computer virus ",
                description: "A computer virus is a program or piece of code that is loaded onto your computer without your knowledge and runs against your wishes. Viruses can also replicate themselves. All computer viruses are man-made."
            }, {
                title: "Conficker",
                description: "The Conficker/Downadup worm was first tracked in November 2008 (Win32/Conficker.A) and has infected thousands of business networks and millions of PCs since that time. Conficker uses advanced malware techniques to make it difficult to protect computers. Conficker primarily prevents users from installing Windows and antivirus software updates. The worm also has the capability to launch a second stage attack that downloads code that has the possibility to be devastating, such as rogue anti-virus software. In 2009, a variant of the worm Conficker.C was also commonly called the April Fools' computer worm."
            }, {
                title: "congestion",
                description: "A state occurring in part of a network when the message traffic is so heavy that it slows down network response time."
            }, {
                title: "congestion notification",
                description: "A signaling technique used by data transmission systems in order to indicate the status of network congestion. Devices that are communicating data across a network rely on congestion notification to determine when to send or delay the transmission of data packets.Forward congestion notification indicates to upstream data switching devices that data is being transmitted through congested channels and some of the data or packets may be discarded. Backward congestion notification indicates to downstream devices that data is going through congested channels."
            }, {
                title: "connection-oriented service",
                description: "One of two techniques used in data communications to transfer data at the Transport Layer (Layer 4). A Connection-oriented service requires a session connection be established before any data can be sent with a direct physical connection between the sessions. This often considered to be a more reliable network service than the alternative, connectionless service."
            }, {
                title: "connectionless",
                description: "Refers to network protocols in which a host can send a message without establishing a connection with the recipient. That is, the host simply puts the message onto the network with the destination address and hopes that it arrives. Examples of connectionless protocols include Ethernet, IPX, and UDP.In contrast, connection-oriented protocols require a channel to be established between the sender and receiver before any messages are transmitted."
            }, {
                title: "connectionless service",
                description: "Abbreviated as COS, connectionless service is one of two techniques used in data communications to transfer data at the Transport Layer (Layer 4). A connectionless service does not require a session connection between sender and receiver; the sender starts sending datagrams to the destination. In contrast with a connection-oriented service, this is less reliable but faster."
            }, {
                title: "connectivity",
                description: "A computer buzzword that refers to a program or device's ability to link with other programs and devices. For example, a program that can import data from a wide variety of other programs and can export data in many different formats is said to have good connectivity. On the other hand, computers that have difficulty linking into a network (many laptop computers, for example) have poor connectivity."
            }, {
                title: "consumerization of IT",
                description: "Consumerization of IT ('consumerization') is a phrase used to describe the cycle of information technology (IT) emerging in the consumer market, then spreading to business and government organizations, largely because employees are using the popular 'consumer market' technologies and devices at home and then introducing them in the workplace."
            }, {
                title: "content package",
                description: "An encrypted file containing content and metadata."
            }, {
                title: "Content Vectoring Protocol",
                description: "First developed by Check Point Software in 1996 as a protocol specification for integration with anti-virus servers. Check Point first utilized its Content Vectoring Protocol (CVP) in its FireWall-1 Version 3.0 and then developed CVP into an API specification.The CVP API defines an asynchronous interface to server applications that perform file content validation. An important feature of this is scanning files for viruses or harmful applets as they pass through firewalls. The CVP defines a client/server relationship that enables different firewall systems to share a common content validation server. In essence, the one content validation server collects from multiple firewalls the incoming files that have been flagged for inspection."
            }, {
                title: "contention",
                description: " Contention means competition for resources. The term is used especially in networks to describe the situation where two or more nodes attempt to transmit a message across the same wire at the same time.A type of network protocol that allows nodes to contend for network access. That is, two or more nodes may try to send messages across the network simultaneously. The contention protocol defines what happens when this occurs. The most widely used contention protocol is CSMA/CD, used by Ethernet. Also see polling and token passing."
            }, {
                title: "controller area network",
                description: "A controller area network (CAN) is a serial bus network of microcontrollers that connects devices, sensors and actuators in a system or sub-system for real-time control applications. There is no addressing scheme used in controller area networks, as in the sense of conventional addressing in networks (such as Ethernet). Rather, messages are broadcast to all the nodes in the network using an identifier unique to the network."
            }, {
                title: "CopyCat Malware",
                description: "CopyCat is a sophisticated form of mobile malware that has infected more than 14 million Android devices, according to some sources. The fully developed malware was discovered and named CopyCat by Check Point mobile threat researchers as a result of the malware taking credit (and generating revenue) for Android installations it didn't create.The CopyCat malware roots, or gains access to key subsystems of the Android mobile operating system, more than half of the mobile devices it infects, which helped enable the hackers that created the malware to generate more than $1.5 million in revenues from fake ads over the first two months of CopyCat's release into the wild."
            }, {
                title: "COR - central outdoor router",
                description: "Central outdoor router (COR) is the central router in a multi-device WLAN. The device is typically placed in a geographic central location and communicates with up 32 remote locations that use  ROR (remote outdoor router)."
            }, {
                title: "countermeasure",
                description: "Commonly used in IPS (intrusion prevention system), a countermeasure is a defensive technology method used to prevent an exploit from successfully occurring once a threat has been detected. Service patches and access control lists are also considered to be types of countermeasures."
            }, {
                title: "crack",
                description: "In computing, the phrase crack is used to mean the act of breaking into a computer system. The term was coined in the mid-80s by hackers who wanted to differentiate themselves from individuals whose sole purpose is to sneak through security systems. Whereas crackers sole aim is to break into secure systems, hackers are more interested in gaining knowledge about computer systems and possibly using this knowledge for playful pranks. Although hackers still argue that there's a big difference between what they do and what crackers do, the mass media has failed to understand the distinction, so the two terms -- hack and crack-- are often used interchangeably.Crack also means to copy commercial software illegally by breaking (cracking) the various copy-protection and registration techniques being used."
            }, {
                title: "CRC",
                description: "Short for cyclic redundancy check, a common technique for detecting data transmission errors. Transmitted messages are divided into predetermined lengths that are divided by a fixed divisor. According to the calculation, the remainder number is appended onto and sent with the message. When the message is received, the computer recalculates the remainder and compares it to the transmitted remainder. If the numbers do not match, an error is detected.A number of file transfer protocols, including Zmodem, use CRC in addition to checksum."
            }, {
                title: "credential",
                description: "An object that is verified when presented to the verifier in an authentication transaction. Credentials may be bound in some way to the individual to whom they were issued, or they may be bearer credentials. The former are necessary for identification, while the latter may be acceptable for some forms of authorization.Electronic credentials can be digital documents used in authentication and access control that bind an identity or an attribute to a claimant's token or some other property, such as a current network address. Credentials are verified when presented to the verifier in an authentication transaction. Anonymous credentials are used to evaluate an attribute when authentication need not be associated with a known personal identity."
            }, {
                title: "credit freeze",
                description: "Also known as a credit security freeze or security freeze. A credit freeze is a method by which a consumer can limit access to his or her credit report to companies with which he or she has a pre-existing credit relationship, such as mortgage, auto loan and credit card, or a company they wish to enter into a credit relationship with.By freezing their credit report, consumers can block the opening of a new credit account without their specific permission. When the consumer wants to open a new credit account, they can lift the freeze to allow access to their credit report by the potential creditor.Depending on state law, potential employers, insurance companies, landlords, collection agencies and other non-creditors can still access a person's credit report. But, it is unlikely that an identity thief would be able to open an account in the name of the consumer. "
            }, {
                title: "Cridex malware",
                description: "Cridex is a sophisticated strain of banking malware that can steal banking credentials and other personal information on an infected system in order to gain access to the financial records of a user.The Cridex Trojan Horse spreads by copying itself to mapped and removable drives on infected computers. Cridex creates a backdoor entry point on infected systems, enabling the possibility for additional malware to be downloaded and run as well as conduct operations such as opening rogue websites.This latter capability enables Cridex to capture the banking credentials of users on an infected system when the user attempts to visit and log into a financial web site. Cridex will surreptitiously redirect the user to a fraudulent version of the financial site and record the login credentials as they are entered."
            }, {
                title: "crimeware",
                description: "A type of malicious software that is designed to commit crimes on the Internet. Crimeware may be a virus, spyware or other deceptive piece of software that can be used to commit identity theft and fraud. See also malwar"
            }, {
                title: "crosstalk",
                description: "A disturbance, caused by electromagnetic interference, along a circuit or a cable pair. A telecommunication signal disrupts a signal in an adjacent circuit and can cause the signals to become confused and cross over each other."
            }, {
                title: "cryptanalysis",
                description: "The study of a cryptographic system for the purpose of finding weaknesses in the system and breaking the code used to encrypt the data without knowing the code��s key. There are 4 basic steps in a typical cryptanalysis:Determine the language being usedDetermine the system being used �� this can be a time-consuming stage in the process and involves counting character frequency, searching for repeated patterns and performing statistical tests.Reconstruct the system��s specific keysReconstruction of the plain text �� this step typically takes place at the same time as the keys are reconstructed.Cryptanalysis often is used by governments in military and diplomatic surveillance, by enterprises in testing the strength of security procedures, and by malicious hackers in exploiting weaknesses in Web sites."
            }, {
                title: "Cryptographic Service Provider",
                description: "Short for Cryptographic Service Provider it provides software or hardware-based encryption and decryption services.  It contains implementations of cryptographic standards and algorithms. At a minimum, a CSP consists of a dynamic-link library (DLL) that implements the functions in CryptoSPI (a system program interface). Most CSPs contain the implementation of all of their own functions."
            }, {
                title: "cryptography",
                description: "The art of protecting information by transforming it (encrypting it) into an unreadable format, called cipher text. Only those who possess a secret key can decipher (or decrypt) the message into plain text. Encrypted messages can sometimes be broken by cryptanalysis, also called codebreaking, although modern cryptography techniques are virtually unbreakable.As the Internet and other forms of electronic communication become more prevalent, electronic security is becoming increasingly important. Cryptography is used to protect e-mail messages, credit card information, and corporate data. One of the most popular cryptography systems used on the Internet is Pretty Good Privacybecause it's effective and free.Cryptography systems can be broadly classified into symmetric-key systems that use a single key that both the sender and recipient have, and public-keysystems that use two keys, a public key known to everyone and a private key that only the recipient of messages uses."
            }, {
                title: "CryptoLocker",
                description: "An advanced form of ransomware that first surfaced in September 2013, attacking individuals and companies in the U.K by arriving as an attachment in an e-mail that appears to be a customer complaint. If the attachment is opened, the CryptoLocker Trojan horse infiltrates the computer or server and encrypts all of the files on the computer with commercial-grade 2048-bit RSA encryption, at which point CryptoLocker displays a demand for money notice on the computer.Also known as Crilock, CryptoLocker typically requires a payment of 300 Euros via digital currency payment methods such as Bitcoins of MoneyPak. The victim is often provided a limited timeframe like 72 hours in which to pay the ransomware fee or risk permanently losing their data.If the victim does pay the ransom fee, they can expect to receive a decryption key that will restore their data and files, although there's no guarantee that the cyber criminals responsible for the particular variant of CryptoLocker will honor that promise.CryptoLocker is also able to spread quickly and infect other computers by utilizing other bot networks like ZeuS."
            }, {
                title: "CSCW",
                description: "Short for computer supported co-operative work CSCW is the term used to describe any technology system that relies on combinations of hardware and software resources to enable groups of people to collaborate and share technology. Groupware is a type of CSCW."
            }, {
                title: "CSMA/CA - Carrier Sense Multiple Access/Collision Avoidance",
                description: "Short for Carrier Sense Multiple Access/Collision Avoidance, a network contention protocol that listens to a network in order to avoid collisions, unlike CSMA/CD that deals with network transmissions once collisions have been detected. CSMA/CA contributes to network traffic because, before any real data is transmitted, it has to broadcast a signal onto the network in order to listen for collision scenarios and to tell other devices not to broadcast."
            }, {
                title: "CSMA/CD - Carrier Sense Multiple Access / Collision Detection",
                description: "Short for Carrier Sense Multiple Access / Collision Detection, a set of rules determining how network devices respond when two devices attempt to use a data channel simultaneously (called a collision). Standard Ethernet networks use CSMA/CD to physically monitor the traffic on the line at participating stations. If no transmission is taking place at the time, the particular station can transmit. If two stations attempt to transmit simultaneously, this causes a collision, which is detected by all participating stations. After a random time interval, the stations that collided attempt to transmit again. If another collision occurs, the time intervals from which the random waiting time is selected are increased step by step. This is known as exponential back off.CSMA/CD is a type of contention protocol.  Networks using the CSMA/CD procedure are simple to implement but do not have deterministic transmission characteristics. The CSMA/CD method is internationally standardized in IEEE 802.3 and ISO 8802.3."
            },
            {
                title: "CVE - Common Vulnerabilities and Exposures",
                description: "Common Vulnerabilities and Exposures (CVE) is a dictionary-type list of standardized names for vulnerabilities and other information related to security exposures. CVE aims to standardize the names for all publicly known vulnerabilities and security exposures. The goal of CVE is to make it easier to share data across separate vulnerable databases and security tools."
            },
            {
                title: "cyber crime",
                description: "Cyber crime encompasses any criminal act dealing with computers and networks (called hacking). Additionally, cyber crime also includes traditional crimes conducted through the Internet. For example; hate crimes, telemarketing and Internet fraud, identity theft, and credit card account thefts are considered to be cyber crimes when the illegal activities are committed through the use of a computer and the Internet."
            }, {
                title: "cyber forensics",
                description: "computer forensics, is the application of scientifically proven methods to gather, process, interpret, and to use digital evidence to provide a conclusive description of cyber crime activities.  Cyber forensics also includes the act of making digital data suitable for inclusion into a criminal investigation. Today cyber forensics is a term used in conjunction with law enforcement, and is offered as courses at many colleges and universities worldwide."
            }, {
                title: "Cyber Kill Chain",
                description: "A kill chain is used to describe the various stages of a cyber attack as it pertains to network security. The actual model, the Cyber Kill Chain framework, was developed by Lockheed Martin and is used for identification and prevention of cyber intrusions.The actual steps in a kill chain trace the typical stages of a cyber attack from early reconnaissance to completion where the intruder achieves the cyber intrusion. Analysts use the chain to detect and prevent advanced persistent threats (APT)."
            }, {
                title: "cybersecurity",
                description: "Cybersecurity refers to the technologies and processes designed to protect computers, networks and data from unauthorized access, vulnerabilities and attacks delivered via the Internet by cyber criminals.ISO 27001 (ISO27001) is the international Cybersecurity Standard that provides a model for establishing, implementing, operating, monitoring, reviewing, maintaining, and improving an Information Security Management System."
            }, {
                title: "D-Link",
                description: "D-Link is the corporate name of a designer and manufacturer of networking, broadband, digital, voice and data communications solutions. The company offers consumer devices in addition to providing network connectivity solutions to small and medium-sized business. The company's products and services include networking solutions for wireless bridging, network storage, cable and DSL modems, PoE adapters, network adapters, routers and more. D-Link was founded in 1986."
            }, {
                title: "DAC",
                description: "Short for digital-to-analog converter.Short for Discretionary Access Control."
            }, {
                title: "DAC - Discretionary Access Control",
                description: "In computer security, Discretionary Access Control (DAC) is a type of access control in which a user has complete control over all the programs it owns and executes, and also determines the permissions other users have those those files and programs. Because DAC requires permissions to be assigned to those who need access, DAC is commonly called described as a 'need-to-know' access model.Contrast with Mandatory Access Control (MAC) which is determined by the administrator."
            }, {
                title: "DAFS",
                description: "Short for Direct Access File System."
            }, {
                title: "DAFS - Direct Access File System",
                description: "Direct Access File System (DAFS) is a file-access sharing protocol that uses memory-to-memory interconnect architectures, such as VI and InfiniBand. DAFS is designed for storage area networks (SANs) to provide bulk data transfer directly between the application buffers of two machines without having to packetize the data. With DAFS an application can transfer data to and from application buffers without using the operating system, which frees up the processor and operating system for other processes and allows files to be accessed by servers using several different operating systems."
            }, {
                title: "daisy chain",
                description: " A hardware configuration in which devices are connected one to another in a series. The SCSI interface , for example, supports a daisy chain of up to 7 devices.To connect devices in a daisy chain pattern."
            }, {
                title: "DAN",
                description: "Short for Desk Area Network DAN is an architecture for a multimedia workstation that is based around an ATM interconnect. The architecture is designed to interconnect workstations, multimedia devices and bridges to other networks. Traditionally, multimedia devices were connected to workstations. However, in a Desk Area Network these local devices are connected directly to the network."
            }, {
                title: "darknet",
                description: "Short for dark Internet, in file sharing terminology, a darknet is a Internet or private network, where information and content are shared by darknet participants anonymously. Darknets are popular with users who share copy protected files as the service will let users send and receive files anonymously — that is, users cannot be traced, tracked or personally identified. Usually, darknets are not easily accessible via regular Web browsers."
            }, {
                title: "Darrloz (Linux.Darrloz)",
                description: "A worm that takes advantage of a vulnerability in the PHP scripting language to attempt to gain access to a computer or device. Linux.Darrloz uses the vulnerability to seek administrative privileges by providing commonly-used login usernames and passwords. If Darrloz gains access to the computer, it leaves a backdoor on the infected system or device that allows the cyber criminal to issue commands at any point in time.While Linux.Darrloz primarily targets Linux distributions, the worm has received considerable attention from the security industry as a potential security threat to the Internet of Things (IoT). There is evidence of Darrloz variants having been created specifically for chipsets utilized by home routers, set-top boxes, entertainment devices, security cameras and similar Internet-enabled devices.This has prompted concerns that as common, everyday objects like household appliances, security systems and automobiles become more and more Internet-enabled (i.e. The Internet of Things), security threats such as Linux.Darrloz could present considerable risks to computers and connected devices as well as those who use them."
            }, {
                title: "DAS - Direct Attached Storage",
                description: "DAS is short for direct attached storage.Direct attached storage (DAS), also called direct attach storage, is digital storage that is attached directly to a computer or a server. In other words, DAS isn't part of a storage network. The most familiar example of DAS is the internal hard drive in a laptop or desktop PC. In practice, the phrase direct attached storage is used most often in reference to dedicated storage arrays attached directly to servers. It is used to distinguish DAS from networked storage arrangements, like SAN or NAS devices."
            }, {
                title: "data at rest protection",
                description: "Data at rest is subject to threats from hackers and other malicious threats. To prevent this data from being accessed, modified or stolen, organizations will often employ security protection measures such as password protection, data encryption, or a combination of both. The security options used for this type of data are commonly referred to as data at rest protection (DARP)."
            }, {
                title: "data integrity",
                description: "Refers to the validity of data. Data integrity can be compromised in a number of ways:Human errors when data is enteredErrors that occur when data is transmitted from one computer to anotherSoftware bugs or virusesHardware malfunctions, such as disk crashesNatural disasters, such as fires and floods"
            }, {
                title: "data mirroring",
                description: "The act of copying data from one location to a storage device in real time. Because the data is copied in real time, the information stored from the original location is always an exact copy of the data from the production device. Data mirroring is useful in the speedy recovery of critical data after a disaster. Data mirroring can be implemented locally or offsite at a completely different location."
            }, {
                title: "Data Sending Trojan",
                description: "A type of a Trojan horse that is designed to provide the attacker with sensitive data such as passwords, credit card information, log files, e-mail address or IM contact lists. These Trojans can look for specific pre-defined data (e.g., just credit card information or passwords), or they could install a keylogger and send all recorded keystrokes back to the attacker."
            }, {
                title: "data vaulting",
                description: "The process of sending data off-site, where it can be protected from hardware failures, theft, and other threats. Several companies now provide Web backup services that will compress, encrypt, and periodically transmit a customer's data to a remote vault. In most cases the vaults will feature auxiliary power supplies, powerful computers, and manned security. Also referred to as a remote backup service (RBS)."
            }, {
                title: "datagram",
                description: " A data packet that is sent over an IP network."
            }, {
                title: "Datagram Congestion Control Protocol",
                description: "DCCP, short for Datagram Congestion Control Protocol, is a minimal general purpose transport-layer protocol that minimizes the overhead of packet  header size or end-node processing as much as possible. DCCP provides the establishment, maintenance and teardown of an unreliable packet flow, as well as the congestion control of that packet flow. "
            }, {
                title: "DCE",
                description: "Short for Distributed Computing Environment, a suite of technology services developed by The Open Group for creating distributed applications that run on different platforms. Short for Data Communications Equipment, a device that communicates with a Data Terminal Equipment (DTE) device in RS-232C communications. See DTE for more information."
            }, {
                title: "DDoS attack - Distributed Denial of Service",
                description: "DDoS is short for Distributed Denial of Service. DDoS is a type of DOS attack where multiple compromised systems, which are often infected with a Trojan, are used to target a single system causing a Denial of Service (DoS) attack. Victims of a DDoS attack consist of both the end targeted system and all systems maliciously used and controlled by the hacker in the distributed attack."
            }, {
                title: "DEC",
                description: "Pronounced deck, and short for Digital Equipment Corporation, one of leading producers of workstations, servers, and high-end PCs. DEC also developed one of the leading Internet search engines called Alta Vista.In January, 1998, DEC agreed to be acquired by Compaq, which was then acquired by Hewlett-Packard."
            }, {
                title: "decryption",
                description: "The process of decoding data that has been encrypted into a secret format. Decryption requires a secret key or password."
            }, {
                title: "defacement",
                description: "In Web site security terminology, the word defacement is most often used to describe the changing or defacing of a Web page or Web site by an unauthorized individual or process, usually a hacker."
            }, {
                title: "default gateway",
                description: "The gateway in a network that a computer will use to access another network if a gateway is not specified for use.In a network using subnets, the router that forwards traffic to a destination outside of the subnet of the transmitting device."
            }, {
                title: "Defense In-Depth",
                description: "A security and antivirus term used to describe an approach to system security where multiple layers of security are deployed to guard against failure of one component or layer."
            }, {
                title: "DEN",
                description: "Short for directory enabled network, a type of network that is managed from a central location. A DEN stores information about its users, network resources and applications in a database so that its operation can be managed from a central point by the network administrator. Any user that has an identification in the network can use any resource on the network as long as it has been predetermined that that user has the access privileges. For example, a student at a school can log on to any computer in the school��s network and access the resources that have been made available to him, such as applications, documents and network drives. Since access privileges are based on the individual and not the device, another person can subsequently sit at that same computer and using his identification and password have access to different resources than the person before him."
            }, {
                title: "DEP",
                description: "Data Execution Prevention (DEP) helps prevent damage from viruses and other security threats that attack by running (executing) malicious code from memory locations that only Windows and other programs should use. This type of threat causes damage by taking over one or more memory locations in use by a program. Then it spreads and harms other programs, files and even your e-mail contacts. DEP monitors your programs to determine if they use system memory safely. To do this, DEP software works alone or with compatible microprocessors to mark some memory locations as 'non-executable'. If a program tries to run code, malicious or not, from a protected location, DEP closes the program and notifies you.DEP can take advantage of software and hardware support. To use DEP, your computer must be running Microsoft Windows XP Service Pack 2 (SP2) or later, or Windows Server 2003 Service Pack 1 or later."
            }, {
                title: "deploy",
                description: "To install, test and implement a computer system or application. The term can be used to refer to any installation and testing, such as setting up a new network in an enterprise, to installing a server farm, to implementing a new application over a distributed computing network.The word deploy has roots as a military term, used to describe the placement of equipment and troops in a battlefield."
            }, {
                title: "DES",
                description: "Short for Data Encryption Standard, a popular symmetric-key encryption method developed in 1975 and standardized by ANSI in 1981 as ANSI X.3.92. DES uses a 56-bit key and uses the block cipher method, which breaks text into 64-bit blocks and then encrypts them."
            }, {
                title: "Desktop-as-a-service (DaaS)",
                description: "Desktop-as-a-service (DaaS) is a form of virtual desktop infrastructure (VDI) in which the VDI is outsourced and handled by a third party. Also called hosted desktop services, desktop-as-a-service is frequently delivered as a cloud service along with the apps needed for use on the virtual desktop.A Desktop-as-a-service provider typically handles storing, securing and backing up a user's data, as well as upgrades for the DaaS service and supported applications. Some of the more well-known desktop-as-a-service providers include Amazon, Desktone (a VMware company) and Citrix."
            }, {
                title: "Destructive Trojan",
                description: "A type of Trojan horse designed to destroy and delete files, and is more like a virus than any other Trojan. It can often go undetected by antivirus software."
            }, {
                title: "Devicescape",
                description: "The corporate name of a Wi-Fi software solution provider, headquartered in San Bruno, California. Devicescape offers Wi-Fi solutions that are designed to effortlessly connect to any Wi-Fi network. One product, Easy Wi-Fi, is a solution that makes Wi-Fi devices easy to set up, easy to use, compatible with any Wi-Fi network, and usable all over the world. The product is targeted to device manufacturers. For Wi-Fi users, the company's Easy Wi-Fi provides instant access to hotspots all over the World."
            }, {
                title: "DHA",
                description: "Short for Directory Harvest Attack, DHA is a type of malicious Internet attack where online spammers collect valid e-mail address and target those addresses in a spam attack or sell the lists of valid e-mail addresses to unscrupulous marketers. In a DHA attack, the spammer will select a domain name, for example, Webopedia.com. The spammer then sends an e-mail to any possible addresses within that domain name. If the e-mail server doe not reject the e-mail, the spammer knows it is a valid e-mail address and adds it to his target list."
            }, {
                title: "DHCP Server Settings",
                description: "DHCP (Dynamic Host Configuration Protocol) Server Settings are commonly found on broadband router firmware. The DHCP section is where you can configure the router's built-in DHCP Server to assign IP addresses to the computers and other devices on your local area network (LAN). Other DHCP options include Enable DHCP Server and Add or Edit DHCP Reservation."
            }, {
                title: "Dial-on-Demand Routing (DDR)",
                description: "Dial-on-Demand Routing (DDR) is a routing technique developed by Cisco that allows a user to utilize existing telephone lines, or public circuit-switched networks, to form a WAN instead of lines that are dedicated specifically to the WAN. DDR is typically implemented by users that do not need permanent, continuous links between sites on the WAN because the volume of traffic over the WAN is low and the transmissions are periodic as opposed to continuous. The connection only becomes active when data is sent to the remote site. When no data has been sent over the link for a specified amount of time, the link is disconnected.Using DDR, a connection between sites is only established when a specific type of traffic initiates the call or when you a backup link is needed for redundancy or load sharing. DDR is used in order to save on the costs of a dedicated WAN line for organizations that do not need permanent continuous connection and as a back-up by organizations that use the dedicated line for critical applications."
            }, {
                title: "dial-up access",
                description: "Refers to connecting a device to a network via a modem and a public telephone network. Dial-up access is really just like a phone connection, except that the parties at the two ends are computer devices rather than people. Because dial-up access uses normal telephone lines, the quality of the connection is not always good and data rates are limited. In the past, the maximum data rate with dial-up access was 56 Kbps (56,000 bits per second), but new technologies such as ISDN are providing faster rates.An alternative way to connect two computers is through a leased line, which is a permanent connection between two devices. Leased lines provide faster throughputand better quality connections, but they are also more expensive."
            }, {
                title: "dialer",
                description: "A program that is often used to maliciously redirect Internet connections. When used in a malicious way, it disconnects the legitimate telephone connection used to connect to the Internet and re-connects via a premium rate number (1-900 numbers). Often, the first indication a user has of this activity is an extremely expensive phone bill, as the victim (account holder) is being charged for the amount of time connected to the premium rate number. Malicious dialer programs are a type of spyware that can install itself to your dial-up settings. "
            }, {
                title: "dictionary attack",
                description: " A method used to break security systems, specifically password-based security systems, in which the attacker systematically tests all possible passwords beginning with words that have a higher possibility of being used, such as names and places. The word 'dictionary' refers to the attacker exhausting all of the words in a dictionary in an attempt to discover the password. Dictionary attacks are typically done with software instead of an individual manually trying each password.An e-mail spamming technique in which the spammer sends out thousands or millions of e-mails with randomly generated addresses using combinations of letters added to known domain names in the hopes of reaching a percentage of actual e-mail addresses. For example, a dictionary attack list might begin with john@webopedia.com, john1@webopedia.com, john2@webopedia.com, and so on until all possible combinations of letters and numbers has been exhausted."
            }, {
                title: "diffusing update algorithm",
                description: "Abbreviated as DUAL, the diffusing update algorithm is a routing protocol used by EIGRP to calculate and create routing tables to determine whether a path is looped or loop-free. It also allows a router running EIGRP to find alternate paths without waiting on updates from other routers. The diffusing update algorithm (DUAL) was developed at SRI International by Dr. J.J. Garcia-Luna-Aceves."
            }, {
                title: "DigiNotar",
                description: "DigiNotar is a Dutch Certificate Authority (CA) that issues SSL (Secure Sockets Layer) and EVSSL (Extended Validation) certificates, which help to ensure the websites visited by users when Web browsing are authentic rather than fake websites masquerading as legitimate sites. In July 2011, DigiNotar was hacked by a certificate bandit, which was able to issue fraudulent certificates through the company for a fake Google web site as well as several dozen other sites.As a certificate authority, DigiNotar plays a critical role in data security and electronic commerce by providing an independent 'trusted third party' guarantee that the website and the person interacting and exchanging information with the website are really who they claim to be. Following DigiNotar's issuance of fraudulent certificates in 2011, Google, Mozilla and Microsoft all revoked the company's authority to vouch for its certificates as a trusted third party, and in September of 2011 the Dutch government announced that it would be switching to a different certification authority."
            }, {
                title: "digital access and cross-connect system (DACS)",
                description: "A digital switching device in telecommunications for routing T1 lines. The DACS can cross-connect any T1 line in the systemwith any other T1 line also in the system. DACS can also connect any DS-0 channel or group of channels on a T1 line to any DS-0 time slots of any other line."
            }, {
                title: "digital certificate",
                description: "An attachment to an electronic message used for security purposes. The most common use of a digital certificate is to verify that a user sending a message is who he or she claims to be, and to provide the receiver with the means to encode a reply.An individual wishing to send an encrypted message applies for a digital certificate from a Certificate Authority (CA). The CA issues an encrypted digital certificate containing the applicant's public key and a variety of other identification information. The CA makes its own public key readily available through print publicity or perhaps on the Internet.The recipient of an encrypted message uses the CA's public key to decode the digital certificate attached to the message, verifies it as issued by the CA and then obtains the sender's public key and identification information held within the certificate. With this information, the recipient can send an encrypted reply."
            }, {
                title: "digital envelope",
                description: "A type of security that uses two layers of encryption to protect a message. First, the message itself is encoded using symmetric encryption, and then the key to decode the message is encrypted using public-key encryption. This technique overcomes one of the problems of public-key encryption, which is that it is slower than symmetric encryption. Because only the key is protected with public-key encryption, there is very little overhead."
            }, {
                title: "digital loop carrier",
                description: "Abbreviated as DLC, a system for transmitting digital multiplexed data signals using existing cabling for distribution. The digital loop carrier begins the transmission at the central office on a high-speed digital line, such as T1, and routes the transmission to a remote digital terminal, which then converts the signal into a form that can be passed on to low-speed lines for routing to the end users telephone or computer. The process is reversed when transmissions are sent from the end user, where the system collects transmissions and multiplexes them so they can be sent in the aggregate to the central office of the local loop."
            }, {
                title: "digital signature",
                description: "A digital code that can be attached to an electronically transmitted message that uniquely identifies the sender. Like a written signature, the purpose of a digital signature is to guarantee that the individual sending the message really is who he or she claims to be. Digital signatures are especially important for electronic commerce and are a key component of most authentication schemes. To be effective, digital signatures must be unforgeable. There are a number of different encryption techniques to guarantee this level of security."
            }, {
                title: "digital wallet",
                description: " Encryption software that works like a physical wallet during electronic commerce transactions. A wallet can hold a user's payment information, a digital certificate to identify the user, and shipping information to speed transactions. The consumer benefits because his or her information is encrypted against piracy and because some wallets will automatically input shipping information at the merchant's site and will give the consumer the option of paying by digital cash or check. Merchants benefit by receiving protection against fraud.Most wallets reside on the user's PC, but recent versions, called 'thin' wallets, are placed on the credit card issuer's server. Netscape and Microsoft now support wallet technology on their browsers.Digital Wallet, a registered trademark of Minds@Work, is a self-powered portable hard drive used for storing digital camera images."
            }, {
                title: "DIIOP",
                description: "Short for Dominio Internet Inter-Orb Protocol it allows external programs to attach to, and manipulate Domino databases. DIIOP is frequently used to allow Java-based and other non CORBA programs to connect to Lotus Domino."
            }, {
                title: "directory",
                description: "A directory is defined as an organizational unit, or container, used to organize folders and files into a hierarchical structure.A directory contains bookkeeping information about files that are, figuratively speaking, beneath them in the hierarchy. You can think of a directory as a file cabinet that contains folders that contain files."
            }, {
                title: "directory service",
                description: "A network service that identifies all resources on a network and makes them accessible to users and applications. Resources include e-mail addresses, computers, and peripheral devices such as printers. Ideally, the directory service should make the physical network topology and protocols transparent so that a user on a network can access any resource without knowing where or how it is physically connected.There are a number of directory services that are used widely. Two of the most important ones are LDAP, which is used primarily for e-mail addresses, and Netware Directory Service (NDS), which is used on Novell Netware networks. Virtually all directory services are based on the X.500 ITU standard, although the standard is so large and complex that no vendor complies with it fully."
            }, {
                title: "diskless workstation",
                description: "A diskless workstation or PC on a local-area network (LAN) is a computer system that does not have its own disk. Instead, it stores files on a network file server.This type of system uses network booting to load the operating system, but it does contain its own main components including the CPU, RAM, video, sound and network adapter (see 'workstation' for a description of common components).Diskless workstations can reduce the overall cost of a LAN because one large-capacity disk drive is usually less expensive than several low-capacity drives. In addition, diskless workstations can simplify backups and security because all files are in one place -- on the file server. Also, accessing data from a large remote file server is often faster than accessing data from a small local storage device. One disadvantage of diskless workstations, however, is that they are useless if the network fails."
            }, {
                title: "Distribution Point",
                description: "A point within a network where the cable or fiber terminates. This point provides a point of entry for engineers to terminate or test the network."
            }, {
                title: "DLC",
                description: "Short for Data Link Control, the second lowest layer in the OSI Reference Model. Every network interface card (NIC) has a DLC address or DLC identifier (DLCI) that uniquely identifies the node on the network. Some network protocols, such as Ethernet and Token-Ring use the DLC addresses exclusively. Other protocols, such as TCP/IP, use a logical address at the Network Layer to identify nodes. Ultimately, however, all network addresses must be translated to DLC addresses. In TCP/IP networks, this translation is performed with the Address Resolution Protocol (ARP).For networks that conform to the IEEE 802 standards (e.g., Ethernet ), the DLC address is usually called the Media Access Control (MAC) address."
            }, {
                title: "DLCI - data link connection identifier",
                description: "Data link connection identifier (DLCI) is a number of a private or switched virtual circuit in a Frame Relay network that tells the Frame Relay how to route the data. The DLCI field identifies which logical circuit the data travels over."
            }, {
                title: "DLP – data loss prevention",
                description: "Data loss prevention, or DLP, refers to technology or software developed to protect and prevent the potential for data loss or theft. Data loss protection software is designed to monitor, detect and prevent the loss of data while it's at rest, either in on-premises storage drives or in the cloud, as well as when it's in use or in transit.DLP policies and technology are a key component is an organization's comprehensive security procedures, and they help to ensure that confidential or sensitive corporate information isn't accessed or transmitted without proper authorization.Data Loss Prevention is almost always accompanied by other hardware and software security measures in an enterprise such as firewalls, antivirus and anti-malware software and intrusion detection systems (IDS)."
            }, {
                title: "DLSw - Data-Link Switching",
                description: "Short for Data-Link Switching, DLSw is a means of tunneling Systems Network Architecture (SNA) and NetBIOS traffic over an IP network. Before the development of DLSw, SNA and NetBIOS traffic was transported via Source-Route Bridging (SRB), a protocol for transporting in token ring environments."
            }, {
                title: "DMI",
                description: "Short for Desktop Management Interface, an API to enable software to collect information about a computer environment. For example, using DMI a program can determine what software and expansion boards are installed on a computer.DMI is designed to be platform -independent and operating system -independent so that programs can make the same function calls to collect information no matter what system they're running in. This system independence is implemented by collecting information from MIF files, which are plain text files containing information about a software or hardware component.DMI was designed by the Desktop Management Task Force (DMTF), a consortium of hardware manufacturers led by Intel. Version 2.0 allows a central computer not only to gather information about computers connected to a network, but also to configure them. PCs that comply with DMI 2.0 are sometimes called managed PCs"
            }, {
                title: "DMZ - demilitarized zone",
                description: "Pronounced as separate letters, DMZ is short for demilitarized zone, a computer or small subnetwork that sits between a trusted internal network, such as a corporate private LAN, and an untrusted external network, such as the public Internet.Typically, the DMZ contains devices accessible to Internet traffic, such as Web (HTTP ) servers, FTP servers, SMTP (e-mail) servers and DNS servers.The phrase demilitarized zone comes from military use, meaning a buffer area between two enemies."
            }, {
                title: "DNSBL",
                description: "Short for DNS Based List, DNS Blacklist, or DNS Blocklist.A published list of IP addresses that can be queried through the Internet. DNSBLs are used to publish IP addresses associated with e-mail spam and spamming. Most mail servers can be configured to reject messages from addresses on a DNSBL. An address found in a DNSBL may be directly associated with spam, or may have made the list due to Web server vulnerabilities that can be used by spammers. There are many DNSBLs available, each published and maintained by different individuals and organizations."
            }, {
                title: "DNSChanger",
                description: "DNSChanger, also referred to as DNS Changer and nicknamed the 'Internet doomsday' virus, is a type of malware used by hackers to change a user's DNS server settings, replacing the ISP's valid DNS servers with rogue DNS servers operated by the hacker or a third party.In November 2011 the U.S. FBI discovered a network of rogue DNS servers that were being sent traffic by computers infected with the DNSChanger malware. The FBI disabled these servers and replaced them with servers that would share valid DNS addresses.However, in a cost-cutting move the FBI shut these servers down on July 9th, 2012, which meant computers still infected with DNSChanger would no longer be able to access the Internet unless the DNS settings for these computers were redirected to new, 'clean' DNS servers."
            }, {
                title: "Docker Datacenter",
                description: "Docker Datacenter (DDC) is a container management and deployment services project from Docker developed to help enterprises get up to speed with their own Docker-ready platforms. Docker describes its Docker Datacenter tool as 'an integrated, end-to-end platform for agile application development and management at any scale.'In real-world terms, Docker Datacenter serves as 'a sort of container-as-a-service (CaaS) setup within a company, where IT departments can build and store Docker images, code jockeys can build and test applications in containers on their laptops or desktop machines, and administrators can zip them over to servers in the corporate data center — or on virtual machines in the cloud — to put them into production,' according to ServerWatch."
            }, {
                title: "domain",
                description: " A group of computers and devices on a network that are administered as a unit with common rules and procedures. Within the Internet, domains are defined by the IP address. All devices sharing a common part of the IP address are said to be in the same domain.In database technology, domain refers to the description of an attribute's allowed values. The physical description is a set of values the attribute can have, and the semantic, or logical, description is the meaning of the attribute."
            }, {
                title: "domain controller",
                description: "As defined by Microsoft, in Active Directory server roles, computers that function as servers within a domain can have one of two roles: member server or domain controller. Abbreviated as DC, domain controller is a server on a Microsoft Windows or Windows NT network that is responsible for allowing host access to Windows domain resources. The domain controllers in your network are the centerpiece of your Active Directory directory service.  It stores user account information, authenticates users and enforces security policy for a Windows domain."
            }, {
                title: "domain migration",
                description: "Moving data from one system, or domain, to another without compromising security or losing any of the data. Domain migration happens when servers are upgraded and the data (including any authentication and authorization information) must be moved to a new system, when an administrator changes from one ISP to another or when an Web sites administrator moves the data that creates a Web page (any mark-up language coding and images) from one system, or domain, to another."
            }, {
                title: "domain name",
                description: "Domain names are used to identify one or more IP addresses. For example, the domain name microsoft.com represents about a dozen IP addresses. Domain names are used in URLs to identify particular Web pages. For example, in the URL http://www.pcwebopedia.com/index.html, the domain name is pcwebopedia.com.Every domain name has a suffix that indicates which top level domain (TLD) it belongs to. There are only a limited number of such domains. For example:gov - Government agenciesedu - Educational institutionsorg - Organizations (nonprofit)mil - Militarycom - commercial businessnet - Network organizationsca - Canadath - ThailandBecause the Internet is based on IP addresses, not domain names, every Web server requires a Domain Name System (DNS) server to translate domain names into IP addresses."
            }, {
                title: "dongle",
                description: "A device that attaches to a computer to control access to a particular application. Dongles provide the most effective means of copy protection. Typically, the dongle attaches to a PC's parallel port. On Macintoshes, the dongle sometimes attaches to the ADB port. The dongle passes through all data coming through the port so it does not prevent the port from being used for other purposes. In fact, it's possible to attach several dongles to the same port."
            }, {
                title: "Dorkbot",
                description: "A family of malware worms that typically spreads through instant messaging, USB removable drives, websites or social media channels like Facebook and Twitter. Downloading and installing Dorkbot malware results in it opening a backdoor on infected computers, allowing for remote access and potentially turning the computer into a botnet.The Dorkbot worm gained publicity in late 2011 for an attack on Facebook’s chat system, with users receiving a message with a bogus link that appeared to come from one of their Facebook friends.  A similar Dorkbot worm appeared later in the same year, this time preying on Twitter users."
            }, {
                title: "DoS attack - Denial of Service attack",
                description: "Short for denial-of-service attack, a type of attack on a network that is designed to bring the network to its knees by flooding it with useless traffic. Many DoS attacks, such as the Ping of Death and Teardrop attacks, exploit limitations in the TCP/IP protocols. For all known DoS attacks, there are software fixes that system administrators can install to limit the damage caused by the attacks. But, like viruses, new DoS attacks are constantly being dreamed up by hackers."
            }, {
                title: "downstream",
                description: "Downstream is a transmission from a server to an end user. A downstream transmission can be in the form of a signal being transmitted from a server to a workstation across a network, such as a LAN, or a signal being sent from a cable service provider to a customer. A transmission from an end user to a server is referred to as upstream."
            }, {
                title: "downtime",
                description: "Downtime refers to periods of time during which a computer system, server or network is shut off or unavailable for use. Systems go through periods of downtime for a variety of reasons, including power or hardware failure, system crashes, hacker attacks, system reboots, operating system and/or software updates, lack of network connectivity and more.While some downtime events are planned as part of maintenance schedules (planned downtime), in many cases periods of downtime result from unplanned or unexpected events like network outages and hardware failure."
            }, {
                title: "DP",
                description: "DP is an abbreviation that is used to mean the following: Short for data processing|||| Short for dual-processor ||||Short for Distribution Point. "
            }, {
                title: "Dridex malware",
                description: "Dridex is a strain of banking malware that leverages macros in Microsoft Office to infect systems. Once a computer has been infected, Dridex attackers can steal banking credentials and other personal information on the system to gain access to the financial records of a user.Dridex operates by first arriving on a user's computer as a malicious spam e-mail with a Microsoft Word document attached to the message. If the user opens the document, a macro embedded in the document surreptitiously triggers a download of the Dridex banking malware, enabling it to first steal banking credentials and then attempt to generate fraudulent financial transactions."
            }, {
                title: "drive-by download",
                description: "A drive-by download refers to potentially harmful software code that is installed on a person's computer without the user needing to first accept or even be made aware of the software installation.Drive-by downloads are a form of malware typically found on compromised web pages. By simply 'driving by,' or visiting the web page, the drive-by download begins to download and is then installed in the background on the computer or mobile device without alerting the user."
            }, {
                title: "DRM",
                description: "Short for digital rights management, a system for protecting the copyrights of data circulated via the Internet or other digital media by enabling secure distribution and/or disabling illegal distribution of the data. Typically, a DRM system protects intellectual property by either encrypting the data so that it can only be accessed by authorized users or marking the content with a digital watermark or similar method so that the content can not be freely distributed."
            }, {
                title: "dropper",
                description: "Also called a dropper program or a virus dropper, a program that when run will install a virus, Trojan horse or worm onto a hard drive, floppy disk or other memory media. The dropper itself is not a virus �� it does not replicate; instead, its more like a Trojan horse in that it carries the malicious code with it and is not detected by virus-scanning software because it is not an infected file but carries the code to 'drop' a virus into a system. Droppers are uncommon."
            }, {
                title: "DSML",
                description: "Directory Service Markup Language combines directory services technology (LDAP ) with XML syntax to provide an easy way to share and use personalized data across company and technology boundaries.The DSML effort was announced by creator Bowstreet on July 12, 1999. Initiative supporters include AOL-Netscape, Sun Microsystems, Oracle, Novell, Microsoft, and IBM."
            }, {
                title: "DTCP-IP",
                description: " Short for Digital Transmission Content Protection over Internet Protocol, a specification for copy protection of copyrighted content that is transferred over digital interfaces in home networks that adhere to IP. Under this specification, digital content can be shared securely between devices in a users home but not shared with third-parties outside the home network. Using an authentication scheme, DTCP-IP allows the user to designate devices in the home network as trusted destinations that can transfer data back and forth, but DTCP-IP will not allow the content to be transmitted over the Internet to be shared outside of the home network.DTCP-IP was developed jointly by Intel, Toshiba, Hitachi, Sony, and Panasonic."
            }, {
                title: "DTN - Disruption Tolerant Networking",
                description: "Abbreviated as DTN, Disruption Tolerant Networking is a networking architecture that is designed to provide communications in the most unstable and stressed environments, where the network would normally be subject to frequent and long lasting disruptions and high bit error rates that could severely degrade normal communications. It is an experimental protocol developed by the Delay & Disruption Tolerant Networking Research Group, which operates under the Internet Research Task Force."
            }, {
                title: "dual-homed host",
                description: "A dual-homed host is a term used to reference a type of firewall that uses two (or more) network interfaces. One connection is an internal network and the second connection is to the Internet. A dual-homed host works as a simple firewall provided there is no direct IP traffic between the Internet and the internal network."
            }, {
                title: "dual-ring topology",
                description: "A network topology in which two concentric rings connect each node on a network instead of one network ring that is used in a ring topology. Typically, the secondary ring in a dual-ring topology is redundant. It is used as a backup in case the primary ring fails. In these configurations, data moves in opposite directions around the rings. Each ring is independent of the other until the primary ring fails and the two rings are connected to continue the flow of data traffic."
            }, {
                title: "DVMRP",
                description: "Short for Distance Vector Multicast Routing Protocol, an interior gateway protocol based on RIP that supports connectionless multicast data transmission to a group of hosts over a network. DVMRP tunnels multicast transmission within unicast packets that are reassembled into multicast data when they arrive at their destination."
            }, {
                title: "DWDM - Dense Wavelength Division Multiplexing",
                description: "Short for Dense Wavelength Division Multiplexing, an optical technology used to increase bandwidth over existing fiber optic backbones.DWDM works by combining and transmitting multiple signals simultaneously at different wavelengths on the same fiber. In effect, one fiber is transformed into multiple virtual fibers. So, if you were to multiplex eight OC-48 signals into one fiber, you would increase the carrying capacity of that fiber from 2.5 Gb/s to 20 Gb/s. Currently, because of DWDM, single fibers have been able to transmit data at speeds up to 400Gb/s.A key advantage to DWDM is that it's protocol- and bit-rate-independent. DWDM-based networks can transmit data in IP, ATM, SONET /SDH, and Ethernet, and handle bit rates between 100 Mb/s and 2.5 Gb/s. Therefore, DWDM-based networks can carry different types of traffic at different speeds over an optical channel."
            }, {
                title: "dynamic NAT",
                description: "A type of NAT in which a private IP address is mapped to a public IP address drawing from a pool of registered (public) IP addresses. Typically, the NAT router in a network will keep a table of registered IP addresses, and when a private IP address requests access to the Internet, the router chooses an IP address from the table that is not at the time being used by another private IP address. Dynamic NAT helps to secure a network as it masks the internal configuration of a private network and makes it difficult for someone outside the network to monitor individual usage patterns. Another advantage of dynamic NAT is that it allows a private network to use private IP addresses that are invalid on the Internet but useful as internal addresses."
            }, {
                title: "Dynamic Smart Cooling",
                description: "HP Dynamic Smart Cooling (DSC) is a technology used for power and cooling in the data center. HP's solution consists of energy-efficient systems, software, and services to help drive power and cooling gains and efficiencies while significantly reducing energy costs through more efficient power management and protection solutions."
            }, {
                title: "e-commerce trustmark",
                description: "A badge, image or logo found on an electronic commerce Web site that indicates the Web site is a member of a professional organization or that the Web site has passed security tests. The trustmark shows approval branding of a well-known third company. Some common e-commerce trustmarks include those for SSL security, Better Business Bureau, Chamber of Commerce, hacker-free, and others. May also be written as trust mark."
            }, {
                title: "e-discovery",
                description: "Short for electronic discovery, e-discovery is a term used to describe the compiling, storing and securing of digital information, such as e-mail, files and other data. Growth in this market is fueled by the need for corporations to comply with amendments to the Federal Rules of Civil Procedure (FRCP) covering the discovery of digital information. The term e-discovery may also be written as eDiscovery"
            }, {
                title: "e-mail harvesting",
                description: "An automated process where a bot is used to search Web pages for e-mail addresses. The e-mail addressees are collected into a database that can be used by spammers to send unsolicited e-mail."
            }, {
                title: "e-mail spoofing",
                description: "Forging an e-mail header to make it appear as if it came from somewhere or someone other than the actual source. The main protocol that is used when sending e-mail -- SMTP -- does not include a way to authenticate. There is an SMTP service extension (RFC 2554) that allows an SMTP client to negotiate a security level with a mail server. But if this precaution is not taken anyone with the know-how can connect to the server and use it to send spoofed messages by altering the header information.In some jurisdictions, e-mail spoofing anyone other than yourself is illegal."
            }, {
                title: "EAI - enterprise application integration",
                description: "Enterprise application integration (EAI) is the unrestricted sharing of data and business processes throughout the networked applications or data sources in an organization."
            }, {
                title: "eBGP",
                description: "Short for External Border Gateway Protocol (BGP), eBGP is the protocol used to transport information to other BGP enabled systems in different autonomous systems (AS). EBGP works opposite to iBGP."
            }, {
                title: "ECML - Electronic Commerce Modeling Language",
                description: "Electronic Commerce Modeling Language (ECML) is a universal format for online commerce Web sites that contains customer information that is used for purchases made online, formatted through the use of XML tags. It is a standard way of transferring billing, shipping and payment information to merchant sites regardless of what site the customer is purchasing from.If order forms are standardized, the customer's information can be imported directly into the form from a digital wallet with the click of one button. This saves the customer from repeatedly filling out the same information on multiple order forms on multiple sites. ECML can be used in conjunction with SSL and SET.The founding members of the ECML Alliance are America Online, American Express, Brodia, Compaq, CyberCash, Discover, FSTC, IBM, MasterCard, Microsoft, Novell, SETCo, Sun Microsystems, Trintech and Visa U.S.A."
            }, {
                title: "EDB - Execute Disable Bit",
                description: "Execute Disable Bit (EDB) is an Intel hardware-based security feature that can help reduce system exposure to viruses and malicious code. EDB allows the processor to classify areas in memory where application code can or cannot execute. When a malicious worm attempts to insert code in the buffer, the processor disables code execution, preventing damage and worm propagation.To use Execute Disable Bit you must have a PC or server with a processor with Execute Disable Bit capability and a supporting operating system. EDB-enabled processors by Intel are indicated by a (J) after the CPU model number. Execute Disable Bit is abbreviated as EDB (by Intel) or XDB."
            }, {
                title: "edge router",
                description: "A device in an Asynchronous Transfer Mode (ATM) network that routes data between an ATM backbone network and local area networks (LANs)."
            }, {
                title: "edge switch",
                description: "A switch that is located at the meeting point between two networks. The edge switch typically connects an end user's LAN to an ISP's network or backbone.An edge switch also is called an access node or a service node."
            }, {
                title: "EER - equal error rate",
                description: "Equal error rate is abbreviated as EER.Equal error rate (EER) is a biometric security system algorithm used to predetermines the threshold values for its false acceptance rate and its false rejection rate. When the rates are equal, the common value is referred to as the equal error rate. The value indicates that the proportion of false acceptances is equal to the proportion of false rejections. The lower the equal error rate value, the higher the accuracy of the biometric system.Equal error rate  may also be referred to as a crossover rate or crossover error rate (CER)."
            }, {
                title: "EFS",
                description: "Short for Encrypting File System, part of the Microsoft NTFS file system. EFS is a transparent public key encryption technology that works in conjunction with NTFS permissions to grant and deny users access to files and folders in Windows NT (excluding NT4), 2000 and XP (excluding XP Home Edition) operating systems.EFS uses a public key and a private key for encryption. If the user does not have one, the EFS generates the key pair automatically. Files can be encrypted individually, or a folder can be designated as encrypted, so that any file written to that folder is automatically encrypted. Because EFS's encryption technology integrates into the file system, users can't access the hard disk without going through the file system.EFS is not available in Windows versions 95, 98 or Me as these operating systems use the FAT16 and FAT32 file systems."
            }, {
                title: "EFTPOS - Electronic Funds Transfer Point of Sale",
                description: "Short for Electronic Funds Transfer Point of Sale, it means customers pay funds (transfer) from their account to the merchants account electronically while still in the shop (the point of sale). To use EFTPOS you must have a special plastic card that is the (key) to your account and will let you access your money from merchants shops."
            }, {
                title: "EGP",
                description: "Short for exterior gateway protocol, a generic term for a routing protocol that is used to exchange routing information between two hosts in a network of autonomous systems. An EGP is typically used between hosts on the Internet to share routing table information.BGP is an example of an EGP."
            }, {
                title: "egress traffic",
                description: " Network traffic that begins inside of a network and proceeds through its routers to a destination somewhere outside of the network. For example, an e-mail message that is considered egress traffic will travel from a user��s workstation and pass through the enterprise��s LANrouters before it is delivered to the Internet to travel to its final destination."
            }, {
                title: "EIGRP - Enhanced Interior Gateway Routing Protocol",
                description: "Enhanced Interior Gateway Routing Protocol (EIGRP) is an evolved version of IGRP that addresses the demands of large-scale internetworks and the changes in network technology that have been developed since the implementation of IGRP."
            }, {
                title: "electronic discovery",
                description: "Electronic discovery, or e-discovery, is a type of cyber forensics (also referred to as computer or digital forensics) and describes the process by where law enforcement can obtain, secure, search and process any electronic data for use as evidence in a legal proceeding or investigation. Electronic discovery may be limited to a single computer or a network-wide search."
            }, {
                title: "Elina",
                description: "Elina is the corporate name of a networking and IT management solution provider. The company offers enterprise-class solutions for business continuity and visibility, through robust network security, reliable connectivity, and effective remote IT management. The company's flagship product family is the ENPAQ suite of products that are designed to connect, secure, integrate, and manage connectivity, data & applications using a distributed management framework and virtualization architecture. The solutions include ENPAQ Unified Gateway, ENPAQ VPN Concentrator, and ENPAQ Enterprise Manager. Elina Networks was founded in 2005 in Bangalore, India."
            }, {
                title: "encapsulation",
                description: "In programming, the process of combining elements to create a new entity. For example, a procedure is a type of encapsulation because it combines a series of computer instructions. Likewise, a complex data type, such as a record or class, relies on encapsulation. Object-oriented programming languages rely heavily on encapsulation to create high-level objects. Encapsulation is closely related to abstraction and information hiding. In networking, same as tunneling."
            }, {
                title: "encryptionThe translation of data into a secret code. Encryption is the most effective way to achieve data security. To read an encrypted file, you must have access to a secret key or password that enables you to decrypt it. Unencrypted data is called plain text ; encrypted data is referred to as cipher text.There are two main types of encryption: asymmetric encryption (also called public-key encryption) and symmetric encryption.",
                description: ""
            }, {
                title: "encryption algorithm",
                description: "A mathematical procedure for performing encryption on data. Through the use of an algorithm, information is made into meaningless cipher text and requires the use of a key to transform the data back into its original form. Blowfish, AES RC4, RC5, and RC6 are examples of encryption algorithms."
            }, {
                title: "endpoint identifiers",
                description: "Abbreviated as EID, an endpoint identifier is used to specify and uniquely identify endpoints connected to the network. Information about the topological location of an endpoint in an internetwork is given by a locator. The Nimrod Routing Architecture uses endpoint identifiers."
            }, {
                title: "endpoint security",
                description: "In network security, endpoint security refers to a methodology of protecting the corporate network when accessed via remote devices such as laptops or other wireless and mobile devices. Each device with a remote connecting to the network creates a potential entry point for security threats. Endpoint security is designed to secure each endpoint on the network created by these devices.Usually, endpoint security is a security system that consists of security software, located on a centrally managed and accessible server or gateway within the network, in addition to client software being installed on each of the endpoints (or devices).  The server authenticates logins from the endpoints and also updates the device software when needed. While endpoint security software differs by vendor, you can expect most software offerings to provide antivirus, antispyware, firewall and also a host intrusion prevention system (HIPS)."
            }, {
                title: "ENIW - Ethernet Networking Interface (Web)",
                description: "ENIW is a Web-enabled Ethernet Networking Interface. This module presents additional remote Web capabilities by providing read/write access via the Internet."
            },
            {
                title: "enrollee",
                description: "In a biometric security system, a person who has a reference template in the system��s database."
            }, {
                title: "enrollment",
                description: "In a biometric security system, the initial process of collecting biometric data samples from a person and subsequently storing the data in a reference template representing a user��s identity to be used for later comparison."
            }, {
                title: "enterprise",
                description: "A business organization. In the computer industry, the term is often used to describe any large organization that utilizes computers. An intranet, for example, is a good example of an enterprise computing system."
            }, {
                title: "Enterprise Collaboration Systems ECS",
                description: "Abbreviated as ECS, Enterprise Collaboration Systems is a type of information system (IS). ECS is a combination of groupware, tools, Internet, extranets and other networks needed to support enterprise-wide communications, such as the sharing of documents and knowledge to specific teams and individuals within the enterprise. Some examples of enterprise communication tools include e-mail, videoconferencing, collaborative document sharing, project management tools and others. The objective of an ECS is to provide each user with the tools for managing communications, documents and other information that individuals need to manage their own tasks efficiently in their departments."
            }, {
                title: "ERD",
                description: "Short for Emergency Repair Disk, a Windows backup disk created by using the Backup utility. The ERD contains information about the current Windows system settings and can be used to rebuild the system if the file system becomes corrupt or the operating system will not start up. Whenever the Registry is altered - such as adding new software or hardware, installing a service pack or hot fix, making system modifications or adding new users to an account database - a new ERD should ideally be created to return the user to the most recent setup in case the ERD is needed to repair the damaged system. The disk can also be used to restore an old account that has been deleted if there is a copy of the system on an ERD from before the time the account was deleted."
            }, {
                title: "ESCON - Enterprise Systems Connection",
                description: "Short for Enterprise Systems Connection, or Enterprise Systems Connectivity, an IBM fiber optic connection technology that interconnects S/390 mainframe computers, workstations and network-attached storage devices across a single channel and supports half duplex data transfers. One of the key elements of ESCON is the ESCON Director, an I/O switch capable of providing dynamic, nonblocking, any-to-any connectivity for up to 60 fiber optic links operating at 200 Mb/s. The links can be up to 36 miles (60 kilometers) apart. ESCON is useful in CANs and MANs."
            }, {
                title: "EtherLoop",
                description: "Created by Nortel spin-off Elastic Networks, EtherLoop (a.k.a next generation DSL) is Ethernet over standard twisted pair (POTS ) technology that allows for simultaneous voice and high-speed data communications. Speeds range from 125 Kbps to 6 Mbps over distances of up to 21,000 feet.Similar to Ethernet, Etherloop transmits data packets in bursts. Between bursts, EtherLoop looks for problems and interference in the lines and knows to steer clear and find an alternate path. Also, EtherLoop is Ethernet compliant, so it is easily adaptable to existing Ethernet systems.EtherLoop also borrows from the best of DSL to offer point-to-point security and a non-shared medium (more users don't slow down connection speed), But unlike DSL, EtherLoop avoids impacting other services such as ISDN, T-1, ADSL, HDSL and SDSL, which are in the same cable binder group.EtherLoop is not proprietary. Elastic Networks plans on licensing the technology to manufacturers who can design and create their own EtherLoop solutions."
            }, {
                title: "Ethernet",
                description: "A local-area network (LAN) architecture developed by Xerox Corporation in cooperation with DEC and Intel in 1976. Ethernet uses a bus or star topology and supports data transfer rates of 10 Mbps. The Ethernet specification served as the basis for the IEEE 802.3 standard, which specifies the physical and lower software layers. Ethernet uses the CSMA/CD access method to handle simultaneous demands. It is one of the most widely implemented LAN standards.A newer version of Ethernet, called 100Base-T (or Fast Ethernet), supports data transfer rates of 100 Mbps. And the newest version, Gigabit Ethernet supports data rates of 1 gigabit (1,000 megabits) per second."
            }, {
                title: "Ethernet Audio/Video Bridging",
                description: "An emerging standard that extends Ethernet to support multimedia streaming. The Ethernet Audio/Video Bridging standard adds QoS (Quality of Service) features like time-synchronized low latency streaming services and bandwidth reservation to make it possible to carry audio and video signals on a standard Ethernet line.Development of the Ethernet Audio/Video Bridging standard is being conducted by the IEEE under a number of working specifications, including 802.1AVB, 802.1AS, 802.1Q, 802.1Qat and 1722.  Once deployed, audio and video hardware components will be capable of being linked via Ethernet Audio/Video Bridging connections, enabling the concurrent transmission of network, audio and video signals."
            }, {
                title: "Ethernet Networking Interface",
                description: "Ethernet Networking Interface, or ENI, allows any computer on Ethernet network to access controllers allowing users to send production data, alarm messages, or status information to computers, cellular phones, or pagers capable of receiving e-mail. The ENI module allows companies to leverage existing cable, hubs, switches, and routers already installed in facilities."
            }, {
                title: "Eucalyptus",
                description: "An open source cloud computing and Infrastructure-as-a-Service (IaaS) platform for enabling private clouds. Eucalyptus takes a company’s existing IT infrastructure and adds a virtualization software layer with scalable, secure Web services that work together to create elastic pools with the ability to dynamically scale depending on the company’s needs.  Eucalyptus also offers an Infrastructure-as-a-Service product in partnership with Amazon that delivers full compatibility with Amazon’s Web Services APIs, enabling support for Amazon’s AWS EC2, S3, EBS, AMI and IAM services. This makes it possible to efficiently extend a Eucalyptus private cloud to a hybrid cloud environment."
            }, {
                title: "EV SSL",
                description: "Extended Validation SSL (EV SSL or EVSSL) certificates are widely considered to be the most trusted option currently available for Secure Sockets Layer (SSL) certificates. While EV SSL certificates utilize the same levels of security as conventional SSL certificates, they do require more extensive verification of the certificate requestor by the certificate authority (CA) issuing the certificate.Websites using EV SSL certificates have a unique visual indication in a Web browser’s URL bar to help users identify the use of increased security verification measures. Internet Explorer, for example, displays a green address bar in the URL as well as the certificate’s security vendor and the name of the organization associated with the certificate.Browsers that currently support visual identification for EVSSL certificates include Google Chrome (all versions), Microsoft Internet Explorer (versions 7 and later), Mozilla Firefox (v3.5 and later), Apple Safari (v3.2 and later) and Opera (v9.5 and later). The Extended Validation Standard for EV SSL certificates was approved in 2006 by a group of leading SSL Certificate Authorities and browser vendors."
            }, {
                title: "evil twin",
                description: "Evil twin is a type of Wi-Fi attack, similar in nature to Web site spoofing and e-mail phishing attacks. Here's how an evil twin attack works:"
            }, {
                title: "exploit",
                description: "A tool developed by hackers that is used to perform malicious attacks on computer systems. They are usually scripts that are designed to exploit weaknessness in software over a network, most commonly the Internet. Zero-Day is a common type of exploit."
            }, {
                title: "Extensible Threat Management - XTM",
                description: "Extensible Threat Management (XTM) is the next generation of Unified Threat Management (UTM). Where UTM describes a category of network security appliances that integrates a range of security features such as firewall, gateway anti-virus, and intrusion detection (IDS) and prevention (IPS) capabilities; XTM expands on these security features to include better networking capabilities and management. "
            }, {
                title: "extraction",
                description: " In a biometric security system, the process of converting a captured biometric sample into data that can be compared to a reference template."
            }, {
                title: "extranet",
                description: "A buzzword that refers to an intranet that is partially accessible to authorized outsiders. Whereas an intranet resides behind a firewall and is accessible only to people who are members of the same company or organization, an extranet provides various levels of accessibility to outsiders. You can access an extranet only if you have a valid username and password, and your identity determines which parts of the extranet you can view.Extranets are becoming a very popular means for business partners to exchange information."
            }, {
                title: "E_Port",
                description: "A Fibre Channel Expansion port (E_Port) used as an interswitch expansion port to connect to another Fibre Channel switch or bridge device through an interswitch link. E_Ports can attach only to other E_Ports."
            }, {
                title: "facilities-based competition",
                description: "Facilities-based competition is often used in the telecommunications industry to describe competition between providers of the same or similar services,  but where the service is delivered by different or proprietary means or networks. For example a BPL provider competing with a cable TV network to provide broadband Internet service is considered to be facilities-based competition. Also called infrastructure-based competition."
            }, {
                title: "failover",
                description: "A backup operation that automatically switches to a standby database, server or network if the primary system fails or is temporarily shut down for servicing. Failover is an important fault tolerance function of mission-critical systems that rely on constant accessibility. Failover automatically and transparently to the user redirects requests from the failed or down system to the backup system that mimics the operations of the primary system."
            }, {
                title: "fairly fast packet filter",
                description: "Fairly fast packet filter (FFPF), an alternative platform for network monitoring under Linux. It is a stream-based networking subsystem for Linux that spans from hardware to userspace to offer high-speed communication paths to all applications. It transparently supports specialized hardware resources and in-kernel processing through safe functional units. FFPF is licensed under the GNU Lesser "
            }, {
                title: "fake news",
                description: "Fake news, or hoax news, refers to false information or propaganda published under the guise of being authentic news. Fake news websites and channels push their fake news content in an attempt to mislead consumers of the content and spread misinformation via social networks and word-of-mouth. One of the more colorful definitions of fake news comes from PolitiFact: Fake news is made-up stuff, masterfully manipulated to look like credible journalistic reports that are easily spread online to large audiences willing to believe the fictions and spread the word."
            }, {
                title: "false acceptance",
                description: "In biometrics, the instance of a security system incorrectly verifying or identifying an unauthorized person. Also referred to as a type II error, a false acceptance typically is considered the most serious of biometric security errors as it gives unauthorized users access to systems that expressly are trying to keep them out.The false acceptance rate, or FAR, is the measure of the likelihood that the biometric security system will incorrectly accept an access attempt by an unauthorized user. A system's FAR typically is stated as the ratio of the number of false acceptances divided by the number of identification attempts."
            }, {
                title: "FastIP",
                description: "FastIP is an IP switching protocol developed by 3Com. Fast IP differs from other IP switching in that the end user initiates the process, not a router or switch. The end user establishes a layer 2 connection through source and destination MAC addresses. The originating device sends a packet over layer 3 to the router, which forwards the packet to the destination address, upon which the destination device returns a response using the sender's layer 2 address. Once the direct connection has been established, the sending device can then send further data directly to the receiving device without having to hop through routers."
            }, {
                title: "FATA",
                description: "Short for Fibre Channel ATA FATA is a hybrid hard drive first introduced by HP in 2004 that combines both Fibre Channel and ATA technologies. FATA drives use an ATA drive mechanism, offering the same performance and capacity as a standard ATA drive, but also feature a Fibre Channel connector, which enables the FATA drive to be used where conventional Fibre Channel drives are currently connected."
            }, {
                title: "FC SAN",
                description: "Short for Fibre Channel Storage Area Network (SAN)."
            }, {
                title: "FCIP",
                description: "Short for Fibre Channel over IP, a network storage technology that combines the features of Fibre Channel and the Internet Protocol (IP) to connect distributed SANs over large distances.FCIP encapsulates Fibre Channel and transports it over a TCP socket. FCIP is considered a tunneling protocol, as it makes a transparent point-to-point connection between geographically separated SANs over IP networks. FCIP relies on TCP/IP services to establish connectivity between remote SANs over LANs, MANs, or WANs. TCP/IP is also responsible for congestion control and management, as well as for data error and data loss recovery.An advantage of FCIP is that it can use TCP/IP as the transport while keeping Fibre Channel fabric services intact."
            }, {
                title: "FCoE - Fibre Channel over Ethernet",
                description: "FCoE is short for Fibre Channel over Ethernet.Fibre Channel over Ethernet (FCoE) solves the problem of organizations having to run parallel network infrastructures for their local area networks (LANs) and their storage area networks (SANs). As a result, they have to operate separate switches, host bus adapters (HBAs), network interface cards (NICs) and cables for each of these networks. Even utilizing a virtualization solution like VMware can actually increase the number of network adapters required to carry traffic out of the servers."
            }, {
                title: "FDDI - Fiber Distributed Data Interface",
                description: "Abbreviation of Fiber Distributed Data Interface, a set of ANSI protocols for sending digital data over fiber optic cable. FDDI networks are token-passing networks, and support data rates of up to 100 Mbps (100 million bits) per second. FDDI networks are typically used as backbones for wide-area networks.An extension to FDDI, called FDDI-2, supports the transmission of voice and video information as well as data. Another variation of FDDI, called FDDI Full Duplex Technology (FFDT)uses the same network infrastructure but can potentially support data rates up to 200 Mbps."
            }, {
                title: "FDE hard drive",
                description: "Short for full-disk encryption (FDE) hard drive it is a Seagate technology that performs encryption on the disk drive at the hardware level. The hard drive contains an ASIC chip that is used to encrypt every bit of data as it is written and also decrypts data as it is being read. The drive requires a user password for authentication and it is secured with strong encryption technology. Seagate's FDE technology is transparent to the user and independent of the operating system. Also called a self-encrypting drive."
            }, {
                title: "FECN",
                description: "Forward explicit congestion notification (FCEN) is a Frame Relay message that notifies the receiving device that there is congestion in the network. A FECN bit is sent in the same direction in which the frame was traveling, toward its destination."
            }, {
                title: "Federal Internet Exchange",
                description: "Abbreviated as FIX, a physical location that serves as the connection point between U.S. federal government agency networks, such as those used by NASA, the Department of Energy and military agencies.There are two FIXes, each named for the coast on which they reside: FIX East (FIX-E), located in College Park, Maryland (at the University of Maryland); and FIX West (FIX-W), located in Mountain View, California (at the NASA Ames Research Center)."
            }, {
                title: "Federated Identity Manager",
                description: "Abbreviated as FIM, IBM's Tivoli Federated Identity Manager is a model for managing identity and providing resource access. Federated Identity Manager can span companies or security domains to provide identities access to information and services without replicating identity and security administration at both companies. Operating systems supported include AIX, HP Unix, Linux, Windows and z/OS."
            }, {
                title: "federated network identity",
                description: "A network identity scheme involving multiple repositories of identities instead of a central logical identity repository."
            }, {
                title: "Fibre Channel",
                description: "A serial data transfer architecture developed by a consortium of computer and mass storage device manufacturers and now being standardized by ANSI. The most prominent Fibre Channel standard is Fibre Channel Arbitrated Loop (FC-AL).FC-AL was designed for new mass storage devices and other peripheral devices that require very high bandwidth. Using optical fiber to connect devices, FC-AL supports full-duplex data transfer rates of 100MBps. FC-AL is compatible with, and is expected to eventually replace, SCSI for high-performance storage systems."
            }, {
                title: "FICON",
                description: "Short for Fiber Connection, or Fiber Connectivity, IBM��s fiber optic channel technology that extends the capabilities of its previous fiber optic channel standard, ESCON. Unlike ESCON, FICON supports full duplex data transfers and enables greater throughput rates over longer distances. FICON uses a mapping layer that is based on technology developed for Fibre Channel and multiplexing technology, which allows small data transfers to be transmitted at the same time as larger ones. IBM first introduced the technology in 1998 on its G5 servers."
            }, {
                title: "file infecting virus",
                description: "A type of computer virus that inserts its malicious code into executable files on a system. When the infected file is opened or used the virus may overwrite the file and cause permanent damage to the content of the overwritten file. This type of virus targets a large range of operating systems, including Macintosh, UNIX, DOS, and Windows."
            }, {
                title: "File Replication service",
                description: "Abbreviated as FRS, File Replication service is a multithreaded, multiple-master replication engine in Microsoft Windows NT versions 3.x and 4.0. Windows 2000-based domain controllers and servers use FRS to replicate system policies and logon scripts for Windows 2000-based and earlier clients. The File Replication service replaces the LAN Manager Replication (LMREPL) service."
            }, {
                title: "financial malware",
                description: "A term loosely used to describe the growing trend of malicious software (malware) that has been designed to scan a computer system or entire network for information related to financial transactions. Information gleaned by the financial is then transmitted back to a third-party controlling the malicious program."
            }, {
                title: "firewalking",
                description: " Developed by Mike Schiffman and David Goldsmith, a technique for testing the vulnerability of a firewall and mapping the routers of a network that sits behind a firewall. Firewalking is a method of disguising port scans. In practical applications, firewalking is similar to tracerouting and works by sending into the firewall TCP or UDP packets that have a TTL set at one hop greater than the targeted firewall. If the packet makes it through the gateway, it is forwarded to the next hop where the TTL equals zero and elicits a TTL exceeded in transit message, at which point the packet is discarded. Using this method, access information on the firewall can be determined if successive probe packets are sent."
            }, {
                title: "firewall",
                description: "A firewall is a network security system designed to prevent unauthorized access to or from a private network. Firewalls can be implemented as both hardware and software, or a combination of both. Network firewalls are frequently used to prevent unauthorized Internet users from accessing private networks connected to the Internet, especially intranets. All messages entering or leaving the intranet pass through the firewall, which examines each message and blocks those that do not meet the specified security criteria."
            }, {
                title: "Flame (malware)",
                description: "An extremely sophisticated strain of malware that shares similarities with Stuxnet, although Flame is much more massive in terms of complexity and size, at 30MB or larger when all modules have been installed vs. Stuxnet's 500KB. Also known as Flamer or Skywiper, Flame was discovered by Kaspersky Lab following a significant increase in infected systems in Iran and other countries in the Middle East and North Africa over the past two years.After infecting a computer or device, Flame spies on the machine's activity and steals data from it with keystroke monitoring and packet sniffing functionality as well as backdoor capabilities that enable cyber attackers to update the malware and trigger it or erase it as desired. The Flame malware features multiple levels of encryption as well as more than 20 different modules and plug-ins that can be swapped in and out for added functionality. One unique characteristic of Flame is that some of its code has been written in LUA, a programming language typically used for developing games rather than malware.Additional distinctive characteristics of Flame include scanning for Bluetooth-enabled devices in order to steal data and infect the devices with the Flamer malware, the ability to turn on a computer's internal microphone in order to secretly record conversations, and code for taking frequent screenshots of activity such as e-mail and instant messages and secretly uploading the screenshots to command and control servers.As with Stuxnet, security experts believe that Flame is so sophisticated and well-coordinated that it likely was created and conducted with nation-state support rather than by typical cyber criminals, although no countries have taken responsibility for the malware to date."
            }, {
                title: "Flooding",
                description: "Flooding is a Denial of Service (DoS) attack that is designed to bring a network or service down by flooding it with large amounts of traffic. Flood attacks occur when a network or service becomes so weighed down with packets initiating incomplete connection requests that it can no longer process genuine connection requests. By flooding a server or host with connections that cannot be completed, the flood attack eventually fills the host��s memory buffer. Once this buffer is full no further connections can be made, and the result is a Denial of Service."
            }, {
                title: "flow control",
                description: "In communications, the process of adjusting the flow of data from one device to another to ensure that the receiving device can handle all of the incoming data. This is particularly important where the sending device is capable of sending data much faster than the receiving device can receive it.There are many flow control mechanisms. One of the most common flow control protocols for asynchronous communication is called xon-xoff. In this case, the receiving device sends a an xoff message to the sending device when its buffer is full. The sending device then stops sending data. When the receiving device is ready to receive more data, it sends an xon signal.Flow control can be implemented in hardware or software, or a combination of both."
            }, {
                title: "Fog Computing",
                description: "Fog computing is a term created by Cisco that refers to extending cloud computing to the edge of an enterprise's network. Also known as Edge Computing or fogging, fog computing facilitates the operation of compute, storage and networking services between end devices and cloud computing data centers.Cisco introduced its fog computing vision in January 2014 as a way of bringing cloud computing capabilities to the edge of the network and as a result, closer to the rapidly growing number of connected devices and applications that consume cloud services and generate increasingly massive amounts of data.By handling these services that make up the Internet of Things (IoT) at the network edge, data can in many cases be processed more efficiently than if it needed to be sent to the cloud for processing."
            }, {
                title: "forest",
                description: "A collection of one or more domain trees with a common schema and implicit trust relationships between them. This arrangement would be used if you have multiple root DNS addresses."
            }, {
                title: "FQDN",
                description: "A fully qualified domain name consists of a host and domain name, including top-level domain. For example, www.webopedia.com is a fully qualified domain name. www is the host, webopedia is the second-level domain, and.com is the top level domain.A FQDN always starts with a host name and continues all the way up to the top-level domain name, so www.parc.xerox.com is also a FQDN."
            }, {
                title: "Frame Relay",
                description: "A packet-switching protocol for connecting devices on a Wide Area Network (WAN). Frame Relay networks in the U.S. support data transfer rates at T-1 (1.544 Mbps) and T-3 (45 Mbps) speeds. In fact, you can think of Frame Relay as a way of utilizing existing T-1 and T-3 lines owned by a service provider. Most telephone companies now provide Frame Relay service for customers who want connections at 56 Kbps to T-1 speeds. (In Europe, Frame Relay speeds vary from 64 Kbps to 2 Mbps.In the U.S., Frame Relay is quite popular because it is relatively inexpensive. However, it is being replaced in some areas by faster technologies, such as ATM."
            }, {
                title: "FRR - false rejection rate",
                description: "In biometrics, FRR, or false rejection rate is the instance of a security system failing to verify or identify an authorized person. Also referred to as a type I error, a false rejection does not necessarily indicate a flaw in the biometric system; for example, in a fingerprint-based system, an incorrectly aligned finger on the scanner or dirt on the scanner can result in the scanner misreading the fingerprint, causing a false rejection of the authorized user.The false rejection rate is the measure of the likelihood that the biometric security system will incorrectly reject an access attempt by an authorized user. A system's FRR typically is stated as the ratio of the number of false rejections divided by the number of identification attempts."
            }, {
                title: "FSMO",
                description: "Short for Flexible Single Master Operations, it is a feature of Microsoft's Active Directory. The schema master FSMO role holder is the domain controller responsible for performing updates to the directory schema."
            }, {
                title: "FTP Trojan",
                description: "A type of Trojan horse designed to open port 21 (the port for FTP transfer) and lets the attacker connect to your computer using File Transfer Protocol (FTP)."
            }, {
                title: "functional specification",
                description: "A formal description of a software system that is used as a blueprint for implementing the program. At minimum, a functional specification should precisely state the purpose (e.g., the function) of the software. Depending on the software engineering methodology used, the functional specification might also provide implementation details, such as how the project is divided into modules and how the different modules interact. In addition, a functional specification often describes the software from the user's perspective -- how the user interface appears and how a user would use the program to perform specific functions.A functional specification is often called a functional spec, or just spec."
            }, {
                title: "F_Port",
                description: "The Fabric port (F_Port) within a Fibre Channel fabric switch that is used to connect an N_Port to a switch. F_Ports are intermediate ports in virtual point-to-point links between end ports and can only be attached to N_Ports."
            }, {
                title: "GameOver Zeus",
                description: "GameOver Zeus is a sophisticated evolution of the ZeuS malware that cybercriminals created to steal usernames and passwords from users on infected systems.GameOver Zeus, or GOZ, initially spread via a malicious spam and phishing campaign that sent out e-mails appearing to come from reputable organizations such as the Federal Reserve Bank, the Federal Deposit Insurance Corporation (FDIC) and the National Automated Clearing House Association (NACHA).A link in these e-mails, if clicked upon, would open a fraudulent website where the GOZ malware would then be downloaded and run on the system, subsequently opening the infected computer for financial information and login credentials to be obtained."
            }, {
                title: "Gamimma",
                description: "Known as W32.Gammima.AG, it is a worm that spreads through removable media such as USB drives and external hard drives, and is known to steal online gamers' user names and passwords. Gamimma steals sensitive information for various online games, including ROHAN, R2 (Reign of Revolution), Talesweaver, Seal Online, and several games popular mainly in China, including ZhengTu and HuangYi Online, according to Symantec. The Gamimma worm was first discovered on August 27, 2008."
            }, {
                title: "gateway",
                description: " A node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISPthat connects the user to the internet.In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway."
            }, {
                title: "gateway antivirus",
                description: "A feature of  network security appliances that provides integrated antivirus security on the appliance to block potential threats before reaching the network. Gateway antivirus allows corporate and enterprise to check for viruses at the application layer using a web-based scanning service.A number of security vendors offer gateway antivirus solutions and the phrase is commonly used to identify this specific type of network security, WatchGuard's product is specifically called Gateway AntiVirus (GatewayAV)."
            }, {
                title: "GBIC",
                description: "Short for gigabit interface converter, a transceiver that converts serial electric signals to serial optical signals and vice versa. In networking, a GBIC is used to interface a fiber optic system with an Ethernet system, such as Fibre Channel and Gigabit Ethernet.A GBIC allows designers to design one type of device that can be adapted for either optical or copper applications. GBICs also are hot-swappable, which adds to the ease of upgrading electro-optical communication networks."
            }, {
                title: "geo-dispersed cluster",
                description: "Microsoft Cluster Server (MSCS) is a term used to describe a cluster configuration where the servers are separated geographically and the physical storage is synchronously replicated among the sites. In a geo-dispersed cluster both the public and private network interfaces have to exist in the same network segment, and cluster nodes also must share the same IP subnet. Also called multi-site cluster."
            }, {
                title: "GHOST Bug",
                description: "The GHOST bug is a buffer overflow security vulnerability in some distributions of Linux that can potentially enable attackers to execute arbitrary code on systems.Specifically categorized as GHOST (gethostbyname) CVE-2015-0235, the GHOST bug flaw resides in the gethostbyname() and gethostbyname2() function calls in older versions of the GNU C Library (glibc) that is packaged with a variety of Linux distributions, including versions 5, 6 and 7 of Centos / RHEL / Fedora as well as Ubuntu 12.04.In addition to older Linux distributions being vulnerable, applications and websites running on server hosts that use these older distributions may be susceptible to the GHOST bug as well, including Wordpress Web sites and various PHP applications."
            }, {
                title: "giant",
                description: "When used in reference to networks, a giant is a packet that is too large to traverse the network. Network protocols such as Ethernet often require that packets can not be over a specific number of bytes in order to travel the network."
            }, {
                title: "Gigabit Ethernet",
                description: "Abbreviated GbE, a version of Ethernet, which supports data transfer rates of 1 Gigabit (1,000 megabits) per second. The first Gigabit Ethernet standard (802.3z) was ratified by the IEEE 802.3 Committee in 1998."
            }, {
                title: "Gigabit Wi-Fi",
                description: "Gigabit Wi-Fi refers to the upcoming 802.11ac Wireless LAN specification that will support data transfer speeds of 433Mbps per spatial stream and up to 1.3Gbps speeds for three-antenna (three stream) hardware. Also sometimes called 5G Wi-Fi, Gigabit Wi-Fi operates only in the 5 GHz frequency range (where there is currently far less potential for interference), as opposed to the 802.11n spec, which operates in both 5 GHz and 2.4 GHz ranges. Gigabit Wi-Fi products will offer backwards compatibility with previous 802.11 specifications, including 802.11n.The 802.11ac specification is expected to be officially approved in 2013 by the IEEE, and draft 802.11ac Gigabit Wi-Fi products are already available for purchase.  Additionally, newer smartphones like the iPhone 5 and Samsung Galaxy III currently support 5GHz Wi-Fi and are Gigabit Wi-Fi-capable."
            }, {
                title: "Gigle Networks",
                description: "Gigle Networks Inc. is the corporate name of a high-definition content and service provider for home networking. The company's products include intelligent multi-PHY switches for Gigabit Home Networking and 200Mbps Home Networking solutions."
            }, {
                title: "global area network",
                description: "Global area network (GAN)refers to any network that is composed of different interconnected computer networks (WANs) and also covers an unlimited geographical area. [Source: Adapted from ATIS]"
            }, {
                title: "Global File System",
                description: "Abbreviated as GFS, a Global File System is a cluster file system that enables a cluster of computers to simultaneously use a block device that is shared between them. GFS reads and writes to the block device like a local file system, but also allows the computers to coordinate their I/O to maintain file system consistency. With GFS any changes that are made to the file system on one computer will immediately be seen on all other computers in that cluster."
            }, {
                title: "Gnutella",
                description: "An application for a peer-to-peer file sharing system, which was originally developed by Nullsoft but quickly disseminated within the hacker community. Like Napster, Gnutella allows users to scan designated folders on other members' hard drives and copy files of any type between machines. Unlike Napster, Gnutella software doesn't have a main central database of users."
            }, {
                title: "goodput",
                description: "In networking terms - for wired and wireless networks - goodput is used to describe the number of packets that are exchanged between the applications that use the network.A more commonly known related term is throughput. It measures the amount of packets exchanged over the network to determine network efficiency.Goodput can also be described as measuring the throughput at the application level."
            }, {
                title: "Google Dorking",
                description: "Google Dorking is a term that refers to the practice of applying advanced search techniques and specialized search engine parameters to discover confidential information from companies and individuals that wouldn't typically show up during a normal web search.Hackers can use Google Dorking tactics to reveal information that companies and individuals likely intended not to be discoverable through a Web search. This information can include account usernames and passwords, customer and partner lists and details, sensitive and private documents, account details, website vulnerabilities for potential cyber attacks and more.Hackers also have an array of freely available online tools they can use to run automated scans that execute multiple Google Dorking queries, enabling them to more efficiently conduct their dorking efforts."
            }, {
                title: "Google Fiber",
                description: "Google Fiber is a new fiber-optic internet and television service from Google offered in select cities that provides up to 1Gbps internet speeds (both upload and download). According to Google, the Gigabit internet speeds are up to 100 times faster than the average broadband speeds in place today.Google Fiber made its public debut in Kansas City in September 2012, and expansion plans are in place for Austin, Texas and Provo, Utah, as well as additional cities in the future. The Google Fiber service is available for $120 per month for the combined internet and television services, or $70 per month for just the internet service. A free Google Fiber internet service option is also available that offers speeds of up to 5Mbps for a one-time “construction fee” of $300.Google Fiber subscribers are provided with a Network box with 4 Gigabit Ethernet ports, a DVR Storage box with 2TB of data storage that can record up to eight live television shows simultaneously, TV boxes for each TV or HDTV to be used with the service, and a Google Nexus 7 tablet device that can be used as both a viewing device and a remote control for Google Fiber. In addition to the included 2TB storage box, Google Fiber customers are also provided with 1TB of cloud storage via Google Drive."
            }, {
                title: "Google Ganeti",
                description: "Ganeti is an open source virtual server management project developed by Google and used internally by the company to facilitate cluster management of virtual servers in commodity hardware.Google Ganeti is built to function on top of existing virtualization technologies like Xen or KVM. Google developed Ganeti to provide cluster management of virtual servers, facilitating virtualization tasks like disk creation, migration, VM shutdown and startup, failover between physical systems, operating system installation and more."
            }, {
                title: "Google Project Zero",
                description: "Google Project Zero is a little-known research group whose focus is finding security vulnerabilities in Google's software products like the Google Chrome web browser. Google Project Zero has also gained attention for identifying and sharing security vulnerability information with companies like Apple and Microsoft for their operating system and software offerings."
            }, {
                title: "goto fail",
                description: "An Apple iOS and OS x Secure Socket Layer (SSL) software vulnerability that allows a malicious user or hacker to intercept and alter communications including email and login credentials. The vulnerability allows anyone with a certificate signed by a trusted CA to do a man-in-the-middle attack and  intercept communication between the user's Apple hardware and the intended recipient or website."
            }, {
                title: "GRC - Governance, Risk, and Compliance",
                description: "Governance, Risk and Compliance, or GRC for short, refers to a company's coordinated strategy for managing the broad issues of corporate governance, enterprise risk management (ERM) and corporate compliance with regard to regulatory requirements.Specifically, the three pillars of GRC are:Governance – The effective, ethical management of a company by its executives and managerial levels.||||Risk – The ability to effectively and cost-efficiently mitigate risks that can hinder an organization's operations or ability to remain competitive in its market.||||Compliance – A company's conformance with regulatory requirements for business operations, data retention and other business practices"
            }, {
                title: "greynet",
                description: "Programs that network users download and install on their computers — usually without permission from or knowledge of the IT department. While some greynet applications are often useful (for example, instant messaging, streaming media and RSS software, peer-to-peer file sharing, peer-to-peer collaboration and proxy applications), they can also include or malicious programs (such as spyware)."
            }, {
                title: "greyware",
                description: "Greyware refers to a malicious software or code that is considered to fall in the grey area between normal software and a virus. Greyware is a term for which all other malicious or annoying software such as adware, spyware, trackware, and other malicious code and malicious shareware fall under."
            }, {
                title: "groupware",
                description: "A class of software that helps groups of colleagues (workgroups) attached to a local-area network organize their activities. Typically, groupware supports the following operations:scheduling meetings and allocating resourcese-mailpassword protection for documentstelephone utilitieselectronic newslettersfile distribution"
            }, {
                title: "GTbot",
                description: "Short for Global Threat bot, a GTbot is a renamed mIRC client (usually temp.exe) running in stealth mode. It uses the HideWindow program to enable it to run stealth, and can contain any number of Mirc bot scripts. This Trojan is usually downloaded by users on IRC networks when they are tricked into thinking it is a cleaner utility program.  Once installed the Trojan launches the stealth mIRC and joins a channel on an IRC network and awaits commands of the bot master. These bots are one of the key instruments in launching DDOS attacks to users on IRC. "
            }, {
                title: "guest wireless network",
                description: "A guest wireless network is a wireless router feature that is designed to allow users to easily grant visitor access to your wireless Internet connection. Your visitors will get their own SSID to connect to, and you can isolate it from your main network to make sure that outsiders don’t have access to your local network resources, such as PCs and printers."
            }, {
                title: "G_Port",
                description: "A Generic port (G_Port) within a Fibre Channel switch that can operate as either an E_Port or an F_Port."
            }, {
                title: "hack",
                description: " To write program code.To modify a program, often in an unauthorized manner, by changing the code itself.Code that is written to provide extra functionality to an existing program.An inelegant and usually temporary solution to a problem."
            }, {
                title: "hack tool",
                description: "A term used by the Symantec Security Response Center to describe tools that are used by a hacker (or unauthorized user) to attack, gain unwelcome access to or perform identification of your computer. Hack tools also generally attempt to gain information on or access hosts or bypass obvious security mechanisms inherent to the system it is installed on. Some tools used by hackers may be programs that have legitimate uses, such as a keystroke logger that can also be used maliciously by a hacker."
            }, {
                title: "hacker",
                description: "A slang term for a computer enthusiast, i.e., a person who enjoys learning programming languages and computer systems and can often be considered an expert on the subject(s). Among professional programmers, depending on how it used, the term can be either complimentary or derogatory, although it is developing an increasingly derogatory connotation.The pejorative sense of hacker is becoming more prominent largely because the popular press has adopted the term to refer to individuals who gain unauthorized access to computer systems for the purpose of stealing and corrupting data. Hackers, themselves, maintain that the proper term for such individuals is cracker."
            }, {
                title: "hacktivism",
                description: "Formed by combining hack with activism, hacktivism is the act of hacking into a Web site or computer system in order to communicate a politically or socially motivated message. Unlike a malicious hacker, who may disrupt a system for financial gain or out of a desire to cause harm, the hacktivist performs the same kinds of disruptive actions (such as a DoS attack) in order to draw attention to a cause. For the hacktivist, it is an Internet-enabled way to practice civil disobedience and protest."
            }, {
                title: "HAN - home area network",
                description: "A home area network (HAN) is a network contained within a user's home that connects a person's digital devices, from multiple computers and their peripheral devices to telephones, VCRs, televisions, video games, home security systems, smart appliances, fax machines and other digital devices that are wired into the network."
            }, {
                title: "Hand of Thief Trojan",
                description: "Hand of Thief Trojan is Trojan malware developed to enable cyber criminals to compromise Linux systems and steal user information from the systems. The Hand of Thief Trojan (HoT Trojan) is one of the first strains of malware to specifically target desktop Linux systems, and it’s claimed that the HoT Trojan can currently compromise at least fifteen different variants of Linux.The Hand of Thief Trojan is considered a work in progress, lacking some of the key features to be an effective attack tool, but it’s still being sold for $2,000 by its Russian-based developer. And while the code isn't yet complete at this time, the Hand of Thief Trojan could eventually have full malware capabilities, including the ability to inject content into banking websites as well as better exfiltration and filtering features."
            }, {
                title: "hashing",
                description: "Producing hash values for accessing data or for security. A hash value (or simply hash), also called a message digest, is a number generated from a string of text. The hash is substantially smaller than the text itself, and is generated by a formula in such a way that it is extremely unlikely that some other text will produce the same hash value.Hashes play a role in security systems where they're used to ensure that transmitted messages have not been tampered with. The sender generates a hash of the message, encrypts it, and sends it with the message itself. The recipient then decrypts both the message and the hash, produces another hash from the received message, and compares the two hashes. If they're the same, there is a very high probability that the message was transmitted intact."
            }, {
                title: "HAVi",
                description: "Short for Home Audio Video interoperability, a vendor-neutral audio-video standard aimed specifically at the home entertainment environment. HAVi allows different home entertainment and communication devices (such as VCRs, televisions, stereos, security systems, video monitors) to be networked together and controlled from one primary device, such as a PC or television."
            }, {
                title: "HBA - host bus adapter",
                description: "HBA is short for host bus adapter.The host bus adapter is an I/O adapter that sits between the host computer's bus and the Fibre Channel loop and manages the transfer of information between the two channels. In order to minimize the impact on host processor performance, the HBA performs many low-level interface functions automatically or with minimal processor involvement."
            }, {
                title: "HDCP - high-bandwidth digital-content protection",
                description: "Short for high-bandwidth digital-content protection, a specification developed by Intel for protecting digital entertainment content that uses the DVI interface. HDCP encrypts the transmission of digital content between the video source, or transmitter -- such as a computer, DVD player or set-top box -- and the digital display, or receiver -- such as a monitor, television or projector. HDCP is not designed to prevent copying or recording of digital content but to protect the integrity of content as it is being transmitted."
            }, {
                title: "HDLC - High-level Data Link Control",
                description: "Short for High-level Data Link Control, a transmission protocol used at the data link layer (layer 2) of the OSI seven layer model for data communications. The HDLC protocol embeds information in a data frame that allows devices to control data flow and correct errors. HDLC is an ISO standard developed from the Synchronous Data Link Control (SDLC)standard proposed by IBM in the 1970's."
            }, {
                title: "heterogeneous network",
                description: "A network that includes computers and other devices from different manufacturers. For example, local-area networks (LANs) that connect PCs with Apple Macintosh computers are heterogeneous."
            }, {
                title: "Hexadite",
                description: "Hexadite is the developer of advanced security software that uses artificial intelligence and machine learning to detect and prevent potential damage caused by security threats.Hexadite works by first receiving security alerts from other security solutions and vendors. It then parses these alerts with previously accumulated Hexadite data to formulate the potential for malware and other cyberattacks. For high-level cyberattacks, Hexadite can autonomously terminate these events and either prevent or limit the amount of damage caused."
            }, {
                title: "HIPS",
                description: "Short for host-based intrusion prevention system, HIPS is an IPS or intrusion prevention system designed for security over host-based systems where intrusions and infections are dealt with at the individual workstation level to provide a more effective level of security."
            }, {
                title: "hold down timer",
                description: "A function of a router that prevents a route from being updated for a specified length of time, in seconds. A hold down timer is often used to ensure sufficient time for all routers to be updated when a route fails."
            }, {
                title: "hole",
                description: "In security terminology, a hole refers to a software or operating system vulnerability that could be exploited to compromise the overall security of the computer system or network on which the hole resides."
            }, {
                title: "HomePlug",
                description: "HomePlug is the name of the specification that defines the home networking technology that connects devices to each other through the power lines in a home (see power line networking). HomePlug certified products connect PCs and other devices that use Ethernet, USB and 802.11 Wi-Fi technologies to the power line via a HomePlug bridge or adapter. Some products have HomePlug technology built-in.HomePlug uses Intellon's PowerPacket solution as its baseline technology. Intellon created and patented the baseline technology for the HomePlug 1.0 standard and introduced the first HomePlug 1.0-based IC in June 2001."
            }, {
                title: "HomePNA (HPNA)",
                description: "HPNA, also referred to as HomePNA, is a de facto home networking standard developed by the Home Phoneline Networking Alliance. This technology, building on Ethernets, allows all the components of a home network to interact over the home's existing telephone wiring without disturbing the existing voice or fax services."
            }, {
                title: "HomeRF - home radio frequency",
                description: "Short for home radio frequency. Designed specifically for wireless networks in homes - in contrast to 802.11, which was created for use in businesses -- HomeRF networks are designed to be more affordable to home users than other wireless technologies. Based on frequency hopping and using radio frequency waves for the transmission of voice and data, HomeRF has a range of up to 150 feet. HomeRF uses Shared Wireless Access Protocol."
            }, {
                title: "HoneyMonkey",
                description: "A honeymonkey is a computer or a virtual PC that actively mimics the actions of a user surfing the Web. A series of monkey programs, which drive a browser in a manner similar to that of a human user, run on virtual machines in order to detect exploit sites. The browsers can be configured to run with fully updated software, or without specific updates in order to look for exploit sites that target specific vulnerabilities. In this manner, the attacks more likely to impact customers can be analyzed and detected."
            }, {
                title: "honeynet",
                description: "A network of honeypots."
            }, {
                title: "honeypot",
                description: "An Internet-attached server that acts as a decoy, luring in potential hackers in order to study their activities and monitor how they are able to break into a system. Honeypots are designed to mimic systems that an intruder would like to break into but limit the intruder from having access to an entire network. If a honeypot is successful, the intruder will have no idea that s/he is being tricked and monitored. Most honeypots are installed inside firewalls so that they can better be controlled, though it is possible to install them outside of firewalls. A firewall in a honeypot works in the opposite way that a normal firewall works: instead of restricting what comes into a system from the Internet, the honeypot firewall allows all traffic to come in from the Internet and restricts what the system sends back out."
            }, {
                title: "hop",
                description: "An intermediate connection in a string of connections linking two network devices. On the Internet, for example, most data packets need to go through several routers before they reach their final destination. Each time the packet is forwarded to the next router, a hop occurs. The more hops, the longer it takes for data to go from source to destination. You can see how many hops it takes to get to another Internet host by using the PING or traceroute utilities."
            }, {
                title: "Host Channel Adapter",
                description: "Abbreviated as HCA, Host Channel Adapter is a network fabric interconnect based on InfiniBand technology (which provides the specification for the transmission of data between processors and I/O devices). It provides a computer with port connection to other InfiniBand devices. That port can be connected to another HCA, a target device, or an InfiniBand switch fabric that redirects the data coming in on one of its ports out to a device attached to another of its ports."
            }, {
                title: "hot potato routing",
                description: "A form of routing in which the nodes of a network have no buffer to store packets in before they are moved on to their final predetermined destination. In normal routing situations, when multiple packets contend for a single outgoing channel, packets that are not buffered are dropped to avoid congestion. But in hot potato routing, each packet that is routed is constantly transferred until it reaches its final destination because the individual communication links can not support more than one packet at a time. The packet is bounced around like a hot potato, sometimes moving further away from its destination because it has to keep moving through the network. This technique allows multiple packets to reach their destinations without being dropped. This is in contrast to store and forward routing where the network allows temporary storage at intermediate locations. Hot potato routing has applications in optical networks where messages made from light can not be stored in any medium."
            }, {
                title: "hot standby",
                description: " A method of redundancy in which the primary and secondary (i.e., backup) systems run simultaneously. The data is mirrored to the secondary serverin real time so that both systems contain identical information."
            }, {
                title: "hotspot",
                description: "A specific geographic location in which an access point provides public wireless broadband network services to mobile visitors through a WLAN. Hotspots are often located in heavily populated places such as airports, train stations, libraries, marinas, conventions centers and hotels. Hotspots typically have a short range of access."
            }, {
                title: "HSRP",
                description: "Short for Hot Standby Routing Protocol, a proprietary protocol from Cisco. HSRP is a routing protocol that provides backup to a router in the event of failure. Using HSRP, several routers are connected to the same segment of an Ethernet, FDDI or token-ring network and work together to present the appearance of a single virtual router on the LAN. The routers share the same IP and MAC addresses, therefore in the event of failure of one router, the hosts on the LAN are able to continue forwarding packets to a consistent IP and MAC address. The process of transferring the routing responsibilities from one device to another is transparent to the user."
            }, {
                title: "HSSI - High-Speed Serial Interface",
                description: "Short for High-Speed Serial Interface, HSSI is a serial interface that supports transmission rates up to 52 mbps. It is used to connect routers on local area networks with wide area networks over a 680x0 or similar high-speed line. HSSI can also be used to provide high-speed connectivity between LANs, such as token ring and Ethernet.HSSI is a DTE /DCE interface developed by Cisco Systems and T3plus Networking to address the need for high-speed communication over WAN links."
            }, {
                title: "hub",
                description: "A hub, also called a network hub, is a common connection point for devices in a network. Hubs are devices commonly used to connect segments of a LAN. The hub contains multiple ports. When a packet arrives at one port, it is copied to the other ports so that all segments of the LAN can see all packets."
            }, {
                title: "HWID - Hardware Identification",
                description: "Short for Hardware Identification, a security measure used by Microsoft upon the activation of the Windows operating system. As part of the Product Activation system, a unique HWID number is generated when the operating system is first installed. The HWID identifies the hardware components that the system is utilizing, and this number is communicated to Microsoft. Every 10 days and at every reboot the operating system will generate another HWID number and compare it to the original to make sure that the operating system is still running on the same device. If the two HWID numbers differ too much then the operating system will shut down until Microsoft reactivates the product.The theory behind HWID is to ensure that the operating system is not being used on any device other than the one for which it was purchased and registered. However, problems can arise when users start replacing or adding hardware components -- such as motherboards, sound cards, CD-R drives, Ethernet adapters -- because these will generate new HWIDs, and if there are too many differences from the original installation number the system will register that the operating system has been installed on a different device than the original and subsequently shut itself down. The only way to resolve the issue is to telephone Microsoft and explain the new hardware in order to obtain a new code."
            }, {
                title: "hybrid encryption",
                description: "A method of encryption that combines two or more encryption schemes and includes a combination of symmetric and asymmetric encryption to take advantage of the strengths of each type of encryption."
            }, {
                title: "hybrid routing protocol",
                description: "Hybrid Routing, commonly referred to as balanced-hybrid routing, is a combination of distance-vector routing, which works by sharing its knowledge of the entire network with its neighbors and link-state routing which works by having the routers tell every router on the network about its closest neighbors.Hybrid Routing is a third classification of routing algorithm. Hybrid routing protocols use distance-vectors for more accurate metrics to determine the best paths to destination networks, and report routing information only when there is a change in the topology of the network. Hybrid routing allows for rapid convergence but requires less processing power and memory as compared to link-state routing.An example of a hybrid routing protocol is the Enhanced Interior Gateway Routing Protocol (EIGRP), developed by Cisco."
            }, {
                title: "Hyper-convergence",
                description: "Hyper-convergence (or hyperconvergence) is a type of infrastructure system that is largely software-defined with tightly-integrated compute, storage, networking and virtualization resources. This stands in contrast to a traditional converged infrastructure, where each of these resources is typically handled by a discrete component that serves a singular purpose.Hyper-convergence is also called hyper-converged infrastructure."
            }, {
                title: "Hyperscale",
                description: "Hyperscale computing refers to the infrastructure and provisioning needed in distributed computing environments for effectively scaling from several servers to thousands of servers. Hyperscale computing is often employed in environments like cloud computing and big data and is commonly associated with platforms like Apache Hadoop."
            }, {
                title: "I/O - input/output",
                description: "Short for input/output (pronounced eye-oh). The term I/O is used to describe any program, operation or device that transfers data to or from a computer and to or from a peripheral device. Every transfer is an output from one device and an input into another. Devices such as keyboards and mouses are input-only devices while devices such as printers are output-only. A writable CD-ROM is both an input and an output device."
            }, {
                title: "I/O adapter",
                description: "An adapter that converts between the timing and protocol requirements of an intelligent device's memory bus and those of an I/O bus or network."
            }, {
                title: "IAM – Identity and Access Management",
                description: "An acronym for Identity and Access Management, IAM refers to a framework of policies and technologies for ensuring that the proper people in an enterprise have the appropriate access to technology resources.Also called identity management (IdM), IAM systems fall under the overarching umbrella of IT security. Identity and access management systems not only identify, authenticate and authorize individuals who will be utilizing IT resources, but also the hardware and applications employees need to access.Identity and Access Management solutions have become more prevalent and critical in recent years as regulatory compliance requirements have become increasingly more rigorous and complex."
            }, {
                title: "iBGP",
                description: "Short for Internal BGP (Border Gateway Protocol), iBGP is the protocol used between the routers in the same autonomous system (AS). IBGP is used to provide information to your internal routers."
            }, {
                title: "IBM - International Business Machines",
                description: "Short for International Business Machines, the largest computer company in the world. IBM started in 1911 as a producer of punch card tabulating machines. In 1953, it introduced its first computer, the 701. During the 60's and 70's, IBM came to dominate the new field of mainframe and minicomputers. In 1981, IBM launched its first personal computer, called the IBM PC, which quickly became the standard. However, IBM underestimated the market for PCs and lost market share to vendors of PC compatibles, such as Compaq."
            }, {
                title: "ICF",
                description: "Short for Internet Connection Firewall, a feature of the Windows XP operating system. The ICF is a firewall that protects a home or small business network that is connected to the Internet via a cable, DSL or dial-up modem. Devices that are connected to the Internet via a software or hardware router cannot use ICF."
            }, {
                title: "ICS",
                description: "Short for Internet connection sharing, a method for connecting multiple computers in a LAN to the Internet through a single connection and a single IP address. ICS typically uses NAT technologies to achieve this and works with most connection technologies, including DSL, cable, ISDN, dial-up and satellite. The device with the modem or broadband interface that establishes the connection to the Internet is called the ICS host, or gateway while the other devices that connect to the Internet via the network and the ICS host are called ICS clients. If the ICS host fails, then all of the ICS clients lose their Internet connection."
            }, {
                title: "IDaaS - Identity-as-a-Service",
                description: "IDaaS is an acronym for Identity-as-a-Service, and it refers to identity and access management services that are offered through the cloud or SaaS (software-as-a-service) on a subscription basis.This is in contrast to traditional identify and access management (IAM) solutions that are typically completely on-premises and delivered via bundled software and/or hardware means. These systems also tend to rely heavily on Active Directory (AD) and the Lightweight Directory Access Protocol (LDAP) for their IAM services."
            }, {
                title: "identification",
                description: "In a biometric security system, the process of comparing a biometric data sample against all of the system��s databased reference templates in order to establish the identity of the person trying to gain access to the system."
            }, {
                title: "identity",
                description: "In computer technology, the unique name of a person, device, or the combination of both that is recognized by a system. Many types of AAA systems rely on unique identities to ensure the security of networks and resources."
            }, {
                title: "identity management",
                description: "Enterprise identity management (IdM), or ID management, is the part of identity and access management systems (IAM) responsible for identifying, authenticating and authorizing employees and their use of corporate information technology (IT) resources.The second part of IAM, access management, works in conjunction with identity management to ensure employees have access to the specific hardware and applications they are authorized to use for their jobs. Access management can also enforce time and location policies for IT resources to help secure mission"
            }, {
                title: "IDF - intermediate distribution frame",
                description: "Short for intermediate distribution frame, a cable rack that interconnects and manages the telecommunications wiring between an MDF and workstation devices. Cables entering a building run through a centralized MDF, then each individual IDF and then on to specific workstations. For example, an enterprise that encompasses a building with several floors may have one MDF on the first floor and one IDF on each of the floors that is connected to the MDF."
            }, {
                title: "IDNX",
                description: "Short for Integrated Digital Network Exchange, a technology that multiplexes voice, data, and video onto multiple T1/E1 backbones. Allowing integration of equipment from different vendors, IDNX is an integrated packet/circuit switch providing frame-relay adaption for X.25 packet switches, SNA communications processors and other HDLC-based devices. IDNX concentrates and routes this traffic along with Ethernet and token-ring LAN-generated frame-relay frames, over private or public frame-relay networks. IDNX also supports voice/fax compression, ISDN and switched 56K/64K call setup, and digital cross-connection."
            }, {
                title: "IEEE 802 standards",
                description: "A set of network standards developed by the IEEE. They include:IEEE 802.1: Standards related to network management.||||IEEE 802.2: General standard for the data link layer in the OSI Reference Model. The IEEE divides this layer into two sublayers -- the logical link control (LLC) layer and the media access control (MAC) layer.The MAC layer varies for different network types and is defined by standards IEEE 802.3 through IEEE 802.5.||||IEEE 802.3: Defines the MAC layer for bus networks that use CSMA/CD. This is the basis of the Ethernet standard. ||||IEEE 802.4: Defines the MAC layer for bus networks that use a token-passing mechanism (token bus networks).||||IEEE 802.5: Defines the MAC layer for token-ring networks.||||IEEE 802.6: Standard for Metropolitan Area Networks (MANs)."
            }, {
                title: "iFCP",
                description: "Short for the Internet Fibre Channel Protocol, iFCP allows an organization to extend Fibre Channel storage networks over the Internet by using TCP/IP. TCP is responsible for managing congestion control as well as error detection and recovery services. iFCP allows an organization to create an IP SAN fabric that minimizes the Fibre Channel fabric component and maximizes use of the company's TCP/IP infrastructure. "
            }, {
                title: "IFTTT",
                description: "IFTTT, an acronym for If This Then That, is a free service that automates connectivity between apps and services, enabling users to utilize recipes that will coordinate small tasks between Internet and web services.Sounded out like ift (rhymes with gift), IFTTT can be used on the Web or through apps for iOS and Android. An IFTTT trigger, or the if this part of the system, will prompt IFTTT to begin the automation process.This leads to a set of actions — the then that part of IFTTT — wherein changes to one service lead to changes on other services via conditional statements called applets (the recently renamed form of recipes)."
            }, {
                title: "IGP - interior gateway protocol",
                description: "Short for interior gateway protocol, IGP is a generic term for a routing protocol that is used to exchange routing information among routers in an autonomous network, such as an enterprise LAN. IGPs typically support confined geographical areas. RIP and OSPF are two examples of an IGP."
            }, {
                title: "IHS",
                description: "Short for Internal Hostile Structured, it is a threat defined by Symantec Corporation to mean an individual or group within an organization that is motivated to disrupt mission operations or exploit assets. An IHS threat is unlikely to act but has the greatest potential to cause damage. An example of an IHS threat might be a highly skilled, disgruntled employee who could benefit from disrupting operations."
            }, {
                title: "IHU",
                description: "Short for Internal Hostile Unstructured, it is a threat defined by Symantec Corporation to mean an individual within an organization who has physical access to network components. An IHU threat might lack the skills to launch a sophisticated attack, and instead might deploy common viruses."
            }, {
                title: "iJack",
                description: "The term used to describe the theft of laptop computers when the perpetrator literally grabs the laptop out of the owner's hand and runs away with it.The theft of personal information to assume an identity and commit fraud. As defined by Intersections Inc., iJacking is an emotionally devastating crime that drains your accounts, hurts your reputation and leaves you financially paralyzed when thieves assume your identity or use your Social Security number to commit fraud crimes."
            }, {
                title: "ILM - identity lifecycle management",
                description: "Identity Lifecycle Management, or ILM, is a buzz phrase that refers to a collection of technologies and business processes utilized in creating, managing, coordinating and restricting the identification, access and governance of identities for access to business tools and information. ILM is closely associated with Identity Management (IdM) and Identity and Access Management (IAM)."
            }, {
                title: "IM worm",
                description: "A worm (i.e., a self-replicating program typically designed to perform harm to a computer or network) that propagates over instant messaging applications. The worm spreads by accessing the user's instant messaging address book, or buddy list, and sends itself to individual recipients from that list.Like a worm that spreads over the Internet, an IM worm can crash a system or allow a malicious hacker to gain access to a user's device. Unlike the traditional form of a worm, an IM worm does not have to scan the Internet looking for vulnerbale IP addresses as it spreads by taking names from user address books and identifying who is currently online and therefore vulnerable."
            }, {
                title: "IMA - inverse multiplexing over ATM",
                description: "Short for inverse multiplexing over ATM. IMA is a physical layer technology in which a high-speed stream of ATM cells is broken up and transmitted across multiple T1/E1 links, then is reconstructed back into the original ATM cell order at the destination. For companies with low to mid-range WAN requirements, the purchase of costly T3/E3 access is not a viable solution. IMA divides an aggregate stream of ATM cells across multiple T1/E1 WAN links on a cell-by-cell basis, mimicking the behavior of transmissions across T3/E3 lines.IMA is a User-to-Network Interfacestandard approved by the ATM Forum in 1997."
            }, {
                title: "image spam",
                description: "A new way for cybercriminals to lure users into clicking obfuscated URLs. With image spam the obfuscated URL is hidden in an image rather than text making it more difficult to detect."
            }, {
                title: "IMEI- International Mobile Equipment Identity",
                description: "IMEI is short for International Mobile Equipment Identity and is a unique number given to every single mobile phone, typically found behind the battery.IMEI numbers of cellular phones connected to a GSM network are stored in a database (EIR - Equipment Identity Register) containing all valid mobile phone equipment.When a phone is reported stolen or is not type approved, the number is marked invalid."
            }, {
                title: "impostor",
                description: " In a biometric security system, a person who submits a biometric sample in an attempt (either intentional or unintentional) to gain access to a system using the identity of another enrollee."
            }, {
                title: "Inbound Filters",
                description: "Inbound Filters is a setting commonly found on broadbandrouter firmware. Inbound Filters are used to limit access to a server on your own network. Filter rules can be used with virtual server, port forwarding or remote administration features."
            }, {
                title: "InfiniBand",
                description: "InfiniBand is both an I/O architecture and a specification for the transmission of data between processors and I/O devices that has been gradually replacing the PCI bus in high-end servers and PCs."
            }, {
                title: "infrastructure",
                description: "The term infrastructure in an information technology (IT) context refers to an enterprise's entire collection of hardware, software, networks, data centers, facilities and related equipment used to develop, test, operate, monitor, manage and/or support information technology services.A company's IT infrastructure includes the physical IT devices and products, but does not include the employees, documentation or processes used in operating and managing IT services."
            }, {
                title: "ingress traffic",
                description: " Network traffic that originates from outside of the network��s routers and proceeds toward a destination inside of the network. For example, an e-mail message that is considered ingress traffic will originate somewhere outside of a enterprise��s LAN, pass over the Internetand enter the company��s LAN before it is delivered to the recipient."
            }, {
                title: "Inmarsat-4 satellite",
                description: "Flagged as broadband for a mobile planet the Inmarsat-4 Satellite is Inmarsat's first step in providing the next-generation of mobile services, including BGAN. The Inmarsat-4s will speed through space at 6,875 mph. The satellites will sit in geostationary orbit, where they will be synchronized with the rotational speed of the Earth and appear to hover over the Equator.  They will bring about a 16-fold increase in the traffic-bearing capacity of the Inmarsat network — and will extend high-speed data into space, creating a truly global broadband network.  Much of the I-4 traffic will be carried as Internet Protocol (IP) packet-switched data. The network will also be powerful enough to support circuit-switched applications, such as voice, ISDN and fax."
            }, {
                title: "INS",
                description: "Short for Internal Nonhostile Structured, it is a threat defined by Symantec Corporation to mean an individual within an organization who has physical access to network components. This individual may not motivated to disrupt mission operations but can do so by making common mistakes. Individuals executing INS threats are usually skilled and have tools to assist them in performing security-related functions."
            }, {
                title: "insider attack",
                description: "Any malicious attacks on a corporate system or network where the intruder is someone who has been entrusted with authorized access to the network, and also may have knowledge of the network architecture. An internal intrusion detection system (IDS) system is one measure that can help organizations limit the risk from insider attacks."
            }, {
                title: "Integrated PAD Software",
                description: "A software product emulating a PAD and requires a computer supporting an X.25 connection. It generally provides an asynchronous terminal emulator, but can use existing ones such as ATE or CU. [Source: IBM Information center]"
            }, {
                title: "Interior Gateway Routing Protocol",
                description: "Abbreviated as IGRP, a proprietary network protocol, developed by Cisco Systems, designed to work on autonomous systems. IGRP is a distance-vector routing protocol, which means that each router sends all or a portion of its routing table in a routing message update at regular intervals to each of its neighboring routers. A router chooses the best path between a source and a destination. Since each path can comprise many links, the system needs a way to compare the links in order to find the best path. A system such as RIP uses only one criteria -- hops -- to determine the best path. IGRP uses five criteria to determine the best path: the link's speed, delay, packet size, loading and reliability. Network administrators can set the weighting factors for each of these metrics."
            }, {
                title: "internal cloud",
                description: "Another name for a private cloud."
            }, {
                title: "Internet Key Exchange",
                description: "The Internet Key Exchange (IKE) protocol is a key management protocol standard that is used in conjunction with the IPSec standard. IKE enhances IPSec by providing additional features, flexibility, and ease of configuration for the IPSec standard. IPSec can however, be configured without IKE. Benefits provided by IKE include:Eliminates the need to manually specify all the IPSec security parameters in the crypto maps at both peers.Allows you to specify a lifetime for the IPSec security association.Allows encryption keys to change during IPSec sessions.Allows IPSec to provide anti-replay services.Permits Certification Authority (CA) support for a manageable, scalable IPSec implementation.Allows dynamic authentication of peers."
            }, {
                title: "Internet sharing",
                description: "Also known as Internet connection sharing."
            }, {
                title: "internetworking",
                description: "The art and science of connecting individual local-area networks (LANs) to create wide-area networks (WANs) , and connecting WANs to form even larger WANs. Internetworking can be extremely complex because it generally involves connecting networks that use different protocols. Internetworking is accomplished with routers, bridges, and gateways."
            }, {
                title: "Intervision Network",
                description: "Intervision Network is the corporate name of an IP broadcasting development and related technologies company. Founded in 2005 and publicly traded as of January 2008 as InterVision Network Corporation (OTC: IVSW), IVNET develops original programming and distributes entertainment and business content for corporate partners."
            },
            {
                title: "intranet",
                description: "An intranet is a private network based on TCP/IP protocols, belonging to an organization, usually a corporation, accessible only by the organization's members, employees, or others with authorization. An intranet's websites and software applications look and act just like any others, but the firewall surrounding an intranet fends off unauthorized access and use."
            },
            {
                title: "intrusion detection system",
                description: "An intrusion detection system (IDS) inspects all inbound and outbound network activity and identifies suspicious patterns that may indicate a network or system attack from someone attempting to break into or compromise a system.There are several ways to categorize an IDS:misuse detection vs. anomaly detection: in misuse detection, the IDS analyzes the information it gathers and compares it to large databases of attack signatures. Essentially, the IDS looks for a specific attack that has already been documented. Like a virus detection system, misuse detection software is only as good as the database of attack signatures that it uses to compare packets against. In anomaly detection, the system administrator defines the baseline, or normal, state of the network��s traffic load, breakdown, protocol, and typical packet size. The anomaly detector monitors network segments to compare their state to the normal baseline and look for anomalies.||||network-based vs. host-based systems: in a network-based system, or NIDS, the individual packets flowing through a network are analyzed. The NIDS can detect malicious packets that are designed to be overlooked by a firewall��s simplistic filtering rules. In a host-based system, the IDS examines at the activity on each individual computer or host.||||passive system vs. reactive system: in a passive system, the IDS detects a potential security breach, logs the information and signals an alert. In a reactive system, the IDS responds to the suspicious activity by logging off a user or by reprogramming the firewall to block network traffic from the suspected malicious source.Though they both relate to network security, an IDS differs from a firewall in that a firewall looks out for intrusions in order to stop them from happening. The firewall limits the access between networks in order to prevent intrusion and does not signal an attack from inside the network. An IDS evaluates a suspected intrusion once it has taken place and signals an alarm. An IDS also watches for attacks that originate from within a system."
            },
            {
                title: "intrusion prevention system",
                description: "An IPS, or intrusion prevention system is used in computer security. It provides policies and rules for network traffic along with an intrusion detection system for alerting system or network administrators to suspicious traffic, but allows the administrator to provide the action upon being alerted. Some compare an IPS to a combination of IDS and an application layer firewall for protection."
            }, {
                title: "intrusion signature",
                description: "Recorded evidence of a system intrusion, typically as part of an intrusion detection system (IDS). When a malicious attack is launched against a system, the attack typically leaves evidence of the intrusion in the system��s logs. Each intrusion leaves a kind of footprint behind (e.g., unauthorized software executions, failed logins, misuse of administrative privileges, file and directory access) that administrators can document and use to prevent the same attacks in the future. By keeping tables of intrusion signatures and instructing devices in the IDS to look for the intrusion signatures, a system��s security is strengthened against malicious attacks.Because each signature is different, it is possible for system administrators to determine by looking at the intrusion signature what the intrusion was, how and when it was perpetrated, and even how skilled the intruder is."
            }, {
                title: "INU",
                description: "Short for Internal Nonhostile Unstructured, it is a threat defined by Symantec Corporation to mean an individual within an organization who has physical access to network components. This individual is not motivated to disrupt mission operations but can do so unknowingly. INU threats are typically unskilled users who make mistakes that can impact mission operations."
            }, {
                title: "inverted network",
                description: "An inverted network design employs the philosophy that that security should be focused at the core of the network rather than on the perimeter (where firewalls, anti-virus and iintrusion detection systems would typically sit). Recognizing the increasingly threats to the enterprise network come from with, even internal LANs — and every component connected to it — are considered dirty. For example, in an inverted network, VPN connections would be established from the desktop to the server."
            }, {
                title: "IP address - Internet Protocol (IP) address",
                description: "IP address is short for Internet Protocol (IP) address. An IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. Contrast with IP, which specifies the format of packets, also called datagrams, and the addressing scheme."
            }, {
                title: "IP blocking",
                description: "IP blocking is a form of security used on mail, Web or any other Internet servers to block connections from a specific IP address or range of addresses that are considered undesirable or hostile. For example, a Web site forum administrator who sees spam or unwanted posts from a user may block that user's IP address to prevent them from using the discussion board."
            }, {
                title: "IP Masquerade",
                description: "A Linux networking function. IP Masquerade, also called IPMASQ or MASQ, allows one or more computers in a network without assigned IP addresses to communicate with the Internet using the Linux server's assigned IP address. The IPMASQ server acts as a gateway, and the other devices are invisible behind it, so to other machines on the Internet the outgoing traffic appears to be coming from the IPMASQ server and not the internal PCs.Since IPMASQ is a generic technology the server can be connected to other computers through LAN technologies like Ethernet, Token Ring, and FDDI, as well as dialup connections like PPP or SLIP."
            }, {
                title: "IP spoofing",
                description: " A technique used to gain unauthorized access to computers, whereby the intruder sends messages to a computer with an IP address indicating that the message is coming from a trusted host. To engage in IP spoofing, a hacker must first use a variety of techniques to find an IP address of a trusted host and then modify the packet headers so that it appears that the packets are coming from that host."
            }, {
                title: "IP switching",
                description: " A type of IP routing developed by Ipsilon Networks, Inc. Unlike conventional routers, IP switching routers use ATM hardware to speed packets through networks. Although the technology is new, it appears to be considerably faster than older router techniques."
            }, {
                title: "iPhone mobile security",
                description: "Mobile security applications for Apple's iOS mobile operating system help protect Apple iPhone smartphone and iPad tablet mobile devices from malware threats as well as unauthorized access following accidental loss or theft of the device.Additional security features frequently offered by iPhone mobile security apps include scanning websites for potential phishing schemes or other fraudulent activity, storing passwords and other confidential information securely, VPN connectivity for protecting data in transit, helping users locate their device if lost or stolen, and more."
            }, {
                title: "IPS - intrustion prevention system or IP Storage",
                description: " Short for intrusion prevention system.Short for IP Storage, this technology is being standardized under the IP Storage (ips) IETF Working Group. Same as SoIP."
            }, {
                title: "IPsec VPN",
                description: "Short for IP Security, a set of protocols developed by the IETF to support secure exchange of packets at the IP layer. IPsec has been deployed widely to implement Virtual Private Networks (VPNs)."
            }, {
                title: "IPX",
                description: "Short for Internetwork Packet Exchange, a networking protocol used by the Novell NetWare operating systems. Like UDP/IP, IPX is a datagram protocol used for connectionless communications. Higher-level protocols, such as SPX and NCP, are used for additional error recovery services."
            }, {
                title: "IS - Information Systems or Information Services",
                description: "Pronounced as separate letters, and short for Information Systems or Information Services. For many companies, IS is the name of the department responsible for computers, networking and data management. Other companies refer to the department as IT (Information Technology) and MIS (Management Information Services)."
            }, {
                title: "IS-IS",
                description: "Intermediate System-Intermediate System is an International Organization for Standardization (ISO) hierarchical routing protocol where IS routers exchange routing information based on a single metric to determine network topology.  IS-IS is often used in IP networks."
            }, {
                title: "iSCSI",
                description: "Pronounced eye skuzzy. Short for Internet SCSI, an IP-based standard for linking data storage devices over a network and transferring data by carrying SCSI commands over IP networks. iSCSI supports a Gigabit Ethernet interface at the physical layer, which allows systems supporting iSCSI interfaces to connect directly to standard Gigabit Ethernet switches and/or IP routers. When an operating system receives a request it generates the SCSI command and then sends an IP packet over an Ethernet connection. At the receiving end, the SCSI commands are separated from the request, and the SCSI commands and data are sent to the SCSI controller and then to the SCSI storage device. iSCSI will also return a response to the request using the same protocol."
            }, {
                title: "jabber",
                description: "An error in which a faulty device (usually a NIC ) continuously transmits corrupted or meaningless data onto a network. This may halt the entire network from transmitting data beacuse other devices will perceive the network as busy.A sent data packet greater than the maximum 1518 bytes specified in IEEE 802.3. To prevent this, jabber control should be added to the hardware to make the circuitry incapable of sending information for more than 150 milliseconds (approximately 1500 bytes).When capitalized as Jabber, an open XML protocol for message and presence exchange in real time between two points on the Internet. Jabber��s asynchronous instant messaging (IM) platform is similar to IM systems such as AIM, ICQ and MSN but is open source, extensible through XML, decentralized (allowing anyone to run a Jabber server), and any Jabber server can be isolated from the public Jabber network in order to increase security. The Jabber project was started by Jeremie Miller in early 1998."
            }, {
                title: "jammer",
                description: " In cellphone terminology, a jammer is a device that blocks transmissions by creating interference. The jammer emits signals in the same frequency range that cell phones uses, and within the range of a jammer a cellphone user may lose their signal. In satellite terminology it is a mobile ultrahigh-frequency (UHF) high-power noise source that can be used to jam satellite antennas or receivers."
            }, {
                title: "Java Security Exploit",
                description: "A term that refers to any number of security exploits in Oracle's Java software, which has a long history of being vulnerable to security flaws. The most recent Java Security Exploit appeared in early 2013, and affected all versions of Java up to Java 7 Update 10. This zero-day security vulnerability, referenced as CVE-2013-0422 by the CVE, carried a payload of malware that could result in identity theft as well as rendering the host machine an unauthorized botnet that could then be used in denial-of-service (DoS) attacks against other machines."
            }, {
                title: "jitter",
                description: " Flickering on a display screen. Jittering can be caused by the following: a number of hardware problems, such as a slow refresh rate, a bad connection between the video adapter and monitor, a hardware malfunction in the monitor, or poor synchronization in the signals being sent;|||| a nearby electrical conduit or transformer creating a higher-than-usual local magnetic field level.||||In VoIP terminology jitter refers to a type of packet delay where the delay has an impact on the quality of the voice conversation."
            }, {
                title: "Joe Job",
                description: "A form of e-mail spoofing where someone uses your e-mail server to send mass quantities of e-mails. Usually owners and administrators of the e-mail server will become aware of the spoofing when they receive more than the usual quantities of failed delivery notices."
            }, {
                title: "jumbo frame",
                description: "Jumbo frames are large IP frames used in high-performance networks to increase performance over long distances. Jumbo frames is the term used most often to mean 9000 bytes for Gigabit Ethernet but can refer to anything over the IP MTU (Maximum Transmission Unit) which is 1500 bytes on an Ethernet."
            }, {
                title: "JXTA",
                description: "Pronounced juxta, JXTA is Sun Microsystems' set of open-source peer-to-peer networking protocols that allow any connected device on the network to communicate, including PC workstations and servers, cell phones and PDAs. Because it is based on protocols and not an API, JXTA works with any language, operating system, hardware and transport protocol. Virtually any network-capable device can be a JXTA peer. Because the underlying network does not have to be TCP/IP, JXTA applications can include Bluetooth-enabled mobile handsets as peers. JXTA is similar to Jini, but Jini networks require a Java Virtual Machine on every member device whereas JXTA does not.JXTA provides the protocols for basic functions of peer-to-peer networking, such as creating, finding, joining, leaving and monitoring groups, talking to other groups and peers, and sharing content and services. The functions are performed by exchanging XML advertisements and messages between peers.The name JXTA comes from the word juxtapose, meaning side-by-side."
            }, {
                title: "KeRanger",
                description: "KeRanger takes the claim of being the first fully functional ransomware program targeting users of Apple Macintosh computers and laptops. KeRanger is capable of encrypting a Mac user’s data and then demanding a ransom of 1 Bitcoin, which equals about $400, in order to provide the user with a key to unlock the data.The initial strain of KeRanger is designed to encrypt more than 300 different file types on Mac computers, and it replaces these file with encrypted versions. KeRanger waits three days after installation to begin the encryption cycle, in an attempt to evade some antivirus tools from detecting KeRanger as a malicious file."
            }, {
                title: "Kerberos",
                description: "An authentication system developed at the Massachusetts Institute of Technology (MIT). Kerberos is designed to enable two parties to exchange private information across an otherwise open network. It works by assigning a unique key, called a ticket, to each user that logs on to the network. The ticket is then embedded in messages to identify the sender of the message."
            }, {
                title: "Kevin Mitnick",
                description: "Kevin David Mitnick is one of the most famous criminal hackers to be jailed and convicted. Born August 6, 1963, Mitnick earned the title of 'the most wanted computer criminal in U.S. history'.In 1995 he was arrested, and then served close to five years in a federal prison for the charges of wire fraud, computer fraud and intercepting communications.Giving testimony before Congress, Kevin once said,  I have gained unauthorized access to computer systems at some of the largest corporations on the planet, and have successfully penetrated some of the most resilient computer systems ever developed. I have used both technical and non-technical means to obtain the source code to various operating systems and telecommunications devices to study their vulnerabilities and inner workings."
            }, {
                title: "key",
                description: " A button on a keyboard.In database management systems, a key is a field that you use to sort data. It can also be called a key field , sort key, index, or key word. For example, if you sort records by age, then the age field is a key. Most database management systems allow you to have more than one key so that you can sort records in different ways. One of the keys is designated the primary key, and must hold a unique value for each record. A key field that identifies records in a different table is called a foreign key.A passwordor table needed to decipher encoded data."
            }, {
                title: "key escrow",
                description: "Key escrow is a data security measure in which a cryptographic key is entrusted to a third party (i.e., kept in escrow). Under normal circumstances, the key is not released to someone other than the sender or receiver without proper authorization."
            }, {
                title: "key fob",
                description: "A fob, commonly called a key fob, is a small security hardware device with built-in authentication used to control and secure access to network services  and data. The key fob displays a randomly generated access code, which changes periodically, usually every 30 to 60 seconds. A user first authenticates themselves on the key fob with a personal identification number (PIN), followed by the current code displayed on the device."
            }, {
                title: "key length",
                description: "The number of binary digits, or bits, in an encryption algorithm��s key. Key length is sometimes used to measure the relative strength of the encryption algorithm (i.e., the longer the key length, the more difficult the key is to decode)."
            }, {
                title: "keylogger",
                description: "A keylogger is a type of surveillance software (considered to be either software or spyware) that has the capability to record every keystroke you make to a log file, usually encrypted. A keylogger recorder can record instant messages, e-mail, and any information you type at any time using your keyboard. The log file created by the keylogger can then be sent to a specified receiver. Some keylogger programs will also record any e-mail addresses you use and Web site URLsyou visit.Keyloggers, as  a surveillance tool, are often used by employers to ensure employees use work computers for business purposes only. Unfortunately, keyloggers can also be embedded in spywareallowing your information to be transmitted to an unknown third party."
            }, {
                title: "kill switch",
                description: " A security device used to shut off any other device in an emergency situation in which a normal shut down is not possible. Kill switches are commonly used on motorized devices and electronic devices. In computing, a kill switch is often called a BRS or Big Red Switch. In software, a kill switch is used by software developers for anti-piracy measures, where features of the software are killed or rendered useless and inaccessible to users running pirated versions of the software."
            }, {
                title: "Kill-Bit",
                description: "A term used to describe an Internet Explorer feature designed to close security holes. A Kill-Bit (also called killbit) is an instruction to the browser to never use a specific piece of ActiveX control software. It's common for Microsoft security bulletins to include Kill-Bits to disable individual ActiveX controls."
            }, {
                title: "Kneber",
                description: "The name given to a malicious botnet that is used to collect log-in credentials to online financial systems, social networking sites and e-mail systems to break into accounts and steal corporate and government data. By February 2010, the Kneber botnet was believed to consist of nearly 75,000 computers and to have infiltrated 2,500 different companies."
            }, {
                title: "Koobface",
                description: "The name given to a computer worm that uses Facebook's messaging system to infect PCs in an attempt to gather sensitive information such as credit card numbers.Koobface propagates by sending notes to Facebook friends of someone whose PC has been infected. The messages, with subject headers like, You look just awesome in this new movie, direct recipients to a Web site where they are asked to download what it claims is an update of Adobe Systems Inc's Flash player.If they download the software, users end up with an infected computer, which then takes users to contaminated sites when they try to use search engines from Google, Yahoo, MSN and Live.com, according McAfee.The Koobface virus also attacks users of the MySpace social networking site. Variants of the worm include Net-Worm.Win32.Koobface.a. and Net-Worm.Win32.Koobface.b."
            }, {
                title: "L0phtCrack",
                description: "L0phtCrack is  a password auditing and recovery application. It uses multiple assessment methods to assist administrators in reducing security risks. L0phtCrack helps to identify and remediate security vulnerabilities that result from the use of weak or easily guessed passwords and recover Windows and Unix account passwords to access user and administrator accounts whose passwords are lost or to streamline migration of users to another authentication system.  Additionally, some versions of L0phtCrack can process accounts using pre-computed password tables that contain trillions of passwords."
            }, {
                title: "LAN - local-area network",
                description: "A local-area network (LAN) is a computer network that spans a relatively small area. Most often, a LAN is confined to a single room, building or group of buildings, however, one LAN can be connected to other LANs over any distance via telephone lines and radio waves.A system of LANs connected in this way is called a wide-area network (WAN). The difference between a LAN and WAN is that the wide-area network spans a relatively large geographical area. Typically, a WAN consists of two or more local-area networks (LANs) and are often connected through public networks."
            }, {
                title: "LAN telephony",
                description: "The technology of using LAN data networks rather than traditional telephone lines and a PBXto carry voice traffic along with the data traffic that is typical of a LAN system.A LAN telephony system requires both a device to process incoming and outgoing calls to determine what address on the LAN a call will be sent to and also a voice gateway that connects the LAN telephony system to the PSTN. Each telephone on the LAN has its own network address and converts audio signals to digitized packets for transmission across the LAN. When a call is received from outside the LAN, the call processor determines which network address receives the call and forwards the packets to that address. When a call originates within the LAN, the call processor determines if the packet is to be forwarded to another network address or to the PSTN, in which case the packets must travel through the voice gateway."
            }, {
                title: "LANE - LAN emulation",
                description: "Short for LAN emulation. LANE is a protocol that allows existing networked applications and protocols to run over an ATM backbone. LANs are connectionless while ATM is a connection-oriented technology. LANE provides a means for ATM hardware and networks to communicate with existing Ethernet and Token Ring networks. LANE works at the MAC (layer 2) networking layer of the OSI model and therefore supports both bridging and routing.The main objective of LAN emulation is to allow existing applications to access the ATM network by way of MAC drivers as if they were running over traditional LAN's. Standard interfaces for MAC device drivers include NDIS and ODI. These interfaces specify how access to a MAC driver is performed. LANE provides these interfaces and services to the upper layers of the OSI model."
            }, {
                title: "LAT",
                description: "Short for Local Area Transport, a DEC proprietary Ethernet protocol for connecting terminals to a LAN. Connections are typically between a DEC terminal server and a VAX. LAT operates at the transport layer. LAT is not routable because it lacks a network layer and therefore must be bridged in an enterprise network instead of routed."
            }, {
                title: "latecomer",
                description: "In groupware terminology, latecomer is the word used to mean any person who joins a group session, after the session was initiated. In some older groupware system latecomers may not be supported after the system is set-up. In these types of systems all participants must be accounted for before the moderator initiates the session."
            }, {
                title: "latency",
                description: " In general, the period of time that one component in a system is spinning its wheels waiting for another component. Latency, therefore, is wasted time. For example, in accessing data on a disk, latency is defined as the time it takes to position the proper sector under the read/write head. In networking, the amount of time it takes a packet to travel from source to destination. Together, latency and bandwidth define the speed and capacity of a network.In VoIP terminology, latency refers to a delay in packet delivery. VoIP latency is a service issue that is usually based on physical distance, hops, or voice to data conversion."
            }, {
                title: "Layer Two Forwarding",
                description: "Often abbreviated as L2F, a tunneling protocol developed by Cisco Systems. L2F is similar to the PPTP protocol developed by Microsoft, enabling organizations to set up virtual private networks (VPNs) that use the Internet backbone to move packets."
            }, {
                title: "layered defense",
                description: "In computer and network security terminology, a layered defense is used to describe a security system that is build using multiple tools and policies to safeguard multiple areas of the network against multiple threats including worms, theft, unauthorized access, insider attacks and other security considerations. A layered defense ultimately should be able to provide adequate security at the following levels: system level security, network level security, application level security, and transmission level security. Also called a multi-layered defense."
            }, {
                title: "LCP",
                description: "Short for Link Control Protocol, a protocol that is part of the PPP. In PPP communications, both the sending and receiving devices send out LCP packets to determine specific information that will be required for the data transmission. The LCP checks the identity of the linked device and either accepts or rejects the peer device, determines the acceptable packet size for transmission, searches for errors in configuration and can terminate the link if the parameters are not satisfied. Data cannot be transmitted over the network until the LCP packet determines that the link is acceptable."
            }, {
                title: "LDAP - Lightweight Directory Access Protocol",
                description: "Short for Lightweight Directory Access Protocol, a set of protocols for accessing information directories. LDAP is based on the standards contained within the X.500 standard, but is significantly simpler. And unlike X.500, LDAP supports TCP/IP, which is necessary for any type of Internet access. Because it's a simpler version of X.500, LDAP is sometimes called X.500-lite.Although not yet widely implemented, LDAP should eventually make it possible for almost any application running on virtually any computer platform to obtain directory information, such as email addresses and public keys. Because LDAP is an open protocol, applications need not worry about the type of server hosting the directory."
            }, {
                title: "LDCM - LANDesk Client Manager",
                description: "Short for LANDesk Client Manager. LDCM, developed by Intel, is a management tool that constantly monitors networked personal computers and workstationsfor hardware problems. If a malfunction is detected, the administrator is alerted.LDCM contains an inventory of hundreds of hardware and thousands of software items and provides a failure mechanism that catches problems with hard drive, fan, power supply and/or temperature.LDCM works using standards such as SNMP, DMIand WfM."
            }, {
                title: "leap second",
                description: "A leap second refers to the periodical addition of one second to the Coordinated Universal Time (UTC) in order to keep clocks throughout the world synchronized with the Earth's ever-slowing rotation.By adding a leap second when the UTC drifts 0.9 seconds from the Universal Time (UT1), or Astronomical Time, clocks that are synched with UTC effectively stop for one second to allow the Earth the opportunity to catch up with atomic time, according to timeanddate.com.Leap seconds are announced and coordinated by the International Earth Rotation and Reference System Service (IERS) in Paris, France. Twenty-six leap seconds have been recorded, with the first taking place in 1972."
            }, {
                title: "leap smear",
                description: "A Leap Smear is a technique of spreading or smearing time over a period of hours to account for leap seconds. Leap seconds are periodical adjustments that result in the addition of a second to the Coordinated Universal Time (UTC) to keep UTC time synchronized with the Earth's ever-slowing rotation."
            }, {
                title: "leased line",
                description: "A permanent telephone connection between two points set up by a telecommunications common carrier. Typically, leased lines are used by businesses to connect geographically distant offices. Unlike normal dial-up connections, a leased line is always active. The fee for the connection is a fixed monthly rate. The primary factors affecting the monthly fee are distance between end points and the speed of the circuit. Because the connection doesn't carry anybody else's communications, the carrier can assure a given level of quality.For example, a T-1 channel is a type of leased line that provides a maximum transmission speed of 1.544 Mbps. You can divide the connection into different lines for data and voice communication or use the channel for one high speed data circuit. Dividing the connection is called multiplexing."
            }, {
                title: "leech",
                description: "Slang term frequently used by those actively engaged P2P and unethical file sharing. A leech or leecher is considered to be a user who downloads files and provides few or no uploads in return. Crackers also uses this term to describe those who constantly request sources and information and offer nothing in return."
            }, {
                title: "legacy",
                description: "In computing terms, the word legacy is used to describe outdated or obsolete technology and equipment that is still being used by an individual or organization. Legacy implies that the system is out of date or in need of replacement, however it may be in good working order so the business or individual owner does not want to upgrade or update the equipment. Typically vendor or manufacturer support is not available for legacy systems and applications."
            }, {
                title: "legacy network",
                description: "The term used to describe a network based on older, outdated protocols. For example, any network not based on the IP (TCP/IP) protocol - like IPX or SNA - is considered a legacy network. In wireless networks, the term is used to describe networks based on older 802.11x standards that predate the 802.11n standard. The legacy standards include 802.11a, 802.11b, and 802.11g."
            }, {
                title: "lights out server room",
                description: "Also called a lights out datacenter, a room that contains a number of servers under lock and key and kept in the dark that under normal operation is not entered by human administrators, and all operations in the room are automated. The computers in a lights out server room typically are controlled by the use of KVM switches to help ensure the security of the locked room."
            }, {
                title: "Linux/CDorked",
                description: "A highly advanced and stealthy form of malware that targets backdoor exploits in Web servers like Apache, nginx and lighttpd. Linux/CDorked is one of the first strains of malware to reside entirely in memory, leaving little to no trace of itself on an infected server’s hard drives.According to an ESET security researcher in an article from Datamation, Linux/CDorked “makes it hard for system administrators to even know it's there and very difficult for them to check system logs to find out how to fix it. Plus, if they reboot the server or aren't extremely careful, all the evidence disappears without a trace.Once Linux/CDorked infects a server, the malware is able to redirect website visitors to compromised sites without their knowledge. Security researchers claim Linux/CDorked.A, the first reported form of the malware, is the most sophisticated Apache backdoor discovered to date."
            }, {
                title: "Linux/Ebury",
                description: "A strain of malware that allows unauthorized access and control of an affected system. Linux/Ebury is a backdoor Trojan and credential stealer that disguises itself as a variant of OpenSSH for Linux and Unix-style operating systems.In March 2014, software security firm ESET discovered a connection between Linux/Ebury and other malware components such as Linux/Cdorked, Win32/Glupteba.M and Perl/Calfbot. ESET uncovered the fact that all four malware strains are operated by the same group, and subsequently dubbed the malicious collection of components as Operation Windigo."
            }, {
                title: "LMDS",
                description: "Short for Local Multipoint Distribution Services, a fixed wireless technology that operates in the 28 GHz band and offers line-of-sight coverage over distances up to 3-5 kilometers. It can deliver data and telephony services to 80,000 customers from a single node.LMDS is one solution for bringing high-bandwidth services to homes and offices within the last mile of connectivity, an area where cable or optical fiber may not be convenient or economical.Data transfer rates for LMDS can reach 1.5 Gbps to 2 Gbps, but a more realistic value may average around 38 Mbps (downstream)."
            }, {
                title: "LMHOSTS file",
                description: "Specific to Windows, the LMHOSTS file is a plain text file (without a file extension ) that tells your computer where to find another computer on a network. The file resides in the Windows directory, and it lists the computer names (NetBIOS ) and IP addresses of machines you access on a regular basis."
            }, {
                title: "load balancer",
                description: "A load balancer, or server load balancer (SLB), is a hardware or software-based device that efficiently distributes network or application traffic across a number of servers. With a load balancer, if a server's performance suffers from excessive traffic or if it stops responding to requests, the load-balancing capabilities will automatically switch the requests to a different server.In this way, load balancers improve the performance of networks and applications by automatically monitoring and managing application and network sessions.In addition to providing simple distributed service to multiple servers, load balancers can help prevent denial-of-service attacks, allow legitimate users uninterrupted access to services, protect against single point of failure outages and prevent traffic bottlenecks to systems."
            }, {
                title: "load balancing",
                description: "Distributing processing and communications activity evenly across a computer network so that no single device is overwhelmed. Load balancing is especially important for networks where it's difficult to predict the number of requests that will be issued to a server. Busy Web sites typically employ two or more Web servers in a load balancing scheme. If one server starts to get swamped, requests are forwarded to another server with more capacity. Load balancing can also refer to the communications channels themselves."
            }, {
                title: "local",
                description: "In networks, local refers to files, devices, and other resources at your workstation. Resources located at other nodes on the networks are remote."
            }, {
                title: "Local Number Portability",
                description: "Abbreviated as LNP, Local Number Portability is a service that allows subscribers to switch local or wireless carriers and still retain the same telephone number. LNP is managed through the Number Portability Administration Center (NPAC). It is expected that in the future, subscribers may also be able to change geographical locations and maintain the same number as well."
            }, {
                title: "localhost",
                description: "In TCP/IP networks, localhost is the name used to describe the local computer address. Localhost always translates to the loopback IP address 127.0.0.1."
            }, {
                title: "LocalTalk",
                description: "The cabling scheme supported by the AppleTalk network protocol for Macintosh computers. Most local-area networks that use AppleTalk, such as TOPS, also conform to the LocalTalk cable system. Such networks are sometimes called LocalTalk networks .Although LocalTalk networks are relatively slow, they are popular because they are easy and inexpensive to install and maintain. An alternative cabling scheme that is faster is Ethernet."
            }, {
                title: "lock-in",
                description: "The phrase used to describe a Web page that disables the browser's back button and prevents the user from leaving the page via the back button. The lock-in practice was originally used by pornography Web sites, however, more mainstream Web sites also use lock-in to keep readers on the Web site once it has loaded. Also a form of mousetrapping."
            }, {
                title: "log on",
                description: "To make a computer system or network recognize you so that you can begin a computer session. Most personal computers have no log-on procedure -- you just turn the machine on and begin working. For larger systems and networks, however, you usually need to enter a username and password before the computer system will allow you to execute programs."
            }, {
                title: "log out",
                description: "To end a session at the computer. For personal computers, you can log out simply by exiting applications and turning the machine off. On larger computers and networks, where you share computer resources with other users, there is generally an operating system commandthat lets you log off."
            }, {
                title: "logic bomb",
                description: "Also called slag code, programming code added to the software of an application or operating system that lies dormant until a predetermined period of time (i.e., a period of latency) or event occurs, triggering the code into action. Logic bombs typically are malicious in intent, acting in the same ways as a virus or Trojan horse once activated. In fact, viruses that are set to be released at a certain time are considered logic bombs. They can perform such actions as reformatting a hard drive and/or deleting, altering or corrupting data."
            }, {
                title: "Logical Link Control layer",
                description: "The Logical Link Control (LLC) layer is one of two sublayers that make up the Data Link Layer of the OSI model. The Logical Link Control layer controls frame synchronization, flow control and error checking."
            }, {
                title: "logical topology",
                description: "Logical topology is also called signal topology.Every LAN has a topology, or the way that the devices on a network are arranged and how they communicate with each other. The way that the workstations are connected to the network through the actual cables that transmit data (the physical structure of the network) is called the physical topology."
            }, {
                title: "LOM - LAN on motherboard",
                description: "Short for LAN on motherboard. The term refers to a chip or chipset capable of network connections that has been embedded directly on the motherboard of a desktop, workstation or server. Instead of requiring a separate network interface card to access a local-area network, such as Ethernet, the circuits are attached to the motherboard. An advantage of a LOM system is an extra available PCIslot that is not being used by the network adapter. An early programming language used for data processing"
            }, {
                title: "loopback",
                description: "In telecommunications, loopback is a method used to perform transmission tests of the lines at the switching center. Loopback is a communication channel with only one endpoint. TCP/IP networks specify a loopback that allows client software to communicate with server software on the same computer. users can specify an IP address, usually 127.0.0.1, which will point back to the computer's TCP/IP network configuration. The range of addresses for loopback functionality is the range of 127.0.0.0 to 127.255.255.255. Similar to ping, loopback enables a user to test one's own network to ensure the IP stack is functioning properly."
            }, {
                title: "loopback address",
                description: "Loopback address is a special IP number (127.0.0.1) that is designated for the software loopback interface of a machine. The loopback interface has no hardware associated with it, and it is not physically connected to a network.The loopback interface allows IT professionals to test IP software without worrying about broken or corrupted drivers or hardware."
            }, {
                title: "loopback plug",
                description: "Also referred to as a loopback adapter. A connection device that is plugged into a computer's port in order to perform a loopback test."
            }, {
                title: "loopback test",
                description: "A diagnostic procedure in which a signal is transmitted and returned to the sending device after passing through all or a portion of a network or circuit. The returned signal is compared with the transmitted signal in order to evaluate the integrity of the equipment or transmission path. A computer needs a loopback plug that is inserted into a port in order to perform a loopback test."
            }, {
                title: "Lotus Domino",
                description: "An IBM server application platform used for enterprise e-mail, messaging, scheduling and collaboration. Lotus Domino was previously called Lotus Notes Server and was initially the server component of Lotus Corp's client-server messaging technology. Lotus Domino provides the complete infrastructure needed to create, test, deploy, and manage distributed, multi-lingual applications, including directory, database, application server, administration, security, connectivity, Web server, e-mail server, calendaring engine, and so on, all in one application."
            }, {
                title: "Lotus Notes",
                description: "A groupware application developed by Lotus, now part of IBM. Notes was one of the first applications to support a distributed database of documents that could be accessed by users across a LAN or WAN. Its sophisticated replication features enable users to work with local copies of documents and have their modifications propagated throughout an entire Notes network."
            }, {
                title: "LPD/LPR - line printer daemon/line printer remote",
                description: "Short for line printer daemon/line printer remote, a printer protocol that uses TCP/IP to establish connections between printers and workstations on a network. The technology was developed originally for BSD UNIX and has since become the de facto cross-platformprinting protocol.The LPD software typically is stored in the printer or print server and the LPR software must be installed in the client device. The LPR client sends the print request to the IP address of the LPD printer/server, which in turn queues the file and prints it when the printer becomes available."
            }, {
                title: "L_Port",
                description: "The loop capable fabric port (L_Port) is a basic port in a Fibre Channel Arbitrated Loop (FC-AL) topology. If an N_Port is operating on a loop, it's referred to as an NL_Port. If a F_Port is on a loop it is known as an FL_Port."
            }, {
                title: "M2M",
                description: "Acronym for Machine-to-Machine , M2M is the ability of machines, assets and devices to exchange data with people or company's management systems in need of the information. M2M is derived from telemetry technology and uses similar, but updated versions of those technologies. Today's cellular M2M technology uses field-deployed wireless device a wireless carrier network and a back-end server network. In some instances M2M is used to mean Machine-to-Man."
            }, {
                title: "MAC",
                description: "There are three common technology definitions for MAC:Short for Media Access Control. See MAC address or MAC layer.When spelled Mac, the brand name and registered trademark for a line of computers from Apple Inc. See under Macintosh computer.Short for Mandatory Access Control."
            }, {
                title: "MAC Layer - Media Access Control Layer",
                description: "The Media Access Control Layer is one of two sublayers that make up the Data Link Layer of the OSI model. The MAC layer is responsible for moving data packets to and from one Network Interface Card (NIC) to another across a shared channel.See a breakdown of the seven OSI layers in the Quick Reference section of Webopedia.The MAC sublayer uses MAC protocols to ensure that signals sent from different stations across the same channel don't collide."
            }, {
                title: "MACDefender",
                description: "MACDefender, or Mac Defender, is a Trojan horse that first appeared in early 2011, masquerading as an antivirus program in an attempt to get users to share their credit card information over an unsecured site. The MACDefender rogue antivirus software targets Mac users via a phishing scam that redirects the users from legitimate sites to fake sites that make the user think their computer has been infected with a virus.If a user were to click on the bogus link and install the MACDefender software, he or she would be presented with a professional-looking but ultimately fake antivirus program. The MACDefender malware installation could also begin automatically if Safari’s open safe file after downloading option had been selected. Once installed, MACDefender will periodically open pornographic sites in an attempt to make users believe they have a virus on their computer and as a result need to purchase the registered version of the MACDefender software with a credit card.Variants of the original MACDefender Trojan have appeared recently with names such as Mac Security and Mac Protector. Apple has released a software update that automatically finds and removes the Mac Defender malware as well as its currently known variants."
            }, {
                title: "machine binding",
                description: "Usually a part of software licensing or digital media distribution that prohibits the software from being used on more than one physical computer system or machine. Users who upgrade their systems or make major changes to it may have difficulty keeping their rights if enough changes are detected in the system."
            }, {
                title: "macro virus",
                description: "A type of computer virus that is encoded as a macro embedded in a document. Many applications, such as Microsoft Word and Excel, support powerful macro languages. These applications allow you to embed a macro in a document, and have the macro execute each time the document is opened.According to some estimates, 75% of all viruses today are macro viruses. Once a macro virus gets onto your machine, it can embed itself in all future documents you create with the application. Antivirus programs can protect your system against most macro viruses, although new ones are always being created that slip by the antivirus filters."
            }, {
                title: "MAE",
                description: "Short for Metropolitan Area Ethernet, a Network Access Point (NAP) where Internet Service Providers (ISPs) can connect with each other. The original MAE was set up by a company called MFS and is based in Washington, D.C. Later, MFS built another one in Silicon Valley, dubbed MAE-West. In addition to the MAEs from MFS, there are many other NAPs. Although MAE refers really only to the NAPs from MFS, the two terms are often used interchangeably."
            }, {
                title: "malicious active content",
                description: "A type of malware that uses common, dynamic scripting languages (e.g. Java, Javascript, Active X, or Visual Basic). Vulnerabilities in the scripting language are exploited to carry malicious code, which could be downloaded through a Web browser and executed on a local system without the user's knowledge or consent. Malicious active content can be used for many criminal activities, including to deliver viruses and worms, send e-mail, record information from the local user, or to redirect users or content. Active content is also called mobile code."
            }, {
                title: "malicious code",
                description: "Malicious code is the term used to describe any code in any part of a software system or script that is intended to cause undesired effects, security breaches or damage to a system. Malicious code describes a broad category of system security terms that includes attack scripts, viruses, worms, Trojan horses, backdoors, and malicious active content."
            }, {
                title: "malvertising",
                description: "Malicious online advertising, typically performed by masking malicious computer code with seemingly harmless online advertisements. The advertisements may lead to harmful or deceptive content or may directly infect a victim's computer with malicious software (malware) that can damage data, steal personal information or even bring the user's computer under the control of a remote operator."
            }, {
                title: "malvertising (malware)",
                description: "Malvertising is a deceptive process of injecting and spreading malware through otherwise legitimate online advertising networks that display ads on reputable web sites and pages.A portmanteau of malicious advertising, malvertising has become more problematic in recent years, as newer forms of malvertising can infect computers and mobile devices without any action taken on part of the user –  in other words, without the user even needing to click on the malware-laden ad."
            }, {
                title: "malware - malicious software",
                description: "Short for malicious software, malware refers to software designed specifically to damage or disrupt a system, such as a virus or a Trojan horse."
            }, {
                title: "MAN - Metropolitan Area Network",
                description: "Short for Metropolitan Area Network, a data network designed for a town or city. In terms of geographic breadth, MANs are larger than local-area networks (LANs), but smaller than wide-area networks (WANs). MANs are usually characterized by very high-speed connections using fiber optical cable or other digital media."
            }, {
                title: "man-in-the-middle attack",
                description: "Abbreviated as MITM, a man-in-the-middle attack is an active Internet attack where the person attacking attempts to intercept, read or alter information moving between two computers. MITM attacks are associated with 802.11 security, as well as with wired communication systems."
            }, {
                title: "Managed Security Service",
                description: "Abbreviated as MSS, Managed Security Service is the outsourcing of all or some of your organization's security operations. Managed Security Service Providers (MSSPs) may completely handle your security at an off-site location, or be the ones who set-up the infrastructure on-site leaving your organization to manage it."
            }, {
                title: "Mandatory Access Control",
                description: "In computer security Mandatory Access Control (MAC) is a type of access control in which only the administrator manages the access controls. The administrator defines the usage and access policy, which cannot be modified or changed by users, and the policy will indicate who has access to which programs and files. MAC is most often used in systems where priority is placed on confidentiality."
            }, {
                title: "Mariposa",
                description: "Mariposa is the name of a malicious botnet. Dubbed Mariposa, this widespread malware campaign managed to infiltrate more than 13 million PCs and more than half of the world's 1,000-largest companies. Three men, who called themselves the Nightmare Days Team and dubbed their botnet projects Mariposa, were arrested by Spanish authorities in February 2010 after a yearlong investigation by law enforcement agencies and security software vendors Panda Security.The Mariposa (the Spanish word for butterfly) botnet was shut down on Dec. 23, 2009 after operating largely unhindered for almost a year. Mariposa accessed more than 13 million PCs in all, making it one of the largest and most destructive botnets in history."
            }, {
                title: "martian address",
                description: "An IP address that is invalid because it has been spoofed or is not routable because it has been assigned an address by an incorrectly configured system. Routing software will reject a martian address."
            }, {
                title: "masquerade attack",
                description: "In system security masquerade attack is a type of attack in which one system assumes the identity of another."
            }, {
                title: "matching",
                description: " In a biometric security system, the process of comparing a biometric sample with a stored reference template and subsequently assigning a score based on the level of similarity. The biometric system then issues an accept or reject decision based on the results of the matching."
            }, {
                title: "MD5",
                description: "An algorithm created in 1991 by Professor Ronald Rivest that is used to create digital signatures. It is intended for use with 32 bit machines and is safer than the MD4 algorithm, which has been broken. MD5 is a one-way hash function, meaning that it takes a message and converts it into a fixed string of digits, also called a message digest.When using a one-way hash function, one can compare a calculated message digest against the message digest that is decrypted with a public key to verify that the message hasn't been tampered with. This comparison is called a hashcheck."
            }, {
                title: "MDF - main distribution frame",
                description: "Short for main distribution frame, a cable rack that interconnects and manages the telecommunications wiring between itself and any number of IDFs. Unlike an IDF, which connects internal lines to the MDF, the MDF connects private or public lines coming into a building with the internal network. For example, an enterprise that encompasses a building with several floors may have one centralized MDF on the first floor and one IDF on each of the floors that is connected to the MDF."
            }, {
                title: "MDIX",
                description: "Short for medium dependent interface crossover (the X representing crossover), an Ethernet port connection that allows networked end stations (i.e., PCs or workstations) to connect to each other using a null-modem, or crossover, cable."
            }, {
                title: "medium dependent interface",
                description: "Abbreviated MDI, an Ethernet port connection that allows network hubs or switches to connect to other hubs or switches without a null-modem, or crossover, cable."
            }, {
                title: "member server",
                description: "As defined by Microsoft, in Active Directory server roles, computers that function as servers within a domain can have one of two roles: member server or domain controller. A member server is a computer that runs an operating system in the Windows 2000 Server family or the Windows Server 2003 family, belongs to a domain, and is not a domain controller. Member servers typically function as the following types of servers: file servers, application servers, database servers, Web servers, certificate servers, firewalls and remote-access servers."
            }, {
                title: "memory-resident virus",
                description: "A virus that stays in memory after it executes and after its host program is terminated. In contrast, non-memory-resident viruses only are activated when an infected application runs."
            }, {
                title: "Mercury LoadRunner",
                description: "The name of an enterprise testing tool that predicts system behavior and performance. LoadRunner employs performance monitors, called agents, that trace events along an application path to quickly isolate system bottlenecks with minimal impact to the system."
            }, {
                title: "mesh",
                description: "Also called mesh topology or a mesh network, mesh is a network topology in which devices are connected with many redundant interconnections between network nodes. In a true mesh topology every node has a connection to every other node in the network.There are two types of mesh topologies: full mesh and partial mesh.Full mesh topology occurs when every node has a circuit connecting it to every other node in a network. Full mesh is very expensive to implement but yields the greatest amount of redundancy, so in the event that one of those nodes fails, network traffic can be directed to any of the other nodes. Full mesh is usually reserved for backbone networks.Partial mesh topology is less expensive to implement and yields less redundancy than full mesh topology. With partial mesh, some nodes are organized in a full mesh scheme but others are only connected to one or two in the network. Partial mesh topology is commonly found in peripheral networks connected to a full meshed backbone."
            }, {
                title: "message digest",
                description: "The representation of text in the form of a single string of digits, created using a formula called a one-way hash function. Encrypting a message digest with a private key creates a digital signature, which is an electronic means of authentication."
            }, {
                title: "Metaswitch Networks",
                description: "Metaswitch Networks is the corporate name of a provider of carrier systems and software solutions. The company's products and services are used in the migration of communications networks to open, packet-based architectures. Metaswitch Networks provides scalable session control, media gateway and application/feature server solutions in addition to portable software components that are integrated into the products of the world's leading communications equipment manufacturers. Metaswitch Networks was founded in 1981 as Data Connection Limited by Ian S. Ferguson and 6 others, all formerly in various engineering, sales and management roles at IBM."
            }, {
                title: "Metcalfe's Law",
                description: "A theory argued by Robert Metcalfe, inventor of Ethernet, which states that the power of a network increases by the square of the number of nodes connected to it. For example, where X is the number of nodes, the power of the network is X squared.Metcalfe observed that new technologies are valuable only when large numbers of people use them -- consider how less valuable the telephone would be if only two people in the world used them. The network becomes more valuable the more nodes that are connected to it."
            }, {
                title: "MIB - Management Information Base",
                description: "Short for Management Information Base, a database of objects that can be monitored by a network management system. Both SNMP and RMONuse standardized MIB formats that allows any SNMP and RMON tools to monitor any device defined by a MIB."
            }, {
                title: "Micro-Virtualization",
                description: "Micro-virtualization is a technology developed by desktop security firm Bromium to help ensure secure computing environments. Micro-virtualization utilizes a Xen-based security-focused hypervisor called a microvisor that creates hardware-isolated micro virtual machines (micro-VMs) for each computing task that utilizes data originating from an unknown source.Tasks in this sense are the computation that takes place within an application as well as within the system kernel, and examples of user tasks the micro-virtualization can secure cover everything from accessing a web page to opening a document or spreadsheet to analyzing complex data.Micro-virtualization isolates these computing tasks from other computing tasks, applications and network systems. Because each micro-VM is isolated from other micro-VMs as well as the operating system itself, a micro-VM that becomes infected by malware will be destroyed when the micro-VM shuts down, preventing the malware from being able to corrupt other tasks, apps or the system itself."
            }, {
                title: "Micro-VM",
                description: "Micro-VMs, or micro virtual machines, are hardware-isolated virtual machines created by a microvisor to help ensure secure computing environments. Micro-VMs, or microVMs, are used in micro-virtualization to isolate individual computing tasks that work with data originating from unknown sources.With micro-virtualization, the Xen-based microvisor that creates each microVM is able to isolate these computing tasks from other computing tasks, applications and network systems. Because each micro-VM is isolated from other micro-VMs as well as the operating system itself, a micro-VM that becomes infected by malware will be completely destroyed when the micro-VM shuts down, preventing the malware from being able to corrupt other tasks, apps or the system itself.The hardware-isolated micro-VMs stand in contrast to software sandboxing, which can leave the operating system vulnerable to malware. Micro-VMs are restricted to accessing a minimal set of operating system resources and are unable to interact with other system processes, ensuring security while also limiting potential latency and bottleneck issues."
            }, {
                title: "Microsoft Forefront Endpoint Security",
                description: "Microsoft Forefront Endpoint Security refers to an enterprise-grade line of security products offered by Microsoft in its security software product line. In 2012, Microsoft released the final version of Forefront Endpoint Security as Microsoft System Center 2012 Endpoint Protection.With Microsoft System Center 2012, enterprise users can manage their PCs and servers to set configuration and security policies, ensure software remains updated and patched with the latest fixes for security vulnerabilities, provide access to applications to users, and monitor system status."
            }, {
                title: "Microsoft Network Access Protection",
                description: "Abbreviated as NAP, Microsoft's Network Access Protection is a policy-enforcement platform built into the Microsoft Windows Vista and Windows Server Code Name Longhorn operating systems, NAP allows you to better protect network assets by enforcing compliance with system health requirements. With Network Access Protection, you can create customized health policies to validate computer health before allowing access or communication, automatically update compliant computers to ensure ongoing compliance, and optionally confine noncompliant computers to a restricted network until they become compliant.In October 2006, Cisco and Microsoft formally announced interoperability between the Cisco Network Admission Control (NAC) and Microsoft Network Access Protection (NAP) solutions. Interoperability will be supported with the release of NAP in the future version of Windows Server which is scheduled to be available in the second half of 2007. The interoperability architecture allows customers to deploy both NAC and NAP incrementally or concurrently."
            }, {
                title: "Microsoft Safety Scanner",
                description: "Microsoft Safety Scanner is a free security tool that provides on-demand scanning for viruses, spyware and other malicious software. The Safety Scanner tool additionally offers the capability to remove some forms of malware.Microsoft Safety Scanner can be downloaded through Microsoft's Safety and Security Center web site, which also provides the latest service packs, drivers, security patches and other updates for Microsoft software to help users stay current on the latest security issues.Microsoft Safety Scanner has a unique characteristic in that it expires ten days after being downloaded, so users will need to download and run the tool again if they want to run a new scan or get the latest anti-malware definitions for Safety Scanner."
            }, {
                title: "Microsoft Secure Boot",
                description: "Microsoft Secure Boot is a component of Microsoft's Windows 8 operating system that relies on the UEFI specification’s secure boot functionality to help prevent malicious software applications and unauthorized operating systems from loading during the system start-up process.While there is some concern that Microsoft Secure Boot will make it difficult to install Linux or other operating systems on a Windows 8 computer, the secure boot functionality in Windows 8 is primarily designed to protect users from rootkits and other low-level malware attacks by blocking unauthorized (non-signed) executables and drivers from being loaded during the boot process.Personal computers bearing the Windows 8-certified logo will be required to ship with Microsoft Secure Boot enabled."
            }, {
                title: "Microsoft Security Development Lifecycle (SDL)",
                description: "A company-wide process from Microsoft for performing regular code reviews for Microsoft software products to reduce security issues and resolve security vulnerabilities in a timely fashion. Microsoft Security Development Lifecycle (SDL) efforts are grouped into seven phases: training, requirements, design, implementation, verification, release and response.The Microsoft Security Development Lifecycle was first announced in 2003, and is built largely on the premise of mitigating classes of potentialx security exploits as opposed to addressing specific exploits on a case-by-case basis.  The Microsoft SDL was also developed to help protect against unforeseen threats, which is accomplished in part by the company working with security research community to improve security and resolve new and emerging vulnerabilities."
            }, {
                title: "Microsoft Security Essentials",
                description: "Microsoft Security Essentials is a free anti-malware tool available for Microsoft's Windows Vista and Windows 7 operating systems that is designed to protect computers from viruses, spyware and other forms of malware.While Microsoft continues to offer Microsoft Security Essentials for Windows Vista and Windows 7, the tool cannot be used on Windows 8 or newer OSes. Instead, the company includes a successor to Security Essentials called Windows Defender that is built into the operating system.And while Microsoft initially offered support for Microsoft Security Essentials on Windows XP, the company has since discontinued supporting the tool on this operating system."
            }, {
                title: "Microsoft Security Software",
                description: "Microsoft provides a variety of security options to protect users of its Windows-based operating systems and software products from malware, viruses, hacking attempts, phishing attacks, spam and more. The most popular among Microsoft's standalone software security options are Windows Defender, Microsoft Security Essentials, Microsoft Safety Scanner and Forefront Endpoint Security.For many years, Microsoft's philosophy for ensuring the security of its software products had a heavy emphasis on standalone security products like the ones listed above. In recent years, however, Microsoft has discontinued some of these security offerings in favor of better built-in security protection for its products like Exchange Server, Internet Explorer and the latest Windows operating systems (via the built-in Windows Defender)."
            }, {
                title: "microvisor",
                description: "The term microvisor refers to a Xen-based security-focused hypervisor developed by security firm Bromium that provides micro-virtualization technology to ensure secure computing environments.Short for micro-hypervisor, a microvisor works with the VT (Virtualization Technology) features built into Intel, AMD and other CPUs to create hardware-isolated micro virtual machines (micro-VMs) for each task performed by a user that utilizes data originating from an unknown source.The micro-VMs created by the microvisor provide a secure environment, isolating user tasks from other tasks, applications and other systems on the network. Tasks in this case entail the computation that takes place within an application as well as within the system kernel, so the microvisor ensures security at both the application and operating system kernel levels."
            }, {
                title: "Miracast",
                description: "Miracast is a peer-to-peer wireless technology that enables users to mirror, or share, their computer or mobile device screen to other computers, TVs, projectors, streaming players or other electronic devices. In order for Miracast to work, both devices need to support the technology, although wireless Miracast adapters can be purchased for devices that lack built-in support for the technology.Unlike some streaming technologies, Miracast bypasses the use of a home network (wired or Wi-Fi) and instead creates a direct, peer-to-peer connection between the Miracast-capable devices. Once enabled, video (up to 1080p HD video), audio (up to 5.1 surround sound), photos and more can be shared between devices."
            }, {
                title: "MIS - management information system",
                description: "MIS is short for management information system or management information services.Management information system, or MIS, broadly refers to a computer-based system that provides managers with the tools to organize, evaluate and efficiently manage departments within an organization. In order to provide past, present and prediction information, a management information system can include software that helps in decision making, data resources such as databases, the hardware resources of a system, decision support systems, people management and project management applications, and any computerized processes that enable the department to run efficiently."
            }, {
                title: "Mobile Application Management (MAM)",
                description: "Mobile Application Management (MAM) is a term that refers to software and services used to secure, manage and distribute mobile applications used in enterprise settings on mobile devices like smartphones and tablet computers.Mobile Application Management can apply to company-owned mobile devices as well as BYOD (Bring Your Own Devices). MAM solutions typically offer a variety of capabilities and services, including application delivery and software licensing, application configuration, app authorization, usage tracking and application lifecycle management (ALM)."
            }, {
                title: "mobile botnet",
                description: "A type of botnet that targets mobile devices such as smartphones, attempting to gain complete access to the device and its contents as well as providing control to the botnet creator.  Mobile botnets take advantage of unpatched exploits to provide hackers with root permissions over the compromised mobile device, enabling hackers to send e-mail or text messages, make phone calls, access contacts and photos, and more.  Most mobile botnets go undetected and are able to spread by sending copies of themselves from compromised devices to other devices via text messages or e-mail messages.Examples of mobile botnets include the iPhone SMS attack that affected iPhone and iPad devices, the DreamDroid malware that compromised Google Android devices, the ZeuS variant (Zitmo) that targeted Blackberry users, and CommWarrior and Sexy Space, both of which affected Symbian Series mobile devices."
            }, {
                title: "Mobile Content Management (MCM)",
                description: "Also known as mobile information management (MIM), mobile content management typically falls within the overarching Enterprise Mobility Management (EMM) philosophy along with other mobile security initiatives like mobile device management (MDM) mobile application management (MAM) and mobile security management (MSM).A well-designed mobile content management strategy enables employees to securely access mission-critical enterprise data and collaborate with other employees across any network or mobile device without being slowed down or restricted from data they need access to for their work function."
            }, {
                title: "mobile device security",
                description: "Security measures designed to protect the sensitive information stored on and transmitted by smartphones, tablets, laptops and other mobile devices. Mobile device security spans the gamut from user authentication measures and mobile security best practices for protecting against compromised data in the event of unauthorized access or accidental loss of the mobile device to combat malware, spyware and other mobile security threats that can expose a mobile device’s data to hackers.Most mobile devices feature mobile operating systems with built-in mobile device security features, including iOS for iPhones and iPads, Google's Android platform and Microsoft's Windows Phone. Additionally, a variety of third-party mobile device security solutions are available for providing an additional layer of protection for mobile devices."
            }, {
                title: "Mobile Information Management (MIM)",
                description: "Mobile Information Management (MIM) refers to software and services used to secure and manage the sensitive, often business-critical data used in the enterprise on mobile devices like smartphones and tablet computers.Also referred to as Mobile Content Management (MCM), Mobile Information Management falls under the umbrella of Enterprise Mobility Management along with other mobile security initiatives like mobile device management (MDM) mobile application management (MAM) and mobile security management (MSM)."
            }, {
                title: "Mobile Location Protocol",
                description: "The OMA Mobile Location Protocol (MLP) is an application-level protocol for obtaining the position of mobile stations (mobile phones, wireless personal digital assistants and so on) independent of underlying network technology. The MLP serves as the interface between a Location Server and a Location Services (LCS) Client. This specification defines the core set of operations that a Location Server should be able to perform."
            }, {
                title: "mobile security",
                description: "Mobile security involves protecting both personal and business information stored on and transmitted from smartphones, tablets, laptops and other mobile devices. The term mobile security is a broad one that covers everything from protecting mobile devices from malware threats to reducing risks and securing mobile devices and their data in the case of theft, unauthorized access or accidental loss of the mobile device."
            }, {
                title: "mobile security apps",
                description: "Mobile security apps are applications designed for smartphone and tablet mobile devices to protect and secure the device and its data from unauthorized access in the case of theft or accidental loss. Some mobile security apps can also help users locate their device if it’s lost or stolen.Additional security features typically offered by mobile security apps include malware detection and removal, VPN connectivity for protecting data in transit, scanning websites for potential phishing schemes or other fraudulent activity and more.Whereas most of the mobile security apps in Apple’s iOS are built into the mobile operating system, numerous third-party mobile security apps are available for Google’s Android mobile OS platform, Microsoft’s Windows Phone and, to a lesser extent, iOS. Well-known security companies like Norton, McAfee, Lookout, BitDefender and ESET offer mobile security apps for Android, Microsoft Windows Phone and/or iOS."
            }, {
                title: "mobile security best practices",
                description: "Mobile security best practices are recommended guidelines and safeguards for protecting mobile devices and the sensitive data contained on them. Mobile security best practices apply to mobile devices used in business environments as well as for personal use, and the guidelines are largely the same in either scenario."
            }, {
                title: "mobile security management",
                description: "Mobile security management is a term that's often used interchangeably with the more common Mobile Device Management (MDM). Both terms refer to mobile security best practices and mobile security solutions that monitor, manage and secure the mobile devices used in an enterprise.  Some mobile security firms, like Marble Security, distinguish mobile security management (MSM) from MDM in that MSM entails dynamically monitoring for emerging mobile security threats, learning and adapting to these threats in real time in order to provide clients with a more thorough end-to-end mobile security strategy than the static security measures typically provided by MDM solutions."
            }, {
                title: "mobile security threats",
                description: "Mobile security threats include both physical and software-based threats that can compromise the data on smartphones, tablets and similar mobile devices. Mobile security threats include everything from mobile forms of malware and spyware to the potential for unauthorized access to a device’s data, particularly in the case of accidental loss or theft of the device.Mobile malware and spyware security threats can access a device’s private data without a user’s knowledge or consent and can also perform malicious actions without the user knowing, including transferring control of the device to a hacker, sending unsolicited messages to the device’s contacts, making expensive phone calls on smartphones, and more."
            }, {
                title: "Morto",
                description: "Monto is computer worm that spreads via the Windows Remote Desktop Protocol (RDP) and infects Microsoft Windows workstations and servers. Morto first appeared publically in August 2011, when network administrators started noticing heavy spikes in traffic on Port 3389/TCP.Once Morto infects one computer on a network, the worm scans for other machines that have RDP enabled and copies itself to these computers' local drives as a DLL file, which then creates additional files on the computers.  The Morto worm can also be controlled remotely.  At least two variants of the Morto worm are currently known to security experts."
            }, {
                title: "Mosquito",
                description: "A type of cellphone virus that became known in 2004. Mosquito was distributed as a part of a downloadable game. It makes mobile phones to send text messages to premium-rate numbers without the user's approval or knowledge."
            }, {
                title: "MPEG-21",
                description: "A comprehensive standard framework for networked digital multimedia designed by the Moving Picture Experts Group. MPEG-21 includes an REL and a Rights Data Dictionary. Unlike other MPEG standards that describe compression coding methods, MPEG-21 describes a standard that defines the description of content and also processes for accessing, searching, storing and protecting the copyrights of content."
            }, {
                title: "MPLS - Multiprotocol Label Switching",
                description: "MPLS is short for Multiprotocol Label Switching.MPLS is an IETF initiative that integrates Layer 2 information about network links (e.g. bandwidth, latency, utilization) into Layer 3 (IP) within a particular autonomous system, or ISP, in order to simplify and improve IP packet exchange. MPLS gives network operators a great deal of flexibility to divert and route traffic around link failures, congestion, and bottlenecks.From a quality of service QoS standpoint, ISPs will better be able to manage different kinds of data streams based on priority and service plan. For instance, those who subscribe to a premium service plan, or those who receive a lot of streaming media or high-bandwidth content can see minimal latency and packet loss."
            }, {
                title: "MPOA",
                description: "Short for Multiprotocol Over ATM, a specification that enables ATM services to be integrated with existing local-area networks (LANs) that use Ethernet, token-ring or TCP/IP protocols. The goal of MPOA is to allow different LANs to send packets to each other via an ATM backbone. Unlike other techniques, such as LAN Emulation (LANE), which operates at level 2 of the OSI Reference Model, MPOA operates at Level 3."
            }, {
                title: "MSCS",
                description: "Short for Microsoft Cluster Server, a clustering technology built into Windows NT 4.0 and later versions. MSCS supports clustering of two NT servers to provide a single fault-tolerant server.During its development stage, MSCS was code-named Wolfpack."
            }, {
                title: "MU-MIMO",
                description: "Short for Multi-User, Multiple-Input, Multiple-Output, MU-MIMO is an enhanced form of the MIMO technology that enables multiple independent radio terminals to access a system, which can provide significant performance gains over the original MIMO technology.MU-MIMO features prominently in the 2013 update of the 802.11ac wireless specification (802.11ac Wave 2) and helps increase theoretical maximum wireless speeds from 3.47 Gbps to 6.93 Gbps for 802.11ac Wave 2.MU-MIMO enables multiple users to simultaneously access the same channel by providing spatial degrees of freedom. However, because of its need for sophisticated antenna systems and signal processing, MU-MIMO can only be used in the downstream direction (from an access point to multiple wireless client devices) in the 802.11ac Wave 2 specification."
            }, {
                title: "multi-tenant",
                description: "In cloud computing, multi-tenant is the phrase used to describe multiple customers using the same public cloud."
            }, {
                title: "multicast address",
                description: "A multicast address is a single address that refers to multiple network devices. Multicast address is synonymous with group address."
            }, {
                title: "multihomed",
                description: "Typically used to describe a host connected to two or more networks or having two or more network addresses. For example, a network server may be connected to a serial line and a LAN or to multiple LANs."
            }, {
                title: "multipartite virus",
                description: " Also called a multi-part virus, a virus that attempts to attack both the boot sector and the executable, or program, files at the same time. When the virus attaches to the boot sector, it will in turn affect the system��s files, and when the virus attaches to the files, it will in turn infect the boot sector.This type of virus can re-infect a system over and over again if all parts of the virus are not eradicated."
            }, {
                title: "municipal Wi-Fi",
                description: "Often abbreviated as muni Wi-Fi, municipal Wi-Fi is a city-wide (municipal) wireless network, based mainly on 802.11 networking standards that provide high-speed Internet access within the municipality for free or low cost access when compared to standard broadband access fees. Municipal Wi-Fi networks are a type of wireless mesh network."
            }, {
                title: "NAC - Cisco Network Admission Control",
                description: "Abbreviated as NAC, Cisco's Network Admission Control is a set of technologies and solutions that use the network infrastructure to enforce security policy compliance on all devices seeking to access network computing resources in order to limit damage from emerging security threats. NAC is designed to allow network access only to compliant and trusted endpoint devices (PCs, servers and PDAs, for example) and can restrict the access of noncompliant devices. NAC assesses all endpoints across all access methods, including LAN, wireless connectivity, remote access and WAN. [Source: Cisco Systems]In October 2006, Cisco and Microsoft formally announced interoperability between the Cisco Network Admission Control (NAC) and Microsoft Network Access Protection (NAP) solutions. Interoperability will be supported with the release of NAP in the future version of Windows Server which is scheduled to be available in the second half of 2007. The interoperability architecture allows customers to deploy both NAC and NAP incrementally or concurrently."
            }, {
                title: "Named Pipes",
                description: "An interprocess control (IPC) protocol for exchanging information between two applications, possibly running on different computers in a network. Named Pipes are supported by a number of network operating systems (NOSs), including Netware and LAN Manager."
            }, {
                title: "NAPT",
                description: "NAPT, or Network Address Port Translation, is a method by which many network addresses and their TCP/UDP (Transmission Control Protocol/User Datagram Protocol) ports are translated into a single network address and its TCP/UDP ports.  NAPT allows mapping of tuples of the type (local IP addresses, local TU port number) to tuples of the type (registered IP address, assigned TU port number). NAPT is defined in the RFC3022 section 2.2."
            }, {
                title: "NAS",
                description: "Short for network-attached storage.  Short for network access server."
            }, {
                title: "NAS - Network Attached Storage",
                description: "A network-attached storage (NAS) device is a server that is dedicated to nothing more than file sharing. Network-attached storage does not provide any of the activities that a server in a server-centric system typically provides, such as email, authentication or file management."
            }, {
                title: "NAT - Network Address Translation",
                description: "NAT is short for Network Address Translation. NAT is an Internet standard that enables a local-area network (LAN) to use one set of IP addresses for internal traffic and a second set of addresses for external traffic. A NAT box located where the LAN meets the Internet makes all necessary IP address translations."
            }, {
                title: "NCP - NetWare Core Protocol",
                description: "NetWare Core Protocol (NCP) is the file-sharing protocol between server and client(s) on a Novell NetWare network. NCP controls many requests to the file and printing system, along with login requests. NCP is a client/server LAN protocol. Clients (or workstations) send NCP requests, which are sent via IPX or IP over the network to the server for interpretation."
            }, {
                title: "NDIS",
                description: "Short for Network Driver Interface Specification, a Windows device driver interface that enables a single network interface card (NIC) to support multiple network protocols. For example, with NDIS a single NIC can support both TCP/IP and IPX connections. NDIS can also be used by some ISDN adapters.NDIS includes a protocol manager that accepts requests from the network driver (at the transport layer) and passes these requests to the NIC (at the data link layer). So multiple NDIS-conforming network drivers can co-exist. Also, if a computer contains multiple NICs because it is connected to more than one network, NDIS can route traffic to the correct card.NDIS was developed by Microsoft and 3COM. Novell offers a similar device driver for NetWare called Open Data-Link Interface (ODI)."
            }, {
                title: "NDS",
                description: "Short for Novell Directory Services, the directory services for Novell Netware networks. NDS complies with the X.500 standard and provides a logical tree-structure view of all resources on the network so that users can access them without knowing where they're physically located. NDS also inter-operates with other types of networks."
            }, {
                title: "Net PC",
                description: "Also called a Network PC, a type of network computer designed cooperatively by Microsoft and Intel. In some respects, the Net PC is really just a scaled-down PC since it is able to execute Windows applications locally. However, it also includes features to simplify connecting it to a networkand to administer it remotely.Net PCs are based on the Wintel platform, but are configured to be as inexpensive as possible and to discourage users from configuring the machines themselves (the cases also are sealed to discourage users from altering the hardware). Consequently, they have no floppy disk drive or CD-ROM drive. They do have a hard disk though it's meant to be used as a temporary cache to improve performance rather than for permanently storing data. Configuration and management of a Net PC is performed through a network server and Microsoft's Zero Administration Windows (ZAW)system."
            }, {
                title: "NetBEUI",
                description: "Pronounced net-booey, NetBEUI is short for NetBios Extended User Interface. It is an enhanced version of the NetBIOS protocol used by network operating systems such as LAN Manager, LAN Server, Windows for Workgroups, Windows 95 and Windows NT.Netbeui was originally designed by IBM for their Lan Manager server and later extended by Microsoft and Novell."
            }, {
                title: "Netbus",
                description: "Netbus, also called Netbus Trojan, is a Win32-based Trojan program. Authored by Carl-Frederik Neikter, it first appeared in March 1998 and is one of the most famous Trojans created. Netbus Trojan needs to be executed by the user for it to be installed. Once executed by the user it will install itself in such a way that it will be active all the time by adding an entry into the Windows registry. While you are connected to the Internet, if this program is running on your computer, anyone who has got the Netbus client can sneak in to your computer without your permission or knowledge."
            }, {
                title: "Netcheque",
                description: "Developed at the Information Sciences Institute of the University of Southern California. Registered users may write checks to other registered users through e-mail or other network protocols. When the check is deposited, it authorizes the transfer of funds from the issuer's account to the receiver's account. All information is kept on a netcheque server, which is responsible for keeping accounts for customers, approving payments, and making the necessary changes in client accounts."
            }, {
                title: "NetFlow",
                description: "NetFlow is a network protocol (developed by Cisco) that monitors and collects important network traffic information, including peak usage times, traffic routing and application usage, to show the overall flow and volume of the network. Basically, it can track where traffic is coming from, where it is going and how much traffic is being generated at any time.This network data can be captured at the device level, using for example, a router with the NetFlow feature enabled. Devices that use a NetFlow collector (hardware or software-based controllers) process the data and present it in readable format. There are a number of NetFlow collectors including Cisco, freeware and third party commercial vendors' products that report and utilize NetFlow data."
            }, {
                title: "network",
                description: "A network is defined as a group of two or more computer systems linked together. There are many types of computer networks, including the following:local-area networks (LANs): The computers are geographically close together (that is, in the same building).||||wide-area networks (WANs): The computers are farther apart and are connected by telephone lines or radio waves.||||campus-area networks (CANs): The computers are within a limited geographic area, such as a campus or military base.||||metropolitan-area networks MANs): A data network designed for a town or city.||||home-area networks (HANs): A network contained within a user's home that connects a person's digital devices."
            }, {
                title: "network access server",
                description: "Abbreviated as NAS, a network access server is an access gateway between an external communications network and an internal network. A common use of NAS is by Internet service providers (ISP) where the user dials into the ISP and is given access to the Internet after being authorized by the access server. Network access server (NAS) is also referred to as a remote access server (RAS) or as a media gateway. The IETF Network Access Server Requirements Working Group is responsible for defining the requirements for modern network access servers."
            }, {
                title: "network appliance",
                description: "A typically inexpensive personal computer, sometimes called a thin client, that enables Internet access and some business-related activities but lacks many features of a fully equipped PC, such as a hard drive or CD-ROM. Applications used on network appliances typically are housed on a Web server accessed by the appliance. Network appliances are used to ease remote management and cut costs."
            }, {
                title: "network automation",
                description: "The phrase used to describe the methodologies, processes, and technologies needed to help large organizations and enterprises automate the configuration and management of network devices, including hubs, routers and switches. Network automation helps an organization improve network service availability."
            }, {
                title: "network baselining",
                description: "Network baselining is the act of measuring and rating the performance of a network in real-time situations. Providing a network baseline requires testing and reporting of the physical connectivity, normal network utilization, protocol usage, peak network utilization, and average throughput of the network usage.Such in-depth network analysis is required to identify problems with speed and accessibility, and to find vulnerabilities and other problems within the network.Once a network baseline has been established, this information is then used by companies and organizations to determine both present and future network upgrade needs as well as assist in making changes to ensure their current network is optimized for peak performance."
            }, {
                title: "network computer",
                description: "A computer with minimal memory, disk storage and processor power designed to connect to a network, especially the Internet. The idea behind network computers is that many users who are connected to a network don't need all the computer power they get from a typical personal computer. Instead, they can rely on the power of the network servers.This is really a variation on an old idea -- diskless workstations -- which are computers that contain memory and a processor but no disk storage. Instead, they rely on a server to store data. Network computers take this idea one step further by also minimizing the amount of memory and processor power required by the workstation. Network computers designed to connect to the Internet are sometimes called Internet boxes, Net PCs, and Internet appliances.One of the strongest arguments behind network computers is that they reduce the total cost of ownership (TCO)-- not only because the machines themselves are less expensive than PCs, but also because network computers can be administered and updated from a central network server."
            }, {
                title: "network identity",
                description: "An identity that is recognized throughout a network, such as the Internet or an enterprise��s LAN. This concept is important to enterprises managing which individuals have access to what resources, which can include applications, information, and even equipment."
            }, {
                title: "Network Information Service",
                description: "Abbreviated as NIS, Network Information Service is a client-server directory service protocol for distributing system configuration data such as user and host names between computers on a computer network. NIS allows a group of machines within an NIS domain to share a common set of configuration files. This permits a system administrator to set up NIS client systems with only minimal configuration data and add, remove or modify configuration data from a single location. NIS was first developed by Sun Microsystems to centralize administration of SunOS systems. Now, NIS is supported by all major Unix-based systems including Solaris, HP-UX, AIX, Linux, NetBSD, OpenBSD, and others."
            }, {
                title: "Network Load Balancing",
                description: "Network Load Balancing (NLB) is a clustering technology offered by Microsoft as part of all Windows 2000 Server and Windows Server 2003 family operating systems. NLB uses a distributed algorithm to load balance network traffic across a number of hosts, helping to enhance the scalability and availability of mission critical, IP-based services, such as Web, Virtual Private Networking, streaming media, terminal services, proxy and so on. It also provides high availability by detecting host failures and automatically redistributing traffic to operational hosts."
            }, {
                title: "network management",
                description: "Network management refers to the broad subject of managing computer networks. There exists a wide variety of software and hardware products that help network system administrators manage a network. Network management covers a wide area, including:||||Security: Ensuring that the network is protected from unauthorized users.||||Performance: Eliminating bottlenecks in the network.||||Reliability: Making sure the network is available to users and responding to hardware and software malfunctions."
            }, {
                title: "network map",
                description: "In Windows Vista, a network map is a graphical representation of all the computers and devices on your network that shows how each is connected. To appear on the network map, the device or computer needs to support UPnP technology or Web Services for Devices for Windows. Also, to use the network map in Vista you may need to enable network discovery from within the Network and Sharing Center."
            }, {
                title: "network meltdown",
                description: "A state in which a network grinds to a halt due to excessive traffic. A network meltdown generally starts as a broadcast storm that gets out of control, but even legitimate network messages can cause a meltdown if the network hasn't been designed to accommodate that level of traffic."
            }, {
                title: "network monitoring",
                description: "In network management terms, network monitoring is the phrase used to describe a system that continuously monitors a network and notifies a network administrator though messaging systems (usually e-mail) when a device fails or an outage occurs. Network monitoring is usually performed through the use of software applications and tools.At the most basic level, ping is a type of network monitoring tool. Other commercial software packages may include a network monitoring system that is designed to monitor an entire business or enterprise network.Some applications are used to monitor traffic on your network, such as VoIP monitoring, video stream monitoring, mail server (POP3 server) monitoring, and others."
            }, {
                title: "network multipathing",
                description: "In IP networks, multipathing is a type of configuration designed to increase data throughput by using multiple network adapters (multipathing) connected to the same subnet."
            }, {
                title: "network neutrality",
                description: "Network neutrality or net neutrality, as it is abbreviated, is the term used to describe networks that are open to equal access to all . They are non-discriminatory as they do not favor any one destination or application over another. Due to the political debate in 2006, the definition of network neutrality has changed to mean those who run networks as opposed to the network itself, where net neutrality is generally understood to mean that the service and telecommunication providers do not discriminate against rivals or individuals when they charge fees or when they prioritize traffic. Net neutrality is a major issue as the U.S. considers new telecommunications laws. In a general sense, it is mainly supported by companies that provide services at the edge of the network, and is generally opposed by companies that manage the middle of the network."
            }, {
                title: "network security",
                description: "Network security is a specialized field in computer networking that involves securing a computer network infrastructure. Network security is typically handled by a network administrator or system administrator who implements the security policy, network software and hardware needed to protect a network and the resources accessed through the network from unauthorized access and also ensure that employees have adequate access to the network and resources to work.A network security system typically relies on layers of protection and consists of multiple components including networking monitoring and security software in addition to hardware and appliances. All components work together to increase the overall security of the computer network."
            }, {
                title: "network software",
                description: "A general phrase for software that is designed to help set up, manage, and/or monitor computer networks. Networking software applications are available to manage and monitor networks of all sizes, from the smallest home networks to the largest enterprise networks."
            }, {
                title: "network transparency",
                description: "A condition in which an operating system or other service allows the user access to a remote resource through a network without needing to know if the resource is remote or local. For example, Sun Microsystem's NFS, which has become a de facto industry standard, provides access to shared files through an interface called the Virtual File System (VFS) that runs on top of TCP/IP. Users can manipulate shared files as if they were stored locally on the user's own hard disk."
            }, {
                title: "network virtualization",
                description: "Network virtualization (NV) is using network resources through a logical segmentation of a single physical network. Network virtualization is achieved by installing software and services to manage the sharing of storage, computing cycles and applications. Network virtualization treats all servers and services in the network as a single pool of resources that can be accessed without regard for its physical components. The term network virtualization is often used to describe many things including network management, storage virtualization, and even grid computing."
            }, {
                title: "NEXT",
                description: "Short for near-end crosstalk (the X standing for cross), the measurement of crosstalk between two twisted-pair wires. Current flowing through wires creates electromagnetic fields that can interfere with signals on adjacent wires. NEXT occurs when a strong signal from one pair of wires is picked up by an adjacent pair. NEXT is the measurement of the portion of the signal that is electromagnetically coupled back into the received signal."
            }, {
                title: "next generation firewall - NGFW",
                description: "A class of firewalls designed to filter network and Internet traffic based upon the applications or traffic types using specific ports. The application-specific granular security policies provided by Next Generation Firewalls help them detect application-specific attacks, giving them the potential to catch more malicious activity than more traditional firewalls.Next Generation Firewalls (NGFWs) blend the features of a standard firewall with quality of service (QoS) functionalities in order to provide smarter and deeper inspection. In many ways a Next Generation Firewall combines the capabilities of first-generation network firewalls and network intrusion prevention systems (IPS), while also offering additional features such as SSL and SSH inspection, reputation-based malware filtering and Active Directory integration support.Manufacturers of enterprise-grade and commercial-grade NGFWs include Barracuda Networks (Barracuda NG Firewall series), Juniper Networks (AppSecure Suite), Palo Alto Networks and WatchGuard."
            }, {
                title: "next hop",
                description: "Common routing term that indicates the IP address of the next hop to which packets for the entry should be forwarded."
            }, {
                title: "Next-Generation Network",
                description: "A Next-Generation Network (NGN) is the term given to describe a telecommunications packet-based network that handles multiple types of traffic (such as voice, data,  and multimedia). It is the convergence of  service provider networks that includes the public switched telephone network (PSTN), the data network (the Internet), and, in some instances, the wireless network as well.The NGN system offers key convergent multimedia services using a shared network characterized by several essential elements:A unique and shared core network for all types of access and services.A core network architecture divided into three layers: Transport, Control and Services.Development of packet mode transport (IP flow transport in native IP, or on ATM in the short term with a progressive convergence to IP).Open and standardized interfaces between each layer, and in particular for the Control and Services layers in order to allow third parties to develop and create services independent of the network.Support for multiple applications (multimedia, real-time, transactional, total mobility) adaptable to the user and growing and varied capacities of access networks and terminals. "
            }, {
                title: "NFS",
                description: "Abbreviation of Network File System, a client/server application designed by Sun Microsystems that allows all network users to access shared files stored on computers of different types. NFS provides access to shared files through an interface called the Virtual File System (VFS) that runs on top of TCP/IP. Users can manipulate shared files as if they were stored locally on the user's own hard disk.With NFS, computers connected to a network operate as clients while accessing remote files, and as servers while providing remote users access to local shared files. The NFS standards are publicly available and widely used."
            }, {
                title: "NFV – Network Functions Virtualization",
                description: "Network Functions Virtualization, or NFV, is a network architecture philosophy that utilizes virtualization technologies to manage core networking functions via software as opposed to having to rely on hardware to handle these functions. The NFV concept is based on building blocks of virtualized network functions, or VNFs, that can be combined to create full-scale networking communication services.In Network Functions Virtualization, virtualized network functions handle specific network functions that run in one or more virtual machines on top of the hardware networking infrastructure (both wired and wireless) such as routers, switches, servers or cloud computing systems."
            }, {
                title: "Nickispy",
                description: "Nickispy is a family of Trojan horse viruses that targets smartphones powered by the Android operating system.  The most recent strain of Nickispy, Nickispy.C, masquerades as the Google+ (Google Plus) service in an attempt to dupe Android OS users into installing the malware.  Nickispy.C attempts to trick users into installing a third-party app called Google++ (notice the use of two plus signs rather than one), and it even uses the same icon as the real Google+ service. Users installing Google++ provide Nickispy with complete access to their smartphone's text messages and call logs, and the malware can even record phone calls as well as GPS position history.   Nickispy can additionally secretly answer calls on its own and send a user's private information to a remote site without the user's knowledge.While many of Nickispy’s malicious capabilities affect all Android smartphones, the malware's ability to surreptitiously intercept calls only affects Android smartphones running version 2.2 or earlier.  Smartphones running version 2.3 (Gingerbread) or later are protected from this as a result of the modify_phone_state permission being disabled."
            }, {
                title: "Nimrod Routing Architecture",
                description: "An internetwork routing architecture that can be applied to routing both within a single routing domain and among multiple routing domains. Nimrod works by separating the identification of communicating entities, called endpoints, from any topological information. It uses Endpoint Identifiers (EIDs) to specify and identify entities connected to the network. The subsystems which are covered by Nimrod include routing information distribution, route selection, and user traffic handling. Nimrod is equally applicable to both the TCP/IP and OSI environments."
            }, {
                title: "NIPS",
                description: "Short for network-based intrusion prevention system, NIPS is an IPS or intrusion prevention systems designed for security over network-based systems."
            }, {
                title: "NIT - Network Investigative Technique",
                description: "A network investigative technique, or NIT, is a drive-by download computer program designed to provide access to a computer in order to obtain information about the system or data contained on that computer.The U.S. Federal Bureau of Investigation (FBI) has been using network investigative techniques since at least 2002 in cases that include computer hacking, child porn, bomb threats, extortion, terrorism and more.Cyber SecurityThe information obtained by an NIT can range from simply a computer's name and address at the most basic level to complete files, web history, webcam activity and more.Network investigative technique tools have gained recent attention as the FBI has started to use NITs in going after cyber hackers that rely on the open-source Tor software to help them surf the web anonymously."
            },
            {
                title: "NOC - network operations center",
                description: "Short for network operations center, the physical space from which a typically large telecommunications network is managed, monitored and supervised. The NOC coordinates network troubles, provides problem management and router configuration services, manages network changes, allocates and manages domain names and IP addresses, monitors routers, switches, hubs and UPS systems that keep the network operating smoothly, manages the distribution and updating of software and coordinates with affiliated networks. NOCs also provide network accessibility to users connecting to the network from outside of the physical office space or campus."
            }, {
                title: "node",
                description: " In networks, a processing location. A node can be a computer or some other device, such as a printer. Every node has a unique network address, sometimes called a Data Link Control (DLC) address or Media Access Control (MAC) address. In tree structures, a point where two or more lines meet."
            }, {
                title: "nomadic wireless",
                description: "A network technology that delivers connectivity within a limited range using antenna(s). The provider's fixed antennas communicate with an antenna on the user's device. Connectivity is available but only within the limited range of the local antennas. One example of nomadic wireless is Wi-Fi."
            }, {
                title: "nonrepudiation",
                description: "In reference to digital security, nonrepudiation means to ensure that a transferred message has been sent and received by the parties claiming to have sent and received the message. Nonrepudiation is a way to guarantee that the sender of a message cannot later deny having sent the message and that the recipient cannot deny having received the message.Nonrepudiation can be obtained through the use of:||||digital signatures-- function as a unique identifier for an individual, much like a written signature.||||confirmation services -- the message transfer agent can create digital receipts to indicated that messages were sent and/or received.||||timestamps -- timestamps contain the date and time a document was composed and proves that a document existed at a certain time."
            }, {
                title: "NOS - network operating system",
                description: "Abbreviated as NOS, a network operating system includes special functions for connecting computers and devices into a local-area network (LAN). Some operating systems, such as UNIX and the Mac OS, have networking functions built in.The term network operating system is generally reserved for software that enhances a basic operating system by adding networking features. Novell Netware, Artisoft's LANtastic, Microsoft Windows Server, and Windows NT are examples of a NOS."
            }, {
                title: "Novell",
                description: "A prominent network software company. Its flagship product, Netware, has been a corporate standard for building local-area networks (LANs) for decades. Novell was founded in 1983 and was acquired by The Attachmate Group in 2010, and by Micro Focus International in 2014."
            }, {
                title: "Novell eDIRECTORY",
                description: "Also called Netware Directory Services, Novell eDIRECTORY is directory service software that is used to centrally managing access to resources on multiple servers and computers within a network. The eDirectory software is not available as a standalone product, instead it is part of the Novell Compliance Management Platform. The Novell Compliance Management Platform delivers business process automation that provides users with the appropriate resources, validated in real-time to ensure compliance to company policy."
            }, {
                title: "NRZI - Non-Return-to-Zero Inverted",
                description: "Non-Return-to-Zero Inverted A method for transmitting and recording data so that it keeps the sending and receiving clocks synchronized. This is especially helpful in situations where bit stuffing is employed -- the practice of adding bits to a data stream so it conforms with communications protocols. These added bits can create a long string of similar bits, which register to the receiver as a single, unchanging voltage. Since clocks adjust on voltage changes, they'll lag behind true time. NRZI ensures that after a 0 bit appears, the voltage will immediately switch to a 1 bit voltage level. These voltage changes allow the sending and receiving clocks to synchronize."
            }, {
                title: "NTLM - Windows NT LAN Manager",
                description: "Abbreviation for Windows NT LAN Manager The NTLM protocol was the default for network authentication in the Windows NT 4.0 operating system. It is retained in Windows 2000 for compatibility with down-level clients and servers. NTLM is also used to authenticate logons to standalone computers with Windows 2000. Computers with Windows 3.11, Windows 95, Windows 98, or Windows NT 4.0 will use the NTLM protocol for network authentication in Windows 2000 domains. Computers running Windows 2000 will use NTLM when authenticating to servers with Windows NT 4.0 and when accessing resources in Windows NT 4.0 domains.*NTLM uses a challenge-response mechanism for authentication, in which clients are able to prove their identities without sending a password to the server. It consists of three messages, commonly referred to as Type 1 (negotiation), Type 2 (challenge) and Type 3 (authentication). The protocol continues to be supported in Windows 2000 but has been replaced by Microsoft Kerberosas the default/standard."
            }, {
                title: "NUA",
                description: "In X.25 communications, it is the X.121 address containing up to 15 binary code digits. "
            }, {
                title: "Nuker",
                description: "Now a generic term for several TCP/IP DoS attacks, but originally made infamous by the WinNuke DoS attack, which crashed Windows machines that had not been suitably patched or firewalled."
            }, {
                title: "NWLink",
                description: "NWLink is the Microsoft implementation of the Internetwork Packet Exchange/Sequenced Packet Exchange (IPX/SPX) protocol used on NetWare networks. NWLink allows connectivity between Windows-based computers and NetWare networks running IPX/SPX. NWLink also provides network basic input/output system (NetBIOS) functionality and the Routing Information Protocol (RIP). NWLink supports connectivity between computers running Windows and computers running NetWare and compatible systems. You can also use NWLink as a protocol that connects Windows-based computers and computers running MS Client for DOS."
            }, {
                title: "N_Port",
                description: "Found in Fibre Channel nodes, the Node port (N_Port) is used to connect an equipment port to the fabric. It connects through a point-to-point link to a single N_Port or a single F_Port. N_Port is a node port that is not loop capable."
            }, {
                title: "obfuscated URL",
                description: "Also called a hyperlink trick, an obfuscated URL is a type of attack where the real URL that a user is directed to is obfuscated - or concealed - to encourage the user to click-through to the spoof Web site. For example, the attacker may use a cleverly misspelled domain name (e.g. PayPals.com instead of PayPal.com), or hide the actual URL in friendly text, such as (click here to verify your account now). Obfuscated URLs are commonly used in phishing attacks and other spam e-mails."
            }, {
                title: "Object-Based Storage Device",
                description: "Abbreviated as OSD, an Object-Based Storage Device is a device that implements the standard in which data is organized and accessed as objects, where object means an ordered set of bytes (within the OSD) that is associated with a unique identifier. Objects are allocated and placed on the media by the OSD logical unit. With an OSD interface, metadata is associated directly with each data object and can be carried between layers and across storage device files and records are no longer abstractions, but actual storage objects that are understood, managed and secured at the device level.The Object-Based Storage Device (OSD) interface, an extension to the SCSI protocol that was developed by the Storage Networking Industry Association (SNIA)."
            }, {
                title: "offline",
                description: "Not connected. For example, all printers have a switch that allows you to turn them offline. While the printer is offline, you can perform certain commands like advancing the paper (form feed), but you cannot print documents sent from the computer. The opposite of offline is online.Aside from its technical meaning, offline is used frequently in a more general sense to describe events that occur outside of a standard procedure. For example, if somebody at a meeting says lets continue this discussion offline, it means let's discuss it informally at another time.The term is alternatively spelled as off-line."
            }, {
                title: "OMA DRM",
                description: "DRM is short for digital rights management, a system for protecting the copyrights of data circulated via the Internet or other digital media by enabling secure distribution and/or disabling illegal distribution of the data. OMA DRM is a Digital Rights Management standard published by the Open Mobile Alliance."
            }, {
                title: "on-access scanner",
                description: "A type of antivirus program which runs in the background and actively scans your computer system constantly for viruses and other malicious threats, for the entire duration that your system is powered on, unless paused by the computer user. On-access scanners will monitor all system activity and automatically scan files which have been downloaded from the Internet or through e-mail. Contrast with on-demand scanner."
            }, {
                title: "on-demand scanner",
                description: "A type of antivirus program that actively scans your computer system for viruses only when prompted to do so by the computer user, or by scheduling it as a time-specific task. On-demand scanners, while used to scan hard drives can also be used to check removable storage devices before copying from those devices onto your system. Contrast with on-access scanner."
            }, {
                title: "online",
                description: "Turned on and connected. For example, printers are online when they are ready to receive data from the computer. You can also turn a printer offline. While the printer is offline, you can perform certain tasks such as advancing the paper, but you cannot send data to it. Most printers have an online button you can press to turn the machine on- or offline.Users are considered online when they are connected to a computer service through a modem. That is, they are actually on the line."
            }, {
                title: "Open Network Environment (ONE)",
                description: "A software-defined networking (SDN) strategy from Cisco developed to help networks become more open, programmable and application-aware. According to this article from eWeek, with Cisco’s Open Network Environment, or Cisco ONE, the company’s goal is to deliver software programmability throughout the network, from ASICs and operating systems to networking functions and services.While software-defined networking typically entails separating the control plane and data plane, Cisco’s SDN strategy of an Open Network Environment focuses on retaining existing networking processes while offering better integration with third-party software."
            }, {
                title: "open profile",
                description: "When referring to social networking sites (SNS), the term open profile describes a dynamic user profile that can be openly shared on (or exported to) other SNS where the user is a member. Social networking sites that support open profiles would enable users to update their profile on one site and have those changes reflected on partnering sites."
            }, {
                title: "Open Transport",
                description: "A protocol that enables Macintosh computers to use AppleTalk devices and software to connect with other types of computers and networks, especially networks such as the Internet that are based on the TCP/IP protocols."
            }, {
                title: "OpenDaylight Project",
                description: "An industry-supported collaborative project of the Linux Foundation launched in April 2013 with a mission of developing an open source Software-Defined Networking (SDN) framework for creating robust, common SDN platforms. Industry support for the OpenDaylight Project comes from Cisco, IBM, Microsoft, Red Hat, Brocade and VMware, among others.The OpenDaylight Project has yet to provide an official release, but OpenDaylight code is expected to start shipping in late 2013."
            }, {
                title: "OpenFlow",
                description: "OpenFlow is an open standard network protocol used to manage traffic between commercial Ethernet switches, routers and wireless access points. OpenFlow enables software-defined networking (SDN) for programmable networks and is based on an Ethernet switch, with an internal flow-table and a standardized interface to add and remove flow entries.The basic idea behind OpenFlow is that you can connect multiple switches -- and even networks -- together to create a flow, and then manage the entire infrastructure, setting policies and managing traffic type accordingly. It allows for deployment of innovative routing and switching protocols in your network for many different applications, including virtual machine mobility and high-security networks.OpenFlow got its start as a research project led by Guido Appenzeller while at Stanford. It is currently being implemented by major vendors, and OpenFlow-enabled switches are commercially available."
            }, {
                title: "OpenID",
                description: "A shared identity service that enables users of multiple OpenID-enabled Web sites to sign in under one single profile, or single user identity. It's a free and open standard under which users are able to control the amount of personal information they provide on Web sites, and in particular social networking sites (SNS). To use OpenID across multiple sites, users must first choose an Open ID provider. Once you create an OpenID it stays with you, even if you choose at a later time to switch to a different OpenID provider.OpenID works by using existing Internet technologies such as URI, HTTP, SSL and Diffie-Hellman to transform the information you provide on one site (or service) into an account that can be used at other sites that support OpenID logins. Some of the online and Internet services supporting OpenID include AOL, Blogger, Flickr, LiveDoor, LiveJopiurnal, Vox, Yahoo, WordPress, and others."
            }, {
                title: "OpenNMS",
                description: "An enterprise grade network management platform developed under the open source model. It consists of a community supported open-source project as well as a commercial services, training and support organization.  As a network management platform, it provides several major feature categories: discovery, monitoring, events, data collection, and reporting. OpenNMS was started in 1999 and registered on Sourceforge in 2000. It is currently maintained by Tarus Balog."
            }, {
                title: "OpenSSH",
                description: "Short for Open Secure Shell, OpenSSH is a free suite of tools (similar to the SSH connectivity tools) that help secure your network connections. OpenSSH encrypts all traffic (including passwords) to effectively eliminate eavesdropping, connection hijacking and other network-level attacks.  The OpenSSH suite includes the ssh program that replaces rlogin and telnet, and scp which replaces rcp and ftp. OpenSSH has also added sftp and sftp-server which implement an easier solution for file-transfer. OpenSSH comes in two downloadable distributions: the native OpenBSD distribution and the multi-platform portable distribution. OpenSSH is developed by the OpenBSD Project."
            }, {
                title: "OpenStack",
                description: "OpenStack is a project originally started by NASA and Rackspace for delivering a cloud computing and storage platform. Today, OpenStack is a global collaboration of developers and technologists producing an open source cloud computing platform for public and private clouds.The technology consists of a series of interrelated projects delivering various components for a cloud infrastructure solution. OpenStack software delivers a massively scalable cloud operating system consisting of three major components:||||Compute: open source software designed to provision and manage large networks of virtual machines, creating a redundant and scalable cloud computing platform.||||Object Storage: open source software for creating redundant, scalable object storage using clusters of standardized servers to store petabytes of accessible data (code-named Swift).||||Image Service: provides discovery, registration, and delivery services for virtual disk images (code-named Glance).OpenStack has attracted more than 500 member organizations, including Dell, Cisco, Citrix, HP, EMC, VMware, Red Hat, IBM and Intel, and the project is currently managed by the non-profit OpenStack Foundation."
            }, {
                title: "OpenStack Nova",
                description: "OpenStack Nova is a component within the OpenStack open source cloud computing platform developed to provide on-demand access to compute resources by provisioning and managing large networks of virtual machines (VMs).Also known as OpenStack Compute, Nova offers massively scalable, on-demand, self-service access to compute resources such as virtual machines, containers and bare metal servers. Nova works with KVM, VMware, Xen and Hyper-V hypervisor virtualization technologies, as well as Linux container technologies like LXC and LXD."
            }, {
                title: "OpenStack Ocata",
                description: "The successor to the Newton release of the OpenStack open source cloud computing platform, OpenStack Ocata made its debut on February 22, 2017, as the fifteenth major release of OpenStack.The Ocata release marks the start of a shorter development release cycle for OpenStack, as it arrived only four months after Newton as opposed to the traditional every-six-months release cycle, where one new OpenStack release debuted in April and another in October each year.OpenStack OcataWhile Ocata is the first update in 2017 for OpenStack, its successor, OpenStack Pike, is expected to follow the release sometime in the middle of 2017. And OpenStack Pike’s follow-up, OpenStack Queens, may arrive later in 2017 as well.As with previous OpenStack releases, Ocata takes its name from a nearby city or distinguishing feature relative to the OpenStack design summit corresponding to each OpenStack release. In this case, Ocata is the name of a beach in El Masnou, Spain, just outside the city of Barcelona where the OpenStack design summit was held in 2016."
            }, {
                title: "operating system-level virtualization",
                description: "More commonly called OS-level virtualization. A type of server virtualization technology which works at the OS layer. The physical server and single instance of the operating system is virtualized into multiple isolated partitions, where each partition replicates a real server. The OS kernel will run a single operating system and provide that operating system functionality to each of the partitions. Not to be confused with operating system virtualization."
            }, {
                title: "Operation BugDrop",
                description: "Operation BugDrop refers to a new form of malware that surreptitiously infects desktop and laptop computers and uses the PC's microphone to secretly record audio. The BugDrop malware then exports the audio data from infected computers to Dropbox files for retrieval and analysis by cybercriminals.The security firm CyberX discovered the large-scale cyber-reconnaissance Operation BugDrop in February 2016, and found the malware was targeting more than 70 targets in the Ukraine. The malware gets its name from the way it bugs offices and enterprise environments by remotely controlling computer microphones and then drops the recorded data into Dropbox.In addition to recording audio, Operation BugDrop also attempts to capture sensitive information and details by taking secret screenshots, obtaining documents and gathering passwords and login credentials. The malware has targeted a variety of industries, including scientific research, media operations and critical infrastructure."
            }, {
                title: "Operation Windigo (malware)",
                description: "A collection of malware developed to create a sophisticated network of botnets that can distribute spam, redirect Web traffic and infect users' computers with malware, all while keeping the location of the cyber criminals perpetrating the attacks a secret.Operation Windigo is believed to have been growing behind the scenes for the past three years. It gained public attention in March 2014, when software security firm ESET revealed it was responsible for compromising more than 25,000 Linux servers. At one point during this time the Windigo network was sending 35 million daily spam messages and redirecting more than 500,000 web visitors to exploits kits each day, according to ESET.Operation Windigo primarily relies on two Linux backdoors, Linux/Ebury and Linux/Cdorked, to steal login credentials, compromise Web servers and redirect traffic. Notable victims of Operation Windigo have included cPanel, a popular web hosting control panel platform, and kernel.org."
            }, {
                title: "OPS",
                description: "Short for Open Profiling Standard, similar to P3P, but not worked on by the W3C. Instead, it has been adopted as part of P3P. OPS allows secure transfer of data from a user's browser, but doesn't require that a Web site release its privacy policy. Therefore, the user must manually choose what info will be sent to that site."
            }, {
                title: "OSI - Open System Interconnection",
                description: "OSI (pronounced as separate letters) is short for Open System Interconnection.OSI is an ISO standard for worldwide communications that defines a networking framework for implementing protocols in seven layers. Control is passed from one layer to the next, starting at the application layer in one station, proceeding to the bottom layer, over the channel to the next station and back up the hierarchy."
            }, {
                title: "OSPF - Open Shortest Path First",
                description: "Short for Open Shortest Path First, an interior gateway routing protocol developed for IP networks based on the shortest path first or link-state algorithm.Routers use link-state algorithms to send routing information to all nodes in an internetwork by calculating the shortest path to each node based on a topography of the Internet constructed by each node. Each router sends that portion of the routing table (keeps track of routes to particular network destinations) that describes the state of its own links, and it also sends the complete routing structure (topography).The advantage of shortest path first algorithms is that they results in smaller more frequent updates everywhere. They converge quickly, thus preventing such problems as routing loops and Count-to-Infinity (when routers continuously increment the hop count to a particular network). This makes for a stable network."
            }, {
                title: "OSS",
                description: "Short for operational support system, a generic term for a suite of programs that enable an enterprise to monitor, analyze and manage a network system. The term originally was applied to communications service providers, referring to a management system that controlled telephone and computer networks. The term has since been applied to the business world in general to mean a system that supports an organizations network operations."
            }, {
                title: "OSVDB",
                description: "Short for Open Source Vulnerability Database, OSVDB is an independent community-driven open source database. The project promotes greater, open collaboration between companies and individuals, eliminates redundant works, and reduce expenses inherent with the development and maintenance of in-house vulnerability databases. The project was started in August 2002 at the Blackhat and DEF CON Conferences by industry notables. The database officially launched for public use on March 31, 2004."
            }, {
                title: "OVAL",
                description: "Acronym for Open Vulnerability and Assessment Language. OVAL is an XML-based language that provides a standard for how to check for the presence of vulnerabilities and configuration issues on computer systems. OVAL standardizes the three main steps of the process: collecting system characteristics and configuration information from systems for testing; testing the systems for the presence of specific vulnerabilities, configuration issues, and/or patches; and presenting the results of the tests.Each OVAL vulnerability definition is based primarily on Common Vulnerabilities and Exposures (CVE), a dictionary-type list of standardized names for vulnerabilities and other information related to security exposures."
            }, {
                title: "overloading",
                description: "In programming languages, a feature that allows an object to have different meanings depending on its context. The term is used most often in reference to operators that can behave differently depending on the data type, or class, of the operands. For example, x+y can mean different things depending on whether x and y are simple integers or complex data structures.Not all programming languages support overloading but it is a feature of most object-oriented languages, including C++ and Java. Overloading is one type of polymorphism.Another name for port address translation."
            }, {
                title: "overwriting virus",
                description: "A type of computer virus that will copy its own code over the host computer system's file data, which destroys the original program. After your computer system has been cleaned using an antivirus program, users will need to install the original program again."
            }, {
                title: "OWASP",
                description: "Short for Open Web Application Security Project, an open source community project set up to develop software tools and knowledge-based documentation for Web application security. Some of the project��s work includes:A guide to define security requirements to build secure Web applications.Developing an industry standard testing framework for Web application security.VulnXML - A standard data exhange format to allow commercial, open source and research tools to communicate and interoperate.Web Scarab - An open source enterprise-level Web application scanner.Developing a component-based approach to filtering malicious input and output to a Web application.Web Maven - An intentionally insecure Internet bank users can download and learn from.All of the project��s software and documentation is released under the GNU GPL, and the project is staffed entirely of volunteers."
            }, {
                title: "P3P",
                description: "Platform for Privacy Preferences is a specification that will allow users' Web browsers to automatically understand Web sites' privacy practices. Privacy policies will be embedded in the code of a Web site. Browsers will read the policy, and then, automatically provide certain information to specific sites based on the preferences set by the users. For instance, if the site is an e-commerce site, the browser will automatically provide shipping info. If the site is requesting demographic info, then the browser will know to provide it anonymously.The P3P specification was developed by the W3C P3P Syntax, Harmonization, and Protocol Working Groups, including W3C Member organizations and experts in the field of Web privacy. P3P is based on W3C specifications that have already been established, including HTTP, XML and Resource Description Framework (RDF)."
            }, {
                title: "packet",
                description: "A piece of a message transmitted over a packet-switching network. See under packet switching. One of the key features of a packet is that it contains the destination address in addition to the data. In IP networks, packets are often called datagrams."
            }, {
                title: "packet buffer",
                description: " Memory space that is set aside specifically for either storing a packet that is awaiting transmission over a network or storing a packet that has been received over a network. The memory space is either located in the network interface card or in the computer that holds the card."
            }, {
                title: "packet collision",
                description: "In a network, when two or more stations attempt to transmit a packet across the network at the same time, a packet collision occurs. This is not uncommon in a shared medium such as an Ethernet that has many computers in the same network segment. When a packet collision occurs, the packets are either discarded or sent back to their originating stations and then retransmitted in a timed sequence to avoid further collision. Packet collisions can result in the loss of packet integrity or can impede the performance of a network. Also see CSMA/CD."
            }, {
                title: "packet collision rate",
                description: "The amount of packet collisions that occur in a network in a specified time period, usually one minute. The packet collision rate is typically monitored by the router."
            }, {
                title: "packet filtering",
                description: "Also referred to as static packet filtering. Controlling access to a network by analyzing the incoming and outgoing packets and letting them pass or halting them based on the IP addresses of the source and destination. Packet filtering is one technique, among many, for implementing security firewalls."
            }, {
                title: "packet switching",
                description: "Refers to protocols in which messages are divided into packets before they are sent. Each packet is then transmitted individually and can even follow different routes to its destination. Once all the packets forming a message arrive at the destination, they are recompiled into the original message.Most modern Wide Area Network (WAN) protocols, including TCP/IP, X.25, and Frame Relay, are based on packet-switching technologies. In contrast, normal telephone service is based on a circuit-switching technology, in which a dedicated line is allocated for transmission between two parties. Circuit-switching is ideal when data must be transmitted quickly and must arrive in the same order in which it's sent. This is the case with most real-time data, such as live audio and video. Packet switching is more efficient and robust for data that can withstand some delays in transmission, such as e-mail messages and Web pages.A new technology, ATM, attempts to combine the best of both worlds -- the guaranteed delivery of circuit-switched networks and the robustness and efficiency of packet-switching networks."
            }, {
                title: "PAD",
                description: "Short for packet assembler/disassembler PAD is a device (hardware or software) used in packet switching to enable data terminal equipment (DTE) not equipped for packet switching to access a packet-switched network. PAD is a term most often associated with an X.25 network where the PAD breaks the data stream into individual packets and formats the packet headers for asynchronous transmission."
            }, {
                title: "PaDSL",
                description: "Acronym for Private Access DSL.PaDSL is a solution for creating secure private broadband VPNs (virtual private network). PaDSL is a cost-effective alternative to traditional frame relay, leased line and ISDN WAN networks. It is most useful to business or organizations who wants to use DSL as an access technology for WAN//VPN objectives without the inherent risk of using the public Internet as the access medium.The first PaDSL service was launched in the UK by THUS plc."
            }, {
                title: "PAN - Personal Area Network",
                description: " In all capitals, PAN is short for Personal Area Network. Based on the electric-field transmission medium,  is an IBM technology that allows individuals to exchange data with a simple touch or grasp, such as a handshake. A PAN user is equipped with a receiver and a transmitter, which constantly sends infinitesimal data-carrying currents -- in the 0.1-1 MHz band -- through the body and picks up currents when in very close range with another device or individual carrying a transmitter. In digital video recording and film making, a pan refers to a horizontal camera movement where a wide view is required or one scene or person is transitioned to another."
            }, {
                title: "PAP - Password Authentication",
                description: "Short for Password Authentication Protocol, the most basic form of authentication, in which a user's name and password are transmitted over a network and compared to a table of name-password pairs. Typically, the passwords stored in the table are encrypted. The Basic Authentication feature built into the HTTP protocol uses PAP. The main weakness of PAP is that both the username and password are transmitted in the clear -- that is, in an unencrypted form. Contrast with CHAP."
            }, {
                title: "passive impostor acceptance",
                description: " In a biometric security system, when an impostor intentionally submits his own biometric sample and claims the identity of another enrollee (either intentionally or unintentionally) with the purpose of gaining access to a system. Passive impostor acceptance implies that the impostor successfully gains entrance into the system using the verified identity."
            }, {
                title: "passive reconnaissance",
                description: "The process of collecting information about an intended target of a malicious hack without the target knowing what is occurring. Typical passive reconnaissance can include physical observation of an enterprise's building, sorting through discarded computer equipment in an attempt to find equipment that contains data or discarded paper with usernames and passwords, eavesdropping on employee conversations, researching the target through common Internet tools such as Whois, impersonating an employee in an attempt to collect information, and packet sniffing."
            }, {
                title: "password",
                description: " A secret series of characters that enables a user to access a file, computer, or program. On multi-user systems, each user must enter his or her password before the computer will respond to commands. The password helps ensure that unauthorized users do not access the computer. In addition, data files and programs may require a password.Ideally, the password should be something that nobody could guess. In practice, most people choose a password that is easy to remember, such as their name or their initials. This is one reason it is relatively easy to break into most computer systems."
            }, {
                title: "password cracking",
                description: "The process of attempting to guess or crack passwords to gain access to a computer system or network. Crackers will generally use a variety of tools, scripts, or software to crack a system password. The goal of the cracker is to ideally obtain the password for root (UNIX) or system and administrator (Windows, NT). Password cracks work by comparing every encrypted dictionary word against the entries in system password file until a match is found."
            }, {
                title: "PAT - port address translation",
                description: "Short for port address translation, a type of network address translation. During PAT, each computer on LAN is translated to the same IP address, but with a different port number assignment.PAT is also referred to as overloading, port-level multiplexed NAT or single address NAT."
            }, {
                title: "patch cord",
                description: "Also known as a patch cable, a patch cord is a piece of copper wire or fiber optic cable that connects circuits on a patch panel."
            }, {
                title: "patch panel",
                description: "A panel of network ports contained together, usually within a telecommunications closet, that connects incoming and outgoing lines of a LAN or other communication, electronic or electrical system. In a LAN, the patch panel connects the network's computers to each other and to the outside lines that enable the LAN to connect to the Internet or another WAN. Connections are made with patch cords. The patch panel allows circuits to be arranged and rearranged by plugging and unplugging the patch cords."
            }, {
                title: "payload trigger",
                description: "The action or condition that causes a virus to activate. Some viruses may activate on pre-determined user actions, a certain program activation or even on a set date and time."
            }, {
                title: "PEAP",
                description: "Pronounced peep and short for Protected Extensible Authentication Protocol, a protocol developed jointly by Microsoft, RSA Security and Cisco for transmitting authentication data, including passwords, over 802.11 wireless networks.PEAP authenticates wireless LAN clients using only server-side digital certificates by creating an encrypted SSL/TLS tunnel between the client and the authentication server. The tunnel then protects the subsequent user authentication exchange."
            }, {
                title: "peer-to-peer architecture",
                description: "Often referred to simply as peer-to-peer, or abbreviated P2P, a type of network in which each workstation has equivalent capabilities and responsibilities. This differs from client/server architectures, in which some computers are dedicated to serving the others. Peer-to-peer networks are generally simpler, but they usually do not offer the same performance under heavy loads."
            }, {
                title: "perfect forward secrecy",
                description: "A key-establishment protocol, used to secure VPN communications. If one encryption key is compromised only data encrypted by that specific key is compromised. For perfect forward secrecy (PFS) to exist the key used to protect transmission of data must not be used to derive any additional keys."
            }, {
                title: "personally identifiable information",
                description: "Abbreviated as PII or pii, personally identifiable information is any information that can identify an individual. This type of information may be requested from users through online forms and can include your mailing address, credit card number, your IP address, phone number, e-mail address, Social Security number or any other unique identifier. Being cautious about the personally identifiable information you provide on the Internet can help reduce the risk of being a victim of identity theft. Also called personal data."
            }, {
                title: "pervasive computing",
                description: "The idea that technology is moving beyond the personal computer to everyday devices with embedded technology and connectivity as computing devices become progressively smaller and more powerful. Also called ubiquitous computing, pervasive computing is the result of computer technology advancing at exponential speeds -- a trend toward all man-made and some natural products having hardware and software. Pervasive computing goes beyond the realm of personal computers: it is the idea that almost any device, from clothing to tools to appliances to cars to homes to the human body to your coffee mug, can be imbedded with chips to connect the device to an infinite network of other devices. The goal of pervasive computing, which combines current network technologies with wireless computing, voice recognition, Internet capability and artificial intelligence, is to create an environment where the connectivity of devices is embedded in such a way that the connectivity is unobtrusive and always available."
            }, {
                title: "Peskyspy",
                description: "Trojan.Peskyspy is a Trojan horse that has the capability to intercept calls - such as Skype or VoIP calls - record the audio and then store the file locally as an encrypted mp3 file and then relay it back to the cybercriminal. May also be referred to as a wiretap Trojan."
            }, {
                title: "pharming",
                description: "Similar in nature to email phishing, pharming seeks to obtain personal or private (usually financial related) information through domain spoofing. Rather than being spammed with malicious and mischievous e-mail requests for you to visit spoof Web sites which appear legitimate, pharming 'poisons' a DNS server by infusing false information into the DNS server, resulting in a user's request being redirected elsewhere. Your browser, however will show you are at the correct Web site, which makes pharming a bit more serious and more difficult to detect.Phishing attempts to scam people one at a time with an e-mail while pharming allows the scammers to target large groups of people at one time through domain spoofing."
            }, {
                title: "phishing (email)",
                description: " Phishing is the act of sending an email to a user falsely claiming to be an established legitimate enterprise in an attempt to scam the user into surrendering private information that will be used for identity theft.Phishing email will typically direct the user to visit a website where they are asked to update personal information, such as a password, credit card, social security, or bank account numbers, that the legitimate organization already has. "
            }, {
                title: "phreaking",
                description: "Closely related to hacking, using a computer or other device to trick a phone system. Typically, phreaking is used to make free calls or to have calls charged to a different account."
            }, {
                title: "physical topology",
                description: "The physical layout of devices on a network. Every LAN has a topology, or the way that the devices on a network are arranged and how they communicate with each other. The way that the workstations are connected to the network through the actual cables that transmit data -- the physical structure of the network -- is called the physical topology. The logical topology, in contrast, is the way that the signals act on the network media, or the way that the data passes through the network from one device to the next without regard to the physical interconnection of the devices.A network's logical topology is not necessarily the same as its physical topology. For example, twisted pair Ethernet is a logical bus topology in a physical star topology layout. While IBM's Token Ringis a logical ring topology, it is physically set up in a star topology."
            }, {
                title: "piconet",
                description: "A network of devices connected in an ad hoc fashion using Bluetooth technology. A piconet is formed when at least two devices, such as a portable PC and a cellular phone, connect. A piconet can support up to eight devices. When a piconet is formed, one device acts as the master while the others act as slaves for the duration of the piconet connection. A piconet is sometimes called a PAN.Piconet is a combination of the prefix pico, meaning very small or one trillionth, and network."
            }, {
                title: "PII - Personally Identifiable Information",
                description: "Personally identifiable information (PII) is any information or data that can be used to discover or distinguish an individual's identity and specific details about the individual. While definitions for PII vary slightly, the National Institute of Standards and Technology (NIST) specifically defines personally identifiable information as:Any information about an individual maintained by an agency, including (1) any information that can be used to distinguish or trace an individual's identity, such as name, social security number, date and place of birth, mother's maiden name, or biometric records; and (2) any other information that is linked or linkable to an individual, such as medical, educational, financial, and employment information."
            }, {
                title: "ping of death",
                description: "A type of DoS attack in which the attacker sends a ping request that is larger than 65,536 bytes, which is the maximum size that IP allows. While a ping larger than 65,536 bytes is too large to fit in one packet that can be transmitted, TCP/IP allows a packet to be fragmented, essentially splitting the packet into smaller segments that are eventually reassembled. Attacks took advantage of this flaw by fragmenting packets that when received would total more than the allowed number of bytes and would effectively cause a buffer overload on the operating system at the receiving end, crashing the system.Ping of death attacks are rare today as most operating systems have been fixed to prevent this type of attack from occurring."
            }, {
                title: "ping triangulation",
                description: "A process developed by IBM in which client requests over the Internet can be routed to the cell that is geographically closest. When one or more mirror sites exists, ping triangulation uses a process called echo location. When a server receives a client request, it sends out an ICMP echo, or ping, packet across the Internet to the mirror sites and times the echo response. From this information, the most appropriate site to respond to the client request is determined. Basically, ping triangulation maps in multidimensional space the location of every mirror site and the end-user, sending that user not only to an open server but to the closest open server."
            }, {
                title: "PIX Firewall",
                description: "Short for Private Internet Exchange Firewall, a firewall protection technology developed by Cisco Systems."
            }, {
                title: "PKI",
                description: "Short for public key infrastructure, a system of digital certificates, Certificate Authorities, and other registration authorities that verify and authenticate the validity of each party involved in an Internet transaction. PKIs are currently evolving and there is no single PKI nor even a single agreed-upon standard for setting up a PKI. However, nearly everyone agrees that reliable PKIs are necessary before electronic commerce can become widespread.A PKI is also called a trust hierarchy."
            }, {
                title: "plain text",
                description: "Refers to textual data in ASCII format. Plain text is the most portable format because it is supported by nearly every application on every machine. It is quite limited, however, because it cannot contain any formatting commands.In cryptography, plain text refers to any message that is not encrypted. Contrast with cipher text.Plain text is also called clear text."
            }, {
                title: "platform security",
                description: "A security model that is used to protect an entire platform and secures the entire span of software or devices on that platform, removing the need to incorporate individual or multiple security measures for different programs on the system. Security at the platform level makes the security process simplified for IT and developers. However, once the security is cracked the entire platform is vulnerable. Trusted Platform Module, designed to secure an entire notebook is a type of platform security."
            }, {
                title: "PLC",
                description: "Short for power line communications, the use of the existing utility power grid as the medium to send broadband data communications. In theory, plugging a computer device into an existing power outlet would connect the user to the Internet by tapping into already established national and global power grid networks.Power grids typically transmit electricity in three levels of voltage: low, medium and high. Medium voltage, typically ranging in the tens of thousands of volts, is what a utility substation will bring to a transformer, and the transformer will reduce the voltage into the low range before sending the electricity into a building. It is the low and medium voltages that PLC takes advantage of in order to transmit data at Ethernet-like speeds.Some problems associated with the technology include no global technology standard, the different power usages of different countries, and the amount of noise that electronic equipment already produces on power lines.PLC has applications in expansive networking, such as MANs or CANs, and smaller networking architectures, such as LANs and home networking.Short for product life cycle it is a marketing theory which dictates the the sequence of events, or lifespan divisions of any marketed product or brand, including technologies, consumer goods, and any item which is marketed to the public and sold at retail outlets on a national basis. Typically the PLC consists of four stages; introduction, growth, maturity and sales decline."
            }, {
                title: "PLMN",
                description: "Short for public land mobile network, a generic term for a mobile wireless network that is centrally operated and administrated by an organization and uses land-based radio frequency transmitters or base stations as network hubs. PLMNs can stand alone and interconnect with one another or connect to a fixed system such as the PSTN.Cellular phones and mobile Internet access are two common uses of a PLMN."
            }, {
                title: "pluggable authentication module",
                description: "A UNIX programming interface that enables third-party security methods to be used. By using PAM, multiple authentication technologies, such as RSA, DCE, Kerberos, smart card and S/Key, can be added without changing any of the login services, thereby preserving existing system environments."
            }, {
                title: "pNFS",
                description: "Short for parallel Network File System, pNFS is a protocol extension of NFS 4.1, the first major performance upgrade to the widely deployed NFS in more than a decade. pNFS provides parallel I/O to file systems accessible over NFS to eliminate performance bottlenecks. With pNFS clients can directly access storage devices in parallel.metadata processing. pNFS moves the metadata server out of the data transfer path, boosting performance by allowing multiple disk drives to serve up data in parallel. pNFS let's storage administrators do things, such as stripe a single file across multiple NFS servers (essentially the same as RAID0), which boosts performance by allowing multiple disk drives to serve up data in parallel. pNFS takes this concept and extends it to multiple storage devices connected to the NFS client over a network."
            }, {
                title: "PoE",
                description: "Short for Power over Ethernet, a solution where electrical current is run to networking hardware over the Ethernet Category 5 or higher data cabling. No extra AC power cord is needed at the product location, minimizing the amount of cables needed and/or the hassle of installing extra outlets."
            }, {
                title: "polling",
                description: " Polling is a CAM. In a master/slave scenario, the master queries each slave device in turn as to whether it has any data to transmit. If the slave answers yes then the device is permitted to transmit its data. If the slave answers no then the master moves on and polls the next slave device. The process is repeated continuously. Also see contention and token passing. Making continuous requests for data from another device. For example, modems that support polling can call another system and request data."
            }, {
                title: "polymorphic virus",
                description: "A virus that changes its virus signature (i.e., its binary pattern) every time it replicates and infects a new file in order to keep from being detected by an antivirus program."
            }, {
                title: "PON",
                description: "Short for Passive Optical Network, a high-bandwidth, point-to-multipoint optical fiber network based on the asynchronous transfer mode protocol (ATM), Ethernet or TDM.PONs generally consist of an OLT (Optical Line Termination), which is connected to ONUs (Optical Network Units), aka subscriber terminals, using only fibre cables, optical splitters and other passive components (do not transmit signals using electricity). Up to 32 ONUs can be connected to an OLT.The OLT is located at a local exchange, and the ONU is located either on the street, in a building, or even in a user's home.PONs rely on lightwaves for data transfer.In a PON, signals are routed over the local link with all signals along that link going to all interim transfer points. Optical splitters route signals through the network; optical receivers at intermediate points and subscriber terminals tuned for specific wavelengths of light direct signals intended for their groups of subscribers. At the final destination, a specific residence or business can detect its specified signal.PONs are capable of delivering high volumes of upstream and downstream bandwidth (up to 622 Mbps downstream and 155 Mbps upstream), which can be changed on-the-fly depending on an individual user's needs."
            }, {
                title: "port forwarding",
                description: "In home networking, port forwarding, also called port mapping or punch-through, enables you to create a permanent translation entry that maps a protocol port on your gateway machine to an IP address and protocol port on your private LAN. It's a transparent process, meaning network clients cannot see that port forwarding is being done. This process enables you to run a public Internet service on a machine that is otherwise hidden from the Internet by your gateway.  Port forwarding may also be used to aggregate traffic from an application that uses several ports for transactions and consolidate it into one port for reporting the total traffic identified with that application."
            }, {
                title: "port knocking",
                description: " A method of establishing a connection to a secured network or computer within a network that does not have an open port. A remote device sends a series of series of connection attempts, in the form of packets, to the computer��s closed ports, and the attempts are silently ignored but logged by the firewall. When the remote device has established the predetermined sequence of port connection attempts, a daemon triggers a port to open, and the network connection is established. This security method is analogous to knowing a secret knock, and only people who know the proper knock sequence will be allowed access. An advantage of using a port knocking technique is that a malicious hacker cannot detect if a device is listening for port knocks."
            }, {
                title: "port scanning",
                description: "The act of systematically scanning a computer's ports. Since a port is a place where information goes into and out of a computer, port scanning identifies open doors to a computer. Port scanning has legitimate uses in managing networks, but port scanning also can be malicious in nature if someone is looking for a weakened access point to break into your computer."
            }, {
                title: "Port to Application Mapping",
                description: "Abbreviated as PAM, Port to Application Mapping is a feature of the Cisco IOS Firewall that allows you to customize TCP or UDP port numbers for network services or applications. Using the port information, PAM establishes a table of default port-to-application mapping information at the firewall. PAM also supports host or subnet specific port mapping, which allows you to apply PAM to a single host or subnet using standard access control lists (ACLs)."
            }, {
                title: "port triggering",
                description: "A type of port forwarding where outbound traffic on predetermined ports sends inbound traffic to specific incoming ports. Port triggering triggers an open incoming port when a client on the local network makes an outgoing connection to a predetermined port on a server. Port Triggering is more secure than port forwarding, because the incoming ports are not open all the time, they are open only when a program is actively using the trigger port. One major advantage of port triggering is that it allows computers behind a NAT-enabled router to provide services which would normally require a static host (one with an unchanging network address). The disadvantage of port forwarding is that it only allows one client on the network to use a particular service that occupies a particular port."
            }, {
                title: "portable mesh repeater",
                description: "A stand alone battery, charger and equipment pack used in field deployment situations for instant deployment to communications equipment. Portable mesh repeaters work as a router/repeater to extend mesh networks for connecting laptops, PDAs, video cameras and other portable devices to 802.11g or 802.11b networks. Also called a portable mesh repeater/router."
            }, {
                title: "power line Ethernet bridge",
                description: "A power line Ethernet bridge is a HomePlug device used to extend a LAN into a separate room using the existing electrical system in the building. An Ethernet cable from the network router is plugged into a bridge, which plugs into an AC wall outlet. In a separate room, a second bridge plugs into the wall outlet to provide an Ethernet port for the computer. Power line Ethernet bridges are a type of HomePlug device."
            }, {
                title: "power line networking",
                description: "Power line networking uses power line communications (PLC) to connect computers using existing power outlets in the home, essentially transforming every electrical outlet in the building into a network connection. Power line networking is one of the cheapest forms of home networking and has a low start-up cost and minimal IT workload. And despite using power outlets it also will not have an adverse effect on home electric bills. Power line networks can transmit phone calls and faxes as well as Internet services over regular electrical wiring."
            }, {
                title: "power user",
                description: "A sophisticated user of personal computers. A power user is typically someone who has considerable experience with computers and utilizes the most advanced features of applications."
            }, {
                title: "PowerPacket",
                description: "PowerPacket technology uses the same power line that provides electricity to your computer to network it to other computers in your home or office. PowerPacket uses Orthogonal Frequency Division Multiplexing (OFDM) to handle high-speed data transmission between computers. Electrical wires in a home are difficult to use for deploying a network as electrical wires are always in a state of flux. OFDM can detect changes within the power line and maintain network communication even during power fluctuations. PowerPacket is designed to seamlessly coexist with existing home networking technology, including HomePNA, 802.11b and HomeRF, and can also work with older home power line technologies. PowerPacket was developed by Intellon and is used as the baseline technology for the HomePlug specification."
            }, {
                title: "PPPoA",
                description: "Short for Point-to-Point Protocol over Asynchronous Transfer Mode (ATM).  PPPoA relies on two widely accepted standards: PPP and ATM. It is an  end-to-end asymmetric digital subscriber line (ADSL) architecture. IP packets travel from the PC over Ethernet to the DSL modem, called the ADSL transceiver unit-remote (ATU-R). The ATU-R adds the PPP protocol to the IP packets and transports them to the carrier's Digital Subscriber Line Access Multiple (DSLAM) via ATM. It is a technology becoming more popular with DSL providers."
            }, {
                title: "Pretty Good Privacy",
                description: "Abbreviated as PGP, a technique developed by Philip Zimmerman for encrypting messages. PGP is one of the most common ways to protect messages on the Internet because it is effective, easy to use, and free. PGP is based on the public-key method, which uses two keys -- one is a public key that you disseminate to anyone from whom you want to receive a message. The other is a private key that you use to decrypt messages that you receive.To encrypt a message using PGP, you need the PGP encryption package, which is available for free from a number of sources. The official repository is at the Massachusetts Institute of Technology.PGP is such an effective encryption tool that the U.S. government actually brought a lawsuit against Zimmerman for putting it in the public domain and hence making it available to enemies of the U.S. After a public outcry, the U.S. lawsuit was dropped, but it is still illegal to use PGP in many other countries."
            }, {
                title: "PRISM Program",
                description: "PRISM program is a massive surveillance program operated by the United States National Security Agency (NSA). The PRISM program utilizes extensive data mining efforts to collect information and analyze that data for patterns of terrorist or other potential criminal activity."
            }, {
                title: "privacy statement",
                description: "A Web document found on a company or organization's Web site that details the type of personally identifiable information the company collects about its site visitors, how the information is used — including who it may be shared with — and how users can control the information that is gathered."
            }, {
                title: "private cloud",
                description: "Private cloud is the phrase used to describe a cloud computing platform that is implemented within the corporate firewall, under the control of the IT department.A private cloud is designed to offer the same features and benefits of public cloud systems, but removes a number of objections to the cloud computing model including control over enterprise and customer data, worries about security, and issues connected to regulatory compliance."
            }, {
                title: "Private PAD",
                description: "A hardware device with several asynchronous connectors and an X.25 attachment. This commercially available device can be connected to a public or private X.25 PSDN and has the same capabilities as a public PAD."
            }, {
                title: "Product Activation",
                description: "An anti-piracy technology built into all Microsoft Office XP, Windows XP and Visio 2002 products. Product Activation requires that the user verify a product key that was used to install the product. This ensures that the software has not been used on more computers than is intended by the software's license. Users can activate their software via the Internet or telephone. Once the user has contacted Microsoft, an installation ID number is issued that will complete the activation.According to Microsoft, the user has 50 grace launches before a product must be activated. After the 50 launches, the product will go into a reduced-functionality mode if is has not been activated. With reduced functionality, documents cannot be edited and new ones cannot be created until the product has been activated by contacting Microsoft."
            }, {
                title: "proof-of-concept code",
                description: "A term used to describe code that has been developed to demonstrate possible vulnerabilities in software and operating systems, and to show the security risks of a particular method of attack."
            }, {
                title: "proof-of-concept virus",
                description: "A proof of concept virus is written by an individual with advanced programming skills, usually to 'show off' their programming talents or to point out a vulnerability in a specific software. Usually authors of proof-of-concept viruses will send these programs to an anti-virus software developer, and the programmer would be more apt to produce a blueprint on how the virus would work, rather than launching the virus maliciously."
            }, {
                title: "protocol",
                description: "An agreed-upon format for transmitting data between two devices. The protocol determines the following:the type of error checking to be useddata compression method, if anyhow the sending device will indicate that it has finished sending a messagehow the receiving device will indicate that it has received a messageThere are a variety of standard protocols from which programmerscan choose. Each has particular advantages and disadvantages; for example, some are simpler than others, some are more reliable, and some are faster.From a user's point of view, the only interesting aspect about protocols is that your computer or device must support the right ones if you want to communicate with other computers. The protocol can be implemented either in hardware or in software."
            }, {
                title: "protocol stack",
                description: "A set of network protocol layers that work together. The OSI Reference Model that defines seven protocol layers is often called a stack, as is the set of TCP/IP protocols that define communication over the internet.The term stack also refers to the actual software that processes the protocols. So, for example, programmers sometimes talk about loading a stack, which means to load the software required to use a specific set of protocols. Another common phrase is binding a stack, which refers to linking a set of network protocols to a network interface card (NIC). Every NIC must have at least one stack bound to it.In Windows, the TCP/IP stack is implemented by the Winsock DLL."
            }, {
                title: "provisioning",
                description: "The process of providing users with access to data and technology resources. The term typically is used in reference to enterprise-level resource management. Provisioning can be thought of as a combination of the duties of the human resources and IT departments in an enterprise, where (1) users are given access to data repositories or granted authorization to systems, applications and databases based on a unique user identity, and (2) users are appropriated hardware resources, such as computers, mobile phones and pagers. The process implies that the access rights and privileges are monitored and tracked to ensure the security of an enterprise's resources.The process of providing customers or clients with accounts, the appropriate access to those accounts, all the rights associated with those accounts, and all of the resources necessary to manage the accounts. When used in reference to a client, provisioning can be thought of as a form of customer service."
            }, {
                title: "proxy cache",
                description: "Proxy cache, also called a Web proxy cache, is a function of a proxy server that caches retrieved Web pages on the server's hard disk so that the page can be quickly retrieved by the same or a different user the next time that page is requested."
            }, {
                title: "proxy server",
                description: "A proxy server is a server that sits between a client application, such as a Web browser, and a real server. It intercepts all requests to the real server to see if it can fulfill the requests itself. If not, it forwards the request to the real server."
            }, {
                title: "Proxy Trojan",
                description: "A type of Trojan horse designed to use the victim's computer as a proxy server. This gives the attacker the opportunity to do everything from your computer, including the possibility of conducting credit card fraud and other illegal activities, or even to use your system to launch malicious attacks against other networks."
            }, {
                title: "PSDN",
                description: "Short for packet-switched data network, a data communications network that is based on the principles of packet switching, as opposed to circuit switching that is used in public telephone networks. Packet-switched networks do not establish physical communication channels between communicating devices like circuit-switched networks do. Instead, signals are formed into fixed-length packets that are affixed with a source and destination address and packet ordering details. The packets then rely on network routers to read the address data and route the packets through the network to their destinations. When the packets arrive at the receiving device, the packet ordering data is used to reassemble the original signal. One advantage of packet-switched networks is that packets from different sources going to different destinations can share common data pathways.Also called a packet-switched network, or PSN."
            }, {
                title: "public carrier",
                description: "A government-regulated organization that provides telecommunications services to the public. This includes AT&T, MCI, and Western Union. Most public carriers provide electronic- mail services that enable you to send messages and documents over a telephone line to other computer users."
            }, {
                title: "Public PAD",
                description: "Provided by the Post Telephone and Telegraph (PTT) administration or network provider that you can access by a local call on the public switched network. Once your terminal is connected to the public PAD, you enter the NUA of your host DTE and the PAD establishes the communications."
            }, {
                title: "public-key encryption",
                description: "Public-key encryption is a cryptographic system that uses two keys -- a public key known to everyone and a private or secret key known only to the recipient of the message.Example: When John wants to send a secure message to Jane, he uses Jane's public key to encrypt the message. Jane then uses her private key to decrypt it.An important element to the public key system is that the public and private keys are related in such a way that only the public key can be used to encrypt messages and only the corresponding private key can be used to decrypt them. Moreover, it is virtually impossible to deduce the private key if you know the public key.Public-key systems, such as Pretty Good Privacy (PGP), are popular for transmitting information via the Internet. They are extremely secure and relatively simple to use. The only difficulty with public-key systems is that you need to know the recipient's public key to encrypt a message for him or her. What's needed, therefore, is a global registry of public keys, which is one of the promises of the new LDAP technology.Public key cryptography was invented in 1976 by Whitfield Diffie and Martin Hellman. For this reason, it is sometime called Diffie-Hellman encryption. It is also called asymmetric encryption because it uses two keys instead of one key (symmetric encryption)."
            }, {
                title: "pull",
                description: "To request data from another program or computer. The opposite of pull is push, where data is sent without a request being made. The terms push and pull are used frequently to describe data sent over the Internet. The World Wide Web is based on pull technologies, where a page isn't delivered until a browser requests it. Increasingly, however, Information services are harnessing the Internet to broadcast information using push technologies. A prime example is the PointCast Network."
            }, {
                title: "pulling wire",
                description: "A phrase used to describe the act of running network cable from one location to another."
            }, {
                title: "pulsing zombie",
                description: "A form of DoS attack known as a degradation-of-service attack, as opposed to a denial-of-service attack. Unlike a regular zombie that paralyzes a system by inundating it with a steady stream of attack traffic, the pulsing zombie attacks with irregular small bursts of attack traffic from multiple sources on a single target over an extended period of time. Pulsing zombie attacks are more difficult to detect and trace because since they are slow and gradual they do not immediately appear as malicious."
            }, {
                title: "punchdown block",
                description: "A device that connects one group of wires to another group of wires through a system of metal pegs that the wires are attached to, often used in telecommunications closets that support local-area networks. Punchdown blocks are the predecessors to patch panels and were commonly used to support low-bandwidth Ethernet and token-ring networks. Punchdown blocks typically are not capable of supporting Cat-5 cabling, which is the common cable used in modern Ethernet designs."
            }, {
                title: "PUP - potentially unwanted program",
                description: "Acronym for potentially unwanted programPUP or PUPs is a term used to describe unwanted programs such as Trojans, spyware and adware, along with other malware which may compromise your privacy. Some antivirus and PC security software packages, like McAfee VirusScan, will scan for and protect your system against PUPs. The term PUP was first used by persons at McAfee's Avert research lab to avoid any legal issues that may arise from calling these types of applications spyware."
            }, {
                title: "push",
                description: " In client/server applications, to send data to a client without the client requesting it. The World Wide Web is based on a pull technology where the client browser must request a Web page before it is sent. Broadcast media, on the other hand, are push technologies because they send information out regardless of whether anyone is tuned in.Increasingly, companies are using the Internet to deliver information push-style. Probably the oldest and most widely used push technology is e-mail. This is a push technology because you receive mail whether you ask for it or not -- that is, the sender pushes the message to the receiver.In programming, to place a data item onto a stack. The opposite of push is pop, which means to remove an object from a stack."
            }, {
                title: "PVC",
                description: "Short for permanent virtual circuit, a virtual circuit that is permanently available. The only difference between a PVC and a switched virtual circuit (SVC) is that an SVC must be reestablished each time data is to be sent. Once the data has been sent, the SVC disappears. PVCs are more efficient for connections between hosts that communicate frequently.PVCs play a central role in Frame Relay networks. They're also supported in some other types of networks, such as X.25."
            }, {
                title: "PXE - Pre-Boot Execution Environment",
                description: "Short for Pre-Boot Execution Environment. Pronounced pixie, PXE is one of the components of Intel's WfM specification. It allows a workstation to boot from a server on a network prior to booting the operating system on the local hard drive. A PXE-enabled workstation connects its NIC to the LAN via a jumper, which keeps the workstation connected to the network even when the power is off. Because a network administrator does not have to physically visit the specific workstation and manually boot it, operating systems and other software, such as diagnostic programs, can be loaded onto the device from a server over the network.PXE is a mandatory element of the WfM specification. To be considered compliant, the PXE must be supported by the computer's BIOS and its NIC."
            }, {
                title: "QoE",
                description: "Short for Quality of Experience in telecommunications terminology, it is a measurement used to determine how well that network is satisfying the end user's requirements. In contrast to Quality of Service (QoS) a measurement of network operating conditions such as noise, crosstalk, or lost or dropped packets, in telecommunications terminology, QoE takes into consideration the end-to-end connection and applications that are currently running over that network connection and how multimedia elements such as Internet video or IPTV networks are satisfying or meeting the end user's requirements. "
            }, {
                title: "QoS",
                description: "Short for Quality of Service, a networking term that specifies a guaranteed throughput level. One of the biggest advantages of ATM over competing technologies such as Frame Relay and Fast Ethernet, is that it supports QoS levels. This allows ATM providers to guarantee to their customers that end-to-end latency will not exceed a specified level."
            }, {
                title: "quarantine",
                description: "To move an infected file, such as a virus, into an area where it cannot cause more harm. Antivirus softwares come with quarantine options so that the user also can keep track of virus activity."
            }, {
                title: "queue",
                description: "To line up. In computer science, queuing refers to lining up jobs for a computer or device. For example, if you want to print a number of documents, the operating system (or a special print spooler) queues the documents by placing them in a special area called a print buffer or print queue. The printer then pulls the documents off the queue one at a time. Another term for this is print spooling .The order in which a system executes jobs on a queue depends on the priority system being used. Most commonly, jobs are executed in the same order that they were placed on the queue, but in some schemes certain jobs are given higher priority."
            }, {
                title: "RADIUS server",
                description: "Short for Remote Authentication Dial-In User Service, an authentication and accounting system used by many Internet Service Providers (ISPs). When you dial in to the ISP you must enter your username and password. This information is passed to a RADIUS server, which checks that the information is correct, and then authorizes access to the ISP system.Though not an official standard, the RADIUS specification is maintained by a working group of the IETF."
            }, {
                title: "ransomware",
                description: "Ransomware is a form of malware in which rogue software code effectively holds a user's computer hostage until a ransom fee is paid. Ransomware often infiltrates a PC as a computer worm or Trojan horse that takes advantage of open security vulnerabilities. Most ransomware attacks are the result of clicking on an infected email attachment or visiting hacked or malicious websites.Upon compromising a computer, ransomware will typically either lock a user's system or encrypt files on the computer and then demand payment before the system or files will be restored."
            }, {
                title: "RAT",
                description: "Short for Remote Access Trojan, a Trojan horse that provides the intruder, or hacker, with a backdoor into the infected system. This backdoor allows the hacker to snoop your system, use your infected system to launch a zombie (attacks on other systems), or even run malicious code."
            }, {
                title: "Rav Mon E virus",
                description: "Also called W32/Rjump, this virus is known to open a back door on a computer that runs Microsoft Windows, then create a copy of itself in the Windows system directory of a computer. Italso creates a log file that includes the port number on which the back door component listens. The Rav Mon E virus enables hackers to gain access to the computer's programs and files once it has become infected. If you are using an anti-software program that is is up-to-date the RavMon E virus can usually be detected before it does any damage. This virus is most commonly spread through e-mail attachments, although it can also be spread through portable devices such as multimedia players and digital cameras.Apple reported that in October of 2006 many of its video iPods had been shipped out with the RavMon E virus already installed on them."
            }, {
                title: "RBAC",
                description: "Short for Role-Based Access Control, a system of controlling which users have access to resources based on the role of the user. Access rights are grouped by role name, and access to resources is restricted to users who have been authorized to assume the associated role. For example, if a RBAC system were used in a hospital, each person that is allowed access to the hospital's network has a predefined role (doctor, nurse, lab technician, administrator, etc.). If someone is defined as having the role of doctor, than that user can access only resources on the network that the role of doctor has been allowed access to. Each user is assigned one or more roles, and each role is assigned one or more privileges to users in that role."
            }, {
                title: "RBGAN - Regional Broadband Global Area Network",
                description: "Short for Regional Broadband Global Area Network, the RBGAN network provides email and satellite internet access direct to portable terminals. The terminal is roughly the size of a laptop computer, and is connected to a standard PC using the plug and play features of the modem itself (USB, Ethernet, or Bluetooth).RBGAN service is based on Internet Protocol (IP) and Packet-Data technologies. Subscribers are usually charged by the amount of data one transfers (per-Mbyte) rather than per minute service, where the charge is based on the amount of data sent and received, not the total time spent online."
            }, {
                title: "RBL - Realtime Blackhole List",
                description: "Short for Realtime Blackhole List, a list of IP addresses whose owners refuse to stop the proliferation of spam. The RBL usually lists server IP addresses from ISPswhose customers are responsible for the spam and from ISPs whose servers are hijacked for spam relay.As subscribers to the RBL, ISPs and companies will know from which IP addresses to block traffic. Most traffic blocking occurs during the SMTP connection phase. The receiving end will check the RBL for the connecting IP address. If the IP address matches one on the list, then the connection gets dropped before accepting any traffic from the spammer. Some ISPs, though, will choose to blackhole (or ignore) IP packets at their routers. The goal here is to block all IP traffic.It is important to note that all e-mail and packet blocking is done by the recipient, not the RBL administrator, which is only responsible for bouncing spam that is directed at its servers.The RBL was created by Mail Abuse Prevention System (MAPS) LLC., but there are other entities that keep RBLs aside from MAPS."
            }, {
                title: "RC4/RC5/RC6",
                description: "A series of symmetric encryption algorithms developed by RSA Security.||||RC4 -- a variable key-size stream cipher with byte-oriented operations. The algorithm is based on the use of a random permutation.||||RC5 -- a parameterized algorithm with a variable block size, a variable key size, and a variable number of rounds. Allowable choices for the block size are 32 bits (for experimentation and evaluation purposes only), 64 bits (for use a drop-in replacement for DES), and 128 bits. The number of rounds can range from 0 to 255, while the key can range from 0 bits to 2040 bits in size. RC5 has three routines: key expansion, encryption, and decryption.||||RC6 -- a block cipher based on RC5. RC6 is a parameterized algorithm where the block size, the key size, and the number of rounds are variable. The upper limit on the key size is 2040 bits. RC6 adds two features to RC5: the inclusion of integer multiplication and the use of four 4-bit working registers instead of RC5��s two 2-bit registers."
            }, {
                title: "RDMA",
                description: "Short for remote direct memory access (DMA), a communications technique that allows data to be transmitted from the memory of one computer to the memory of another computer without passing through either device��s CPU, without needing extensive buffering, and without calling to an operating system kernel. RDMA is a response to increasing demands for network speed. Data can be transferred faster when it does not have to pass through the CPU.Infiniband is an example of a form of RDMA. Applications of RDMA include clustering and storage and networking for data centers."
            }, {
                title: "RealServer",
                description: "A software program from RealNetworks that allows the streaming of audio, video and rich media files."
            }, {
                title: "Red Hat Cloud Computing",
                description: "Red Hat Cloud Computing refers to solutions for private clouds, hybrid clouds, and public clouds offered by Red Hat."
            }, {
                title: "Red Hat Global File System",
                description: "Red Hat GFS (Global File System) is an open source cluster file system and volume manager that executes on Red Hat Enterprise Linux servers attached to a storage area network (SAN). It enables a cluster of Linux servers to share data in a common pool of storage to provide a consistent file system image across server nodes. Red Hat Global File System works on all major server and storage platforms supported by Red Hat."
            }, {
                title: "Red Hat OpenShift",
                description: "OpenShift provides developers with a choice in languages, frameworks, and clouds to build, test, run, and manage Java, Ruby, PHP, Perl and Python applications. Developers can also choose the cloud provider the applications will run on."
            }, {
                title: "RedBrowser",
                description: "A type of cellphone Trojan horse that infects mobile phones running Java (J2ME). The Trojan spreads through a program known as 'RedBrowser', which claims to enable users to send text messages to a premium service at a low cost. The Trojan can be downloaded to the cellphone either via the Internet (from a WAP Web site), through Bluetooth or a personal computer."
            }, {
                title: "redundant",
                description: "Used to describe a component of a computer or network system that is used to guard the primary system from failure by acting as a back up system. Redundant components can include both hardware elements of a system -- such as disk drives, peripherals, servers, switches, routers -- and software elements -- such as operating systems, applications and databases.Redundancy is the quality of systems or elements of a system that are backed up with secondary resources. For example, (The network has redundancy.)"
            }, {
                title: "reference template",
                description: "Also referred to as simply a template, the data in a biometric security system that represents the biometric measurement of a specific person��s identity."
            }, {
                title: "remote access",
                description: "The ability to log onto a network from a distant location. Generally, this implies a computer, a modem, and some remote access software to connect to the network. Whereas remote control refers to taking control of another computer, remote access means that the remote computer actually becomes a full-fledged host on the network. The remote access software dials in directly to the network server. The only difference between a remote host and workstations connected directly to the network is slower data transfer speeds."
            }, {
                title: "remote access server",
                description: "A server that is dedicated to handling users that are not on a LAN but need remote access to it. The remote access server allows users to gain access to files and print services on the LAN from a remote location. For example, a user who dials into a network from home using an analog modem or an ISDN connection will dial into a remote access server. Once the user is authenticated he can access shared drives and printers as if he were physically connected to the office LAN."
            }, {
                title: "Remote Access Trojan",
                description: "Abbreviated as RATs, a Remote Access Trojan is one of seven major types of Trojan horse designed to provide the attacker with complete control of the victim's system. Attackers usually hide these Trojan horses in games and other small programs that unsuspecting users then execute on their PCs."
            }, {
                title: "remote attack",
                description: "Any malicious attack that targets any computer other than the computer the attacker is currently logged on to. For example, the attacker can log on to a system but actually attack any computer or server on the same network."
            }, {
                title: "remote control",
                description: "Refers to a program's or device's ability to control a computer system from a remote location. Remote-control programs for PCs enable you to access data stored on your home systemeven when you are traveling.Remote control is different from remote access. In remote control, only keystrokes and screen updates are transmitted between the two machines as all processing originates in the remote-control device. In a remote access setup, the user is logged ontothe network, using the phone line as an extension to the network. Thus, all traffic has to flow over a low-speed telephone line."
            }, {
                title: "Remote Desktop",
                description: "Remote Desktop, a function included with Windows XP Professional, enables you to connect to your computer across the Internet from virtually any computer, Pocket PC, or smartphone. Unlike a typical VPN connection (which will give a remote PC access to the company network) Remote Desktop will actually allow you to see and control your connected PC as though you were sitting directly in front of it."
            }, {
                title: "Remote Desktop Protocol",
                description: "Abbreviated as RDP, the Microsoft Remote Desktop Protocol is a multi-channel protocol that allows a user to connect to a computer running Microsoft Terminal Services. RDP is designed to support many different types of network topologies such as ISDN, POTS, and many LAN protocols such as IPX, NetBIOS, or TCP/IP."
            }, {
                title: "repeater",
                description: "A network device used to regenerate or replicate a signal. Repeaters are used in transmission systems to regenerate analog or digital signals distorted by transmission loss. Analog repeaters frequently can only amplify the signal while digital repeaters can reconstruct a signal to near its original quality.In a data network, a repeater can relay messages between subnetworks that use different protocols or cable types. Hubs can operate as repeaters by relaying messages to all connected computers. A repeater cannot do the intelligent routing performed by bridges and routers."
            }, {
                title: "reputation-based security",
                description: "Reputation-based security is an approach to system security that evaluates the reputations of the files and applications running on your PC on the fly. The security software tracks files and applications and dozens of their attributes including their age, download source, digital signature and prevalence. The attributes are then run through several complex algorithms to determine a reputation of a file. Reputation-based security is a feature of Norton Internet Security 2010 and Norton Antivirus 2010."
            }, {
                title: "retrovirus",
                description: "Based on the biological term retrovirus, a computer retrovirus is one that actively seeks out an antivirus program on a computer system and attacks it. A retrovirus will attempt to disable and infect the antivirus software in order to avoid detection in the computer system. Also called anti-antivirus virus."
            }, {
                title: "RHSBL",
                description: "Acronym for Right-Hand Side Blacklist. A type of DNSBL that uses domain names instead of IP addresses."
            }, {
                title: "ring network",
                description: "A local-area network (LAN) whose topology is a ring. That is, all of the nodes are connected in a closed loop. Messages travel around the ring, with each node reading those messages addressed to it. One of the advantages of ring networks is that they can span larger distances than other types of networks, such as bus networks, because each node regenerates messages as they pass through it."
            }, {
                title: "RIS",
                description: "Short for Remote Installation Service, a feature of Microsoft's Windows 2000 Server. RIS allows a network administrator to install the Windows 2000 operating system to any number of client computers simultaneously from a central location. The administrator places images, or versions, of built systems onto a central server and then downloads those images to a computer with an empty hard disk. RIS also allows administrators to implement upgrades in the same simultaneous fashion."
            }, {
                title: "RMON",
                description: "Short for remote monitoring, a network management protocol that allows network information to be gathered at a single workstation. Whereas SNMP gathers network data from a single type of Management Information Base (MIB), RMON 1 defines nine additional MIBs that provide a much richer set of data about network usage. For RMON to work, network devices, such as hubs and switches, must be designed to support it."
            }, {
                title: "rogue access point",
                description: "A rogue access point, also called rogue AP, is any Wi-Fi access point that is installed on a network but is not authorized for operation on that network, and is not under the management of  the network administrator. Rogue access points often do not conform to wireless LAN (WLAN) security policies, and additionally can allow anyone with a Wi-Fi device to connect to your network.A rogue access point is one of two categories of rogue wireless devices, with the other being rogue peers."
            }, {
                title: "rogue antivirus software",
                description: "Also called smitfraud, scareware, or rogue security software, this type of software is defined as malware - it is designed specifically to damage or disrupt a computer system. In this case, not only is the software going to disrupt your system, it's going to try and trick you into making a purchase using your credit card. This specific type of malware appears to users in the form of a fake Windows warning on your computer system that reads you have a specific number of viruses on your computer (usually in the hundreds) and that this software has detected those viruses. To get rid of them you must download and purchase the full-version of the antivirus software. It's important to remember that by purchasing the (claimed full version to remove the viruses) you will be submitting your personal information to unscrupulous persons and may also end up being a victim of credit card or identity fraud or theft.The good news is that you probably do not have a computer that is infested with hundreds of viruses as the rouge software claims. The bad news is that the rogue antivirus software itself is on your computer and you must remove it, a process that is hindered as the rouge software usually locks the control panel and the the Add/Remove Programs function to prevent users from removing it. Other things that may be disrupted by the rogue software include being unable to visit reputable and valid antivirus and malware Web sites, being able to install legitimate antivirus software and also being unable to access your desktop. Common names of some rogue antivirus software include; AntiVirus (2007, 2008, and 2009), MS-Antispyware, XP AntiVirus (2007, 2008, and 2009), Home Antivirus 2009, SpyWareGuard, Malware Cleaner, Extra Antivirus, as well as many other names."
            }, {
                title: "rogue certification authority certificate",
                description: "A false digital certificate used to secure Web sites. A rogue Certification Authority (CA) certificate allows malicious users to impersonate any Web site on the Internet, including banking and e-commerce sites secured using the HTTPS protocol. A rogue CA certificate would be seen as trusted by Web browsers, and it is harmful because it can appear to be signed by one of the root CAs that browsers trust by default. A rogue Certification Authority (CA) certificate can be created using a vulnerability in the Internet Public Key Infrastructure (PKI) used to issue digital certificates for secure Web sites."
            }, {
                title: "rogue peer",
                description: "A rogue peer is an end-user computer-usually a laptop-that has both bridging and wireless enabled. Since the basic functions of an access point are bridging and wireless access, any laptop that has these capabilities presents a similar vulnerability or worse. The vulnerability with a rogue peer can be much more severe than with a rogue AP, because laptops provide almost no security features to prevent connections from other unauthorized users.A rogue peer is one of two categories of rogue wireless devices, with the other being rogue access points."
            }, {
                title: "rogue wireless device",
                description: "A wireless networking term used to describe unauthorized devices connected to the network that poses a significant risk to the organization. Rogue wireless devices can be broken down into two categories: access point (AP) based threats (rogue access points) and computer based threats (rogue peers)."
            }, {
                title: "rootkit",
                description: "A rootkit is a type of malicious software that is activated each time your system boots up. Rootkits are difficult to detect because they are activated before your system's Operating System has completely booted up. A rootkit often allows the installation of hidden files, processes, hidden user accounts, and more in the systems OS. Rootkits are able to intercept data from terminals, network connections, and the keyboard."
            }, {
                title: "ROR",
                description: "Short for remote outdoor router, a device that connects a remote location in a WLAN to either another remote location with an ROR for a point-to-point connection or to the system's COR for point-to-multipoint connections. The ROR can connect to only one other unit at one time - either another ROR or the COR. The COR can connect to multiple RORs."
            }, {
                title: "round robin DNS",
                description: "A load balancing technique in which balance power is placed in the DNS server instead of a strictly dedicated machine as other load techniques do.Round robin works on a rotating basis in that one server IP address is handed out, then moves to the back of the list; the next server IP address is handed out, and then it moves to the end of the list; and so on, depending on the number of servers being used. This works in a looping fashion.Round robin DNS is usually used for balancing the load of geographically distributed Web servers. For example, a company has one domain name and three identical home pages residing on three servers with three different IP addresses. When one user accesses the home page it will be sent to the first IP address. The second user who accesses the home page will be sent to the next IP address, and the third user will be sent to the third IP address. In each case, once the IP address is given out, it goes to the end of the list. The fourth user, therefore, will be sent to the first IP address, and so forth.Although very easy to implement, round robin DNS has important drawbacks, such as those inherited from the DNS hierarchy itself and TTL times, which causes undesired address caching to be very difficult to manage. Moreover, its simplicity makes that remote servers that go unpredictably down inconsistent in the DNS tables. However, this technique, together with other load balancing and clustering methods, can produce good solutions for some situations."
            }, {
                title: "route control",
                description: "Route control product packages provide optimized Internet connectivity and, at the same time, decreases the cost of bandwidth for large data centers and other organizations where bandwidth costs and high network traffic are a concern. Data centers multihomed with multiple ISP connections benefit from route control as constant ISP performance evaluations are executed, and your outgoing data traffic is then directed to the ISP connection that is currently boasting the best performance at the best price. Route control products handle the switching of outgoing data between ISPs in real time, adapting the routing choice based on the results of the performance evaluations."
            }, {
                title: "routefile",
                description: "The name of a file containing routing rules."
            }, {
                title: "router",
                description: "A router is a device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP's network. Routers are located at gateways, the places where two or more networks connect.Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.Very little filtering of data is done through routers."
            }, {
                title: "router firmware",
                description: "Software that is embedded inside your router. This software provides network protocols, security and administrative controls. When users install a router they access the firmware that is on a read-only memory chip inside inside the router to set up security and administrative options. Router firmware can be upgraded by the user."
            }, {
                title: "routing",
                description: "In internetworking, the process of moving a packet of data from source to destination. Routing is usually performed by a dedicated device called a router. Routing is a key feature of the Internet because it enables messages to pass from one computer to another and eventually reach the target machine. Each intermediary computer performs routing by passing along the message to the next computer. Part of this process involves analyzing a routing tableto determine the best path.Routing is often confused with bridging, which performs a similar function. The principal difference between the two is that bridging occurs at a lower level and is therefore more of a hardware function whereas routing occurs at a higher level where the software component is more important. And because routing occurs at a higher level, it can perform more complex analysis to determine the optimal path for the packet."
            }, {
                title: "Routing and Remote Access Service",
                description: "Routing and Remote Access Service (RRAS), a Microsoft API that makes it possible to create applications to administer the routing and remote access service capabilities of the operating system. RRAS makes it possible for a computer to function as a network router, and developers can also use RRAS to implement routing protocols. The RRAS server functionality follows and builds upon the Remote Access Service (RAS)"
            }, {
                title: "routing information field",
                description: "In token-ring networks, the optional field at the end of a MAC header right before the user data that contains the routing information. Routing bridges use this data to determine where to route tokens when sending data from one token-ring network to another interconnected token-ring network. The routing information field typically contains a series of ring and bridge addresses that data will travel through to the final destination."
            }, {
                title: "Routing Information Protocol",
                description: "Abbreviated as RIP, an interior gateway protocol defined by RFC 1058 that specifies how routers exchange routing table information. With RIP, routers periodically exchange entire tables. Because this is inefficient, RIP is gradually being replaced by a newer protocol called Open Shortest Path First (OSPF)."
            }, {
                title: "routing metric",
                description: "A variable used by a dynamic router to calculate its routing table. This determines which route the router should use to forward a packet."
            }, {
                title: "routing protocol",
                description: "A generic term that refers to a formula, or protocol, used by a router to determine the appropriate path over which data is transmitted. The routing protocol also specifies how routers in a network share information with each other and report changes. The routing protocol enables a network to make dynamic adjustments to its conditions, so routing decisions do not have to be predetermined and static."
            }, {
                title: "routing switch",
                description: "A switch that also performs routing operations. Usually a switch operates at layer 2 (the Data Link layer) of the OSI Reference Model while routers operate at layer 3 (the Network layer). Routing switches, however, perform many of the layer 3 functions usually reserved for routers. And because the routing is implemented in hardware rather than software, it is faster. The downside of routing switches is that they are not as powerful or as flexible as full-fledged routers.Because they perform some layer 3 functions, routing switches are sometimes called layer-3 switches."
            }, {
                title: "RSA",
                description: "A public-key encryption technology developed by RSA Data Security, Inc. The acronym stands for Rivest, Shamir, and Adelman, the inventors of the technique. The RSA algorithm is based on the fact that there is no efficient way to factor very large numbers. Deducing an RSA key, therefore, requires an extraordinary amount of computer processing power and time.The RSA algorithm has become the de facto standard for industrial-strength encryption, especially for data sent over the Internet. It is built into many software products, including Netscape Navigator and Microsoft Internet Explorer. The technology is so powerful that the U.S. government has restricted exporting it to foreign countries.A similar technology that is also used widely is offered by a company called Cylink."
            }, {
                title: "RSA Secure ID",
                description: "RSA SecurID ( “SecurID”) is a two-factor authentication technology that is used to protect network resources.  The authentication is based on two factors -- something you know (a password or PIN) and something you have (an authenticator).  The authenticator is typically a hardware token (such as a USB token, smart card or key fob) and the software token is the RSA Authentication Manager Software that provides the security engine used to verify authentication requests."
            }, {
                title: "RSIP",
                description: "Short for Realm-Specific Internet Protocol, an IP address translation technique that is an alternative to NAT. RSIP lets an enterprise safeguard many private Internet addresses behind a single public Internet address.RSIP functions by leasing public IP addresses and ports to RSIP hosts located in private addressing realms. The RSIP client requests registration with an RSIP server, or gateway. The server in turn delivers either a unique public IP address or a shared public IP address and a unique set of TCP/UDP ports and attaches the RSIP host��s private address to this public address. The RSIP host uses this public address to send packets to public destinations. The packets contain both the public and private addresses, and the RSIP server strips off the private address header and sends the packet on with a public IP header.RSIP can also be used to relay traffic between several different privately addressed networks by leasing several different addresses to reach different destination networks."
            }, {
                title: "RTT",
                description: "Short for real-time technology. RTT refers to technology that allows a user to receive data during the actual time that a physical process occurs, known as real time. Real time is measured in milliseconds or microseconds.While RTT is used for sophisticated entertainment purposes, such as streaming live video or audio and has applications that ultimately will make Internet use more lively and practical, this immediate-response technology is being used for a wide array of critical applications that require instant response times. For example, an automatic pilot must respond to data on changing flight conditions or the position of other aircraft immediately; nuclear power plants must have real-time information on what is happening at all times in all critical areas of the plant for safety; space flight computers must respond instantly to changing conditions in the atmosphere.Short for round-trip time, the time required for a network communication to travel from the source to the destination and back. RTT is used by some routing algorithms to aid in calculating optimal routes."
            }, {
                title: "RTU - remote terminal unit",
                description: "Short for remote terminal unit. In SCADA systems, an RTU is a device installed at a remote location that collects data, codes the data into a format that is transmittable and transmits the data back to a central station, or master. An RTU also collects information from the master device and implements processes that are directed by the master. RTUs are equipped with input channels for sensing or metering, output channels for control, indication or alarms and a communications port."
            }, {
                title: "runt",
                description: "When used in reference to networks, a runt is a packet that is too small to traverse the network. Network protocols such as Ethernet often require that packets be a minimum number of bytes in order to travel the network. Runts are often the result of packet collisions along a busy network or can result from faulty hardware that is forming the packets or from corrupted data being sent across the network."
            }, {
                title: "RWU",
                description: "Short for remote wake-up, a generic term for the action of turning on a computer over a network from a remote location. Often, IT personnel prefer to maintain client systems after employees have gone home. Even if these tasks are automated, client machines must be left on. In the past, if they weren't left on, personnel had to manually turn them on. But, with wake-on-LAN, client systems can be remotely and automatically powered up.Wake-on-LAN is considered a form of remote wakeup, but not all RWU systems are Wake-on-LAN as it is possible to wake a computer remotely using a dial-up connection from outside a local-area network."
            }, {
                title: "S-HTTP",
                description: "An extension to the HTTP protocol to support sending data securely over the World Wide Web. Not all Web browsers and servers support S-HTTP. Another technology for transmitting secure communications over the World Wide Web -- Secure Sockets Layer (SSL) -- is more prevalent. However, SSL and S-HTTP have very different designs and goals so it is possible to use the two protocols together. Whereas SSL is designed to establish a secure connection between two computers, S-HTTP is designed to send individual messages securely. Both protocols have been submitted to the Internet Engineering Task Force (IETF) for approval as a standard.S-HTTP was developed by Enterprise Integration Technologies (EIT), which was acquired by Verifone, Inc. in 1995."
            }, {
                title: "S/key",
                description: "A security system developed by Bellecore. S/key is a one-time, challenge-response password scheme used to authenticate access to data. The purpose of S/key is to eliminate the need for the same password to be conveyed over a network each time a password is needed for access. A series of passwords are created at once, and each password is used only one time; therefore, someone obtaining the password cannot use the information because the password becomes invalid once it has been used the first time."
            }, {
                title: "S/MIME",
                description: "Short for Secure/MIME, a version of the MIME protocol that supports encryption of messages. S/MIME is based on RSA's public-key encryption technology."
            }, {
                title: "Samba",
                description: "An open source implementation of the SMB file sharing protocol that provides file and print services to SMB/CIFS clients. Samba allows a non-Windows server to communicate with the same networking protocol as the Windows products.Samba was originally developed for UNIX but can now run on Linux, FreeBSD and other UNIX variants. It is freely available under the GNU General Public License.The name Samba is a variant of SMB, the protocol from which it stems."
            }, {
                title: "SAML",
                description: "(Pronounced sam-el) Short for Security Assertion Markup Language, an XML-based framework for ensuring that transmitted communications are secure. SAML defines mechanisms to exchange authentication, authorization and nonrepudiation information, allowing single signon capabilities for Web services"
            }, {
                title: "Samsung Galaxy S8",
                description: "The Samsung Galaxy S8 and S8+ are the eighth generation of Samsung’s Galaxy smartphone mobile device and the follow-up to the Samsung Galaxy S7 and Samsung Galaxy S7 Edge, which debuted in March 2016. The Samsung Galaxy S8 smartphones were developed to compete largely with Apple's current iPhone 7 as well as the upcoming iPhone 8."
            }, {
                title: "SAN - Storage Area Network",
                description: "Short for storage area network, SAN is a high-speed network of storage devices that also connects those storage devices with servers. It provides block-level storage that can be accessed by the applications running on any networked servers. SAN storage devices can include tape libraries and disk-based devices, like RAID hardware.The main functions of a storage area network (SAN) includes the following:||||A high-speed network of storage devices.||||Connects the storage devices with servers.||||Can be accessed by applications on networked servers.||||Particularly helpful in backup and disaster recovery.||||Uses networking protocols to span longer distances geographically.||||SAN can also simplify some management tasks.||||Offers flexibility, availability and performance."
            }, {
                title: "SAN fabric",
                description: "The hardware that connects workstations and servers to storage devices in a SAN is referred to as a (fabric.) The SAN fabric enables any-server-to-any-storage device connectivity through the use of Fibre Channel switching technology."
            }, {
                title: "sandbox",
                description: "A security measure in the Java development environment. The sandbox is a set of rules that are used when creating an applet that prevents certain functions when the applet is sent as part of a Web page. When a browser requests a Web page with applets, the applets are sent automatically and can be executed as soon as the page arrives in the browser. If the applet is allowed unlimited access to memory and operating system resources, it can do harm in the hands of someone with malicious intent. The sandbox creates an environment in which there are strict limitations on what system resources the applet can request or access. Sandboxes are used when executable code comes from unknown or untrusted sources and allow the user to run untrusted code safely.The Java sandbox relies on a three-tiered defense. If any one of these three elements fails, the security model is completely compromised and vulnerable to attack:||||byte code verifier -- This is one way that Java automatically checks untrusted outside code before it is allowed to run. When a Java source program is compiled, it compiles down to platform-independent Java byte code, which is verified before it can run. This helps to establish a base set of security guarantees.||||applet class loader -- All Java objects belong to classes, and the applet class loader determines when and how an applet can add classes to a running Java environment. The applet class loader ensures that important elements of the Java run-time environment are not replaced by code that an applet tries to install.||||security manager -- The security manager is consulted by code in the Java library whenever a dangerous operation is about to be carried out. The security manager has the option to veto the operation by generating a security exception."
            }, {
                title: "SAP - Session Announcement Protocol",
                description: "Short for Session Announcement Protocol, an announcement protocol used to communicate the relevant session setup information to prospective participants during multicast sessions. SAPs typically use the Real-Time Transport Protocol (RTP).Short for Service Advertising Protocol, a NetWare protocol used to identify the services and addresses of servers attached to the network. The responses are used to update a table in the router known as the Server Information Table.Short for Secondary Audio Program, an NTSC audio channel used for auxiliary transmission, such as foreign language broadcasting or teletext."
            }, {
                title: "SASL",
                description: "Acronym for Simple Authentication and Security Layer. Originating with RFC 2222, written by John Myers while at Netscape Communications, SASL is a method for adding authentication support to connection-based protocols. SASL takes effect when a protocol initiates a command for identifying and authenticating a user to a server. SASL also includes an option for negotiating protection of subsequent protocol interactions. With this option in effect, SASL places a security layer between the protocol and the connection."
            }, {
                title: "scatternet",
                description: "A group of independent and non-synchronized piconets that share at least one common Bluetooth device. Bluetooth devices must have point-to-multipoint capability to engage in scatternet communication. There may be a maximum of 10 fully loaded piconets in a scatternet."
            }, {
                title: "screen lock",
                description: "Screen lock is a security feature for computers and mobile devices that helps prevent unauthorized access to the device. Also known as a screenlock or lock screen, a screen lock requires a specific action or sequence of actions to be correctly performed by anyone attempting to use a lockscreen-protected device.Screen locks or lock screens can require the user to enter a password or passphrase, perform a specific gesture or motion on the touchscreen, or access a biometric reader that analyzes the user’s fingerprint, scans their eye or conducts a similar analysis for recognition of the user."
            }, {
                title: "script kiddie",
                description: "A person, normally someone who is not technologically sophisticated, who randomly seeks out a specific weakness over the Internet in order to gain root access to a system without really understanding what it is s/he is exploiting because the weakness was discovered by someone else. A script kiddie is not looking to target specific information or a specific company but rather uses knowledge of a vulnerability to scan the entire Internet for a victim that possesses that vulnerability."
            }, {
                title: "SCTP",
                description: "Acronym for Stream Control Transmission Protocol.SCTP is a type of mobility management for IP-based networks that focuses on the transport and session layers, rather the network layer. SCTP, in general terms, is a reliable transport protocol operating on top of potentially unreliable connectionless packet service such as IP.SCTP can be used as the transport protocol for applications where monitoring and detection of loss of session is required. For such applications, the SCTP path/session failure detection mechanisms, especially the heartbeat, will actively monitor the connectivity of the session. SCTP offers recognized error-free non-duplicated transfer of messages. Detection of data loss, data corruption and duplication of data is achieved by using checksums and sequence numbers. A selective retransmission mechanism is applied to correct loss or corruption of data.SCTP connections are established after a 4-way handshake between two SCTP endpoints, usually a client and a server. The server, after having received the client��s association setup request, returns an acknowledgement of the setup request containing a data structure called cookie, which is protected by a secure message authentication code, and does not change state. Only when this cookie is returned by the client unchanged does the server allocate resources and establish a new association.With its inception, SCTP was designed to provide a general purpose transport protocol for message-oriented applications. It has been designed by the IETF SIGTRAN working group, which has released the SCTP standard draft document ( RFC2960 ) in October 2000. Its design includes appropriate congestion avoidance behavior and resistance to flooding and masquerade attacks."
            }, {
                title: "SCTP association",
                description: "The term used in RFC2960 to describe a protocol relationship between SCTP endpoints. SCTP (Stream Control Transmission Protocol) association is composed of two SCTP endpoints and protocol state information including verification tags (a 32-bit unsigned integer that is randomly generated) and the currently active set of Transmission Sequence Numbers (TSNs). The association can be uniquely identified by the transport addresses used by the endpoints in the association."
            }, {
                title: "SCTP endpoint",
                description: "The term used in RFC2960 to describe the logical sender or receiver of SCTP (Stream Control Transmission Protocol) packets. An SCTP endpoint is represented to its peers as a combination of a set of eligible destination transport addresses to which SCTP packets can be sent and a set of eligible source transport addresses from which SCTP packets can be received. A transport address used by an SCTP endpoint is unique to an SCTP endpoint."
            }, {
                title: "SDE - software defined environment",
                description: "A term coined by IBM for its (software-defined everything) vision. The company's Software-Defined Environments (SDE) group is the latest evolution of what first began as the Application, Integration and Middleware group inside the IBM Software group.According to eWeek, IBM says a Software-Defined Environment (SDE) optimizes the entire computing infrastructure – compute, storage and network resources – so that it can adapt to the type of work required. In today's environment, resources are assigned manually to workloads; that happens automatically in a SDE.By dynamically assigning workloads to IT resources based on a variety of factors, including the characteristics of specific applications, the best-available resources, and service-level policies, a software-defined environment can deliver continuous, dynamic optimization and reconfiguration to address infrastructure issues."
            }, {
                title: "SDH",
                description: "Short for Synchronous Digital Hierarchy, an international standard for synchronous data transmission over fiber optic cables. The North American equivalent of SDH is SONET.SDH defines a standard rate of transmission at 155.52 Mbps, which is referred to as STS-3 at the electrical level and STM-1 for SDH. STM-1 is equivalent to SONET's Optical Carrier (OC) levels -3."
            }, {
                title: "SDLC",
                description: "Acronym for synchronous data link control, a communications protocol used in IBM's SNA networks. SDLC is similar to HDLC, an ISO standard. Acronym for system development life cycle. SDLC is the process of developing information systems through investigation, analysis, design, implementation and maintenance. SDLC is also known as information systems development or application development. SDLC is a systems approach to problem solving and is made up of several phases, each comprised of multiple steps:||||The software concept - identifies and defines a need for the new system||||A requirements analysis - analyzes the information needs of the end users||||The architectural design - creates a blueprint for the design with the necessary specifications for the hardware, software, people and data resources||||Coding and debugging - creates and programs the final system||||System testing - evaluates the system's actual functionality in relation to expected or intended functionality.|||| Acronym for software development life cycle (SDLC) and also synonymous with software process as well as software engineering, it is a structured methodology used in the development of software products and packages. "
            }, {
                title: "SDN - software defined networking",
                description: "SDN is short for software defined networking. Software defined networking (SDN) is an approach to using open protocols, such as OpenFlow, to apply globally aware software control at the edges of the network to access network switches and routers that typically would use closed and proprietary firmware."
            }, {
                title: "SDSL",
                description: "Short for symmetric digital subscriber line, a technology that allows more data to be sent over existing copper telephone lines (POTS). SDSL supports data rates up to 3 Mbps.SDSL works by sending digital pulses in the high-frequency area of telephone wires and can not operate simultaneously with voice connections over the same wires.SDSL requires a special SDSL modem. SDSL is called symmetric because it supports the same data rates for upstream and downstream traffic. A similar technology that supports different data rates for upstream and downstream data is called asymmetric digital subscriber line (ADSL). ADSL is more popular in North America, whereas SDSL is being developed primarily in Europe."
            }, {
                title: "Secure Electronic Transaction",
                description: "SET, short for Secure Electronic Transaction, is a standard that will enable secure credit card transactions on the Internet. SET has been endorsed by virtually all the major players in the electronic commerce arena, including Microsoft, Netscape, Visa, and Mastercard.By employing digital signatures, SET will enable merchants to verify that buyers are who they claim to be. And it will protect buyers by providing a mechanism for their credit card number to be transferred directly to the credit card issuer for verification and billing without the merchant being able to see the number."
            }, {
                title: "secure server",
                description: "A Web server that supports any of the major security protocols, like SSL, that encrypt and decrypt messages to protect them against third party tampering. Making purchases from a secure Web server ensures that a user's payment or personal information can be translated into a secret code that's difficult to crack. Major security protocols include SSL, SHTTP, PCT, and IPSec.See the Server Types page in the Quick Reference section of Webopedia for a comparison of server types."
            }, {
                title: "security (computer security)",
                description: "In the computer industry, the term security -- or the phrase computer security -- refers to techniques for ensuring that data stored in a computer cannot be read or compromised by any individuals without authorization. Most computer security measures involve data encryption and passwords. Data encryption is the translation of data into a form that is unintelligible without a deciphering mechanism. A password is a secret word or phrase that gives a user access to a particular program or system."
            }, {
                title: "security architecture",
                description: "A term used by the Symantec Security Response Center to refer to a plan and set of principles that describe the security services that a system is required to provide to meet the needs of its users, the system elements required to implement the services, and also the performance levels required in the elements to deal with the threat environment."
            }, {
                title: "security exploit",
                description: "Another term for security vulnerability, a security exploit is an unintended and unpatched flaw in software code that exposes it to potential exploitation by hackers or malicious software code such as viruses, worms, Trojan horses and other forms of malware.Security exploits may result from a combination of software bugs, weak passwords or software already infected by a computer virus or worm, and these security exploits require patches, or software fixes, in order to prevent the potential for unauthorized access or compromised integrity."
            }, {
                title: "security information management - SIM",
                description: "SIM is short for security information management. It is a type of software that automates the collection of event log data from security devices, such as such as firewalls, proxy servers, intrusion-detection systems and antivirus software. The SIM translates the logged data into correlated and simplified formats. Many SIM architecture provides security reporting, analysis and reporting for Sarbanes-Oxley, HIPAA, Basel II, FISMA and Visa CISP compliance audits.SIM is also called security event management (SEM)."
            }, {
                title: "security policy",
                description: "A security policy is a document that outlines the rules, laws and practices for computer network access. This document regulates how an organization will manage, protect and distribute its sensitive information (both corporate and client information) and lays the framework for the computer-network-oriented security of the organization."
            }, {
                title: "security software disabler Trojan",
                description: "A type of Trojan horse designed stop or kill security programs such as an antivirus program or firewall without the user knowing. This Trojan type is normally combined with another type of Trojan as a payload."
            }, {
                title: "security vulnerability",
                description: "An unintended flaw in software code or a system that leaves it open to the potential for exploitation in the form of unauthorized access or malicious behavior such as viruses, worms, Trojan horses and other forms of malware.Also referred to as security exploits, security vulnerabilities can result from software bugs, weak passwords or software that’s already been infected by a computer virus or script code injection, and these security vulnerabilities require patches, or fixes, in order to prevent the potential for compromised integrity by hackers or malware."
            }, {
                title: "self-garbling virus",
                description: "A type of computer virus that will attempt to hide from an antivirus program by garbling its own code. When a self-garbling virus propagates it will change the encoding of its own code to trick antivirus programs and stay hidden on the computer system."
            }, {
                title: "SELinux",
                description: "Short for Security-enhanced Linux, SELinux is a Linux variation that can be fully integrated into the Linux 2.6 kernel series and also several Linux distributions. SELinux has no concept of a root user, instead it includes enhanced security functionality through enforced mandatory access controls (MAC). SELinux was created by the National Security Agency as an example of how mandatory access controls, which can confine the actions of any process, can be added into Linux.  It was released to the open_source.html development community in 2000."
            }, {
                title: "sequenced packet protocol",
                description: "Abbreviated as SPP, a networking protocol that provides reliable transport of packets with flow control in environments where multiple transport connections are established. SPP uses destination ID reference numbers to identify the target end of a transport connection; sequence numbers to keep transmitted packets in the order in which they were sent; and acknowledge numbers that are assigned to the last packet in a sequence that a destination received properly to indicate that the transmission is complete and successful."
            }, {
                title: "server administrator",
                description: "A server administrator, or server admin, has the job responsibility of managing and monitoring the performance of the computer servers in a company's data center.Also referred to as a systems administrator, server administrators work with servers and networks on a daily basis to ensure that the systems run efficiently and continue to operate without downtime or performance degradation."
            }, {
                title: "Server Core",
                description: "Server Core is a minimal installation option introduced in Windows Server 2008 as a way to run Windows Server with a limited set of features and with support for only certain server roles. The Server Core installation option is available in the Standard, Enterprise and Datacenter editions of Windows Server 2008.With Server Core, Microsoft stripped away all features (including the graphical user interface, or GUI) other than those essential to running core network services, such as Active Directory Domain Servers (AD DS), DNS, Dynamic Host Configuration Protocol (DHCP), and File and Print services.The Windows Server Core installation stands in contrast to the full installation option for Windows Server, which supports installing all available server roles as well as other Microsoft and third-party server applications like Microsoft Exchange Server or SAP."
            }, {
                title: "server farm",
                description: "Also referred to as server cluster, computer farm or ranch. A server farm is a group of networked servers that are housed in one location. A server farm streamlines internal processes by distributing the workload between the individual components of the farm and expedites computing processes by harnessing the power of multiple servers. The farms rely on load-balancing software that accomplishes such tasks as tracking demand for processing power from different machines, prioritizing the tasks and scheduling and rescheduling them depending on priority and demand that users put on the network. When one server in the farm fails, another can step in as a backup.Combining servers and processing power into a single entity has been relatively common for many years in research and academic institutions. Today, more and more companies are utilizing server farms as a way of handling the enormous amount of computerization of tasks and services that they require.A Web server farm, or Web farm, refers to either a Web site that runs off of more than one server or an ISP that provides Web hosting services using multiple servers."
            }, {
                title: "Server Message Block 2 - SMB2",
                description: "Short for Server Message Block 2, SMB2 is a file transfer protocol commonly used by network-attached storage (NAS) devices and file servers for sharing files and data. SMB2 first debuted with the release of Microsoft's Windows Vista in 2007 as a successor to the original SMB protocol, and it's now supported by Mac OS X (as of the OS X Mavericks release), Linux and Samba as well.The SMB2 protocol offers better performance and increased security over the original protocol. Apple made the switch to SMB2 in the Mavericks release after moving from its own proprietary SMBX protocol, which Apple had developed to replace the aging AFP (AppleTalk Filing Protocol) file sharing protocol used by the company since the 1980s."
            }, {
                title: "server virtualization",
                description: "Server virtualization is the partitioning of a physical server into smaller virtual servers to help maximize your server resources. In server virtualization the resources of the server itself are hidden, or masked, from users, and software is used to divide the physical server into multiple virtual environments, called virtual or private servers. This is in contrast to dedicating one server to a single application or task."
            }, {
                title: "session hijacking",
                description: "Also referred to as TCP session hijacking, a security attack on a user session over a protected network. The most common method of session hijacking is called IP spoofing, when an attacker uses source-routed IP packets to insert commands into an active communication between two nodes on a network and disguising itself as one of the authenticated users. This type of attack is possible because authentication typically is only done at the start of a TCP session. Another type of session hijacking is known as a man-in-the-middle attack, where the attacker, using a sniffer, can observe the communication between devices and collect the data that is transmitted."
            }, {
                title: "shared Ethernet",
                description: "The traditional type of Ethernet, in which all hosts are connected to the same bus and compete with one another for bandwidth. In contrast, a switched Ethernet has one or more direct, point-to-point connections between hosts or segments. Devices connected to the Ethernet with a switch do not compete with each other and therefore have dedicated bandwidth."
            }, {
                title: "Shared Wireless Access Protocol",
                description: "Developed by the HomeRF Working Group, SWAP is a specification for wireless voice and data networking in the home.SWAP works together with the PSTN network and the Internet through existing cordless telephone and wireless LAN technologies. It supports TDMA for interactive data transfer and CSMA/CA for high-speed packet transfer.SWAP operates in the 2400 MHz band at 50 hops per second. Data travels at a rate between 1 Mbps and 2 Mbps.On a SWAP network via cordless handheld devices, users will be able to voice activate home electronic systems; access the Internet from anywhere in the home, and forward fax, voice and e-mail messages. "
            }, {
                title: "sheepdip",
                description: "Also known as a footbath, a sheepdip is the process of checking physical media, such as floppy disks or CD-ROMs, for viruses before they are used in a computer. Typically, a computer that sheepdips is used only for that process and nothing else and is isolated from the other computers, meaning it is not connected to the network. Most sheepdips use at least two different antivirus programs in order to increase effectiveness. The goal of sheepdipping is to block viruses from entering systems rather than waiting until they manifest on user workstations at which time they will have already done their damage. Sheepdipping is not used for files downloaded from the Internet unless the files are first transferred to a physical removable medium and run through the sheepdip before loaded onto the workstation's hard drive.The term comes from the practice in sheep farming of dipping the sheep in chemical solutions to clean their wool of fleas and lice or to promote the healing of skin irritations."
            }, {
                title: "Shellshock",
                description: "Shellshock is a bug that uses a vulnerability in the common Unix command execution shellbash (Bourne-Again SHell) to potentially enable hackers to take control of the machine and remotely execute arbitrary code directly into the system.Because it preys on the Unix bash shell, which is utilized by most other major desktop and mobile operating systems like Linux, Mac OS X, iOS, Google Android and even Microsoft Windows, Shellshock has the potential to attack many types of systems and devices. To date, though, reports of Shellshock in the wild have been fairly limited, with the most prominent attacks targeting Web-facing servers and Network-Attached Storage devices (NAS).It's also believed that operating systems like OS X and Windows do not expose bash to attacker-supplied input, which Shellshock would need to be able to control the computer. There remains the possibility, though, that other vulnerabilities could be discovered that would provide a way into the system for Shellshock or variants of the Shellshock bug."
            }, {
                title: "shielded twisted pair",
                description: "Often abbreviated STP, a type of copper telephone wiring in which each of the two copper wires that are twisted together are coated with an insulating coating that functions as a ground for the wires. The extra covering in shielded twisted pair wiring protects the transmission line from electromagnetic interference leaking into or out of the cable. STP cabling often is used in Ethernet networks, especially fast data rate Ethernets."
            }, {
                title: "shoulder surfing",
                description: "Shoulder surfing refers to a direct observation, such as looking over a person's shoulder, to obtain information. In some cases shoulder surfing is done for no reason other than to get an answer, but in other instances it may constitute a security breach as the the person behind may be gleaning private information such as your PIN at a bank machine, or Credit card information as you enter it into a Web based shopping cart check-out. While shoulder surfing is most common in busy and crowed areas where the perpetrator is not as likely to be caught, shoulder surfing can also be done with the aid of binoculars or cameras from a more remote location."
            }, {
                title: "Shylock malware",
                description: "Shylock refers to a family of malware that relies on browser-based man-in-the-middle (MITM) attacks and fake digital certificates to intercept network traffic and inject code into banking websites. The Shylock malware was first discovered in February 2011 and derives its name from references in the code to Shakespeare’s The Merchant of Venice.The Shylock malware code is designed to trick customers into providing banking login and account details to hackers instead of to the bank’s customer service department. Some Shylock strains even have the ability to open a fake customer service chat window on an infected computer to enable cybercriminals to prompt the user for their sensitive account information.Newer strains of the Shylock malware have added the ability to detect whether the malware is running in a virtual machine (VM) that’s being analyzed by malware researchers. The Shylock malware does this to help make analysis more difficult and avoid detection by security researchers. Virtual machines are frequently employed by security teams to test programs in simulated environments to more easily detect malicious behavior. When the Shylock malware detects it is being run in a virtual environment, the code will shut down the program."
            }, {
                title: "SID - security identifier",
                description: "Short for security identifier, a security feature of the Windows NT and 2000 operating systems. The SID is a unique name (alphanumeric character string) that is used to identify an object, such as a user or a group of users in a networkof NT/2000 systems.Windows grants or denies access and privileges to resources based on ACLs, which use SIDs to uniquely identify users and their group memberships. When a user requests access to a resource, the user��s SID is checked by the ACL to determine if that user is allowed to perform that action or if that user is part of a group that is allowed to perform that action."
            }, {
                title: "SideJacking",
                description: "Term used to describe the malicious act of hijacking an engaged Web session with a remote service by intercepting and using the credentials that identified the user/victim to that specific server. Typically, SideJacking is most common on sites that require authentication through a username and password, such as online Web mail accounts as well as social networking sites. SideJacking works only if the site catches a non-SSL cookie, so any Web site that uses SSL exclusively would be safe from SideJackers. SideJacking was first demonstrated by Robert Graham, CEO of Errata Security at Black Hat in 2007."
            }, {
                title: "sideloading",
                description: "Sideloading means installing and running applications on mobile devices that haven't been authorized or approved by the device's official app store."
            }, {
                title: "SIEM - security information and event management",
                description: "Security Incident and Event Manager (SIEM) is a set of network security tools, often packaged as a complete security solution, used by IT professionals and system administrators to manage multiple security applications and devices, and to respond automatically to resolve security incidents."
            }, {
                title: "single signon",
                description: "An authentication process in a client/server relationship where the user, or client, can enter one name and password and have access to more than one application or access to a number of resources within an enterprise. Single signon takes away the need for the user to enter further authentications when switching from one application to another.Single signon is also spelled single sign on or single sign-on and abbreviated as SSO."
            }, {
                title: "Skulls",
                description: "A type of cellphone virus that deactivates all links to your cellphone applications, including e-mail, IM, and calendar. It replaces all icons on your cellphone with images of skulls."
            }, {
                title: "Skype worm",
                description: "The Skype worm is a strain of the Dorkbot family of malware that made headlines in October 2012.  The Skype worm sends a message like “LOL, is this your new profile pic?” from an infected Skype user’s contact list, attempting to entice fellow Skype users into clicking on the link and downloading and installing the Skype worm.As with other forms of Dorkbot, the Skype worm opens a backdoor on infected computers, allowing for remote access. The Skype worm also installs a form of ransomware, wherein the malware threatens to lock a user out of being able to use their computer and demands a payment of several hundreds of dollars within a limited time frame or have their files deleted.Computers infected with the Skye worm may also receive a ransomware message claiming that the computer has been used for illegal activity and that the user will be reported to federal authorities unless a payment is made within a limited timeframe."
            }, {
                title: "Skywiper",
                description: "An extremely sophisticated strain of malware more commonly referred to as Flame (or Flamer), although some security experts classify the two differently.  Skywiper, or sKyWIper, is one of the largest and most complex malware strains to date, with a total size of more than 30MB when its 20+ modules and plug-ins have been installed.  Skywiper has the ability to record extensive system information on an infected machine, and also has keystroke monitoring and packet sniffing functionality as well as backdoor capabilities that enable cyber attackers to trigger, update or erase the malware on command.  The Skywiper malware had been in circulation for at least two years prior to being detected, primarily targeting countries in the Middle East, and Skywiper is believed to have been created and conducted with nation-state support due to its high level of complexity and targeted area of focus."
            }, {
                title: "slag code",
                description: "Another name for a logic bomb."
            }, {
                title: "slice",
                description: "In low-speed communications networking a slice is a subdivision of a channel buffer. Sections of the buffer are divided into slices that are used for buffering network messages and data."
            }, {
                title: "sliding window",
                description: "Also referred to as windowing, a method of flow control for transferring data over networks. TCP sends data across a network in packets and requires the receiving device to send an acknowledgement, or ACK, when it successfully has received the packet, which signals the sending device that another packet can be sent. Window size is the number of data packets that can be sent without waiting for an ACK. With the sliding window method, the receiving device can send a single acknowledgement message for multiple packets of data sent in one window. Within that acknowledgement message is information about the receiving device��s buffer size, which tells the sending device to increase or decrease the number of packets in the next transmission (this is where the sliding in the name comes in). If the application reading the data processes the packets at a slower rate than the sending device is transmitting them, it will tell the sending device to decrease the number of packets or temporarily cease transmission altogether, in order to free up room in the buffer; if the receiving application can process the packets faster than the sending device is transmitting them, it will tell the sending device to increase the number of packets in the next window as the application��s buffer can handle more data."
            }, {
                title: "slimeware",
                description: "A slang term used to describe software that interferes with the user experience by changing key settings in order to gain profit. A type of adware."
            }, {
                title: "SLP",
                description: "Short for Service Location Protocol (SLP) was originally an Internet Engineering Task Force (IETF) standards track protocol that provides a framework to allow networking applications to discover the existence, location, and configuration of networked services in enterprise networks. Traditionally, in order to locate services on the network, users of network applications have been required to supply the host name or network address of the machine that provides a desired service. SLP can eliminate the need for users to know the names of network hosts. With SLP, the user only needs to know the description of the service he is interested in. Based on this description, SLP is then able to return the URL of the desired service."
            }, {
                title: "smart card",
                description: "A small electronic device about the size of a credit card that contains electronic memory, and possibly an embedded integrated circuit (IC). Smart cards containing an IC are sometimes called Integrated Circuit Cards (ICCs)."
            }, {
                title: "SMB - Server Message Block",
                description: " Short for Server Message Block, a message format used by DOS and Windows to share files, directories and devices. NetBIOS is based on the SMB format, and many network products use SMB. These SMB-based networks include Lan Manager, Windows for Workgroups, Windows NT, and Lan Server. There are also a number of products that use SMB to enable file sharing among different operating system platforms. A product called Samba, for example, enables UNIX and Windows machines to share directories and files.Short for small-to-midsize business, or small-medium business."
            }, {
                title: "SMDS",
                description: "Short for Switched Multimegabit Data Services, a high-speed switched data communications service offered by telephone companies that enable organizations to connect geographically separate local-area networks (LANs) into a single wide-area network (WAN). Prior to SMDS's arrival in 1995, the only way to connect LANs was through a dedicated private line. This is still the way most WANs are connected, but SMDS is becoming an increasingly attractive alternative because it is more flexible and in many cases more economical."
            }, {
                title: "SMiShing",
                description: "A compound of 'phishing' and 'SMS'.  SMiShing (SMS phishing) is a type of phishing attack where mobile phone users receive text messages containing a Web site hyperlink, which, if clicked would download a Trojan horse to the mobile phone. The term SMiShing was coined by David Rayhawk in a McAfee Avert Labs blog on August 25, 2006."
            }, {
                title: "smishing",
                description: "Short for SMS Phishing, smishing is a variant of phishing email scams that instead utilizes Short Message Service (SMS) systems to send bogus text messages. Also written as SMiShing, SMS phishing made recent headlines when a vulnerability in the iPhone's SMS text messaging system was discovered that made smishing on the mobile device possible.Smishing scams frequently seek to direct the text message recipient to visit a website or call a phone number, at which point the person being scammed is enticed to provide sensitive information such as credit card details or passwords. Smishing websites are also known to attempt to infect the person's computer with malware."
            }, {
                title: "SmitFraud",
                description: "The term SmitFraud is used to describe a type of spyware that tricks users into purchasing fake antispyware and antivirus programs.  SmitFraud is a Trojan that is most commonly distributed through fake codec downloads. When attempting to play a video, for example, a user may be warned that a codec, such as VideoKeyCodec or BrainCodec, is missing and then download it. The user is unaware that this is a hoax and the fake codec is carrying, and will install, a form of SmitFraud on the system. Once installed the malware will start showing pop-ups indicating that the system is infected with viruses and spyware. These pop-ups will show an alarming number of infections and provide links to Web sites where users can purchase the antivirus program to remove these infections. The problem is that this malware is not showing real infections, and it is simply tricking victims into purchasing a fake antispyware or antivirus program. Users may not even have an infection on their system, other than the SmitFraud program itself that is warning you of serious, multiple infections."
            }, {
                title: "SMS - Systems Management Server",
                description: "Short for Systems Management Server, a set of tools from Microsoft that assists in managing PCs connected to a local-area network (LAN). SMS enables a network administrator to create an inventory of all the hardware and software on the network and to store it in an SMS database. Using this database, SMS can then perform software distribution and installation over the LAN. SMS also enables a network administrator to perform diagnostic tests on PCs attached to the LAN.SMS runs under Windows NT but can manage PCs running DOS, all varieties of Windows, and OS/2, as well as Macintosh clients.Short for Short Message Service Similar to paging, SMS is a service for sending short text messages to mobile phones."
            }, {
                title: "smurf attack",
                description: "Smurf attack is a type of network security breach in which a network connected to the Internet is swamped with replies to ICMP echo (PING) requests."
            }, {
                title: "snake oil",
                description: "Refers to a cryptography or security product that makes exaggerated claims of what the product is capable of, giving the user a false sense of security. The term snake oil, which is credited to Matt Curtin for using in reference to computer security products, comes from the 19th-century American practice of selling cure-all elixirs in traveling medicine shows. Snake oil salesmen would falsely claim that the potions would cure any ailments. The term has been appropriated to mean security and encryption products that make impossible claims, such as unbreakable codes."
            }, {
                title: "Snapchat",
                description: "Snapchat is a social networking app that enables users (Snapchatters) to send videos or pictures to other Snapchat users. These videos and pictures are intended to only be viewed for up to ten seconds before the content is erased.If Snapchat users want their content to be viewed for longer than ten seconds, they can add their snap messages to a Stories section that makes it possible for followers to view the messages for a 24-hour period. There's also a Memories section in Snapchat that stores snaps for viewing or sharing at a later time."
            }, {
                title: "sneakernet",
                description: "Refers to the channel by which electronic information is transmitted from one computer to another by physically carrying it stored on a floppy disk, CD or other removable medium. This play on words stems from the idea that a person is using their feet, i.e., sneakers, to transfer data instead of through the Internet or an organization's intranet."
            }, {
                title: "sniffer",
                description: "A program and/or device that monitors data traveling over a network. Sniffers can be used both for legitimate network management functions and for stealing information off a network. Unauthorized sniffers can be extremely dangerous to a network's security because they are virtually impossible to detect and can be inserted almost anywhere. This makes them a favorite weapon in the hacker's arsenal.On TCP/IP networks, where they sniff packets, they're often called packet sniffers."
            }, {
                title: "SNMP - Simple Network Management Protocol",
                description: "Short for Simple Network Management Protocol, a set of protocols for managing complex networks. The first versions of SNMP were developed in the early 80s. SNMP works by sending messages, called protocol data units (PDUs), to different parts of a network. SNMP-compliant devices, called agents, store data about themselves in Management Information Bases (MIBs)and return this data to the SNMP requesters."
            }, {
                title: "snooping protocol",
                description: "Also referred to as a bus-snooping protocol, a protocol for maintaining cache coherency in symmetric multiprocessing environments. In a snooping system, all caches on the bus monitor (or snoop) the bus to determine if they have a copy of the block of data that is requested on the bus. Every cache has a copy of the sharing status of every block of physical memory it has. Multiple copies of a document in a multiprocessing environment typically can be read without any coherence problems; however, a processor must have exclusive access to the bus in order to write."
            }, {
                title: "Snort",
                description: "Snort is an open source network intrusion prevention system (IPS) capable of performing real-time traffic analysis and packet-logging on IP networks. It can perform protocol analysis, content searching & matching and can be used to detect a variety of attacks and probes, such as buffer overflows, stealth port scans, CGI attacks, SMB probes, OS fingerprinting attempts and more.Snort uses a flexible rules language to describe traffic that it should collect or pass, as well as a detection engine that uses a modular plug-in architecture. Snort has a real-time alerting capability as well, incorporating alerting mechanisms for syslog, a user-specified file, a UNIX socket, or WinPopup messages to Windows clients using Samba's smbclient. Snort has three primary uses. It can be used as a straight packet sniffer like tcpdump, a packet logger (useful for network traffic debugging and so), or as a full-blown network intrusion prevention system. "
            }, {
                title: "SNR - signal-to-noise ratio",
                description: "Short for signal-to-noise ratio, the ratio of the amplitude of a desired analog or digital data signal to the amplitude of noise in a transmission channel at a specific point in time. SNR is typically expressed logarithmically in decibels (dB).SNR measures the quality of a transmission channel or an audio signal over a networkchannel. The greater the ratio, the easier it is to identify and subsequently isolate and eliminate the source of noise. A SNR of zero indicates that the desired signal is virtually indistinguishable from the unwanted noise.SNR also is abbreviated as S/N."
            }, {
                title: "SoakSoak malware",
                description: "SoakSoak is a strain of malware that leverages security vulnerabilities in a WordPress plug-in. These vulnerabilities are found in the RevSlider third-party plug-in, which is included in several popular themes for the open source blogging and content management system (CMS).SoakSoak can utilize these vulnerabilities on unpatched or out-of-date WordPress systems to connect with the SoakSoak.ru domain and load JavaScript malware onto the infected Website. This malware includes a backdoor Trojan that enables control of the compromised WordPress site."
            }, {
                title: "social engineering",
                description: " In the realm of computers, the act of obtaining or attempting to obtain otherwise secure data by conning an individual into revealing secure information. Social engineering is successful because its victims innately want to trust other people and are naturally helpful. The victims of social engineering are tricked into releasing information that they do not realize will be used to attack a computer network. For example, an employee in an enterprise may be tricked into revealing an employee identification number to someone who is pretending to be someone he trusts or representing someone he trusts. While that employee number may not seem valuable to the employee, which makes it easier for him to reveal the information in the first place, the social engineer can use that employee number in conjunction with other information that has been gathered to get closer to finding a way into the enterprise��s network.Phishing is a type of security attack that relies on social engineering in that it lures the victim into revealing information based on the human tendency to believe in the security of a brand name because they associate the brand name with trustworthiness."
            }, {
                title: "social network",
                description: "A social structure made of nodes that are generally individuals or organizations. A social network represents relationships and flows between people, groups, organizations, animals, computers or other information/knowledge processing entities. The term itself was coined in 1954 by J. A. Barnes."
            }, {
                title: "social network analysis",
                description: "Abbreviated as SNA, social network analysis is the mapping and measuring of relationships and flows between people, groups, organizations, animals, computers or other information/knowledge processing entities. The nodes in the network are the people and groups while the links show relationships or flows between the nodes. SNA provides both a visual and a mathematical analysis of human relationships. "
            }, {
                title: "socket",
                description: "In UNIX and some other operating systems, a software object that connects an application to a network protocol. In UNIX, for example, a program can send and receive TCP/IP messages by opening a socket and reading and writing data to and from the socket. This simplifies program development because the programmer need only worry about manipulating the socket and can rely on the operating system to actually transport messages across the network correctly. Note that a socket in this sense is completely soft - it's a software object, not a physical component. A receptacle into which a plug can be inserted.A receptacle for a microprocessor or other hardware component. "
            }, {
                title: "SOCKS",
                description: "A protocol for handling TCP traffic through a proxy server. It can be used with virtually any TCP application, including Web browsers and FTP clients. It provides a simple firewall because it checks incoming and outgoing packets and hides the IP addresses of client applications.There are two main versions of SOCKS -- V4 and V5. V5 adds an authentication mechanism for additional security. There are many freeware implementations of both versions. One of the most common V5 implementations is SOCKS5, developed by NEC.SOCKS was recently accepted as an IETFstandard and is documented in RFC 1928, 1929 and 1961."
            }, {
                title: "sockstress",
                description: "Also called TCP sockstress, sockstress is a potentially serious generic issue in many operating systems that affects the availability of TCP services. It is believed that a DoS attack exploiting the sockstress vulnerability uses half-open connections to deplete resources in the machines under attack. It very quickly causes specific services to become unavailable and may even require complete machine reboots. The attack may be effective against almost anything on a network, including Windows, BSD, Linux, embedded systems TCP/IP stack implementations, and others."
            }, {
                title: "Software-Defined Everything - SDE",
                description: "A marketing phrase that serves to group a variety of software-defined computing technologies into one overarching moniker. The umbrella of Software-Defined Everything (SDE) technologies includes, among other terms, software-defined networking (SDN), software-defined computing, software-defined data centers (SDDC), software-defined storage (SDS) and software-defined storage networks.With Software-Defined Everything, the computing infrastructure is virtualized and delivered as a service. In a Software-Defined Everything environment, management and control of the networking, storage and/or data center infrastructure is automated by intelligent software rather than by the hardware components of the infrastructure.SDE can also refer to a similar term, Software-Defined Environment, which is a buzzword created by IBM for its vision of a more cohesive software-defined everything world."
            }, {
                title: "SoIP - Storage over IP",
                description: "Short for Storage over IP, SoIP technology refers to the merging of Fibre Channel technologies with IP-based technology to allow for accessing storage devices over TCP/IP networks. SoIP is the framework for storage area networking (SAN) using Internet Protocol (IP) networks to directly connect servers and storage. SoIP products are designed to support transparent interoperability of storage devices based on Fibre Channel, SCSI, and a new class of Gigabit Ethernet storage devices using iSCSI and iFCP. Existing Fibre Channel or SCSI devices, such servers with host bus adapters (HBAs) or storage subsystems, can be included in an SoIP storage network without modification."
            }, {
                title: "SONET - Synchronous Optical Network",
                description: "Short for Synchronous Optical Network, a standard for connecting fiber-optic transmission systems. SONET was proposed by Bellcore in the middle 1980s and is now an ANSI standard.SONET defines interface standards at the physical layer of the OSI seven-layer model. The standard defines a hierarchy of interface rates that allow data streams at different rates to be multiplexed. SONET establishes Optical Carrier (OC) levels from 51.8 Mbps (OC-1) to 9.95 Gbps (OC-192). Prior rate standards used by different countries specified rates that were not compatible for multiplexing. With the implementation of SONET, communication carriers throughout the world can interconnect their existing digital carrier and fiber optic systems.The international equivalent of SONET, standardized by the ITU, is called SDH."
            }, {
                title: "SORBS",
                description: "Acronym for Spam and Open Relay Blocking System.SORBS was originally an anti-spam project where a daemon would check, in real time, all servers from which it received e-mail to determine if that e-mail was sent via various types of proxy and open-relay servers. SORBS has evolved into SORBS DNSbl (DNS-based blacklist) which now includes more than 3 million listed hosts that are considered to be compromised (Web servers which have vulnerabilities that can be used by spammers)."
            }, {
                title: "source",
                description: "A place from which data is taken. Many computer commands involve moving data. The place from which the data is moved is called the source, whereas the place it is moved to is called the destination or target. If you copy a file from one directory to another, for example, you copy it from the source directory to the destination directory. The source and destination can be files, directories, or devices (that is, printers or storage devices).The node on a network from which data is sent to its destination."
            }, {
                title: "spamware",
                description: "Software that is used by spammers to send out automated spam e-mail. Spamware packages may also include an e-mail harvesting tool."
            }, {
                title: "spanning tree protocol",
                description: "Abbreviated STP, a link management protocol that is part of the IEEE 802.1 standard for media access control bridges. Using the spanning tree algorithm, STP provides path redundancy while preventing undesirable loops in a network that are created by multiple active paths between stations. Loops occur when there are alternate routes between hosts. To establish path redundancy, STP creates a tree that spans all of the switches in an extended network, forcing redundant paths into a standby, or blocked, state. STP allows only one active path at a time between any two network devices (this prevents the loops) but establishes the redundant links as a backup if the initial link should fail. If STP costs change, or if one network segment in the STP becomes unreachable, the spanning tree algorithm reconfigures the spanning tree topology and reestablishes the link by activating the standby path. Without spanning tree in place, it is possible that both connections may be simultaneously live, which could result in an endless loop of traffic on the LAN."
            }, {
                title: "spear phishing",
                description: "A type of phishing attack that focuses on a single user or department within an organization, addressed from someone within the company in a position of trust and requesting information such as login IDs and passwords.  Spear phishing scams will often appear to be from a company's own human resources or technical support divisions and may ask employees to update their username and passwords. Once hackers get this data  they can gain entry into secured networks. Another type of spear phishing attack will ask users to click on a link, which deploys spyware that can thieve data."
            }, {
                title: "split horizon",
                description: " A routing technique that eliminates the chance of a routing scheme creating routing loops, effectively making routing more efficient. When a router in a network with only one data path receives a data packet, it does not send routing information back along the path on which the packet traveled (i.e., to an adjacent router); it only sends the information forward so that there is no possibility of the packet being routed back along the path it originally traveled."
            }, {
                title: "Split Multi-Link Trunking",
                description: "Split Multi-Link Trunking (SMLT) is an improvement over Multi-Link Trunking (MLT), a method of link aggregation that allows multiple Ethernet links to be aggregated together, and handled as a single logical trunk. SMLT is the splitting of member links in a normal MLT trunk from an end device across two devices. These devices synchronize state across an Inter-Switch Link (IST) such that they appear to the connecting device to be a single device (switch block) and prevent any packet duplication. SMLT provides enhanced resiliency with sub-second failover while operating transparently to end-devices."
            }, {
                title: "split tunneling",
                description: "The process of allowing a remote VPN user to access a public network, most commonly the Internet, at the same time that the user is allowed to access resources on the VPN. This method of network access enables the user to access remote devices, such as a networked printer, at the same time as accessing the public network.An advantage of using split tunneling is that it alleviates bottlenecks and conserves bandwidth as Internet traffic does not have to pass through the VPN server. A disadvantage of this method is that it essentially renders the VPN vulnerable to attack as it is accessible through the public, non-secure network."
            }, {
                title: "sploitz",
                description: "Short for exploits, sploitz is a slang term used to mean vulnerabilities in software that can be used by hackers."
            }, {
                title: "SPN",
                description: "SPN, short for service principal name,  is the name by which a client uniquely identifies an instance of a service. If you install multiple instances of a service on computers throughout a forest, each instance must have its own SPN. A given service instance can have multiple SPNs if there are multiple names that clients might use for authentication. For example, an SPN always includes the name of the host computer on which the service instance is running, so a service instance might register an SPN for each name or alias of its host."
            }, {
                title: "SPOF",
                description: "Short for single point of failure, a generic phrase for any component of a system that upon failure will cause a malfunction in the entire system. A SPOF can be a hardware or electrical component or a software component.Each time a system expands (e.g., adding a workstation to a network or adding a new application to a network of workstations) the number of places where an SPOF can occur also expands. Typically, systems with redundancy will still operate with an SPOF."
            }, {
                title: "spoof",
                description: "To fool. In networking, the term is used to describe a variety of ways in which hardware and software can be fooled. IP spoofing, for example, involves trickery that makes a message appear as if it came from an authorized IP address. Also see e-mail spoofing.Spoofing is also used as a network management technique to reduce traffic. For example, most LAN protocols send out packets periodically to monitor the status of the network. LANs generally have enough bandwidth to easily absorb these network management packets. When computers are connected to the LAN over wide-area network (WAN) connections, however, this added traffic can become a problem. Not only can it strain the bandwidth limits of the WAN connection, but it can also be expensive because many WAN connections incur fees only when they are transmitting data. To reduce this problem, routers and other network devices can be programmed to spoof replies from the remote nodes. Rather than sending the packets to the remote nodes and waiting for a reply, the devices generate their own spoofedreplies."
            }, {
                title: "SPX",
                description: "Short for Sequenced Packet Exchange, a transport layer protocol (layer 4 of the OSI Model) used in Novell Netware networks. The SPX layer sits on top of the IPX layer (layer 3) and provides connection-oriented services between two nodes on the network. SPX is used primarily by client/server applications.Whereas the IPX protocol is similar to IP, SPX is similar to TCP. Together, therefore, IPX/SPX provides connection services similar to TCP/IP."
            }, {
                title: "spyware",
                description: "Any software that covertly gathers user information through the user's Internet connection without his or her knowledge, usually for advertising purposes. Spyware applications are typically bundled as a hidden component of freeware or shareware programs that can be downloaded from the Internet; however, it should be noted that the majority of shareware and freeware applications do not come with spyware. Once installed, the spyware monitors user activity on the Internet and transmits that information in the background to someone else. Spyware can also gather information about e-mail addresses and even passwords and credit card numbers.Spyware is similar to a Trojan horse in that users unwittingly install the product when they install something else. A common way to become a victim of spyware is to download certain peer-to-peer file swapping products that are available today.Aside from the questions of ethics and privacy, spyware steals from the user by using the computer's memory resources and also by eating bandwidth as it sends information back to the spyware's home base via the user's Internet connection. Because spyware is using memory and system resources, the applications running in the background can lead to system crashes or general system instability.Because spyware exists as independent executable programs, they have the ability to monitor keystrokes, scan files on the hard drive, snoop other applications, such as chat programs or word processors, install other spyware programs, read cookies, change the default home page on the Web browser, consistently relaying this information back to the spyware author who will either use it for advertising/marketing purposes or sell the information to another party.Licensing agreements that accompany software downloads sometimes warn the user that a spyware program will be installed along with the requested software, but the licensing agreements may not always be read completely because the notice of a spyware installation is often couched in obtuse, hard-to-read legal disclaimers."
            }, {
                title: "SQL injection",
                description: "A form of attack on a database-driven Web site in which the attacker executes unauthorized SQL commands by taking advantage of insecure code on a system connected to the Internet, bypassing the firewall. SQL injection attacks are used to steal information from a database from which the data would normally not be available and/or to gain access to an organization's host computers through the computer that is hosting the database. SQL injection attacks typically are easy to avoid by ensuring that a system has strong input validation."
            }, {
                title: "SS7",
                description: "Short for Signaling System 7, a telecommunications protocol defined by the International Telecommunication Union (ITU) as a way to offload PSTN data traffic congestion onto a wireless or wireline digital broadband network.SS7 is characterized by high-speed circuit switching and out-of-band signaling using Service Switching (SSPs), Signal Transfer Points (STPs), and Service Control Points (SCPs) (collectively referred to as signaling points, or SS7 nodes). Out-of-band signaling is signaling that does not take place over the same path as the data transfer (or conversation)--a separate digital channel is created (called a signaling link), where messages are exchanged between network elements at 56 or 64 kilobit per second.SS7 architecture is set up in a way so that any node could exchange signaling with any other SS7-capable node, not just signaling between switches that are directly connected.The SS7 network and protocol are used for:- basic call setup, management, and tear down- wireless services such as personal communications services (PCS), wireless roaming, and mobile subscriber authentication- local number portability (LNP)- toll-free (800/888) and toll (900) wireline services- enhanced call features such as call forwarding, calling party name/number display, and three-way calling- efficient and secure worldwide telecommunications"
            }, {
                title: "SSH - Secure Shell",
                description: "Developed by SSH Communications Security Ltd., Secure Shell is a program to log into another computer over a network, to execute commands in a remote machine, and to move files from one machine to another. It provides strong authenticationand secure communications over insecure channels. It is a replacement for rlogin, rsh, rcp, and rdist.SSH protects a network from attacks such as IP spoofing, IP source routing, and DNS spoofing. An attacker who has managed to take over a network can only force ssh to disconnect. He or she cannot play back the traffic or hijack the connection when encryptionis enabled.When using ssh's slogin (instead of rlogin) the entire login session, including transmission of password, is encrypted; therefore it is almost impossible for an outsider to collect passwords."
            }, {
                title: "SSH port forwarding",
                description: "An SSH service that provides secure and encrypted connections to traditionally non-encrypted services, such as e-mail or news. SSH port forwarding allows you to establish a secure SSH session and then tunnel TCP connections through it. It works by opening a connection to forward a local port to a remote port over SSH. The client software (e.g. your e-mail client) is then set to connect to the local port. With SSH port forwarding passwords are sent over an encrypted connection. Also called SSH tunneling."
            }, {
                title: "SSL - Secure Sockets Layer",
                description: "SSL (pronounced as separate letters) is short for Secure Sockets Layer.Secure Sockets Layer (SSL) is a protocol developed by Netscape for transmitting private documents via the Internet. SSL uses a cryptographic system that uses two keys to encrypt data − a public key known to everyone and a private or secret key known only to the recipient of the message."
            }, {
                title: "SSL BEAST",
                description: "Short for Browser Exploit Against SSL/TLS, SSL Beast is an exploit first, revealed in late September 2011, that leverages weaknesses in cipher block chaining (CBC) to exploit the Secure Sockets Layer (SSL) protocol. The CBC vulnerability can enable man-in-the-middle (MITM) attacks against SSL in order to silently decrypt and obtain authentication tokens, providing hackers with access to the data passed between a Web server and the Web browser accessing the server.While SSL BEAST attacks affect only the Transport Layer Security (TLS) 1.0 version of SSL and not later versions such as TLS 1.1 and 1.2, TLS 1.0 remains the overwhelmingly predominant version used by both Web servers and browsers. Following a Javascript-based demonstration of the SSL BEAST attack by researchers Juliano Rizzo and Thai Duong, developers of Google Chrome and other major Web browsers started taking steps to create workarounds for mitigating the risks of SSL BEAST attacks."
            }, {
                title: "Stagefright",
                description: "Stagefright refers to various security bugs that target a library of code within the Android mobile operating system. The libstagefright media library is a common element in Android versions 2.2 and higher, and flaws within the library tend to be integer overflows that can lead to potentially exploitable memory buffer overflow conditions.The Stagefright Android exploit was discovered by the security firm Zimperium, which first publicly reported the exploit on July 21, 2015. The following month Google committed to releasing a new monthly update cycle for the Android operating system at the Black Hat USA conference.Google issued the first monthly update for an initial batch of Stagefright-related bugs in August, 2015, followed by another patch released in October to address a second bundle of bugs dubbed Stagefright 2.0."
            }, {
                title: "star network",
                description: "A local-area network (LAN) that uses a star topology in which all nodes are connected to a central computer. The main advantages of a star network is that one malfunctioning node doesn't affect the rest of the network, and it's easy to add and remove nodes. The main disadvantage of star networks is that they require more cabling than other topologies, such as a bus or ring networks. In addition, if the central computer fails, the entire network becomes unusable.Standard twisted-pair Ethernet uses a star topology."
            }, {
                title: "stateful inspection",
                description: "Stateful inspection, also referred to as dynamic packet filtering, is a firewall architecture that works at the network layer."
            }, {
                title: "static NAT",
                description: "A type of NAT in which a private IP address is mapped to a public IP address, where the public address is always the same IP address (i.e., it has a static address). This allows an internal host, such as a Web server, to have an unregistered (private) IP address and still be reachable over the Internet."
            }, {
                title: "static routing",
                description: "Static routing, the alternative to dynamic routing,  is the process in which the system network administrator would manually configure network routers with all the information necessary for successful packet forwarding. The administrator constructs the routing table in every router by putting in the entries for every network that could be a destination. Static routes to network destinations are unchangeable."
            }, {
                title: "stealth virus",
                description: "A computer virus that actively hides itself from antivirus software by either masking the size of the file that it hides in or temporarily removing itself from the infected file and placing a copy of itself in another location on the drive, replacing the infected file with an uninfected one that it has stored on the hard drive."
            }, {
                title: "steganography",
                description: "The art and science of hiding information by embedding messages within other, seemingly harmless messages. Steganography works by replacing bits of useless or unused data in regular computer files (such as graphics, sound, text, HTML, or even floppy disks ) with bits of different, invisible information. This hidden information can be plain text, cipher text, or even images.Steganography sometimes is used when encryption is not permitted. Or, more commonly, steganography is used to supplement encryption. An encrypted file may still hide information using steganography, so even if the encrypted file is deciphered, the hidden message is not seen.Special software is needed for steganography, and there are freeware versions available at any good download site.Steganography (literally meaning covered writing) dates back to ancient Greece, where common practices consisted of etching messages in wooden tablets and covering them with wax, and tattooing a shaved messenger's head, letting his hair grow back, then shaving it again when he arrived at his contact point."
            }, {
                title: "storage virtualization",
                description: "Storage virtualization is the amalgamation of multiple network storage devices into what appears to be a single storage unit. Storage virtualization is usually implemented via software applications and often used in SAN (storage area network),  a high-speed subnetwork of shared storage devices, and makes tasks such as archiving, back-up, and recovery easier and faster. A similar phrase, virtualization-aware storage, facilitates management and monitoring of storage in virtualized environments. Learn more about virtualization-aware storage in this Webopedia definition."
            }, {
                title: "strong password",
                description: "A password that is difficult to detect by both humans and computer programs, effectively protecting data from unauthorized access. A strong password consists of at least six characters (and the more characters, the stronger the password) that are a combination of letters, numbers and symbols (@, #, $, %, etc.) if allowed. Passwords are typically case-sensitive, so a strong password contains letters in both uppercase and lowercase. Strong passwords also do not contain words that can be found in a dictionary or parts of the user��s own name."
            }, {
                title: "stub network",
                description: "A stub network is an internal network, usually a LAN (Local Area Network) that carries data packets only among local hosts. Data on a stub network is destined for an endpoint located on that network. Network traffic on a stub network is local in that it doesn't travel off the internal network."
            }, {
                title: "Stuxnet",
                description: "Stuxnet is a family of cleverly written malware worms that primarily target SCADA (Supervisory Control and Data Acquistition) control systems for large infrastructures such as industrial power plants. The original Stuxnet worm was first discovered in 2010, and numerous variants of Stuxnet have been identified since then, with most targeting organizations in the country of Iran. Stuxnet initially spreads via infected removable drives, particularly USB flash drives, before utilizing additional methods to infect other computers on private networks.  The original Stuxnet worm was designed to exploit four zero-day attack vulnerabilities in Microsoft Windows operating systems.Some computer security experts believe that an attack as sophisticated as Stuxnet could have only been conducted with nation-state support, although there haven’t been any confirmations to date as to which country or countries might have been involved in developing Stuxnet."
            }, {
                title: "subnet",
                description: "A portion of a network that shares a common address component. On TCP/IP networks, subnets are defined as all devices whose IP addresses have the same prefix. For example, all devices with IP addresses that start with 100.100.100. would be part of the same subnet. Dividing a network into subnets is useful for both security and performance reasons. IP networks are divided using a subnet mask."
            },
            {
                title: "subnet mask - subnetting",
                description: "Subnet mask is a mask used to determine what subnet an IP address belongs to. An IP address has two components, the network address and the host address. For example, consider the IP address 150.215.017.009. Assuming this is part of a Class B network, the first two numbers (150.215) represent the Class B network address, and the second two numbers (017.009) identify a particular host on this network."
            },
            {
                title: "Superfish",
                description: "Superfish is a form of adware that has the ability to hijack encrypted Web sessions and open a system up to potential HTTPS man-in-the-middle (MiTM) attacks. Superfish gained widespread attention in early 2015 when it was revealed that the PC manufacturer Lenovo was selling computers that had Superfish adware preinstalled."
            }, {
                title: "SURBL",
                description: "Short for Spam URI Real-time Block Lists, it is used to detect spam based on message body URIs (usually Web sites). SURBLs are not used to block spam senders. Instead they allow you to block messages that have spam hosts that are mentioned in message bodies. In order to use SURBL you need software that can parse URIs in message bodies, extract their hosts, and check those against a SURBL list."
            },
            {
                title: "SVC",
                description: "Short for switched virtual circuit, a temporary virtual circuit that is set up and used only as long as data is being transmitted. Once the communication between the two hosts is complete, the SVC disappears. In contrast, a permanent virtual circuit (PVC) remains available at all times."
            }, {
                title: "switched Ethernet",
                description: "An Ethernet LAN that uses switches to connect individual hosts or segments. In the case of individual hosts, the switch replaces the repeater and effectively gives the device full 10 Mbps bandwidth (or 100 Mbps for Fast Ethernet) to the rest of the network. This type of network is sometimes called a desktop switched Ethernet. In the case of segments, the hub is replaced with a switching hub.Traditional Ethernets, in which all hosts compete for the same bandwidth, are called shared Ethernets. Switched Ethernets are becoming very popular because they are an effective and convenient way to extend the bandwidth of existing Ethernets."
            }, {
                title: "switching hub",
                description: "Short for port-switching hub, a special type of hub that forwards packets to the appropriate port based on the packet's address. Conventional hubs simply rebroadcast every packet to every port. Since switching hubs forward each packet only to the required port, they provide much better performance. Most switching hubs also support load balancing, so that ports are dynamically reassigned to different LAN segments based on traffic patterns.Some newer switching hubs support both traditional Ethernet (10 Mbps) and Fast Ethernet (100 Mbps) ports. This enables the administrator to establish a dedicated, Fast Ethernet channel for high-traffic devices such as servers."
            }, {
                title: "swivel chair interface",
                description: "Swivel chair is a slang term for a common interface work-around that involves manually entering data into one system and then entering the same data into another system. The term is derived from the practice of the user turning from one system to another using a swivel chair. The swivel chair interface can be eliminated with better network management and unified interfaces and data integration."
            }, {
                title: "Symantec Corp.",
                description: "Symantec provides products and services to help individuals and enterprises assure the security, availability, and integrity of their information. Headquartered in Cupertino, Calif., Symantec has operations in more than 40 countries. At research and development facilities around the world, more than 3,500 Symantec engineers are building solutions to help individuals and enterprises assure the security, availability, and integrity of their information. One of Symantec's most well-known brands is the Norton (antivirus) brand which helps protect users and systems against viruses, worms, and other security risks, such as spyware and spam. Other Symantec brands include pcAnywhere, WinFax PRO, PartitionMagic, Symantec AntiVirus, Symantec Gateway Security, Symantec Network Security, Insight Inquire, Backup Exec and the Veritas Storage Foundation family of products."
            }, {
                title: "symmetric encryption",
                description: "A type of encryption where the same key is used to encrypt and decrypt the message. This differs from asymmetric (or public-key) encryption, which uses one key to encrypt a message and another to decrypt the message."
            }, {
                title: "symmetric-key cryptography",
                description: "An encryption system in which the sender and receiver of a message share a single, common key that is used to encrypt and decrypt the message. Contrast this with public-key cryptology, which utilizes two keys - a public key to encrypt messages and a private key to decrypt them.Symmetric-key systems are simpler and faster, but their main drawback is that the two parties must somehow exchange the key in a secure way. Public-key encryption avoids this problem because the public key can be distributed in a non-secure way, and the private key is never transmitted."
            }, {
                title: "synchronous groupware",
                description: "Groupware that works in real-time allowing multiple participants to collaborate in groups at the same time. Examples of synchronous groupware include whiteboarding, text-based chat systems or videoconferencing. Contrast with asynchronous groupware."
            }, {
                title: "system management",
                description: "The general area of Information Technology (IT) that concerns configuring and managing computer resources, especially network resources."
            }, {
                title: "Systems Network Architecture - SNA",
                description: "SNA is short for Systems Network Architecture.Systems Network Architecture is a set of network protocols developed by IBM. Originally designed in 1974 for IBM's mainframe computers, SNA has evolved over the years so that it now also supports peer-to-peer networks of workstations."
            }, {
                title: "SYSVOL - System Volume",
                description: "In Microsoft Windows, the System Volume (Sysvol) is a shared directory that stores the server copy of the domain's public files that must be shared for common access and replication throughout a domain. The term SYSVOL refers to a set of files and folders that reside on the local hard disk of each domain controller in a domain and that are replicated by the File Replication service (FRS). Network clients access the contents of the SYSVOL tree by using the NETLOGON and SYSVOL shared folders. Sysvol uses junction points-a physical location on a hard disk that points to data that is located elsewhere on your disk or other storage device-to manage a single instance store."
            }, {
                title: "TACACS",
                description: "Short for Terminal Access Controller Access Control System, an authentication protocol that was commonly used in UNIX networks. TACACS allows a remote access server to communicate with an authentication server in order to determine if the user has access to the network.TACACS is now somewhat dated and is not used as frequently as it once was. A later version of TACACS was called XTACACS (Extended). These two versions have generally been replaced by TACACS+ and RADIUS in newer or updated networks. TACACS+ is a completely new protocol and is therefore not compatible with TACACS or XTACACS."
            }, {
                title: "TAN",
                description: "Short for tiny area network, a LAN with only a few nodes. TANs are typically installed in homes or small office environments so that the devices can share resources, such as modems, files or printers."
            }, {
                title: "targeted attack",
                description: "In computer and network security terminology,  a targeted attack is one that has been aimed at a specific user, company or organization. These attacks are not widespread, but rather are designed to attack and breech a specific target"
            }, {
                title: "TC",
                description: "Short for Telecommunications Closet, an area, typically a room or closet, that houses all the equipment associated with telecommunications wiring systems. The TC also serves as a termination point for the horizontal cabling system of a network, the point of circuit administration and contains the network's distribution panels, cross-connects and backbone. All telecommunications wiring is channeled through the TC. The TC may also house auxiliary power supplies for workstation equipment. The larger the network, the more TCs are needed since the end workstations can only be a certain distance away from the TC because of constraints in the type of wiring used. Networks that span multi-level buildings, such as hospitals, typically have a TC on each floor."
            }, {
                title: "TCB",
                description: "Short for trusted computing base. TCB refers to the totality of protection mechanisms (hardware, firmware and software) that provide a secure computing environment. The TCB includes everything that must be trusted -- access control, authorization and authentication procedures, cryptography, firewalls, virus protection, data backup, and even human administration -- in order for the right level of security to work."
            }, {
                title: "TCO - Total Cost of Ownership",
                description: "Total Cost of Ownership (TCO) is a common phrase used to represent how much it actually costs to own a PC, server, or any combination of hardware system or devices.The TCO includes the following:||||Original cost of the computer and software||||Hardware and software upgrades||||Maintenance||||Technical support||||Training.Most estimates place the TCO at about 3 to 4 times the actual purchase cost. The TCO has become a rallying cry for companies supporting network computers. They claim that not only are network computers less expensive to purchase, but the TCO is also much less because network computers can be centrally administered and upgraded."
            }, {
                title: "TCP SYN attack",
                description: "A sender transmits a volume of connections that cannot be completed. This causes the connection queues to fill up, thereby denying service to legitimate TCP users. A TCP SYN attack (also called SYN attack) is a common type of Denial of Service attack."
            }, {
                title: "TCP Wrapper",
                description: "A computer program that provides firewall services to UNIX users on a network by monitoring incoming packets to determine if the external device is authorized to have access. TCP Wrapper monitors and filters incoming requests for the SYSTAT, FINGER, FTP, TELNET, RLOGIN, RSH, EXEC, TFTP, TALK, and other network services."
            }, {
                title: "TCP-Friendly Rate Control",
                description: "TCP-Friendly Rate Control (TFRC) is a congestion control mechanism designed for unicast flows operating in an Internet environment and competing with TCP traffic. It is designed for applications that use a fixed packet size, and vary their sending rate in packets per second in response to congestion. TFRC is a receiver-based mechanism, with the calculation of the congestion control information (i.e., the loss event rate) in the data receiver rather in the data sender. This is well-suited to an application where the sender is a large server handling many concurrent connections, and the receiver has more memory and CPU cycles available for computation."
            }, {
                title: "team groupware",
                description: "A category of software that enables colleagues, especially geographically dispersed colleagues, to collaborate on projects. Typically, team groupware uses the Internet and the World Wide Web to facilitate communication among the team."
            }, {
                title: "Teamware",
                description: "Teamware is a trademark of Teamware Group Oy. Also see team groupware."
            }, {
                title: "Teardrop attack",
                description: "A DoS attack where fragmented packets are forged to overlap each other when the receiving host tries to reassemble them."
            }, {
                title: "teleconference",
                description: "To hold a conference via a telephone or network connection. Computers have given new meaning to the term because they allow groups to do much more than just talk. Once a teleconference is established, the group can share applications and mark up a common whiteboard. There are many teleconferencing applications that work over private networks. One of the first to operate over the Internet is Microsoft's NetMeeting."
            }, {
                title: "telematics",
                description: "Refers to the broad industry related to using computers in concert with telecommunications systems. This includes dial-up service to the Internet as well as all types of networks that rely on a telecommunications system to transport data.The term has evolved to refer to systems used in automobiles that combine wireless communication with GPS tracking. The term is further evolving to include a wide range of telecommunication functions that originate or end inside automobiles."
            }, {
                title: "telemedicine",
                description: "Telemedicine refers to the use of medical information provided by (or between) healthcare professionals to patients via electronic means such as e-mail, text messaging, video conferencing / webcams, and mobile devices like smartphones and tablets.Doctors are increasingly implementing telemedicine in their practices to provide and receive information from patients electronically without the need for a face-to-face consultation or phone call, and they're also using telemedicine procedures to collaborate with other doctors through telemedicine to provide accurate and timely advice and diagnoses for health issues."
            }, {
                title: "Telenet",
                description: "Telnet is one of the largest public data networks (PDNs) in the United States. Telenet is owned by U.S. Sprint Communications Corporation. A competing network, called Tymnet, is owned by McDonnell Douglas. Telenet serves as the communications backbone for many online services."
            }, {
                title: "Telnet",
                description: "Telnet is a terminal emulation program for TCP/IP networks such as the Internet. The Telnet program runs on your computer and connects your PC to a server on the network. You can then enter commands through the Telnet program and they will be executed as if you were entering them directly on the server console. This enables you to control the server and communicate with other servers on the network. To start a Telnet session, you must log in to a server by entering a valid username and password. Telnet is a common way to remotely control Web servers."
            }, {
                title: "Tempest",
                description: "In computer technology, the name Tempest originated with the U.S. military in the 1960s as the name of a classified study of the security of telecommunications devices that emit electromagnetic radiation (EMR). Every electronic, electro-optical or electromechanical device gives off some type of electromagnetic signals, whether or not the device was designed to be a transmitter. This is why the use of cellular phones is not permitted on airplanes - their unintentional signals can interfere with navigational equipment. The EMR that leaks from devices can be intercepted and, using the proper equipment, reconstructed on a different device. The U.S. government began studying this phenomenon in order to prevent breaches in military security, but today the term has made its way into popular culture because of the proliferation of pervasive computing."
            }, {
                title: "terminator",
                description: " A device attached to the end-points of a bus network or daisy-chain. The purpose of the terminator is to absorb signals so that they do not reflect back down the line. Ethernet networks require a terminator at both ends of the bus, and SCSI chains require a single terminator at the end of the chain."
            }, {
                title: "Text For Banner",
                description: "Text For Banner or Text Banner is a setting commonly found on broadband router firmware. A text banner is a message a user can set that is displayed when someone logs in to the router. Text banners usually include a message to indicate that unauthorized access is prohibited."
            }, {
                title: "throughput",
                description: "The amount of data transferred from one place to another or processed in a specified amount of time. Data transfer rates for disk drives and networks are measured in terms of throughput. Typically, throughputs are measured in kbps, Mbps and Gbps."
            }, {
                title: "tiered storage",
                description: "Tiered storage is an underlying principle of ILM (information lifecycle management). It is a storage networking method where data is stored on various types of media based on performance, availability and recovery requirements. For example, data intended for restoration in the event of data loss or corruption could be stored locally -- for fast recovery -- while data for regulatory purposes could be archived to lower cost disks.Today's tiered storage infrastructures range from simple two-tier architecture consisting of SCSI or fibre channel attached disk and tape to more complex infrastructures, which in some cases are comprised of five-to-six tiers. Regardless of the number of tiers, organizations are looking to tiered storage and ILM to lower cost and improve operational efficiency.Implementing tiered storage infrastructures can dramatically decrease the cost associated with achieving an RPO and RTO of zero. Classification of data can provide different RPOs and RTOs based on application and business requirements.  Policy-based data migration ensures that the right data is in the right place at the right time."
            }, {
                title: "timebomb",
                description: "A malicious program that is programmed to detonate at a specific time and release a virus onto the computer system or network."
            }, {
                title: "TLS - Transport Layer Security",
                description: "Short for Transport Layer Security, a protocol that guarantees privacy and data integrity between client/server applicationscommunicating over the Internet.The TLS protocol is made up of two layers:||||The TLS Record Protocol -- layered on top of a reliable transport protocol, such as TCP, it ensures that the connection is private by using symmetric data encryption and it ensures that the connection is reliable. The TLS Record Protocol also is used for encapsulationof higher-level protocols, such as the TLS Handshake Protocol.||||The TLS Handshake Protocol -- allows authentication between the server and client and the negotiation of an encryption algorithm and cryptographic keys before the application protocol transmits or receives any data.TLS is application protocol-independent. Higher-level protocols can layer on top of the TLS protocol transparently."
            }, {
                title: "toaster",
                description: "Originally used to describe outdated or slow hardware (referring to the power of a kitchen toaster), the term is now often used to describe a product that joins various components in one easy-to-use package (referring to the ease of using a kitchen toaster). For example, a video toaster is a desktop video editor that features all the software and hardware needed to create broadcast-quality video in one integrated system. An intranet toaster is an all-in-one server that can be connected to an existing LAN and configured through a Web browser. The term can also refer to both qualities -- easy-to-use but less powerful than other products."
            }, {
                title: "token",
                description: "In programming languages, a single element of a programming language. For example, a token could be a keyword, an operator, or a punctuation mark.In programming languages, a single element of a programming language. For example, a token could be a keyword, an operator, or a punctuation mark.In security systems, a small device the size of a credit card that displays a constantly changing ID code. A user first enters a password and then the card displays an ID that can be used to log into a network. Typically, the IDs change every 5 minutes or so."
            }, {
                title: "token bus network",
                description: "A type of local-area network (LAN) that has a bus topology and uses a token -passing mechanism to regulate traffic on the bus. A token bus network is very similar to a token ring network, the main difference being that the endpoints of the bus do not meet to form a physical ring. Token bus networks are defined by the IEEE 802.4 standard."
            }, {
                title: "token passing",
                description: "A type of CAM. Token passing uses a token, or series of bits, to grant a device permission to transmit over the network. Whichever device has the token can put data into the network. When its transmission is complete, the device passes the token along to the next device in the topology. System rules in the protocol specifications mandate how long a device may keep the token, how long it can transmit for and how to generate a new token if there isn't one circulating. Also see contention and polling."
            }, {
                title: "token-ring network",
                description: "A type of computer network in which all the computers are arranged (schematically) in a circle. A token, which is a special bit pattern, travels around the circle. To send a message, a computer catches the token, attaches a message to it, and then lets it continue to travel around the network."
            }, {
                title: "topology",
                description: "The shape of a local-area network (LAN) or other communications system. Topologies are either physical or logical.There are four principal topologies used in LANs.||||bus topology: All devices are connected to a central cable, called the bus or backbone. Bus networks are relatively inexpensive and easy to install for small networks. Ethernet systemsuse a bus topology.||||ring topology :All devices are connected to one another in the shape of a closed loop, so that each device is connected directly to two other devices, one on either side of it. Ring topologies are relatively expensive and difficult to install, but they offer high bandwidth and can span large distances.||||star topology: All devices are connected to a central hub. Star networks are relatively easy to install and manage, but bottlenecks can occur because all datamust pass through the hub.||||tree topology: A tree topology combines characteristics of linear bus and star topologies. It consists of groups of star-configured workstations connected to a linear bus backbone cable."
            }, {
                title: "TOPS - transparent operating system",
                description: "TOPS, an acronym for transparent operating system, is a type of local-area network designed by Sun Microsystems that can combine Apple Macintosh computers, PCs, and Sun workstations on the same network. A particular strength of TOPS is that the networking software is transparent, meaning that users do not need to adjust to a new operating environment. PC users see their PC interface and Mac users see the Mac interface.TOPS uses the Macintosh computer's built-in AppleTalk protocol. It is a peer-to-peer network, which means that it does not require any computers to be set aside as file servers. Authorized users can access files from any disk drive connected to the network."
            }, {
                title: "Tor",
                description: "An anonymous Internet communication system based on a distributed network. Tor is a toolset for a wide range of organizations and people that want to improve their safety and security on the Internet. Using Tor can help you remain anonymous while Web browsing, instant messaging, using IRC, SSH, or other applications which use the TCP protocol. The Tor network takes a random pathway through several servers that cover your tracks so no observer at any single point can tell where the data came from or where it's going.  Tor also provides a platform on which software developers can build new applications with built-in anonymity, safety and privacy features."
            }, {
                title: "Touch ID",
                description: "Touch ID is a fingerprint reader on newer iPhone and iPad devices that enables users to quickly sign in to their device as well as authorize transactions without needing to enter a passcode.Apple's Touch ID fingerprint identity sensor, as the company calls it, uses capacitive touch technology to detect a user's fingerprint, and then uses the authorization to efficiently unlock the user's smartphone, tablet or notebook; purchase apps or other digital content within iTunes and other Apple digital media stores; authenticate Apple Pay purchases or in-app purchases and more."
            }, {
                title: "TP monitor",
                description: "Short for transaction processing monitor, a program that monitors a transaction as it passes from one stage in a process to another. The TP monitor's purpose is to ensure that the transaction processes completely or, if an error occurs, to take appropriate actions.TP monitors are especially important in three-tier architectures that employ load balancing because a transaction may be forwarded to any of several servers. In fact, many TP monitors handle all the load balancing operations, forwarding transactions to different servers based on their availability."
            }, {
                title: "TPS",
                description: "Short for transactions per second, a measurement used to determine how many transactions have been processed in one second in transaction-oriented systems.Short for Transaction Process System it is a type of information system (IS) that collects, stores, modifies and retrieves transaction of an organization. Here the word transaction is used to mean any event that generates or modifies data stored in the IS. For example batch processing is an example of TPS."
            }, {
                title: "traceroute",
                description: "Traceroute is a utility that traces a packet from your computer to an Internet host, showing how many hops the packet requires to reach the host and how long each hop takes. If you're visiting a Web site and pages are appearing slowly, you can use traceroute to figure out where the longest delays are occurring."
            }, {
                title: "trackware",
                description: "Any undesirable software program that is able to track a user's system activity or gather system information and provide the data to a third party. Trackware does not gather any personally identifiable information."
            }, {
                title: "traffic",
                description: " The load on a communications device or system. One of the principal jobs of a system administrator is to monitor traffic levels and take appropriate actions when traffic becomes heavy.The measurement of the amount of users that visit a Web site."
            }, {
                title: "traffic meter",
                description: "A router (or Wi-Fi router) feature that will monitor the data consumption (upload and download) of all the devices on your network and notify you when you approach a predefined threshold. A traffic meter is useful if your ISP is enforcing a maximum monthly data transfer allocation (typically this is 250-GB)."
            }, {
                title: "transmission path",
                description: "Also referred to as a transmission channel, the path between two nodes of a network that a data communication follows. The term can refer to the physical cabling that connects the nodes on a network, the signal that is communicated over the pathway or a subchannel in a carrier frequency."
            }, {
                title: "transparent bridge",
                description: "Transparent bridges are devices which connects more than one network segments with other bridges to make all routing decisions. A transparent bridge is essentially used to learn the MAC addresses of all nodes and their associated port, to filter incoming frames whose destination MAC addresses are located on the same incoming port, and to forward incoming frames to the destination MAC through their associated port@.There are two types of Transparent Bridge Modes:||||Store-and-Forward: Stores the entire frame and verifies the CRC before forwarding the frame. If a CRC error is detected, the frame is discarded.||||Cut-Through: Forwards the frame just after it reads the destination MAC address without performing a CRC check. "
            }, {
                title: "TRILL - Transparent Interconnect of Lots of Links",
                description: "TRILL is short for Transparent Interconnect of Lots of Links.The Transparent Interconnection of Lots of Links (TRILL) is an IETF specification that enables multipathing in the data center. The TRILL protocol provides transparent Layer 2 forwarding using encapsulation with a hop count and IS-IS link state routing."
            }, {
                title: "Triple DES",
                description: "Also referred to as 3DES, a mode of the DES encryption algorithm that encrypts data three times. Three 64-bit keys are used, instead of one, for an overall key length of 192 bits (the first encryption is encrypted with second key, and the resulting cipher text is again encrypted with a third key)."
            }, {
                title: "Trojan horse",
                description: "A destructive program that masquerades as a benign application. Unlike viruses, Trojan horses do not replicate themselves but they can be just as destructive. One of the most insidious types of Trojan horse is a program that claims to rid your computer of viruses but instead introduces viruses onto your computer.The term comes from the a Greek story of the Trojan War, in which the Greeks give a giant wooden horse to their foes, the Trojans, ostensibly as a peace offering. But after the Trojans drag the horse inside their city walls, Greek soldiers sneak out of the horse's hollow belly and open the city gates, allowing their compatriots to pour in and capture Troy."
            }, {
                title: "Trusted Platform Module - TPM",
                description: "The Trusted Platform Module (TPM) is a hardware device that is basically a secure micro-controller (a chip) with added cryptographic functionality. The purpose of the Trusted Platform Module is to work with supporting software and firmware to prevent unauthorized access to a notebook computer and devices. The TPM contains a hardware engine to perform up to 2048-bit RSA encryption/decryption.The TPM uses its built-in RSA engine during digital signing and key wrapping operations. Most modern computers have a TPM or you can purchase as a module if you build your own computer. Today software platforms including Microsoft BitLocker and many others automatically use a TPM to transparently encrypt your files."
            }, {
                title: "TSN - Transmission Sequence Number",
                description: "Abbreviated as TSN, a Transmission Sequence Number is a 32-bit sequence number used internally by SCTP (Stream Control Transmission Protocol). A TSN is attached to each unit of information within an SCTP packet (also called a chunk) containing user data to permit the receiving SCTP endpoint to acknowledge its receipt."
            }, {
                title: "Tunnel Broker",
                description: "In computer networking terminology, a tunnel broker is the phrase used to describe a service that provides a network tunnel. The Tunnel Broker model is based on dedicated servers called Tunnel Brokers that automatically manage tunnel requests coming from users. The most common usage of the phrase is in reference to IPv6, where a tunnel broker provides IPv6 tunnels to Web sites and users. The Network Working Group defines IPv6 Tunnel Broker in RFC 3053. The IPv6 global Internet uses a lot of tunnels over the existing IPv4 infrastructure. The tunnels are difficult to configure and maintain and too complex for the isolated end user, so the concept of the tunnel broker was presented to help early IPv6 adopters to hook up to an existing IPv6 network."
            }, {
                title: "tunneling",
                description: "A technology that enables one network to send its data via another network's connections. Tunneling works by encapsulating a network protocol within packets carried by the second network. For example, Microsoft's PPTP technology enables organizations to use the Internet to transmit data across a VPN. It does this by embedding its own network protocol within the TCP/IP packets carried by the Internet.Tunneling is also called encapsulation."
            }, {
                title: "Tunneling Virus",
                description: "A type of virus that attempts installation beneath the antivirus program by directly intercepting the interrupt handlers of the operating system to evade detection."
            }, {
                title: "turing number",
                description: "Abbreviated as TN, turning number is a randomly generated security code, usually a series of digits, displayed as an image that users may need to read and copy into a form field in order to submit or validate a form submission online via a Web browser. Turing numbers are used to ensure there is a human user instead of automated (bot) submissions. Turing numbers are commonly used on e-commerce Web sites or promotional or contest Web sites —anywhere there is a need to avoid automated submissions by bots."
            }, {
                title: "Twishing",
                description: "Twishing is the act of sending a message to a Twitter user in an attempt to obtain his or her name and password. The message may instruct the recipient to visit a Web site where he or she is asked to log in. The Web site, however, is bogus and set up only to steal the user's information.Twishing is Like PhishingTwishing is a combination of the words Twitter and phishing. The idea is that bait is given out. The concept behind the term phishing to Twitter users with the hopes that while most will ignore the bait, a small percentage will be tricked into revealing their user names and passwords. Twishing may also be seen written in lowercase as twishing."
            }, {
                title: "Tymnet",
                description: "Tymnet is one of the largest public data networks (PDNs) in the United States. Tymnet is owned by MCI. A competing network, called Telenet, is owned by U.S. Sprint Communications Corporation."
            }, {
                title: "UAC - User Account Control",
                description: "In Windows Vista, User Account Control (UAC) is a feature that was designed to prevent unauthorized changes to your computer. When functions that could potentially affect your computer's operation are made, UAC will prompt for permission or an administrator's password before continuing with the task."
            }, {
                title: "Uberveillance",
                description: "A slang term used to describe an above and beyond, an exaggerated, an omnipresent 24/7 electronic surveillance. Not only does the term suggest a surveillance that is always on but also surveillance that is always with you, referring to a surveillance technology that is embedded within the human body (e.g. Big Brother on the inside, looking out)."
            }, {
                title: "UBR",
                description: "Short for unspecified bit rate, or Class D quality of service, an ATM bandwidth-allocation service that does not guarantee any throughput levels and uses only available bandwidth. UBR is often used when transmitting data that can tolerate delays."
            }, {
                title: "uDAPL",
                description: "Defined by the DAT (Direct Access Transport) Collaborative, the User Direct Access Programming Library or uDAPL, is a specification and a library that defines a single set of user APIs for all RDMA-capable transports."
            }, {
                title: "unicast address",
                description: "A unicast address is any address specifying a single network device. Packets sent to a unicast address are delivered to the node containing the interface identified by the address."
            }, {
                title: "Unified Computing System",
                description: "Abbreviated as Cisco UCS, the Unified Computing System is designed to simplify traditional architectures and dramatically reduce the number of devices that must be purchased, cabled, configured, powered, cooled, and secured in the data center.  The Cisco Unified Computing System is a next-generation data center platform that unites compute, network, storage access, and virtualization into a cohesive system designed to reduce TCO and increase business agility. The system integrates a low-latency, lossless 10GE unified network fabric with enterprise-class, x86-architecture servers. "
            }, {
                title: "unified storage",
                description: "A single, integrated storage infrastructure that functions as unification engines to simultaneously support Fibre Channel, IP Storage Area Networks (SAN) and Network Attached Storage (NAS) data formats. Also called network unified storage (NUS)."
            }, {
                title: "Unified Threat Management",
                description: "Unified Threat Management (UTM) is a term first used by IDC to describe a category of security appliances which integrates a range of security features into a single appliance. UTM appliances combine firewall, gateway anti-virus, and intrusion detection and prevention capabilities into a single platform. UTM is designed protect users from blended threats while reducing complexity."
            }, {
                title: "UPnP",
                description: "Short for Universal Plug and Play, a networking architecture that provides compatibility among networking equipment, software and peripherals of the 400+ vendors that are part of the Universal Plug and Play Forum.UPnP works with wired or wireless networks and can be supported on any operating system. UPnP boasts device-driver independence and zero-configuration networking."
            }, {
                title: "upstream",
                description: "Upstream is a transmission from an end user to a server. An upstream transmission can be in the form of a signal being transmitted from a workstation to a server across a network, such as a LAN, or a signal being sent from a customer to a cable service provider. A transmission from a server to an end user is referred to as downstream."
            }, {
                title: "Use After Free",
                description: "Use-After-Free vulnerabilities are a type of memory corruption flaw that can be leveraged by hackers to execute arbitrary code.Use After Free specifically refers to the attempt to access memory after it has been freed, which can cause a program to crash or, in the case of a Use-After-Free flaw, can potentially result in the execution of arbitrary code or even enable full remote code execution capabilities."
            }, {
                title: "User-to-Network Interface (UNI)",
                description: "A term used in ATM and Frame Relay networks, UNI is the interface between the ATM end user and a private ATM switch. It also can represent the interface between a private ATM switch and the public carrier ATM network."
            }, {
                title: "username",
                description: "A name used to gain access to a computer system. Usernames, and often passwords, are required in multi-user systems. In most such systems, users can choose their own usernames and passwords.Usernames are also required to access some bulletin board and online services."
            }, {
                title: "Utopic Unicorn (Ubuntu Codename)",
                description: "Utopic Unicorn is the Ubuntu codename for version 14.10 of the Ubuntu Linux-based operating system. Officially released in October 2014, Utopic Unicorn follows the Trusty Tahr (v14.04 LTS) release and introduces a variety of improved application deployment and orchestration capabilities.Other additions in the Ubuntu Utopic Unicorn release include the new Linux 3.16 kernel, the Juno release of OpenStack, a new AppArmor with fine-grained socket control, and updated LibreOffice and GNOME components."
            }, {
                title: "UUCP - Unix-to-Unix Copy",
                description: "Short for Unix-to-Unix Copy, a Unix utility and protocol that enables one computer to send files to another computer over a direct serial connection or via modems and the telephone system. For most file transfer applications, UUCP has been superseded by other protocols, such as FTP, SMTP and NNTP."
            }, {
                title: "U_Port",
                description: "In Fibre Channel the Universal port (U_Port) is one that has not yet assumed a specific function in the fabric. It is a generic switch port that can operate as an E_Port, F_Port, or as a FL_Port."
            }, {
                title: "vampire tap",
                description: "A cable connection used to connect transceivers to a Thicknet coaxial cable in an Ethernet network in a bus topology. Instead of cutting the cable and attaching connectors to both ends of the severed coaxial cable, a vampire tap pierces through (hence the name vampire) the insulating layer of the cable and makes direct contact with the cable��s conducting core.Also called a piercing tap."
            }, {
                title: "VAN",
                description: "Acronym for Value Added NetworkA VAN, or Value Added Network refers to a private network provider that leases communication lines to its subscribers. VANs provides specialized services such as assisting with EDI (electronic data interchange), extra security, message delivery, or access to a particular database."
            }, {
                title: "VAN access point",
                description: "A VAN (Value Added Network) access point is the subscriber's connection to the VAN and represents the networking endpoint of a VAN."
            }, {
                title: "VAN mailbox",
                description: "Users of a VAN (Value Added Network) can send messages to and retrieve messages from a mailbox. This is a specialized subscriber service that will hold messages until the subscriber requests them."
            }, {
                title: "VAPI",
                description: "Virus Application Programming Interface, or Virus API (VAPI) is also referred to as Antivirus API (AVAPI), or Virus Scanning API (VSAPI).Virus Scanning API 1.0 was introduced in Microsoft Exchange Server 5.5 Service Pack 3 (SP3) and was standard until the release of Exchange 2000. Many improvements have been made to Virus Scanning API 1.0 to improve performance with Exchange Server. When you use a VAPI scanner and a client tries to open a message, a comparison is made to make sure that the message body and attachment have been scanned by the current virus signature file. If the current vendor or signature file has not scanned the content, the corresponding message component is submitted to the antivirus software vendor for scanning before that message component is released to the client."
            }, {
                title: "variable length subnet mask",
                description: "Variable Length Subnet Mask, abbreviated as VLSM, is a means to specify a different subnet mask for the same network number on different subnets. With VLSM, a network administrator can use a long mask on networks with few hosts and a short mask on subnets with many hosts. To use VLSM, the routing protocol must support it."
            }, {
                title: "variant",
                description: "In virus and malware terms, a variant refers to new strains and slightly modified version of malware. Malware is often modified with new variants released to get as much mileage as possible from the original code."
            }, {
                title: "vBNS",
                description: "Short for very high-speed Backbone Network Service, an experimental wide-area network backbone sponsored by the National Science Foundation (NSF) and implemented by MCI. vNBS has replaced NSFnet and is designed to serve as a platform for testing new, high-speed Internet technologies and protocols. It currently links several Supercomputer Centers (SCCs) and Network Access Points (NAPs) at OC-12 speeds (622 Mbps). By 1998, it will support data, voice and video traffic at 2.5 Gbps."
            }, {
                title: "VBR",
                description: "Short for variable bit rate, or Class B quality of service, an ATM bandwidth-allocation service that allows users to specify a throughput capacity (i.e., a peak rate) and a sustained rate but data is not sent evenly. VBR is often used when transmitting compressed packetized voice and video data, such as videoconferencing."
            }, {
                title: "VC",
                description: "Short for Visual Cryptography, a type of image encryption that works without needing complex calculations to decrypt. Visual cryptography uses the characteristics of human vision to decrypt encrypted images.  Short for videoconferencing."
            }, {
                title: "vCHS - vCloud Hybrid Service",
                description: "VMware's vCloud Hybrid Service (vCHS) is an Infrastructure-as-a-Service (IaaS) solution that enables customers to use virtual networking to securely extend their existing Layer 2 / Layer 3 networks from the data center to the cloud-based vCloud Hybrid Service.vCloud Hybrid Service is an extension of the company's private cloud-based vCloud Suite that was developed to help customers bridge their existing private cloud infrastructure to the public cloud. The vCHS and its virtual machines can be accessed, managed and migrated by VMware vSphere administrators from the vSphere client using the vCloud Connector plug-in.The vCHS service is currently offered by VMware in two formats: a vCloud Hybrid Service Dedicated Cloud that provides physically isolated and reserved compute resources, and the less expensive vCloud Hybrid Service Virtual Private Cloud, which offers a multi-tenant compute resource model but with dedicated allocations for customers."
            }, {
                title: "VCI",
                description: "Short for virtual channel identifier, a 16-bit field in an ATM cell��s header that identifies the cell��s next destination as it travels through an ATM network (similar to Frame Relay��s DLCI). A virtual channel is a logical connection between two end devices on an ATM network.Also see VPI. An ATM switch uses either the VPI, the VCI or a combination of both to route the cell."
            }, {
                title: "Vein ID System",
                description: "A type of biometrics identification system that uses veins in a person's body to establish identity. Vein ID Systems use infrared light to scan the user's hand and look for a pattern of veins in order to make an identification match. Both Hitachi and Fujitsu have developed commercial Vein ID Systems."
            }, {
                title: "VENOM vulnerability",
                description: "VENOM refers to a security vulnerability that results from a buffer overflow in a kernel-level driver included in many default virtualized environments. The VENOM vulnerability has the potential to provide attackers with access to the host operating system and, as a result, other guest operating systems on the same host.VENOM is of particular concern to enterprises, as it can compromise corporate data centers and cloud services, which tend to rely heavily on virtualized systems throughout their operations."
            }, {
                title: "verification",
                description: " In a biometric security system, the process of comparing a biometric sample against a single reference template of a specific user in order to confirm the identity of the person trying to gain access to a system."
            }, {
                title: "verti-port",
                description: "A Web site that focuses on a particular industry, subject matter, or target group. The online retailer Amazon.com is a verti-port pioneer that until recently concentrated solely on books. Internet.com and Industry.net are verti-ports in Internet and engineering. Also referred to as miniportals."
            }, {
                title: "vEth - virtual Ethernet",
                description: "Virtual Ethernet (vEth) is a virtual interface within a network switch that dynamically provisions virtual machine (VM) operations based on network policies stored in the switch. The IEEE 802.1Qbg working group is responsible for developing the official virtual Ethernet (vEth) specification, and is tasked with creating a virtual Ethernet standard that will provide access for network controls in virtualized environments comparable to the controls available in physical networks."
            }, {
                title: "virtual circuit",
                description: "A connection between two devices that acts as though it's a direct connection even though it may physically be circuitous. The term is used most frequently to describe connections between two hosts in a packet-switching network. In this case, the two hosts can communicate as though they have a dedicated connection even though the packets might actually travel very different routes before arriving at their destination. An X.25 connection is an example of a virtual circuit."
            }, {
                title: "virtual honeypot",
                description: "A software program that is designed to appear to be a real functioning network but is actually a decoy built specifically to be probed and attacked by malicious users. In contrast to a honeypot, which is typically a hardware device that lures users into its trap, a virtual honeypot uses software to emulate a network."
            }, {
                title: "virtual IP address",
                description: "Abbreviated as VIPA, a virtual IP address is an IP address that is shared among multiple domain names or multiple servers. A virtual IP address eliminates a host's dependency upon individual network interfaces. Incoming packets are sent to the system's VIPA address, but all packets travel through the real network interfaces."
            }, {
                title: "Virtual IT Service Provider",
                description: "A Virtual IT Service Provider provides limited IT services from a remote location. Virtual IT Service Provider support can range from monitoring, reporting, remote management, backups, security and updates. Organizations can outsource some of the smaller IT functions of their office to a Virtual IT Service Provider."
            }, {
                title: "virtual router",
                description: " An abstract object managed by VRRP that acts as a default router for hosts on a shared LAN. It consists of a Virtual Router Identifier and a set of associated IP addresses across a common LAN."
            }, {
                title: "Virtual SAN",
                description: "Virtual SAN is a software-defined storage offering from VMware that enables enterprises to pool their storage capabilities and to instantly and automatically provision virtual machine storage via simple policies that are driven by the virtual machine.VMware's virtual storage area networking (SAN) solution also provides the ability to dynamically scale storage capacity and performance as needed, and exposes the underlying physical storage to the virtual machines through a policy-driven control pane."
            }, {
                title: "virtual teletype",
                description: "Abbreviated as VTY, virtual teletype is a command line interface that enables users to connect to the daemon using the Telnet protocol. To connect to a VTY users must setup and use a VTY password. VTY offers three user modes including the following;||||VTY View Mode for read-only interaction.||||VTY Enable Mode for read-write interaction.||||VTY Other Mode which are special modes, like TFTP."
            }, {
                title: "virtualization",
                description: "In computing, virtualization means to create a virtual version of a device or resource, such as a server, storage device, network or even an operating system where the framework divides the resource into one or more execution environments. Even something as simple as partitioning a hard drive is considered virtualization because you take one drive and partition it to create two separate hard drives. Devices, applications and human users are able to interact with the virtual resource as if it were a real single logical resource. The term virtualization has become somewhat of a buzzword, and as a result the term is now associated with a number of computing technologies including the following:||||storage virtualization: the amalgamation of multiple network storage devices into what appears to be a single storage unit.||||server virtualization: the partitioning a physical server into smaller virtual servers.||||operating system-level virtualization: a type of server virtualization technology which works at the operating system (kernel) layer.||||network virtualization: using network resources through a logical segmentation of a single physical network.||||application virtualization"
            }, {
                title: "virtualization-aware networks",
                description: "Also known as VM-aware networks, virtualization-aware networks are powered by network switches that fully recognize and manage virtual machines (VMs). As a result, virtualization-aware networks enable data centers to efficiently configure and migrate virtual machines across the network as well as into the cloud while avoiding potential access or security issues.Whereas traditional network switches lack awareness of virtual machines, creating the potential for security and migration issues in virtualized environments, VM-aware network switches provide network configuration at a virtual port level, enabling the dynamic and automatic movement of VMs across the network."
            }, {
                title: "virus disinfection",
                description: "A function of an antivirus program which attempts to remove and disinfect infections on the computer system including viruses, worms and Trojan horses. Disinfection in antivirus programs may also detect and remove unwanted applications as well."
            }, {
                title: "virus protection",
                description: "Virus protection software is designed to prevent viruses, worms and Trojan horses from getting onto a computer as well as remove any malicious software code that has already infected a computer.Most virus protection utilities now bundle anti-spyware and anti-malware capabilities to go along with anti-virus protection. Internet security suites go a step further by including additional capabilities like anti-spam, anti-phishing, firewall, file protection and PC optimization."
            }, {
                title: "virus scanner",
                description: " A type of antivirus program that searches a system for virus signatures that have attached to executable programs and applications such as e-mail clients. A virus scanner can either search all executables when a system is booted or scan a file only when a change is made to the file as viruses will change the data in a file."
            }, {
                title: "virus signature",
                description: "A unique string of bits, or the binary pattern, of a virus. The virus signature is like a fingerprint in that it can be used to detect and identify specific viruses. Anti-virus software uses the virus signature to scan for the presence of malicious code."
            }, {
                title: "vishing",
                description: "Vishing is the telephone equivalent of phishing. It is described as the act of using the telephone in an attempt to scam the user into surrendering private information that will be used for identity theft. The scammer usually pretends to be a legitimate business, and fools the victim into thinking he or she will profit."
            }, {
                title: "VLAN",
                description: "Short for virtual LAN, a network of computers that behave as if they are connected to the same wire even though they may actually be physically located on different segments of a LAN. VLANs are configured through software rather than hardware, which makes them extremely flexible. One of the biggest advantages of VLANs is that when a computer is physically moved to another location, it can stay on the same VLAN without any hardware reconfiguration."
            }, {
                title: "VM-aware networks",
                description: "Also known as virtualization-aware networks, VM-aware networks utilize virtual Ethernet (vEth) technologies that enable data centers to efficiently configure and migrate virtual machines (VMs) across a network as well as into the cloud.By providing network configuration at a virtual port level, VM-aware networking switches enable the dynamic and automatic movement of VMs across the network in virtualized environments. This helps eliminate the potential for security and migrations issues in a networked environment that relies heavily on virtual machines."
            }, {
                title: "VMware NSX",
                description: "A bundled solution from VMware that integrates the company's own virtualization technology with technology acquired from Nicira in order to provide a unified, single-solution network virtualization platform for data centers.According to this article on eWeek, VMware NSX enables organizations to virtualize Layer 2-7 services – from the switch and router to load balancing, firewalls and VPNs – in software, and to enable the solution to work with any underlying networking hardware infrastructure, any hypervisor and any cloud management platform.With VMware NSX, VMware is looking to extend network virtualization beyond just virtual switching in order to deliver on its vision of making virtualized data centers, or software-defined data centers, a reality for enterprises."
            }, {
                title: "VMware vCloud Connector",
                description: "The VMware vCloud Connector is a tool that facilitates hybrid cloud computing for organizations. The vCloud Connector essentially helps to orchestrate and administer the migration of VMs across different data centers and clouds. Using the vCloud Connector tool you can view, operate on and transfer your computing resources across vSphere and vCloud Director in both private cloud environments and public clouds from vCloud service providers."
            }, {
                title: "VNF - virtualized network function",
                description: "In a Network Functions Virtualization architecture, a virtualized network function, or VNF, is responsible for handling specific network functions that run in one or more virtual machines on top of the hardware networking infrastructure, which can include routers, switches, servers, cloud computing systems and more.Individual virtualized network functions can be chained or combined together in a building block-style fashion to deliver full-scale networking communication services."
            }, {
                title: "VoIP Gateway",
                description: "A network device that converts voice and fax calls, in real time, between the public switched telephone network (PSTN) and an IP network. The primary functions of a VoIP gateway include voice and fax compression/decompression, packetization, call routing, and control signaling. Additional features may include interfaces to external controllers, such as Gatekeepers or Softswitches, billing systems, and network management systems."
            }, {
                title: "VPDN - Virtual Private Dial-up Network",
                description: "Virtual Private Dial-up Network (VPDN) is a network that extends remote access to a private network using a shared infrastructure. VPDNs use Layer 2 tunnel technologies (L2F, L2TP, and PPTP) to extend the Layer 2 and higher parts of the network connection from a remote user across an ISP network to a private network. VPDNs are a cost-effective method of establishing a long-distance, point-to-point connection between remote dial users and a private network."
            }, {
                title: "VPI",
                description: "Short for virtual path identifier, an eight-bit field in an ATM cell��s header that identifies the virtual path (a bundle of virtual channels that have the same endpoint) to which the cell belongs as it travels through an ATM network."
            }, {
                title: "VPN – virtual private network",
                description: "A virtual private network (VPN) is a network that is constructed using public wires — usually the Internet — to connect remote users or regional offices to a company's private, internal network."
            }, {
                title: "VRRP",
                description: "Short for Virtual Router Redundancy Protocol, an election protocol that dynamically assigns responsibility for one or more virtual router(s) to the VRRP router(s) on a LAN, allowing several routers on a multiaccess link to utilize the same virtual IP address. A VRRP router is configured to run the VRRP protocol in conjunction with one or more other routers attached to a LAN. In a VRRP setup, one router is elected as the master router with the other routers acting as backups in case of the failure of the master router."
            }, {
                title: "VSAT - very small aperture terminal",
                description: "Short for very small aperture terminal, an earthbound station used in satellite communications of data, voice and video signals, excluding broadcast television.A VSAT consists of two parts, a transceiver that is placed outdoors in direct line of sight to the satellite and a device that is placed indoors to interface the transceiver with the end user's communications device, such as a PC. The transceiver receives or sends a signal to a satellite transponder in the sky. The satellite sends and receives signals from a ground station computer that acts as a hub for the system.Each end user is interconnected with the hub station via the satellite, forming a star topology. The hub controls the entire operation of the network. For one end user to communicate with another, each transmission has to first go to the hub station that then re-transmits it via the satellite to the other end user's VSAT."
            }, {
                title: "vulnerability scanning",
                description: "The automated process of proactively identifying security vulnerabilities of computing systems in a network in order to determine if and where a system can be exploited and/or threatened. While public servers are important for communication and data transfer over the Internet, they open the door to potential security breaches by threat agents, such as malicious hackers.Vulnerability scanning employs software that seeks out security flaws based on a database of known flaws, testing systems for the occurrence of these flaws and generating a report of the findings that an individual or an enterprise can use to tighten the network's security.Vulnerability scanning typically refers to the scanning of systems that are connected to the Internet but can also refer to system audits on internal networks that are not connected to the Internet in order to assess the threat of rogue software or malicious employees in an enterprise."
            }, {
                title: "WAAS - Wide Area Application Services",
                description: "Cisco Wide Area Application Services (WAAS) consists of a GUI and a set of system devices called wide-area application engines (WAE) that work together to optimize TCP traffic over your network.When client and server applications attempt to communicate with each other, the network intercepts and redirects this traffic to the WAEs so that they can act on behalf of the client application and the destination server. The WAAS GUI is used to centrally configure and monitor the WAEs and application policies in your network."
            }, {
                title: "Wake-on-LAN",
                description: "WOL is short for Wake-on-LAN.Often, IT personnel prefer to maintain client systems after employees have gone home. Even if these tasks are automated, client machines must be left on. In the past, if they weren't left on, personnel had to manually turn them on. Using wake-on-LAN, however, enables client systems to be remotely and automatically powered up.Wake-on-LAN technology resides in a PC's managed network adapter and motherboard. The two are attached via a wake-on-LAN cable terminated by a 3-pin connector on each side.When the system is turned off, the managed network adapter uses an alternate power source to monitor the network and watch for a wake-up packet from the server. Once it receives a packet, it alerts the system to power up and accept any maintenance task it is given.Wake-on-LAN is a part of Intel's Wired for Management System and is a result of the Intel-IBM Advanced Manageability Alliance.Wake-on-LAN is also called remote wake-up."
            }, {
                title: "WAN - wide area network",
                description: "A computer network that spans a relatively large geographical area. Typically, a WAN consists of two or more local-area networks (LANs).Computers connected to a wide-area network are often connected through public networks, such as the telephone system. They can also be connected through leased lines or satellites. The largest WAN in existence is the Internet. "
            }, {
                title: "WAN optimization",
                description: "A phrase used to describe applications and products used to manage and accelerate the flow of data across a wide-area network (WAN). Some of the specific technologies used in WAN optimization include deduplication, data compression techniques, caching, VPN tunneling and other technologies.An ideal WAN optimization solution will allow you to prioritize traffic, and guarantee a certain amount of available bandwidth for mission critical applications. Complete WAN optimization solutions allow a business to do much more than simply queue the bad traffic. They can block unwanted (in and outbound) traffic, allow it at certain time during the day, give priority to certain hosts, and enforce many other related policies. They will optimize the actual traffic as well, providing lower latency and higher throughput for the most critical applications."
            }, {
                title: "WannaCry",
                description: "WannaCry is a strain of ransomware that emerged in the wild on May 12, 2017, and quickly spread to infect over 200,000 systems in more than 150 countries.Also known as WannaCrypt, WanaCrypt0r, WCrypt, and WCRY, the WannaCry worm takes advantage of a specific exploit in Microsoft's Server Message Block (SMB) protocol codenamed EternalBlue and uses phishing e-mail scam tactics to infect older, unpatched Microsoft Windows systems."
            }, {
                title: "warchalking",
                description: "The act of making chalk marks on outdoor surfaces (walls, sidewalks, buildings, sign posts, trees) to indicate the existence of an open wireless network connection, usually offering an Internet connection so that others can benefit from the free wireless access. The open connections typically come from the access points of wireless networks located within buildings to serve enterprises. The chalk symbols indicate the type of access point that is available at that specific spot.There are three basic designs that are currently used: a pair of back-to-back semicircles, which denotes an open node; a closed circle, which denotes a closed node; a closed circle with a W inside, which denotes a node equipped with WEP. Warchalkers also draw identifiers above the symbols to indicate the password that can be used to access the node, which can easily be obtained with sniffer software.As a recent development, the debate over the legality of warchalking is still going on.The practice stems from the U.S. Depression-era culture of wandering hobos who would make marks outside of homes to indicate to other wanderers whether the home was receptive to drifters or was inhospitable."
            }, {
                title: "wardriving",
                description: "The act of driving around in a vehicle with a laptop computer, an antenna, and an 802.11 wireless LAN adapter to exploit existing wireless networks. Set on promiscuous mode, the wireless adapter, typically a NIC, will receive packets within its range. Wardriving exploits wireless networks that have ranges that extend outside the perimeter of buildings in order to gain free internet access or illegal access to an organization��s data. One safeguard against wardriving is using the WPA encryption standard."
            }, {
                title: "warm standby",
                description: "Warm standby is a method of redundancy in which the secondary (i.e., backup) system runs in the background of the primary system. Data is mirrored to the secondary server at regular intervals, which means that there are times when both servers do not contain the exact same data."
            }, {
                title: "WBEM",
                description: "Short for Web-Based Enterprise Management, WBEM is a set of management and Internet standard technologies developed to unify the management of distributed computing environments. WBEM provides a well integrated set of standard-based management tools, facilitating the exchange of data across different technologies and platforms. The Distributed Management Task Force (DMTF) has developed a core set of standards that make up WBEM.WBEM has three main components, the Common Information Model (CIM), which provides a common format, language and methodology  for collecting and decribing management data. The xmlCIM Encoding Specification defines XML elements, written in Document Type Definition (DTD), which can be used to represent CIM classes and instances. The CIM Operations over HTTP specification defines a mapping of CIM operations onto HTTP that allows implementations of CIM to interoperate in an open, standardized manner and completes the technologies that support WBEM."
            }, {
                title: "Web site Filter",
                description: "Web site Filter is a setting commonly found on broadband router firmware. The Web Filter option allows you to set up a list of allowed Web sites that can be used by multiple users, and any Web site not listed here will be blocked."
            }, {
                title: "WebSEAL",
                description: "WebSEAL is a high-performance, multi-threaded Web server that applies fine-grained security policy to the Tivoli Access Manager protected Web object space. WebSEAL can provide single sign-on solutions and incorporate back-end Web application server resources into its security policy. WebSEAL normally acts as a reverse Web proxy by receiving HTTP/HTTPS requests from a Web browser and delivering content from its own Web server or from junctioned back-end Web application servers. Requests passing through WebSEAL are evaluated by the Tivoli Access Manager authorization service to determine whether the user is authorized to access the requested resource."
            }, {
                title: "website spoofing",
                description: "Website spoofing refers to fraudulent websites that masquerade as legitimate sites by copying the design of the website as well as in some cases utilizing a URL similar to the real site.A spoofed website will typically copy some or all of a legitimate website's fonts, colors and layout, as well as images and logos used on the site in order to make the spoofed site look as authentic as possible."
            }, {
                title: "Websphere",
                description: "WebSphere is an IBM brand of products that implement and extend Sun's JavaTwoEnterpriseEdition (J2EE) platform. The Java-based application and transaction infrastructure delivers high-volume transaction processing for e-business and provides enhanced capabilities for transaction management, as well as security, performance, availability, connectivity, and scalability."
            }, {
                title: "WEP - Wired Equivalent Privacy",
                description: "Short for Wired Equivalent Privacy, a security protocol for wireless local area networks (WLANs) defined in the 802.11b standard. WEP is designed to provide the same level of security as that of a wired LAN. LANs are inherently more secure than WLANs because LANs are somewhat protected by the physicalities of their structure, having some or all part of the network inside a building that can be protected from unauthorized access. WLANs, which are over radio waves, do not have the same physical structure and therefore are more vulnerable to tampering. WEP aims to provide security by encrypting data over radio waves so that it is protected as it is transmitted from one end point to another. However, it has been found that WEP is not as secure as once believed. WEP is used at the two lowest layers of the OSI model - the data link and physical layers; it therefore does not offer end-to-end security."
            }, {
                title: "whiteboard",
                description: "An area on a display screen that multiple users can write or draw on. Whiteboards are a principal component of teleconferencing applications because they enable visual as well as audio communication."
            }, {
                title: "Wi-Fi (wireless networking)",
                description: "Wi-Fi is the name of a popular wireless networking technology that uses radio waves to provide wireless high-speed Internet and network connections. A common misconception is that the term Wi-Fi is short for wireless fidelity, however this is not the case. Wi-Fi is simply a trademarked phrase that means IEEE 802.11x."
            }, {
                title: "Wi-Fi HaLow",
                description: "Wi-Fi HaLow (pronounced HAY-low) is a marketing name used for products that utilize the IEEE 802.11ah wireless technology, which offers longer range and lower power connectivity than traditional WiFi-certified products.The Wi-Fi Alliance introduced Wi-Fi HaLow in January 2016, and explained that Wi-Fi HaLow is particularly suited for the modern Internet of Things (IoT) world where WiFi devices have expanded to include a wide range of scenarios, many of which require lower power connectivity as well as longer range capabilities."
            }, {
                title: "wide area data services",
                description: "Abbreviated as WADS, wide area data services (or WDS) is a superset of smaller market segments that include WAN optimization, WAFS (wide-area file services), and application acceleration. Wide area data services enable the consolidation of file servers from remote sites to the data center without compromising end user performance and also enable the acceleration of file system-based distributed applications."
            }, {
                title: "wide area file services",
                description: "Wide area file services, or WAFS, is a storage technology that allows businesses and enterprises to access remote data centers as if they were local. WAFS allowmultiple agencies to manage data, data archiving and wide area file services products and provide a combination of distributed file systems and caching technology to allow real-time, read-write access to shared file storage from any location. A wide area file services is an alternative system to a wide-area network (WAN)."
            }, {
                title: "WiGig",
                description: "WiGig is a technology based on the IEEE 802.11ad specification that can support data transfer speeds of up to 7Gbps (Gigabits per second), which is ten times faster than the 802.11n WiFi standard. WiGig was originally developed by the Wireless Gigabit (WiGig) Alliance and is currently being refined by the Wi-Fi Alliance following a merger of the two organizations in 2013.Unlike earlier 802.11 specifications such as 802.11ac, which operates in the 5 GHz range, and 802.11n, which operates in both the 5 GHz and 2.4 GHz ranges, WiGig operates in the 60GHz frequency band. Because it operates in the higher-frequency 60GHz range, WiGig's wavelengths are shorter, which limits its effective range to about 30 feet."
            }, {
                title: "Windows Defender",
                description: "Windows Defender is an anti-malware tool built into Microsoft's Windows 8 and newer operating systems that is designed to protect computers from viruses, spyware and other forms of malware.While Windows Defender can't be downloaded or used on versions of Windows prior to Windows 8, Microsoft does offer a predecessor to Windows Defender called Microsoft Security Essentials that can be freely downloaded and used on Windows Vista and Windows 7 operating systems."
            }, {
                title: "Windows Network Setup Wizard",
                description: "Windows XP has a built-in Network Setup Wizard that makes it easy to configure networking on computers running Windows 98, Windows 98 Second Edition, Windows Millennium Edition, and Windows XP. The Wizard does not work on computers running Windows 95, Windows NT, or Windows 2000. The Wizard can perform these tasks on a Windows XP computer:||||Set up the computer as an Internet Connection Sharing server, which shares its Internet connection with other networked computers.||||Set up the computer as an Internet Connection Sharing client, which accesses the Internet through another computer.||||Create a bridge between two or more network connections, combining them into a single logical connection.||||Create a floppy disk containing the Wizard files so that the Wizard can run on another computer."
            }, {
                title: "Windows XP ICS Internet Gateway",
                description: "When using Windows XP Internet Connection Sharing (ICS, an ICS client computer can be used to remotely monitor and control the ICS server computer's Internet connection. This Internet Gateway feature is available on computers running Windows 98, Windows 98 Second Edition, Windows Millennium Edition or Windows XP that have been configured as an ICS client using XP's Network Setup Wizard. It isn't available if you've configured the clients manually.If you're sharing an always-on DSL or cable modem connection, a client computer can enable or disable it. If you're sharing a dial-up connection, a client computer can connect or disconnect it, causing the ICS server computer to dial in or hang up. This can be a great convenience, since you don't have to go to the server computer to take these actions. But it can cause trouble if someone disables or disconnects the server's connection while other people are using the Internet."
            }, {
                title: "Windows XP Network Bridge",
                description: "In Windows XP, a Network Bridge is a feature that is used to combine two or more local area networks (such as wired and wireless) into one logical network. Computers on each network can communicate with computers on all of the other networks, sharing files, printers and even an Internet connection. To create a bridge between two or more network connections, open the Network Connections folder. Hold down the Ctrl key while clicking the desired connections, then right click one of them and select Bridge Connections. The Network Bridge will appear in the list of network connections, along with the connections that are included in the bridge.The Network Bridge takes on most of the attributes of a normal network connection. To configure it, right click the Network Bridge and select Properties. You can add or remove connections from the bridge, enable protocols and clients, assign an IP address, create a connection icon in the notification area and other options. When a network connection is added to the Network Bridge, it loses its individual attributes. It no longer has an IP address, clients, protocols, and so on. "
            }, {
                title: "Winwebsec",
                description: "Win32/Winwebsec is a Trojan horse that is delivered via a fake YouTube link that entices users to download and install a rogue security Trojan. The Winwebsec page may contain a message like I can't upload this to YouTube as it will get deleted. Click the link on the right to watch.The malicious page will then prompt a user to download a fake video codec and install the Trojan horse. Once installed the user will see fake security and virus infection warnings."
            }, {
                title: "wireless",
                description: "The word wireless is dictionary defined as having no wires. In networking terminology, wireless is the term used to describe any computer network where there is no physical wired connection between sender and receiver, but rather the network is connected by radio waves and/or microwaves to maintain communications. Wireless networking utilizes specific equipment such as NICs, APs and routers in place of wires (copper or optical fiber) for connectivity."
            }, {
                title: "wireless charging",
                description: "Wireless charging refers to technology and standards that enable consumers to charge electronic devices such as smartphones, tablets and wearable computing products without the need for physical wires.Wireless charging is made by possible by the principle of electromagnetic induction, in which coils of wire in a charging device create a magnetic field. An electric current flowing through this magnetic field can induce a current in an adjacent coil of wire that can form part of a battery charging circuit in an electronic device, enabling the device's battery power to be replenished.While wireless charging is more convenient than traditional wired charging, it typically does so at the expense of efficiency. In most cases wireless charging is only 60% to 70% as efficient as charging with a physical wire, resulting in additional time needed to fully charge a device."
            }, {
                title: "wireless mesh network",
                description: "A wireless mesh network (WMN) is a mesh network implemented over a Wireless LAN (WLAN). In WMNs, communications between nodes and those between nodes and clients are over a radio link."
            }, {
                title: "wireless personal area network",
                description: "A wireless personal area network (WPAN) is a personal, short distance area wireless network for interconnecting devices centered around an individual person's workspace. WPANs address wireless networking and mobile computing devices such as PCs, PDAs, peripherals, cell phones, pagers and consumer electronics. WPANs are also called short wireless distance networks."
            }, {
                title: "wireless repeater",
                description: "Also called an expander, a wireless repeater is a device used to increase the effective coverage of your wireless network. Differing from traditional access points, the newer generation of Wireless-G wireless repeaters do not need to be directly connected to your network via cables. Instead the device simply needs to be within range of your main access point and it will bounce the signals out to your remote wireless devices."
            }, {
                title: "WMI",
                description: "Short for Windows Management Instrumentation, an API in the Windows operating system that enables devices and systems in a network, typically enterprise networks, to be managed and controlled. Utilizing CIM, WMI allows network administrators to query and set information on workstations, applications and networks."
            }, {
                title: "WMM - Wi-Fi Multimedia",
                description: "WMM stands for Wi-Fi Multimedia. It is a standard created to define quality of service (QoS) in Wi-Fi networks. It is a precursor to the IEEE 802.11e WLAN QoS draft standard, which is meant to improve audio, video and voice applications transmitted over Wi-Fi.WMM adds prioritized capabilities to Wi-Fi networks and optimizes their performance when multiple concurring applications, each with different latency and throughput requirements, compete for network resources."
            }, {
                title: "Wolfpack",
                description: "The codename for Microsoft's clustering solution. Wolfpack was released in September, 1997 as part of Windows NT 4.0, enterprise Edition. Its official name is Microsoft Cluster Server (MSCS)."
            }, {
                title: "WordPerfect",
                description: "One of the most popular word processors for PCs and Apple Macintoshes."
            }, {
                title: "workflow",
                description: "The defined series of tasks within an organization to produce a final outcome. Sophisticated workgroup computing applications allow you to define different workflows for different types of jobs. So, for example, in a publishing setting, a document might be automatically routed from writer to editor to proofreader to production. At each stage in the workflow, one individual or group is responsible for a specific task. Once the task is complete, the workflow software ensures that the individuals responsible for the next task are notified and receive the data they need to execute their stage of the process."
            }, {
                title: "workgroup computing",
                description: "A workgroup is a collection of individuals working together on a task. Workgroup computing occurs when all the individuals have computers connected to a network that allows them to send e-mail to one another, share data files, and schedule meetings. Sophisticated workgroup systems allow users to define workflows so that data is automatically forwarded to appropriate people at each stage of a process."
            }, {
                title: "workgroup productivity package",
                description: "Software software packages that include e-mail, calendar programs, scheduling programs, and other utilities that promote communication between users on a local-area network."
            }, {
                title: "worm",
                description: "A program or algorithm that replicates itself over a computer network and usually performs malicious actions, such as using up the computer's resources and possibly shutting the system down. Also see virus.When used in all capital letters, WORM is an acronym for for write once, read many, an optical disk technology that allows you to write data onto a disk just once. After that, the data is permanent and can be read any number of times."
            }, {
                title: "WPA - Wi-Fi Protected Access",
                description: "Short for Wi-Fi Protected Access, a Wi-Fi standard that was designed to improve upon the security features of WEP. The technology is designed to work with existing Wi-Fi products that have been enabled with WEP (i.e., as a software upgrade to existing hardware), but the technology includes two improvements over WEP:||||Improved data encryption through the temporal key integrity protocol (TKIP). TKIP scrambles the keys using a hashing algorithmand, by adding an integrity-checking feature, ensures that the keys haven't been tampered with.||||User authentication, which is generally missing in WEP, through the extensible authentication protocol (EAP). WEP regulates access to a wireless network based on a computer��s hardware-specific MAC address, which isrelatively simple to be sniffed out and stolen. EAP is built on a more secure public-key encryption system to ensure that only authorized network users can access the network."
            }, {
                title: "WPA Enterprise",
                description: "A router (or Wi-Fi router) feature that is designed to authenticate individual users to an external server via username and password. WPA Enterprise also gives each PC a unique encryption key, which the user never sees, so they can't share it. To use WPA/WPA2 Enterprise you need a RADIUS server."
            }, {
                title: "WPA2 - Wi-Fi Protected Access 2",
                description: "Short for Wi-Fi Protected Access 2, the follow on security method to WPA for wireless networks that provides stronger data protection and network access control. It provides enterprise and consumer Wi-Fi users with a high level of assurance that only authorized users can access their wireless networks. Based on the IEEE 802.11i standard, WPA2 provides government grade security by implementing the National Institute of Standards and Technology (NIST) FIPS 140-2 compliant AES encryption algorithm and 802.1x-based authentication."
            }, {
                title: "WPA2-PSK",
                description: "Short for Wi-Fi Protected Access 2 - Pre-Shared Key, and also called WPA or WPA2 Personal,  it is a method of securing your network using WPA2 with the use of the optional Pre-Shared Key (PSK) authentication, which was designed for home users without an enterprise authentication server. To encrypt a network with WPA2-PSK you provide your router not with an encryption key, but rather with a plain-English passphrase between 8 and 63 characters long. Using a technology called TKIP (for Temporal Key Integrity Protocol), that passphrase, along with the network SSID, is used to generate unique encryption keys for each wireless client. And those encryption keys are constantly changed. Although WEP also supports passphrases, it does so only as a way to more easily create static keys, which are usually comprised of the hex characters 0-9 and A-F."
            }, {
                title: "WPAD",
                description: "Short for Web Proxy AutoDiscovery, an Internet protocol that enables a Web browser to automatically connect to a cache server (or proxy server) location in a network in order to retrieve stored Web pages at a quicker rate than having to leave the network in order to request the Web page from the originating site��s Web server. A WPAD-enabled client first uses DHCP to find a cache service, then the Service Location Protocol (SLP) if unsuccessful. If the cache server is still not found, the WPAD-enabled client then searches DNS records."
            }, {
                title: "WWAN - wireless wide-area network",
                description: "Short for Wireless WAN (wide-area network), a wireless computer networkthat spans a relatively large geographical area."
            }, {
                title: "X.25",
                description: "X.25 is the name of a popular standard for packet-switching networks. The X.25 standard was approved by the CCITT (now the ITU) in 1976. It defines layers 1, 2, and 3 in the OSI Reference Model."
            }, {
                title: "X.400",
                description: "An ISO and ITU standard for addressing and transporting e-mail messages. It conforms to layer 7 of the OSI model and supports several types of transport mechanisms, including Ethernet, X.25, TCP/IP, and dial-up lines."
            }, {
                title: "X.500",
                description: "An ISO and ITU standard that defines how global directories should be structured. X.500 directories are hierarchical with different levels for each category of information, such as country, state, and city. X.500 supports X.400 systems."
            }, {
                title: "X.509",
                description: "A widely used standard for defining digital certificates.  X.509 (Version 1) was first issued in 1988 as a part of the ITU X.500 Directory Services standard. When X.509 was revised in 1993, two more fields were added resulting in the Version 2 format. These two additional fields support directory access control. X.509 Version 3 defines the format for certificate extensions used to store additional information regarding the certificate holder and to define certificate usage. Collectively, the term X.509 refers to the latest published version, unless the version number is stated.X.509 is published as ITU recommendation ITU-T X.509 (formerly CCITT X.509) and ISO/IEC/ITU 9594-8 which defines a standard certificate format for public key certificates and certification validation. With minor differences in dates and titles, these publications provide identical text in the defining of public-key and attribute certificates."
            }, {
                title: "xDSL",
                description: "Refers collectively to all types of digital subscriber lines, the two main categories being ADSL and SDSL. Two other types of xDSL technologies are High-data-rate DSL (HDSL) and Very high DSL (VDSL).DSL technologies use sophisticated modulation schemes to pack data onto copper wires. They are sometimes referred to as last-mile technologies because they are used only for connections from a telephone switching station to a home or office, not between switching stations.xDSL is similar to ISDN inasmuch as both operate over existing copper telephone lines (POTS) and both require the short runs to a central telephone office (usually less than 20,000 feet). However, xDSL offers much higher speeds - up to 32 Mbps for upstream traffic, and from 32 Kbps to over 1 Mbps for downstream traffic."
            }, {
                title: "XSS - cross-site scripting",
                description: "cross-site scripting (XSS) is a security breach that takes advantage of dynamically generated Web pages. In an XSS attack, a Web application is sent with a script that activates when it is read by an unsuspecting user's browser or by an application that has not protected itself against cross-site scripting. Because dynamic Web sites rely on user input, a malicious user can input malicious script into the page by hiding it within legitimate requests."
            }, {
                title: "YubiKey",
                description: "A YubiKey is a small USB device that supports multiple authentication protocols to help protect access to computers, networks, websites and other online services. The small device looks like a standard USB flash drive and can be attached to a user's house or car keychain for easy access and to help prevent losing the device.YubiKey customers in both consumer and business environments can use YubiKeys to efficiently and securely access computer logins, VPN, password managers, social networking sites and other online services, content management systems, and more, without needing to remember a large number of login credentials and passwords."
            }, {
                title: "ZAW - Zero Administration for Windows",
                description: "Short for Zero Administration for Windows, a collection of utilities developed by Microsoft that should enable administrators to centrally manage and update software on PCs connected to a LAN. ZAW was developed partly as a response to the emergence of Net PCs. One of the main selling points of Net PCs is that they enable software to be centralized, which greatly simplifies administration of applications. ZAW attempts to offer the same sort of administration ease while letting the applications remain on traditional desktop PCs."
            }, {
                title: "Zero Administration Kit",
                description: "Abbreviated as ZAK, the Zero Administration Kit is a Microsoft software kit designed for for Windows NT that allows network administrators to easily prevent some user actions, such as changes to desktop configurations, software installation, and other settings."
            }, {
                title: "Zero-Day exploit",
                description: "Called either Day Zero or Zero-Day, it is an exploit that takes advantage of a security vulnerability on the same day that the vulnerability becomes publicly or generally known. Zero-Day exploits are usually posted by well-known hacker groups. Software companies may issue a security bulletin or advisory when the exploit becomes known, but companies may not be able to offer a patch to fix the vulnerability for some time after."
            }, {
                title: "Zeroconf",
                description: "Short for zero configuration IP networking, a method of networking devices via an Ethernet cable without requiring configuration and administration. Zeroconf is able to allocate addresses without a DHCP server, translate between domain names and IP addresses without a DNS server, and find services, such as a printer, without a directory service. The technology is intended for use in small networking situations where there is a low-security need and where it is inappropriate or impossible to establish a working IP network using traditional technologies, such as DHCP and DNS. For example, Zeroconf can be used to form an ad-hoc network to connect devices in a conference or meeting; to form a network in a home or small business; to form a network in spontaneous situations."
            }, {
                title: "ZeuS",
                description: "The most widespread botnet in history, ZeuS is a Trojan horse that infiltrates computers in order to steal data by logging keystrokes and spread copies of itself to other devices via instant messaging and e-mail messages. Computers infected by a ZeuS variant can be controlled by the attacker and monitored for keystrokes in order to gain access to online accounts and other sensitive data. More than 50,000 variants of the ZeuS Trojan have been recognized since ZeuS made its first known appearance in 2007. The most prolific period for ZeuS came in 2009 and 2010, with some security reports estimating as many as 3.6 million ZeuS-infected computers in the United States alone during that time.Several mobile botnet variants of the ZeuS Trojan have surfaced more recently, with some targeting Google Android phones while others attack Blackberry devices, Symbian phones, or Windows Mobile phones. These variants are considered part of the Zitmo family of mobile malware and are designed to steal the mobile transaction authentication numbers that banks use to strengthen security for logging in to online accounts."
            }, {
                title: "zombie",
                description: "A computer that has been implanted with a daemon that puts it under the control of a malicious hacker without the knowledge of the computer owner. Zombies are used by malicious hackers to launch DoS attacks. The hacker sends commands to the zombie through an open port. On command, the zombie computer sends an enormous amount of packets of useless information to a targeted Web site in order to clog the site's routers and keep legitimate users from gaining access to the site. The traffic sent to the Web site is confusing and therefore the computer receiving the data spends time and resources trying to understand the influx of data that has been transmitted by the zombies. Compared to programs such as viruses or worms that can eradicate or steal information, zombies are relatively benign as they temporarily cripple Web sites by flooding them with information and do not compromise the site's data. Such prominent sites as Yahoo!, Amazon and CNN.com were brought down in 2000 by zombie DoS attacks."
            }, {
                title: "zoning",
                description: "The process of allocating resources in a SAN to load balance the devices connected to the network. Zoning allows the network administrator to separate the SAN into units and allocate storage to those units based on need. Zoning protects the SAN system from such threats as viruses, data corruption and malicious hackers as the devices in their respective zones are not able to communicate outside the zone through their ports unless given permission."
            }, {
                title: "ZSL",
                description: "Short for zero-slot LAN, a local-area network (LAN) that uses existing serial and/or parallel communication ports on the computers in the network instead of requiring network interface cards (NICs) that would occupy an expansion slot. Zero-slot LANs are typically slower than LANS that use NICs and are limited to two or three network nodes."
            },
        ];
    }
    DataProvider.prototype.filterItems = function (searchTerm) {
        return this.items.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_intro_intro__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_linuxc_linuxc__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_linuxint_linuxint__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_networkqa_networkqa__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_desktopsp_desktopsp__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_technicalsp_technicalsp__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_data__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_linuxc_linuxc__["a" /* LinuxcPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_linuxint_linuxint__["a" /* LinuxintPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_networkqa_networkqa__["a" /* NetworkqaPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_desktopsp_desktopsp__["a" /* DesktopspPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_technicalsp_technicalsp__["a" /* TechnicalspPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/linuxc/linuxc.module#LinuxcPageModule', name: 'LinuxcPage', segment: 'linuxc', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/linuxint/linuxint.module#LinuxintPageModule', name: 'LinuxintPage', segment: 'linuxint', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/networkqa/networkqa.module#NetworkqaPageModule', name: 'NetworkqaPage', segment: 'networkqa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/desktopsp/desktopsp.module#DesktopspPageModule', name: 'DesktopspPage', segment: 'desktopsp', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/technicalsp/technicalsp.module#TechnicalspPageModule', name: 'TechnicalspPage', segment: 'technicalsp', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_linuxint_linuxint__["a" /* LinuxintPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_linuxc_linuxc__["a" /* LinuxcPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_networkqa_networkqa__["a" /* NetworkqaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_desktopsp_desktopsp__["a" /* DesktopspPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_technicalsp_technicalsp__["a" /* TechnicalspPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__providers_data_data__["a" /* DataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_linuxc_linuxc__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_linuxint_linuxint__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_networkqa_networkqa__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_desktopsp_desktopsp__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_technicalsp_technicalsp__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.onclickHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.onclicklinuxco = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_linuxc_linuxc__["a" /* LinuxcPage */]);
    };
    MyApp.prototype.onclicklinuxint = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_linuxint_linuxint__["a" /* LinuxintPage */]);
    };
    MyApp.prototype.onclicknetworkqa = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_networkqa_networkqa__["a" /* NetworkqaPage */]);
    };
    MyApp.prototype.onclickdesktopsp = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_desktopsp_desktopsp__["a" /* DesktopspPage */]);
    };
    MyApp.prototype.onclicktechnicalsp = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_technicalsp_technicalsp__["a" /* TechnicalspPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\CyberBlack\Music\network\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <div class="studentinfo">\n      <div  style="padding:30px; color:#ffffff; text-align:center;">\n        <img src="./assets/img/logo.png" style="width:40%; margin: auto;">\n      </div>\n   </div>\n  </ion-header>\n\n  <ion-content no-padding>\n      <ion-list no-padding no-margin style="margin-top:50px;">\n          <button ion-button clear no-padding no-margin (click)="onclickHome()" menuToggle>\n              <ion-item no-lines class="menuitem">\n                <ion-icon name="ios-home" ></ion-icon>\n                &nbsp;&nbsp;\n                Home\n              </ion-item>\n          </button>\n        </ion-list>\n    \n        <ion-list no-padding no-margin>\n          <button ion-button clear no-padding no-margin (click)="onclicklinuxco()" menuToggle>\n              <ion-item no-lines class="menuitem">\n                <ion-icon name="md-document" ></ion-icon>\n                &nbsp;&nbsp;\n                Linux Commands\n              </ion-item>\n              </button>\n        </ion-list>\n    \n         <ion-list no-padding no-margin>\n           <button ion-button clear no-padding no-margin (click)="onclicklinuxint()" menuToggle>\n              <ion-item no-lines class="menuitem">\n                <ion-icon name="md-folder" ></ion-icon>\n                &nbsp;&nbsp;\n               Linux Interview\n              </ion-item>\n              </button>\n        </ion-list>\n    \n        <ion-list no-padding no-margin>\n          <button ion-button clear no-padding no-margin (click)="onclicknetworkqa()" menuToggle>\n              <ion-item no-lines class="menuitem">\n                <ion-icon name="md-briefcase" ></ion-icon>\n                &nbsp;&nbsp;\n                Networking QA\n              </ion-item>\n              </button>\n        </ion-list>\n    \n         <ion-list no-padding no-margin>\n           <button ion-button clear no-padding no-margin (click)="onclickdesktopsp()" menuToggle>\n              <ion-item no-lines class="menuitem">\n                <ion-icon name="md-construct" ></ion-icon>\n                &nbsp;&nbsp;\n               Desktop Support QA\n              </ion-item>\n              </button>\n        </ion-list>\n    \n        <ion-list no-padding no-margin>\n            <button ion-button clear no-padding no-margin (click)="onclicktechnicalsp()" menuToggle>\n               <ion-item no-lines class="menuitem">\n                 <ion-icon name="md-build" ></ion-icon>\n                 &nbsp;&nbsp;\n                Technical Support QA\n               </ion-item>\n               </button>\n         </ion-list>\n\n  </ion-content>\n  <p style="position:fixed; right:0; bottom:0; color:#777777; margin-bottom:5px;">V.1 ©Copyright Ramesh Kumar &nbsp;</p>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\CyberBlack\Music\network\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.searchTerm = '';
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    HomePage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    HomePage.prototype.setFilteredItems = function () {
        this.items = this.dataService.filterItems(this.searchTerm);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\CyberBlack\Music\network\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="md-menu" style="color:#ffffff"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n      <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()" class="searchbr"></ion-searchbar>\n\n</ion-header>\n\n\n<ion-content no-padding style="background: #f2f2f2;" scroll="false" >\n <div *ngIf="searching" class="spinner-container">\n        <ion-spinner></ion-spinner>\n    </div> \n  <ion-list>\n       <div class="datadic" *ngFor="let item of items">\n         <h4>\n             {{item.title}}\n         </h4>\n             <p>\n               {{item.description}}\n             </p>\n       </div>\n     </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\CyberBlack\Music\network\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinuxcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LinuxcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LinuxcPage = (function () {
    function LinuxcPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LinuxcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LinuxcPage');
    };
    return LinuxcPage;
}());
LinuxcPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-linuxc',template:/*ion-inline-start:"C:\Users\CyberBlack\Music\network\src\pages\linuxc\linuxc.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Linux Commands</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="color:#666666; background: #f2f2f2;">\n\n    <h4>alias</h4>\n    Converts complex commands into simpler one.\n    <h4>bzip2 / bunzip2</h4>\n    Compresses a file / Deompress a bzip2 file.\n    <h4>bzcat / bzmore</h4> \n    Displays files compressed with bzip2.\n    <h4>cal</h4> \n    Displays calendar.\n    <h4>cat</h4> \n    It is a multi-function command.\n    <h4>cd</h4> \n    Changes current working directory.\n    <h4>chage</h4>\n     Sets an expiration date for a user account.\n    <h4>chgrp</h4>\n     Changes group.\n    <h4> chmod</h4>\n     Changes permission for a file or directory.\n    <h4>chown</h4> \n    Changes the owner of a file or directory.\n    <h4> chsh</h4>\n    Changes the shell.\n    <h4>clear</h4>\n     Clears the terminal.\n    <h4> comm</h4> \n    Compares two streams or files.\n    <h4>cp</h4>\n    Copies file content from one file to other file.\n    <h4>cut</h4>\n     Used to display desired column from a file.\n    <h4>date</h4>\n     Displays current date.\n    <h4>df</h4>\n     Checks the disk space in system.\n    <h4>echo</h4>\n     Prints the typed word on terminal.\n    <h4>exit</h4>\n     Exits from the current user group to the last group.\n    <h4>export</h4> \n    Exports shell variables to other shell.\n    <h4>file</h4>\n     Displays the type of file.\n    <h4>find</h4>\n     Finds files for a particular search.\n    <h4>gpasswd</h4>\n     Transfers group membership to another user.\n    <h4>grep</h4>\n     Filters lines of text containing a certain string.\n    <h4>groupadd</h4>\n     Creates a group.\n    <h4>groupdel</h4>\n     Permanently removes a group.\n    <h4>groupmod</h4>\n     Changes group name.\n    <h4>groups</h4>\n     Displays the group name to which current user belongs to.\n    <h4>gzip / gunzip</h4>\n     Compresses a file / Decompress a gzip file.\n    <h4>head</h4>\n     Displays first ten lines of a file.\n     <h4>history</h4>\n     	Displays older commands from shell command history.\n    <h4>HISTSIZE</h4>\n     Determines the number of commands to be stored in current environment.\n    <h4>HISTFILE</h4>\n     Displays the file that contains the history.\n    <h4>HISTFILESIZE</h4>\n     Sets the number of commands kept in history file.\n    <h4>id</h4> \n    Tells about the user\'s id in the system.\n    <h4>less</h4> \n    Displays file content according to the width of the terminal.\n    <h4>locate</h4>\n     Searches a file in the database.\n    <h4>ls</h4> \n    Lists all the files of a directory.\n    <h4>man</h4>\n     Displays the manual page for the specified command.\n    <h4>mkdir</h4> \n    Creates directory.\n    <h4>more</h4>\n     Displays one output screen at a time.\n    <h4>mv</h4>\n     Renames directories or files.\n    <h4>od</h4>\n     Displays a file content in octal format.\n    <h4>passwd</h4> \n    Set password for a user group.\n    <h4>pwd</h4>\n     Display the current working directory location.\n    <h4>PS1</h4>\n     Change the prompt name in terminal.\n    <h4>rename</h4>\n     Renames more than one file at once.\n    <h4>rm</h4> \n    Removes a file.\n    <h4>rmdir</h4> \n    Removes a directory.\n    <h4>set -o noclobber</h4>\n     Prevents file from getting overwrite.\n    <h4>set +o noclobber</h4>\n     Allows overwriting in existing file.\n    <h4>set -u</h4>\n     Displays undefined variables as error.\n    <h4>set +u</h4>\n     Displays nothing for undefined variable.\n    <h4>set -x</h4>\n     Displays shell expansion.\n    <h4>set +x</h4>\n     Disables shell expansion.\n    <h4>sed</h4> \n    Performs editing in streams.\n    <h4>sleep</h4> \n    Waits for the specified number of seconds.\n    <h4>sort</h4>\n     sorts the content in alphabetical order.\n    <h4>su</h4>\n     Allows a user to run a shell as another user.\n    <h4>sudo</h4>\n     Allows a user to start a program with credentials of another user.\n    <h4>tac</h4>\n     Displays file content in opposite order.\n    <h4>tail</h4>\n    Displays last ten lines of a file.\n    <h4>tar</h4>\n     Compresses a directory.\n    <h4>tee</h4>\n     Puts stdin on stdout and then into a file.\n    <h4>time</h4> \n    Displays time taken to execute a command.\n    <h4>touch</h4>\n     Creates an empty file.\n    <h4>tr</h4>\n     Translates characters.\n    <h4>type</h4>\n     Displays information about command type.\n    <h4>uniq</h4>\n     Sorts and display multi times repeating lines only once.\n    <h4>unset</h4> \n    Removes a variable from shell.\n    <h4>useradd</h4>\n     Adds users.\n    <h4>userdel</h4>\n     Deletes users.\n    <h4>usermod</h4>\n     Modifies the properties of a user.\n    <h4>vi</h4>\n     Opens vi editor to write a program.\n    <h4>w</h4>\n     Displays who is logged on and what are they doing.\n    <h4>wc</h4>\n     Counts words, lines and characters.\n    <h4>who</h4> \n    Tells who is logged on the system.\n    <h4>whoami</h4> \n    Tells the name of the user.\n    <h4>who am i</h4>\n     Displays the line pointing to your current session.\n    <h4>zcat / zmore</h4>\n     Views the files compressed with gzip.\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\CyberBlack\Music\network\src\pages\linuxc\linuxc.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LinuxcPage);

//# sourceMappingURL=linuxc.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map