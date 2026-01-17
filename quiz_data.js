const quizData = [
  {
    "title": "1. Refer to the exhibit. What will router R1 do with a\n                    packet that has a destination IPv6 address of 2001:db8:cafe:5::1?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/Switching-Routing-and-Wireless-Essentials-Version-7.00-Final-Answers-1.png"
    ],
    "options": [
      "forward the packet out\n                    GigabitEthernet0/0",
      "drop the packet",
      "forward the packet out\n                    GigabitEthernet0/1",
      "forward the packet out\n                    Serial0/0/0"
    ],
    "correct": [
      3
    ],
    "explanation": "The route ::/0 is the compressed form of the 0000:0000:0000:0000:0000:0000:0000:0000/0 default\n                    route. The default route is used if a more specific route is not found in the routing table.",
    "id": 1
  },
  {
    "title": "2. Refer to the exhibit. Currently router R1 uses an EIGRP\n                    route learned from Branch2 to reach the 10.10.0.0/16 network. Which floating static route would\n                    create a backup route to the 10.10.0.0/16 network in the event that the link between R1 and Branch2\n                    goes down?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/Switching-Routing-and-Wireless-Essentials-Version-7.00-Final-Answers-2.png"
    ],
    "options": [
      "ip route 10.10.0.0 255.255.0.0 Serial\n                    0/0/0 100",
      "ip route 10.10.0.0 255.255.0.0\n                    209.165.200.226 100",
      "ip route 10.10.0.0\n                    255.255.0.0 209.165.200.225 100",
      "ip route 10.10.0.0 255.255.0.0\n                    209.165.200.225 50"
    ],
    "correct": [
      2
    ],
    "explanation": "A floating static route needs to have an administrative distance that is greater than the\n                    administrative distance of the active route in the routing table. Router R1 is using an EIGRP route\n                    which has an administrative distance of 90 to reach the 10.10.0.0/16 network. To be a backup route\n                    the floating static route must have an administrative distance greater than 90 and have a next hop\n                    address corresponding to the serial interface IP address of Branch1.",
    "id": 2
  },
  {
    "title": "3. Refer to the exhibit. R1 was configured with the static\n                    route command ip route 209.165.200.224 255.255.255.224 S0/0/0 and consequently users on network\n                    172.16.0.0/16 are unable to reach resources on the Internet. How should this static route be changed\n                    to allow user traffic from the LAN to reach the Internet?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2016/02/sfdsgfdg5-1.jpg"
    ],
    "options": [
      "Add an administrative distance of\n                    254.",
      "Change the\n                    destination network and mask to 0.0.0.0 0.0.0.0",
      "Change the exit interface to\n                    S0/0/1.",
      "Add the next-hop neighbor address of\n                    209.165.200.226."
    ],
    "correct": [
      1
    ],
    "explanation": "Explain: The\n                    static route on R1 has been incorrectly configured with the wrong destination network and mask. The\n                    correct destination network and mask is 0.0.0.0 0.0.0.0.",
    "id": 3
  },
  {
    "title": "4. Which option shows a correctly configured IPv4 default\n                    static route?",
    "text": "",
    "images": [],
    "options": [
      "ip route 0.0.0.0 255.255.255.0\n                    S0/0/0",
      "ip route 0.0.0.0\n                    0.0.0.0 S0/0/0",
      "ip route 0.0.0.0 255.255.255.255\n                    S0/0/0",
      "ip route 0.0.0.0 255.0.0.0 S0/0/0"
    ],
    "correct": [
      1
    ],
    "explanation": "The static route ip route 0.0.0.0 0.0.0.0 S0/0/0 is considered a default static route and will match\n                    all destination networks.",
    "id": 4
  },
  {
    "title": "5. Refer to the exhibit. Which static route command can be\n                    entered on R1 to forward traffic to the LAN connected to R2?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/2020-01-31_201339-768x336-1.png"
    ],
    "options": [
      "ipv6 route 2001:db8:12:10::/64\n                    S0/0/0",
      "ipv6 route 2001:db8:12:10::/64 S0/0/1 fe80::2",
      "ipv6 route 2001:db8:12:10::/64 S0/0/0\n                    fe80::2",
      "ipv6 route 2001:db8:12:10::/64 S0/0/1\n                    2001:db8:12:10::1"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 5
  },
  {
    "title": "6. What is a method to launch a VLAN hopping attack?",
    "text": "",
    "images": [],
    "options": [
      "introducing a rogue\n                    switch and enabling trunking",
      "sending spoofed native VLAN\n                    information",
      "sending spoofed IP addresses from the\n                    attacking host",
      "flooding the switch with MAC\n                    addresses"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 6
  },
  {
    "title": "7. A cybersecurity analyst is using the macof tool to\n                    evaluate configurations of switches deployed in the backbone network of an organization. Which type\n                    of LAN attack is the analyst targeting during this evaluation?",
    "text": "",
    "images": [],
    "options": [
      "VLAN hopping",
      "DHCP spoofing",
      "MAC address table overflow",
      "VLAN double-tagging"
    ],
    "correct": [
      2
    ],
    "explanation": "Macof is a network attack tool and is mainly used to flood LAN switches with MAC addresses.",
    "id": 7
  },
  {
    "title": "8. Refer to the exhibit. A network administrator is\n                    configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to\n                    verify the configuration. Which statement explains the reason that the number of active clients is\n                    0?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2016/02/i210895v1n1_210895.jpg"
    ],
    "options": [
      "The default gateway address is not\n                    provided in the pool.",
      "No clients have communicated with the\n                    DHCPv6 server yet.",
      "The IPv6 DHCP pool configuration has no\n                    IPv6 address range specified.",
      "The state is not\n                    maintained by the DHCPv6 server under stateless DHCPv6 operation."
    ],
    "correct": [
      3
    ],
    "explanation": "Explain:\nUnder the stateless DHCPv6 configuration, indicated by the command ipv6 nd\n                    other-config-flag, the DHCPv6 server does not maintain the state information, because client IPv6\n                    addresses are not managed by the DHCP server. Because the clients will configure their IPv6\n                    addresses by combining the prefix/prefix-length and a self-generated interface ID, the ipv6 dhcp\n                    pool configuration does not need to specify the valid IPv6 address range. And because clients will\n                    use the link-local address of the router interface as the default gateway address, the default\n                    gateway address is not necessary.",
    "id": 8
  },
  {
    "title": "9. Refer to the exhibit. A network administrator\n                    configured routers R1 and R2 as part of HSRP group 1. After the routers have been reloaded, a user\n                    on Host1 complained of lack of connectivity to the Internet The network administrator issued the\n                    show standby brief command on both routers to verify the HSRP operations. In addition, the\n                    administrator observed the ARP table on Host1. Which entry should be seen in the ARP table on Host1\n                    in order to gain connectivity to the Internet?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/2020-01-31_201813-768x556-1.png"
    ],
    "options": [
      "the virtual IP\n                    address and the virtual MAC address for the HSRP group 1",
      "the virtual IP address of the HSRP\n                    group 1 and the MAC address of R1",
      "the virtual IP address of the HSRP\n                    group 1 and the MAC address of R2",
      "the IP address and the MAC address of\n                    R1"
    ],
    "correct": [
      0
    ],
    "explanation": "Hosts will send an ARP request to the default gateway which is the virtual IP address. ARP replies\n                    from the HSRP routers contain the virtual MAC address. The host ARP tables will contain a mapping of\n                    the virtual IP to the virtual MAC.",
    "id": 9
  },
  {
    "type": "matching",
    "title": "10. Match the forwarding characteristic to its type. (Not all options are used.)",
    "text": "",
    "pairs": [
      {
        "left": "appropriate for high performance computing applications",
        "right": "cut-through"
      },
      {
        "left": "forwarding process can begin after receiving the destination address",
        "right": "cut-through"
      },
      {
        "left": "error checking before forwarding",
        "right": "store-and-forward"
      },
      {
        "left": "forwarding process only begins after receiving the entire frame",
        "right": "store-and-forward"
      },
      {
        "left": "only forwards valid frames",
        "right": "store-and-forward"
      },
      {
        "left": "may forward invalid frames",
        "right": "cut-through"
      }
    ],
    "distractors": [],
    "explanation": "Cut-through switching begins forwarding after reading the destination MAC address, making it faster but unable to check for errors. Store-and-forward receives the entire frame first, performs error checking (CRC), and only forwards valid frames.",
    "id": 10
  },
  {
    "title": "11. Which statement is correct about how a Layer 2 switch\n                    determines how to forward frames?",
    "text": "",
    "images": [],
    "options": [
      "Frame forwarding decisions are based on MAC address and port\n                    mappings in the CAM table.",
      "Only frames with a broadcast\n                    destination address are forwarded out all active switch ports.",
      "Unicast frames are always forwarded\n                    regardless of the destination MAC address.",
      "Cut-through frame forwarding ensures\n                    that invalid frames are always dropped."
    ],
    "correct": [
      0
    ],
    "explanation": "Cut-through frame forwarding reads up to only the first 22 bytes of a frame, which excludes the\n                    frame check sequence and thus invalid frames may be forwarded. In addition to broadcast frames,\n                    frames with a destination MAC address that is not in the CAM are also flooded out all active ports.\n                    Unicast frames are not always forwarded. Received frames with a destination MAC address that is\n                    associated with the switch port on which it is received are not forwarded because the destination\n                    exists on the network segment connected to that port.",
    "id": 11
  },
  {
    "title": "12. Which statement describes a result after multiple\n                    Cisco LAN switches are interconnected?",
    "text": "",
    "images": [],
    "options": [
      "The broadcast domain expands to all switches.",
      "One collision domain exists per\n                    switch.",
      "There is one broadcast domain and one\n                    collision domain per switch.",
      "Frame collisions increase on the\n                    segments connecting the switches.",
      "Unicast frames are always forwarded\n                    regardless of the destination MAC address."
    ],
    "correct": [
      0
    ],
    "explanation": "In Cisco LAN switches, the microsegmentation makes it possible for each port to represent a separate\n                    segment and thus each switch port represents a separate collision domain. This fact will not change\n                    when multiple switches are interconnected. However, LAN switches do not filter broadcast frames. A\n                    broadcast frame is flooded to all ports. Interconnected switches form one big broadcast domain.",
    "id": 12
  },
  {
    "type": "matching",
    "title": "13. Match the link state to the interface and protocol status. (Not all options are used.)",
    "text": "",
    "pairs": [
      {
        "left": "Layer 1 problem",
        "right": "down/down"
      },
      {
        "left": "Layer 2 problem",
        "right": "up/down"
      },
      {
        "left": "Disabled",
        "right": "administratively down"
      },
      {
        "left": "Operational",
        "right": "up/up"
      }
    ],
    "distractors": [
      "up/disabled"
    ],
    "explanation": "down/down indicates a Layer 1 (physical) problem. up/down indicates Layer 1 is working but Layer 2 (data link) has an issue. administratively down means the interface was manually disabled. up/up means the interface is fully operational.",
    "id": 13
  },
  {
    "title": "14.Refer to the exhibit. How is a frame sent from PCA\n                    forwarded to PCC if the MAC address table on switch SW1 is empty?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/2020-01-31_202702.png"
    ],
    "options": [
      "SW1 forwards the frame directly to SW2.\n                    SW2 floods the frame to all ports connected to SW2, excluding the port through which the frame\n                    entered the switch.",
      "SW1 floods the frame on all ports on\n                    the switch, excluding the interconnected port to switch SW2 and the port through which the frame\n                    entered the switch.",
      "SW1 floods the frame on all ports on SW1, excluding the port\n                    through which the frame entered the switch.",
      "SW1 drops the frame because it does not\n                    know the destination MAC address."
    ],
    "correct": [
      2
    ],
    "explanation": "When a switch powers on, the MAC address table is empty. The switch builds the MAC address table by\n                    examining the source MAC address of incoming frames. The switch forwards based on the destination\n                    MAC address found in the frame header. If a switch has no entries in the MAC address table or if the\n                    destination MAC address is not in the switch table, the switch will forward the frame out all ports\n                    except the port that brought the frame into the switch.",
    "id": 14
  },
  {
    "title": "15. An administrator is trying to remove configurations\n                    from a switch. After using the command erase startup-config and reloading the switch, the\n                    administrator finds that VLANs 10 and 100 still exist on the switch. Why were these VLANs not\n                    removed?",
    "text": "",
    "images": [],
    "options": [
      "Because these VLANs\n                    are stored in a file that is called vlan.dat that is located in flash memory, this file must be\n                    manually deleted.",
      "These VLANs cannot be deleted unless\n                    the switch is in VTP client mode.",
      "These VLANs are default VLANs that\n                    cannot be removed.",
      "These VLANs can only be removed from\n                    the switch by using the no vlan 10 and no vlan 100 commands."
    ],
    "correct": [
      0
    ],
    "explanation": "Standard range VLANs (1-1005) are stored in a file that is called vlan.dat that is located in flash\n                    memory. Erasing the startup configuration and reloading a switch does not automatically remove these\n                    VLANs. The vlan.dat file must be manually deleted from flash memory and then the switch must be\n                    reloaded.",
    "id": 15
  },
  {
    "type": "matching",
    "title": "16. Match the description to the correct VLAN type. (Not all options are used.)",
    "text": "",
    "pairs": [
      {
        "left": "Native VLAN",
        "right": "Carries untagged traffic"
      },
      {
        "left": "Management VLAN",
        "right": "An IP address and subnet mask are assigned to this VLAN, allowing the switch to be accessed by HTTP, Telnet, SSH, or SNMP"
      },
      {
        "left": "Default VLAN",
        "right": "All switch ports are assigned to this VLAN after initial bootup of the switch"
      },
      {
        "left": "Data VLANs",
        "right": "Configured to carry user generated traffic"
      }
    ],
    "distractors": [
      "only accessible by the network administrator"
    ],
    "explanation": "The Native VLAN carries untagged traffic on trunk links. The Management VLAN has an IP for remote access. The Default VLAN (VLAN 1) contains all ports initially. Data VLANs are configured to separate user traffic.",
    "id": 16
  },
  {
    "title": "17. Refer to the exhibit. A network administrator has\n                    connected two switches together using EtherChannel technology. If STP is running, what will be the\n                    end result?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/Switching-Routing-and-Wireless-Essentials-Version-7.00-Final-Answers-9.png"
    ],
    "options": [
      "STP will block one of the redundant links.",
      "The switches will load balance and\n                    utilize both EtherChannels to forward packets.",
      "The resulting loop will create a\n                    broadcast storm.",
      "Both port channels will shutdown."
    ],
    "correct": [
      0
    ],
    "explanation": "Cisco switches support two protocols for negotiating a channel between two switches: LACP and PAgP.\n                    PAgP is Cisco-proprietary. In the topology shown, the switches are connected to each other using\n                    redundant links. By default, STP is enabled on switch devices. STP will block redundant links to\n                    prevent loops.",
    "id": 17
  },
  {
    "title": "18. What is a secure configuration option for remote\n                    access to a network device?",
    "text": "",
    "images": [],
    "options": [
      "Configure an ACL and apply it to the\n                    VTY lines.",
      "Configure 802.1x.",
      "Configure SSH.",
      "Configure Telnet."
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 18
  },
  {
    "title": "19. Which wireless encryption method is the most\n                    secure?",
    "text": "",
    "images": [],
    "options": [
      "WPA2 with AES",
      "WPA2 with TKIP",
      "WEP",
      "WPA"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 19
  },
  {
    "title": "20. After attaching four PCs to the switch ports,\n                    configuring the SSID and setting authentication properties for a small office network, a technician\n                    successfully tests the connectivity of all PCs that are connected to the switch and WLAN. A firewall\n                    is then configured on the device prior to connecting it to the Internet. What type of network device\n                    includes all of the described features?",
    "text": "",
    "images": [],
    "options": [
      "firewall appliance",
      "wireless router",
      "switch",
      "standalone wireless access point"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 20
  },
  {
    "title": "21. Refer to the exhibit. Host A has sent a packet to host\n                    B. What will be the source MAC and IP addresses on the packet when it arrives at host B?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2016/02/p39-prac-final-ccna2.jpg"
    ],
    "options": [
      "Source MAC:\n                    00E0.FE91.7799\nSource IP:\n                    10.1.1.10",
      "Source MAC: 00E0.FE10.17A3\nSource IP: 10.1.1.10",
      "Source MAC: 00E0.FE10.17A3\nSource IP: 192.168.1.1",
      "Source MAC: 00E0.FE91.7799\nSource IP: 10.1.1.1",
      "Source MAC: 00E0.FE91.7799\nSource IP: 192.168.1.1"
    ],
    "correct": [
      0
    ],
    "explanation": "As a packet traverses the network, the Layer 2 addresses will change at every hop as the packet is\n                    de-encapsulated and re-encapsulated, but the Layer 3 addresses will remain the same.",
    "id": 21
  },
  {
    "title": "23. Refer to the exhibit. In addition to static routes\n                    directing traffic to networks 10.10.0.0/16 and 10.20.0.0/16, Router HQ is also configured with the\n                    following command:",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/2020-01-31_203919-768x465-1.png"
    ],
    "options": [
      "Packets that are received from the\n                    Internet will be forwarded to one of the LANs connected to R1 or R2.",
      "Packets with a destination network that is not 10.10.0.0/16 or is\n                    not 10.20.0.0/16 or is not a directly connected network will be forwarded to the Internet.",
      "Packets from the 10.10.0.0/16 network\n                    will be forwarded to network 10.20.0.0/16, and packets from the 10.20.0.0/16 network will be\n                    forwarded to network 10.10.0.0/16.",
      "Packets that are destined for networks\n                    that are not in the routing table of HQ will be dropped."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 22
  },
  {
    "title": "24. What protocol or technology disables redundant paths\n                    to eliminate Layer 2 loops?",
    "text": "",
    "images": [],
    "options": [
      "VTP",
      "STP",
      "EtherChannel",
      "DTP"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 23
  },
  {
    "title": "25. Refer to the exhibit. Based on the exhibited\n                    configuration and output, why is VLAN 99 missing?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/rx4-768x474-1.png"
    ],
    "options": [
      "because VLAN 99 is not a valid\n                    management VLAN",
      "because there is a cabling problem on\n                    VLAN 99",
      "because VLAN 1 is up and there can only\n                    be one management VLAN on the switch",
      "because VLAN 99 has not yet been created"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 24
  },
  {
    "title": "26. Which two VTP modes allow for the creation,\n                    modification, and deletion of VLANs on the local switch? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "client",
      "master",
      "distribution",
      "slave",
      "server",
      "transparent"
    ],
    "correct": [
      4,
      5
    ],
    "explanation": "",
    "id": 25
  },
  {
    "title": "27. Which three steps should be taken before moving a\n                    Cisco switch to a new VTP management domain? (Choose three.)",
    "text": "",
    "images": [],
    "options": [
      "Configure the switch with the name of the new management\n                    domain.",
      "Reset the VTP counters to allow the\n                    switch to synchronize with the other switches in the domain.",
      "Configure the VTP server in the domain\n                    to recognize the BID of the new switch.",
      "Download the VTP database from the VTP\n                    server in the new domain.",
      "Select the correct VTP mode and version.",
      "Reboot the switch."
    ],
    "correct": [
      0,
      4,
      5
    ],
    "explanation": "When adding a new switch to a VTP domain, it is critical to configure the switch with a new domain\n                    name, the correct VTP mode, VTP version number, and password. A switch with a higher revision number\n                    can propagate invalid VLANs and erase valid VLANs thus preventing connectivity for multiple devices\n                    on the valid VLANs.",
    "id": 26
  },
  {
    "title": "28. A network administrator is preparing the\n                    implementation of Rapid PVST+ on a production network. How are the Rapid PVST+ link types determined\n                    on the switch interfaces?",
    "text": "",
    "images": [],
    "options": [
      "Link types can only be configured on\n                    access ports configured with a single VLAN.",
      "Link types can only be determined if\n                    PortFast has been configured.",
      "Link types are determined automatically.",
      "Link types must be configured with\n                    specific port configuration commands."
    ],
    "correct": [
      2
    ],
    "explanation": "When Rapid PVST+ is being implemented, link types are automatically determined but can be specified\n                    manually. Link types can be either point-to-point, shared, or edge.",
    "id": 27
  },
  {
    "title": "29. Refer to the exhibit. All the displayed switches are\n                    Cisco 2960 switches with the same default priority and operating at the same bandwidth. Which three\n                    ports will be STP designated ports? (Choose three.)",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/rx5.png"
    ],
    "options": [
      "fa0/9",
      "fa0/13",
      "fa0/10",
      "fa0/20",
      "fa0/21",
      "fa0/11"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "explanation": "Given that all the switches have the same default priority and are operating at the same bandwidth,\n                    the switch with the lowest MAC address will become the root bridge. This would be SW3 and all its\n                    ports would be designated ports. SW1 has a lower MAC address than SW2 has and therefore port fa0/10\n                    will become the designated port on that link.",
    "id": 28
  },
  {
    "title": "30. How will a router handle static routing differently if\n                    Cisco Express Forwarding is disabled?",
    "text": "",
    "images": [],
    "options": [
      "It will not perform recursive\n                    lookups.",
      "Ethernet multiaccess interfaces will require fully specified\n                    static routes to avoid routing inconsistencies.",
      "Static routes that use an exit\n                    interface will be unnecessary.",
      "Serial point-to-point interfaces will\n                    require fully specified static routes to avoid routing inconsistencies."
    ],
    "correct": [
      1
    ],
    "explanation": "In most\n                    platforms running IOS 12.0 or later, Cisco Express Forwarding is enabled by default. Cisco Express\n                    Forwarding eliminates the need for the recursive lookup. If Cisco Express Forwarding is disabled,\n                    multiaccess network interfaces require fully specified static routes in order to avoid\n                    inconsistencies in their routing tables. Point-to-point interfaces do not have this problem, because\n                    multiple end points are not present. With or without Cisco Express Forwarding enabled, using an exit\n                    interface when configuring a static route is a viable option.",
    "id": 29
  },
  {
    "title": "31. Compared with dynamic routes, what are two advantages\n                    of using static routes on a router? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "They improve netw​ork security.",
      "They take less time to converge when\n                    the network topology changes.",
      "They improve the efficiency of\n                    discovering neighboring networks.",
      "They use fewer router resources."
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Static routes are manually configured on a router. Static routes are not automatically updated and\n                    must be manually reconfigured if the network topology changes. Thus static routing improves network\n                    security because it does not make route updates among neighboring routers. Static routes also\n                    improve resource efficiency by using less bandwidth, and no CPU cycles are used to calculate and\n                    communicate routes.",
    "id": 30
  },
  {
    "title": "32. Refer to the exhibit. Which route was configured as a\n                    static route to a specific network using the next-hop address?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/rx6.png"
    ],
    "options": [
      "S 10.17.2.0/24 [1/0] via 10.16.2.2",
      "S 0.0.0.0/0 [1/0] via 10.16.2.2",
      "S 10.17.2.0/24 is directly connected,\n                    Serial 0/0/0",
      "C 10.16.2.0/24 is directly connected,\n                    Serial0/0/0"
    ],
    "correct": [
      0
    ],
    "explanation": "The C in a routing table indicates an interface that is up and has an IP address assigned. The S in\n                    a routing table signifies that a route was installed using the ip route command. Two of the routing\n                    table entries shown are static routes to a specific destination (the 192.168.2.0 network). The entry\n                    that has the S denoting a static route and [1/0] was configured using the next-hop address. The\n                    other entry (S 192.168.2.0/24 is directly connected, Serial 0/0/0) is a static route configured\n                    using the exit interface. The entry with the 0.0.0.0 route is a default static route which is used\n                    to send packets to any destination network that is not specifically listed in the routing\n                    table.",
    "id": 31
  },
  {
    "title": "33. What is the effect of entering the spanning-tree\n                    portfast configuration command on a switch?",
    "text": "",
    "images": [],
    "options": [
      "It disables an unused port.",
      "It disables all trunk ports.",
      "It enables portfast on a specific switch interface.",
      "It checks the source L2 address in the\n                    Ethernet header against the sender L2 address in the ARP body."
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 32
  },
  {
    "title": "34. What is the IPv6 prefix that is used for link-local\n                    addresses?",
    "text": "",
    "images": [],
    "options": [
      "FF01::/8",
      "2001::/3",
      "FC00::/7",
      "FE80::/10"
    ],
    "correct": [
      3
    ],
    "explanation": "The IPv6\n                    link-local prefix is FE80::/10 and is used to create a link-local IPv6 address on an interface.",
    "id": 33
  },
  {
    "title": "35. Which two statements are characteristics of routed\n                    ports on a multilayer switch? (Choose two.)​",
    "text": "",
    "images": [],
    "options": [
      "In a switched network, they are mostly configured between\n                    switches at the core and distribution layers.",
      "The interface vlan command has to be\n                    entered to create a VLAN on routed ports.",
      "They support subinterfaces, like\n                    interfaces on the Cisco IOS routers.",
      "They are used for point-to-multipoint\n                    links.",
      "They are not associated with a particular VLAN."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Routed\n                    ports are physical ports that act similarly to a router interface. They are not associated with a\n                    particular VLAN, they do not support subinterfaces, and they are used for point-to-point links. In a\n                    switched network, they are mostly configured between switches at the core and distribution layers.\n                    To configure routed ports, the no switchport interface command has to be used on the appropriate\n                    ports.",
    "id": 34
  },
  {
    "title": "36. Successful inter-VLAN routing has been operating on a\n                    network with multiple VLANs across multiple switches for some time. When an inter-switch trunk link\n                    fails and Spanning Tree Protocol brings up a backup trunk link, it is reported that hosts on two\n                    VLANs can access some, but not all the network resources that could be accessed previously. Hosts on\n                    all other VLANS do not have this problem. What is the most likely cause of this problem?",
    "text": "",
    "images": [],
    "options": [
      "The protected edge port function on the\n                    backup trunk interfaces has been disabled.",
      "The allowed VLANs on the backup link were not configured\n                    correctly.",
      "Dynamic Trunking Protocol on the link\n                    has failed.",
      "Inter-VLAN routing also failed when the\n                    trunk link failed."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 35
  },
  {
    "title": "37. Which command will start the process to bundle two\n                    physical interfaces to create an EtherChannel group via LACP?",
    "text": "",
    "images": [],
    "options": [
      "interface port-channel 2",
      "channel-group 1 mode desirable",
      "interface range GigabitEthernet 0/4 – 5",
      "channel-group 2 mode auto"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 36
  },
  {
    "title": "38. What action takes place when a frame entering a switch\n                    has a multicast destination MAC address?",
    "text": "",
    "images": [],
    "options": [
      "The switch will forward the frame out all ports except the\n                    incoming port.",
      "The switch forwards the frame out of\n                    the specified port.",
      "The switch adds a MAC address table\n                    entry mapping for the destination MAC address and the ingress port.",
      "The switch replaces the old entry and\n                    uses the more current port."
    ],
    "correct": [
      0
    ],
    "explanation": "If the\n                    destination MAC address is a broadcast or a multicast, the frame is also flooded out all ports\n                    except the incoming port.",
    "id": 37
  },
  {
    "title": "39. A junior technician was adding a route to a LAN\n                    router. A traceroute to a device on the new network revealed a wrong path and unreachable status.\n                    What should be done or checked?",
    "text": "",
    "images": [],
    "options": [
      "Verify that there is not a default\n                    route in any of the edge router routing tables.",
      "Check the configuration on the floating\n                    static route and adjust the AD.",
      "Create a floating static route to that\n                    network.",
      "Check the configuration of the exit interface on the new static\n                    route."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 38
  },
  {
    "title": "40. Select the three PAgP channel establishment modes.\n                    (Choose three.)",
    "text": "",
    "images": [],
    "options": [
      "auto",
      "default",
      "passive",
      "desirable",
      "extended",
      "on"
    ],
    "correct": [
      0,
      3,
      5
    ],
    "explanation": "",
    "id": 39
  },
  {
    "title": "41. A static route has been configured on a router.\n                    However, the destination network no longer exists. What should an administrator do to remove the\n                    static route from the routing table?",
    "text": "",
    "images": [],
    "options": [
      "Remove the route using the no ip route command.",
      "Change the administrative distance for\n                    that route.",
      "Change the routing metric for that\n                    route.",
      "Nothing. The static route will go away\n                    on its own."
    ],
    "correct": [
      0
    ],
    "explanation": "When the destination network specified in a static route does not exist anymore, the static route\n                    stays in the routing table until it is manually removed by using the no ip route\n                    command.",
    "id": 40
  },
  {
    "title": "42. Refer to the exhibit. What can be concluded about the\n                    configuration shown on R1?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/rx7.png"
    ],
    "options": [
      "R1 is configured as a DHCPv4 relay agent.",
      "R1 is operating as a DHCPv4\n                    server.",
      "R1 will broadcast DHCPv4 requests on\n                    behalf of local DHCPv4 clients.",
      "R1 will send a message to a local\n                    DHCPv4 client to contact a DHCPv4 server at 10.10.10.8."
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 41
  },
  {
    "type": "matching",
    "title": "43. Match the step to each switch boot sequence description. (Not all options are used.)",
    "text": "",
    "pairs": [
      {
        "left": "Step 1",
        "right": "execute POST"
      },
      {
        "left": "Step 2",
        "right": "load the boot loader from ROM"
      },
      {
        "left": "Step 3",
        "right": "perform low-level CPU initialization"
      },
      {
        "left": "Step 4",
        "right": "flash file system initialization"
      },
      {
        "left": "Step 5",
        "right": "load the IOS"
      },
      {
        "left": "Step 6",
        "right": "transfer switch control to the IOS"
      }
    ],
    "distractors": [
      "enter global configuration mode"
    ],
    "explanation": "The switch boot sequence: 1) POST tests hardware, 2) boot loader loads from ROM, 3) low-level CPU init, 4) flash file system init, 5) IOS loads, 6) control transfers to IOS.",
    "id": 42
  },
  {
    "title": "44. Refer to the exhibit. R1 has been configured as shown.\n                    However, PC1 is not able to receive an IPv4 address. What is the problem?​",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/rx9.png"
    ],
    "options": [
      "The ip helper-address command was applied on the wrong\n                    interface.",
      "R1 is not configured as a DHCPv4\n                    server.​",
      "A DHCP server must be installed on the\n                    same LAN as the host that is receiving the IP address.",
      "The ip address dhcp command was not\n                    issued on the interface Gi0/1."
    ],
    "correct": [
      0
    ],
    "explanation": "The ip helper-address command has to be applied on interface Gi0/0. This command must be present on\n                    the interface of the LAN that contains the DHCPv4 client PC1 and must be directed to the correct\n                    DHCPv4 server.",
    "id": 43
  },
  {
    "title": "45. What two default wireless router settings can affect\n                    network security? (Choose two.)",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/i232273v1n1_232273.png"
    ],
    "options": [
      "The SSID is broadcast.",
      "MAC address filtering is enabled.",
      "WEP encryption is enabled.",
      "The wireless channel is automatically selected.",
      "A well-known administrator password is set."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Default settings on wireless routers often include broadcasting the SSID and using a well-known\n                    administrative password. Both of these pose a security risk to wireless networks. WEP encryption and\n                    MAC address filtering are not set by default. The automatic selection of the wireless channel poses\n                    no security risks.",
    "id": 44
  },
  {
    "title": "46.What is the common term given to SNMP log messages that are generated by network devices and sent to the SNMP server?",
    "text": "",
    "images": [],
    "options": [
      "traps",
      "acknowledgments",
      "auditing",
      "warnings"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 45
  },
  {
    "title": "47. A network administrator is adding a new WLAN on a\n                    Cisco 3500 series WLC. Which tab should the administrator use to create a new VLAN interface to be\n                    used for the new WLAN?",
    "text": "",
    "images": [],
    "options": [
      "WIRELESS",
      "MANAGEMENT",
      "CONTROLLER",
      "WLANs"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 46
  },
  {
    "title": "48. A network administrator is configuring a WLAN. Why\n                    would the administrator change the default DHCP IPv4 addresses on an AP?",
    "text": "",
    "images": [],
    "options": [
      "to restrict access to the WLAN by\n                    authorized, authenticated users only",
      "to monitor the operation of the\n                    wireless network",
      "to reduce outsiders intercepting data or accessing the wireless\n                    network by using a well-known address range",
      "to reduce the risk of interference by\n                    external devices such as microwave ovens"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 47
  },
  {
    "title": "49. Which two functions are performed by a WLC when using\n                    split media access control (MAC)? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "packet acknowledgments and\n                    retransmissions",
      "frame queuing and packet\n                    prioritization",
      "beacons and probe responses",
      "frame translation to other protocols",
      "association and re-association of roaming clients"
    ],
    "correct": [
      3,
      4
    ],
    "explanation": "",
    "id": 48
  },
  {
    "title": "50. On what switch ports should BPDU guard be enabled to\n                    enhance STP stability?",
    "text": "",
    "images": [],
    "options": [
      "all PortFast-enabled ports",
      "only ports that are elected as\n                    designated ports",
      "only ports that attach to a neighboring\n                    switch",
      "all trunk ports that are not root\n                    ports"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 49
  },
  {
    "title": "51. Which network attack is mitigated by enabling BPDU\n                    guard?",
    "text": "",
    "images": [],
    "options": [
      "rogue switches on a network",
      "CAM table overflow attacks",
      "MAC address spoofing",
      "rogue DHCP servers on a network"
    ],
    "correct": [
      0
    ],
    "explanation": "Explain: DAI\n                    relies on DHCP snooping. DHCP snooping listens to DHCP message exchanges and builds a bindings\n                    database of valid tuples (MAC address, IP address, VLAN interface).\nWhen DAI is enabled, the switch drops\n                    ARP packet if the sender MAC address and sender IP address do not match an entry in the DHCP\n                    snooping bindings database. However, it can be overcome through static mappings. Static mappings are\n                    useful when hosts configure static IP addresses, DHCP snooping cannot be run, or other switches in\n                    the network do not run dynamic ARP inspection. A static mapping associates an IP address to a MAC\n                    address on a VLAN.",
    "id": 50
  },
  {
    "title": "52. Why is DHCP snooping required when using the Dynamic ARP Inspection feature?",
    "text": "",
    "images": [],
    "options": [
      "It relies on the settings of trusted\n                    and untrusted ports set by DHCP snooping.",
      "It uses the MAC address table to verify\n                    the default gateway IP address.",
      "It redirects ARP requests to the DHCP\n                    server for verification.",
      "It uses the MAC-address-to-IP-address binding database to\n                    validate an ARP packet."
    ],
    "correct": [
      3
    ],
    "explanation": "Explain: The\n                    problem with the current floating static route is that the administrative distance is set too low.\n                    The administrative distance will need to be higher than that of OSPF, which is 110, so that the\n                    router will only use the OSPF link when it is up.",
    "id": 51
  },
  {
    "title": "53. Refer to the exhibit. Router R1 has an OSPF neighbor\n                    relationship with the ISP router over the 192.168.0.32 network. The 192.168.0.36 network link should\n                    serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0\n                    0.0.0.0 S0/0/1 100 was issued on R1 and now traffic is using the backup link even when the OSPF link\n                    is up and functioning. Which change should be made to the static route command so that traffic will\n                    only use the OSPF link when it is up?​",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2016/02/i210868v1n2_210868.gif"
    ],
    "options": [
      "Change the administrative\n                    distance to 120.",
      "Add the next hop neighbor address of\n                    192.168.0.36.",
      "Change the destination network to\n                    192.168.0.34.",
      "Change the administrative distance to\n                    1."
    ],
    "correct": [
      0
    ],
    "explanation": "Explain: The\n                    problem with the current floating static route is that the administrative distance is set too low.\n                    The administrative distance will need to be higher than that of OSPF, which is 110, so that the\n                    router will only use the OSPF link when it is up.",
    "id": 52
  },
  {
    "title": "54. Refer to the exhibit. What is the metric to forward a\n                    data packet with the IPv6 destination address 2001:DB8:ACAD:E:240:BFF:FED4:9DD2?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA-2-v7-exam-answers.png"
    ],
    "options": [
      "90",
      "128",
      "2170112",
      "2681856",
      "2682112",
      "3193856"
    ],
    "correct": [
      4
    ],
    "explanation": "Explain: The\n                    IPv6 destination address 2001:DB8:ACAD:E:240:BFF:FED4:9DD2 belongs to the network of\n                    2001:DB8:ACAD:E::/64. In the routing table, the route to forward the packet has Serial 0/0/1 as an\n                    exit interface and 2682112 as the cost.",
    "id": 53
  },
  {
    "title": "55. A network administrator is configuring a new Cisco\n                    switch for remote management access. Which three items must be configured on the switch for the\n                    task? (Choose three.)",
    "text": "",
    "images": [],
    "options": [
      "IP address",
      "VTP domain",
      "vty lines",
      "default VLAN",
      "default gateway",
      "loopback address"
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explanation": "Explain: To\n                    enable the remote management access, the Cisco switch must be configured with an IP address and a\n                    default gateway. In addition, vty lines must configured to enable either Telnet or SSH connections.\n                    A loopback address, default VLAN, and VTP domain configurations are not necessary for the purpose of\n                    remote switch management.",
    "id": 54
  },
  {
    "title": "56. Refer to the exhibit. Which statement shown in the\n                    output allows router R1 to respond to stateless DHCPv6 requests?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA-2-v7-exam-answers-56.png"
    ],
    "options": [
      "ipv6 nd\n                    other-config-flag​",
      "prefix-delegation 2001:DB8:8::/48\n                    00030001000E84244E70​",
      "ipv6 dhcp server LAN1​",
      "ipv6 unicast-routing",
      "dns-server 2001:DB8:8::8​"
    ],
    "correct": [
      0
    ],
    "explanation": "Explain: The\n                    interface command ipv6 nd other-config-flag allows RA messages to be sent on this interface,\n                    indicating that additional information is available from a stateless DHCPv6 server.",
    "id": 55
  },
  {
    "title": "57. Refer to the exhibit. A Layer 3 switch routes for\n                    three VLANs and connects to a router for Internet connectivity. Which two configurations would be\n                    applied to the switch? (Choose two.)",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA-2-v7-exam-answers-57.png"
    ],
    "options": [
      "(config)# interface gigabitethernet1/1\n (config-if)# switchport mode trunk",
      "(config)# interface gigabitethernet 1/1 \n config-if)# no switchport \n (config-if)# ip address 192.168.1.2 255.255.255.252",
      "(config)# interface vlan 1 \n(config-if)# ip address 192.168.1.2 255.255.255.0\n (config-if)# no shutdown",
      "(config)# ip routing",
      "(config)# interface fastethernet0/4 \n (config-if)# switchport mode trunk"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "",
    "id": 56
  },
  {
    "title": "58. A technician is troubleshooting a slow WLAN and\n                    decides to use the split-the-traffic approach. Which two parameters would have to be configured to\n                    do this? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "Configure the 5 GHz band\n                    for streaming multimedia and time sensitive traffic.",
      "Configure the security mode to WPA\n                    Personal TKIP/AES for one network and WPA2 Personal AES for the other network",
      "Configure the 2.4 GHz\n                    band for basic internet traffic that is not time sensitive.",
      "Configure the security mode to WPA\n                    Personal TKIP/AES for both networks.",
      "Configure a common SSID for both split\n                    networks."
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "",
    "id": 57
  },
  {
    "title": "59. A company has just switched to a new ISP. The ISP has\n                    completed and checked the connection from its site to the company. However, employees at the company\n                    are not able to access the internet. What should be done or checked?",
    "text": "",
    "images": [],
    "options": [
      "Verify that the static route to the\n                    server is present in the routing table.",
      "Check the configuration on the floating\n                    static route and adjust the AD.",
      "Ensure that the old\n                    default route has been removed from the company edge routers.",
      "Create a floating static route to that\n                    network."
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 58
  },
  {
    "title": "60. Which information does a switch use to populate the\n                    MAC address table?",
    "text": "",
    "images": [],
    "options": [
      "the destination MAC address and the\n                    incoming port",
      "the destination MAC address and the\n                    outgoing port",
      "the source and destination MAC\n                    addresses and the incoming port",
      "the source and destination MAC\n                    addresses and the outgoing port",
      "the source MAC address\n                    and the incoming port",
      "the source MAC address and the outgoing\n                    port"
    ],
    "correct": [
      4
    ],
    "explanation": "Explain: To\n                    maintain the MAC address table, the switch uses the source MAC address of the incoming packets and\n                    the port that the packets enter. The destination address is used to select the outgoing port.",
    "id": 59
  },
  {
    "title": "61. Refer to the exhibit. A network administrator is\n                    reviewing the configuration of switch S1. Which protocol has been implemented to group multiple\n                    physical ports into one logical link?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2017/03/p23-1.png"
    ],
    "options": [
      "PAgP",
      "DTP",
      "LACP",
      "STP"
    ],
    "correct": [
      0
    ],
    "explanation": "The EtherChannel protocol PAgP provides the grouping of physical interfaces and utilizes the modes\n                    of auto and desirable. The EtherChannel protocol LACP provides the grouping of physical interfaces\n                    and utilizes the modes of passive and active. DTP and STP are not utilized to group multiple\n                    physical interfaces into a single logical link.",
    "id": 60
  },
  {
    "title": "62. Which type of static route is configured with a\n                    greater administrative distance to provide a backup route to a route learned from a dynamic routing\n                    protocol?",
    "text": "",
    "images": [],
    "options": [
      "floating static\n                    route",
      "default static route",
      "summary static route",
      "standard static route"
    ],
    "correct": [
      0
    ],
    "explanation": "Explain:\n                    There are four basic types of static routes. Floating static routes are backup routes that are\n                    placed into the routing table if a primary route is lost. A summary static route aggregates several\n                    routes into one, reducing the of the routing table. Standard static routes are manually entered\n                    routes into the routing table. Default static routes create a gateway of last resort.",
    "id": 61
  },
  {
    "title": "63. What action takes place when a frame entering a switch\n                    has a unicast destination MAC address appearing in the MAC address table?",
    "text": "",
    "images": [],
    "options": [
      "The switch updates the refresh timer\n                    for the entry.",
      "The switch forwards the\n                    frame out of the specified port.",
      "The switch purges the entire MAC\n                    address table.",
      "The switch replaces the old entry and\n                    uses the more current port."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 62
  },
  {
    "title": "64. The exhibit shows two PCs called PC A and PC B, two\n                    routes called R1 and R2, and two switches. PC A has the address 172.16.1.1/24 and is connected to a\n                    switch and into an interface on R1 that has the IP address 172.16.1.254. PC B has the address\n                    172.16.2.1/24 and is connected to a switch that is connected to another interface on R1 with the IP\n                    address 172.16.2.254. The serial interface on R1 has the address 172.16.3.1 and is connected to the\n                    serial interface on R2 that has the address 172.16.3.2/24. R2 is connected to the internet cloud.\n                    Which command will create a static route on R2 in order to reach PC B?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2016/02/i246203v1n1_2107451.jpg"
    ],
    "options": [
      "R2(config)# ip route 172.16.2.1\n                    255.255.255.0 172.16.3.1",
      "R2(config)# ip route 172.16.2.0\n                    255.255.255.0 172.16.2.254",
      "R2(config)# ip route\n                    172.16.2.0 255.255.255.0 172.16.3.1",
      "R2(config)# ip route 172.16.3.0\n                    255.255.255.0 172.16.2.254"
    ],
    "correct": [
      2
    ],
    "explanation": "Explain: The\n                    correct syntax is:\nrouter(config)# ip route destination-network destination-mask\n                    {next-hop-ip-address | exit-interface}\nIf the local exit interface instead of the next-hop IP address is used then the\n                    route will be displayed as a directly connected route instead of a static route in the routing\n                    table. Because the network to be reached is 172.16.2.0 and the next-hop IP address is 172.16.3.1,\n                    the command is R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1",
    "id": 63
  },
  {
    "title": "65. What protocol or technology allows data to transmit\n                    over redundant switch links?",
    "text": "",
    "images": [],
    "options": [
      "EtherChannel",
      "DTP",
      "STP",
      "VTP"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 64
  },
  {
    "title": "66. Refer to the exhibit. Which three hosts will receive\n                    ARP requests from host A, assuming that port Fa0/4 on both switches is configured to carry traffic\n                    for multiple VLANs? (Choose three.)",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2017/06/46.jpg"
    ],
    "options": [
      "host B",
      "host C",
      "host D",
      "host E",
      "host F",
      "host G"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "explanation": "Explain: ARP\n                    requests are sent out as broadcasts. That means the ARP request is sent only throughout a specific\n                    VLAN. VLAN 1 hosts will only hear ARP requests from hosts on VLAN 1. VLAN 2 hosts will only hear ARP\n                    requests from hosts on VLAN 2.",
    "id": 65
  },
  {
    "title": "67. Refer to the exhibit. The network administrator\n                    configures both switches as displayed. However, host C is unable to ping host D and host E is unable\n                    to ping host F. What action should the administrator take to enable this communication?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2017/03/hinh5.png"
    ],
    "options": [
      "Associate hosts A and B with VLAN 10\n                    instead of VLAN 1.",
      "Configure either trunk\n                    port in the dynamic desirable mode.",
      "Include a router in the topology.",
      "Remove the native VLAN from the\n                    trunk.",
      "Add the switchport nonegotiate command\n                    to the configuration of SW2."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 66
  },
  {
    "title": "68. What is the effect of entering the shutdown\n                    configuration command on a switch?",
    "text": "",
    "images": [],
    "options": [
      "It enables BPDU guard on a specific\n                    port.",
      "It disables an unused\n                    port.",
      "It enables portfast on a specific\n                    switch interface.",
      "It disables DTP on a non-trunking\n                    interface."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 67
  },
  {
    "title": "69. What would be the primary reason an attacker would\n                    launch a MAC address overflow attack?",
    "text": "",
    "images": [],
    "options": [
      "so that the switch stops forwarding\n                    traffic",
      "so that legitimate hosts cannot obtain\n                    a MAC address",
      "so that the attacker can\n                    see frames that are destined for other hosts",
      "so that the attacker can execute\n                    arbitrary code on the switch"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 68
  },
  {
    "title": "70. During the AAA process, when will authorization be\n                    implemented?",
    "text": "",
    "images": [],
    "options": [
      "Immediately after\n                    successful authentication against an AAA data source",
      "Immediately after AAA accounting and\n                    auditing receives detailed reports",
      "Immediately after an AAA client sends\n                    authentication information to a centralized server",
      "Immediately after the determination of\n                    which resources a user can access"
    ],
    "correct": [
      0
    ],
    "explanation": "Explain: A.\n                    AAA authorization is implemented immediately after the user is authenticated against a specific AAA\n                    data source.",
    "id": 69
  },
  {
    "title": "71. A company security policy requires that all MAC\n                    addressing be dynamically learned and added to both the MAC address table and the running\n                    configuration on each switch. Which port security configuration will accomplish this?",
    "text": "",
    "images": [],
    "options": [
      "auto secure MAC addresses",
      "dynamic secure MAC addresses",
      "static secure MAC addresses",
      "sticky secure MAC\n                    addresses"
    ],
    "correct": [
      3
    ],
    "explanation": "Explain: With\n                    sticky secure MAC addressing, the MAC addresses can be either dynamically learned or manually\n                    configured and then stored in the address table and added to the running configuration file. In\n                    contrast, dynamic secure MAC addressing provides for dynamically learned MAC addressing that is\n                    stored only in the address table.",
    "id": 70
  },
  {
    "title": "72. Which three Wi-Fi standards operate in the 2.4GHz\n                    range of frequencies? (Choose three.)",
    "text": "",
    "images": [],
    "options": [
      "802.11a",
      "802.11b",
      "802.11g",
      "802.11n",
      "802.11ac"
    ],
    "correct": [
      1,
      2,
      3
    ],
    "explanation": "802.11b\n                    and 802.11g operate in the 2.4GHz range, and 802.11n can operate in either the 2.4GHz or the 5GHz\n                    range. 802.11a and 802.11ac operate only in the 5GHz range of frequencies.",
    "id": 71
  },
  {
    "title": "73. To obtain an overview of the spanning tree status of a\n                    switched network, a network engineer issues the show spanning-tree command on a switch. Which two\n                    items of information will this command display? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "The root bridge BID.",
      "The role of the ports in\n                    all VLANs.",
      "The status of native VLAN ports.",
      "The number of broadcasts received on\n                    each root port.",
      "The IP address of the management VLAN\n                    interface."
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "",
    "id": 72
  },
  {
    "title": "74. Refer to the exhibit. Which trunk link will not\n                    forward any traffic after the root bridge election process is complete?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2016/02/i223534v1n1_223534.jpg"
    ],
    "options": [
      "Trunk1",
      "Trunk2",
      "Trunk3",
      "Trunk4"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 73
  },
  {
    "title": "75. Which method of IPv6 prefix assignment relies on the\n                    prefix contained in RA messages?",
    "text": "",
    "images": [],
    "options": [
      "EUI-64",
      "SLAAC",
      "static",
      "stateful DHCPv6"
    ],
    "correct": [
      1
    ],
    "explanation": "Stateless\n                    Address Autoconfiguration (SLAAC) relies on information received in router advertisement (RA)\n                    messages in order to automatically create an IPv6 address. The RA messages contain information such\n                    as the network prefix and prefix length, which the host combines with an interface ID in order to\n                    make a unique IPv6 unicast address.",
    "id": 74
  },
  {
    "title": "76. Which two protocols are used to provide server-based\n                    AAA authentication? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "802.1x",
      "SSH",
      "SNMP",
      "TACACS+",
      "RADIUS"
    ],
    "correct": [
      3,
      4
    ],
    "explanation": "Server-based AAA authentication uses an external TACACS or RADIUS authentication server to maintain\n                    a username and password database. When a client establishes a connection with an AAA enabled device,\n                    the device authenticates the client by querying the authentication servers.",
    "id": 75
  },
  {
    "title": "77. A network administrator is configuring a WLAN. Why\n                    would the administrator disable the broadcast feature for the SSID?",
    "text": "",
    "images": [],
    "options": [
      "to eliminate outsiders\n                    scanning for available SSIDs in the area",
      "to reduce the risk of interference by\n                    external devices such as microwave ovens",
      "to reduce the risk of unauthorized APs\n                    being added to the network",
      "to provide privacy and integrity to\n                    wireless traffic by using encryption"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 76
  },
  {
    "title": "78. Which mitigation technique would prevent rogue servers\n                    from providing false IP configuration parameters to clients?",
    "text": "",
    "images": [],
    "options": [
      "implementing port security",
      "turning on DHCP snooping",
      "disabling CDP on edge ports",
      "implementing port-security on edge\n                    ports"
    ],
    "correct": [
      1
    ],
    "explanation": "Like Dynamic ARP Inspection (DAI), IP Source Guard (IPSG) needs to determine the validity of\n                    MAC-address-to-IP-address bindings. To do this IPSG uses the bindings database built by DHCP\n                    snooping.",
    "id": 77
  },
  {
    "title": "79. A network administrator configures the port security\n                    feature on a switch. The security policy specifies that each access port should allow up to two MAC\n                    addresses. When the maximum number of MAC addresses is reached, a frame with the unknown source MAC\n                    address is dropped and a notification is sent to the syslog server. Which security violation mode\n                    should be configured for each access port?",
    "text": "",
    "images": [],
    "options": [
      "shutdown",
      "restrict",
      "warning",
      "protect"
    ],
    "correct": [
      1
    ],
    "explanation": "In port security implementation, an interface can be configured for one of three violation\n                    modes:\nProtect – a port security violation causes the interface to drop\n                    packets with unknown source addresses and no notification is sent that a security violation has\n                    occurred.\nRestrict – a port security violation causes the interface to drop\n                    packets with unknown source addresses and to send a notification that a security violation has\n                    occurred.\nShutdown – a port security violation causes the interface to\n                    immediately become error-disabled and turns off the port LED. No notification is sent that a\n                    security violation has occurred.",
    "id": 78
  },
  {
    "title": "80. What protocol or technology defines a group of\n                    routers, one of them defined as active and another one as standby?",
    "text": "",
    "images": [],
    "options": [
      "EtherChannel",
      "VTP",
      "HSRP",
      "DTP"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 79
  },
  {
    "title": "81. Refer to the exhibit. After attempting to enter the\n                    configuration that is shown in router RTA, an administrator receives an error and users on VLAN 20\n                    report that they are unable to reach users on VLAN 30. What is causing the problem?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2016/02/sdsfr43f.jpg"
    ],
    "options": [
      "There is no address on Fa0/0 to use as\n                    a default gateway.",
      "RTA is using the same subnet for VLAN 20 and VLAN 30.",
      "Dot1q does not support\n                    subinterfaces.",
      "The no shutdown command should have\n                    been issued on Fa0/0.20 and Fa0/0.30."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 80
  },
  {
    "title": "82. Which three pairs of trunking modes will establish a\n                    functional trunk link between two Cisco switches? (Choose three.)",
    "text": "",
    "images": [],
    "options": [
      "dynamic auto - dynamic auto",
      "access - trunk",
      "dynamic desirable - trunk",
      "access - dynamic auto",
      "dynamic desirable - dynamic desirable",
      "dynamic desirable - dynamic auto"
    ],
    "correct": [
      2,
      4,
      5
    ],
    "explanation": "",
    "id": 81
  },
  {
    "title": "83. A technician is configuring a router for a small\n                    company with multiple WLANs and doesn’t need the complexity of a dynamic routing protocol. What\n                    should be done or checked?",
    "text": "",
    "images": [],
    "options": [
      "Verify that there is not a default\n                    route in any of the edge router routing tables.",
      "Create static routes to all internal networks and a default route\n                    to the internet.",
      "Create extra static routes to the same\n                    location with an AD of 1.",
      "Check the statistics on the default\n                    route for oversaturation."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 82
  },
  {
    "title": "84. A company is deploying a wireless network in the\n                    distribution facility in a Boston suburb. The warehouse is quite large and it requires multiple\n                    access points to be used. Because some of the company devices still operate at 2.4GHz, the network\n                    administrator decides to deploy the 802.11g standard. Which channel assignments on the multiple\n                    access points will make sure that the wireless channels are not overlapping?",
    "text": "",
    "images": [],
    "options": [
      "channels 1, 5, and 9",
      "channels 1, 6, and 11",
      "channels 1, 7, and 13",
      "channels 2, 6, and 10"
    ],
    "correct": [
      1
    ],
    "explanation": "In the North America domain, 11 channels are allowed for 2.4GHz wireless networking. Among these 11\n                    channels, the combination of channels 1, 6, and 11 are the only non-overlapping channel\n                    combination.",
    "id": 83
  },
  {
    "title": "85. A network administrator of a small advertising company\n                    is configuring WLAN security by using the WPA2 PSK method. Which credential do office users need in\n                    order to connect their laptops to the WLAN?",
    "text": "",
    "images": [],
    "options": [
      "the company username and password\n                    through Active Directory service",
      "a key that matches the key on the AP",
      "a user passphrase",
      "a username and password configured on\n                    the AP"
    ],
    "correct": [
      1
    ],
    "explanation": "When a WLAN is configured with WPA2 PSK, wireless users must know the pre-shared key to associate\n                    and authenticate with the AP.",
    "id": 84
  },
  {
    "title": "86. Refer to the exhibit. What are the possible port roles\n                    for ports A, B, C, and D in this RSTP-enabled network?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA-2-v7-Modules-5-6-Redundant-Networks-Exam.png"
    ],
    "options": [
      "alternate, designated, root, root",
      "designated, alternate, root, root",
      "alternate, root, designated, root",
      "designated, root, alternate, root"
    ],
    "correct": [
      0
    ],
    "explanation": "Because S1 is the root bridge, B is a designated port, and C and D root ports. RSTP supports a new\n                    port type, alternate port in discarding state, that can be port A in this scenario.",
    "id": 85
  },
  {
    "title": "87. Refer to the exhibit. Which static route would an IT\n                    technician enter to create a backup route to the 172.16.1.0 network that is only used if the primary\n                    RIP learned route fails?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/i282902v1n1_Routing3-1.png"
    ],
    "options": [
      "ip route 172.16.1.0 255.255.255.0\n                    s0/0/0",
      "ip route 172.16.1.0 255.255.255.0 s0/0/0 121",
      "ip route 172.16.1.0 255.255.255.0\n                    s0/0/0 111",
      "ip route 172.16.1.0 255.255.255.0\n                    s0/0/0 91"
    ],
    "correct": [
      1
    ],
    "explanation": "A backup static route is called a floating static route. A floating static route has an\n                    administrative distance greater than the administrative distance of another static route or dynamic\n                    route.",
    "id": 86
  },
  {
    "title": "88. What mitigation plan is best for thwarting a DoS\n                    attack that is creating a MAC address table overflow?",
    "text": "",
    "images": [],
    "options": [
      "Disable DTP.",
      "Disable STP.",
      "Enable port\n                    security.",
      "Place unused ports in an unused\n                    VLAN."
    ],
    "correct": [
      2
    ],
    "explanation": "A MAC address (CAM) table overflow attack, buffer overflow, and MAC address spoofing can all be\n                    mitigated by configuring port security. A network administrator would typically not want to disable\n                    STP because it prevents Layer 2 loops. DTP is disabled to prevent VLAN hopping. Placing unused ports\n                    in an unused VLAN prevents unauthorized wired connectivity.",
    "id": 87
  },
  {
    "title": "89. A network engineer is troubleshooting a newly deployed\n                    wireless network that is using the latest 802.11 standards. When users access high bandwidth\n                    services such as streaming video, the wireless network performance is poor. To improve performance\n                    the network engineer decides to configure a 5 Ghz frequency band SSID and train users to use that\n                    SSID for streaming media services. Why might this solution improve the wireless network performance\n                    for that type of service?",
    "text": "",
    "images": [],
    "options": [
      "Requiring the users to switch to the 5\n                    GHz band for streaming media is inconvenient and will result in fewer users accessing these\n                    services.",
      "The 5 GHz band has more channels and is less crowded than the 2.4\n                    GHz band, which makes it more suited to streaming multimedia.",
      "The 5 GHz band has a greater range and\n                    is therefore likely to be interference-free.",
      "The only users that can switch to the 5\n                    GHz band will be those with the latest wireless NICs, which will reduce usage."
    ],
    "correct": [
      1
    ],
    "explanation": "Wireless range is determined by the access point antenna and output power, not the frequency band\n                    that is used. In this scenario it is stated that all users have wireless NICs that comply with the\n                    latest standard, and so all can access the 5 GHz band. Although some users may find it inconvenient\n                    to switch to the 5 Ghz band to access streaming services, it is the greater number of channels, not\n                    just fewer users, that will improve network performance.",
    "id": 88
  },
  {
    "title": "90. Which DHCPv4 message will a client send to accept an\n                    IPv4 address that is offered by a DHCP server?",
    "text": "",
    "images": [],
    "options": [
      "broadcast DHCPACK",
      "broadcast DHCPREQUEST",
      "unicast DHCPACK",
      "unicast DHCPREQUEST"
    ],
    "correct": [
      1
    ],
    "explanation": "When a DHCP client receives DHCPOFFER messages, it will send a broadcast DHCPREQUEST message for two\n                    purposes. First, it indicates to the offering DHCP server that it would like to accept the offer and\n                    bind the IP address. Second, it notifies any other responding DHCP servers that their offers are\n                    declined.",
    "id": 89
  },
  {
    "title": "91. Refer to the exhibit. Which destination MAC address is\n                    used when frames are sent from the workstation to the default gateway?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2019/12/i223091v1n1_223091.png"
    ],
    "options": [
      "MAC address of the virtual router",
      "MAC address of the standby router",
      "MAC addresses of both the forwarding\n                    and standby routers",
      "MAC address of the forwarding\n                    router"
    ],
    "correct": [
      0
    ],
    "explanation": "The IP address of the virtual router acts as the default gateway for all the workstations.\n                    Therefore, the MAC address that is returned by the Address Resolution Protocol to the workstation\n                    will be the MAC address of the virtual router.",
    "id": 90
  },
  {
    "title": "92. After a host has generated an IPv6 address by using\n                    the DHCPv6 or SLAAC process, how does the host verify that the address is unique and therefore\n                    usable?",
    "text": "",
    "images": [],
    "options": [
      "The host sends an ICMPv6 echo request\n                    message to the DHCPv6 or SLAAC-learned address and if no reply is returned, the address is\n                    considered unique.",
      "The host sends an ICMPv6 neighbor solicitation message to the\n                    DHCP or SLAAC-learned address and if no neighbor advertisement is returned, the address is\n                    considered unique.",
      "The host checks the local neighbor\n                    cache for the learned address and if the address is not cached, it it considered unique.",
      "The host sends an ARP broadcast to the\n                    local link and if no hosts send a reply, the address is considered unique."
    ],
    "correct": [
      1
    ],
    "explanation": "Before a host can actually configure and use an IPv6 address learned through SLAAC or DHCP, the host\n                    must verify that no other host is already using that address. To verify that the address is indeed\n                    unique, the host sends an ICMPv6 neighbor solicitation to the address. If no neighbor advertisement\n                    is returned, the host considers the address to be unique and configures it on the interface.",
    "id": 91
  },
  {
    "type": "matching",
    "title": "93. Match the purpose with its DHCP message type. (Not all options are used.)",
    "text": "",
    "pairs": [
      {
        "left": "a message that is used to locate any available DHCP server on a network",
        "right": "DHCPDISCOVER"
      },
      {
        "left": "a message that is used to identify the explicit server and lease offer to accept",
        "right": "DHCPREQUEST"
      },
      {
        "left": "a message that is used to acknowledge that the lease is successful",
        "right": "DHCPACK"
      },
      {
        "left": "a message that is used to suggest a lease to a client",
        "right": "DHCPOFFER"
      }
    ],
    "distractors": [
      "DHCPNACK"
    ],
    "explanation": "DHCPDISCOVER finds servers, DHCPOFFER suggests a lease, DHCPREQUEST accepts an offer, DHCPACK confirms the lease. DHCPNAK would reject a request.",
    "id": 92
  },
  {
    "title": "94. Which protocol adds security to remote\n                    connections?",
    "text": "",
    "images": [],
    "options": [
      "FTP",
      "HTTP",
      "NetBEUI",
      "POP",
      "SSH"
    ],
    "correct": [
      4
    ],
    "explanation": "SSH allows\n                    a technician to securely connect to a remote network device for monitoring and troubleshooting. HTTP\n                    establishes web page requests. FTP manages file transfer. NetBEUI is not routed on the Internet. POP\n                    downloads email messages from email servers.",
    "id": 93
  },
  {
    "title": "95. Refer to the exhibit. A network administrator is\n                    verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with\n                    PC1. Based on the output, what is the possible cause of the problem?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA2-v7-Modules-1-4-Switching-Concepts-VLANs-and-InterVLAN-Routing-Exam-Answers-44.png"
    ],
    "options": [
      "Gi0/0 is not configured as a trunk\n                    port.",
      "The command interface\n                    GigabitEthernet0/0.5 was entered incorrectly.",
      "There is no IP address configured on\n                    the interface Gi0/0.",
      "The no shutdown command is not entered\n                    on subinterfaces.",
      "The encapsulation\n                    dot1Q 5 command contains the wrong VLAN."
    ],
    "correct": [
      4
    ],
    "explanation": "",
    "id": 94
  },
  {
    "title": "96. Refer to the exhibit. A network administrator is\n                    configuring inter-VLAN routing on a network. For now, only one VLAN is being used, but more will be\n                    added soon. What is the missing parameter that is shown as the highlighted question mark in the\n                    graphic?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA2-v7-Modules-1-4-Switching-Concepts-VLANs-and-InterVLAN-Routing-Exam-Answers-74.png"
    ],
    "options": [
      "It identifies the subinterface.",
      "It identifies the\n                    VLAN number.",
      "It identifies the native VLAN\n                    number.",
      "It identifies the type of encapsulation\n                    that is used.",
      "It identifies the number of hosts that\n                    are allowed on the interface."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 95
  },
  {
    "type": "matching",
    "title": "97. Match each DHCP message type with its description. (Not all options are used.)",
    "text": "",
    "pairs": [
      {
        "left": "DHCPDISCOVER",
        "right": "a client initiating a message to find a DHCP server"
      },
      {
        "left": "DHCPOFFER",
        "right": "a DHCP server responding to the initial request by a client"
      },
      {
        "left": "DHCPREQUEST",
        "right": "the client accepting the IP address provided by the DHCP server"
      },
      {
        "left": "DHCPACK",
        "right": "the DHCP server confirming that the address lease has been accepted"
      }
    ],
    "distractors_left": [
      "DHCPNACK"
    ],
    "explanation": "The DHCP DORA process: Discover (client broadcasts to find servers), Offer (server responds with IP offer), Request (client accepts the offer), Acknowledge (server confirms the lease).",
    "id": 96
  },
  {
    "title": "98. What network attack seeks to create a DoS for clients\n                    by preventing them from being able to obtain a DHCP lease?",
    "text": "",
    "images": [],
    "options": [
      "IP address spoofing",
      "DHCP starvation",
      "CAM table attack",
      "DHCP spoofing"
    ],
    "correct": [
      1
    ],
    "explanation": "DCHP starvation attacks are launched by an attacker with\n                    the intent to create a DoS for DHCP clients. To accomplish this goal, the attacker uses a tool that\n                    sends many DHCPDISCOVER messages in order to lease the entire pool of available IP addresses, thus\n                    denying them to legitimate hosts.",
    "id": 97
  },
  {
    "title": "99. Refer to the exhibit. If the IP addresses of the\n                    default gateway router and the DNS server are correct, what is the configuration problem?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2016/02/the-IP-addresses-of-the-default-gateway-router-and-the-DNS-server-are-correct-what-is-the-configuration-pr.png"
    ],
    "options": [
      "The DNS server and the default gateway\n                    router should be in the same subnet.",
      "The IP address of the\n                    default gateway router is not contained in the excluded address list.",
      "The default-router and dns-server\n                    commands need to be configured with subnet masks.",
      "The IP address of the DNS server is not\n                    contained in the excluded address list."
    ],
    "correct": [
      1
    ],
    "explanation": "In this configuration, the excluded address list should\n                    include the address that is assigned to the default gateway router. So the command should be ip dhcp\n                    excluded-address 192.168.10.1 192.168.10.9.",
    "id": 98
  },
  {
    "title": "100. Refer to the exhibit. A network administrator has\n                    added a new subnet to the network and needs hosts on that subnet to receive IPv4 addresses from the\n                    DHCPv4 server.\nWhat two commands will allow hosts on the new subnet to receive addresses from\n                    the DHCP4 server? (Choose two.)",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2017/07/2017-07-05_183851-1.jpg"
    ],
    "options": [
      "R1(config-if)# ip\n                    helper-address 10.2.0.250",
      "R1(config)# interface G0/1",
      "R1(config)# interface\n                    G0/0",
      "R2(config-if)# ip helper-address\n                    10.2.0.250",
      "R2(config)# interface G0/0",
      "R1(config-if)# ip helper-address\n                    10.1.0.254"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "You need the router interface that is connected to the\n                    new subnet and the dhcp server address.\nThe ip helper-address command is used to configure a router to be a DHCPv4\n                    relay. The command should be placed on the interface facing the DHCPv4 clients. When the command is\n                    applied on the router interface, the interface will receive DHCPv4 broadcast messages and forward\n                    them as unicast to the IP address of the DHCPv4 server.",
    "id": 99
  },
  {
    "title": "101. What protocol or technology uses source IP to\n                    destination IP as a load-balancing mechanism?",
    "text": "",
    "images": [],
    "options": [
      "VTP",
      "EtherChannel",
      "DTP",
      "STP"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 100
  },
  {
    "title": "102. What protocol should be disabled to help mitigate\n                    VLAN attacks?",
    "text": "",
    "images": [],
    "options": [
      "CDP",
      "ARP",
      "STP",
      "DTP"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 101
  },
  {
    "title": "103. What protocol or technology requires switches to be\n                    in server mode or client mode?",
    "text": "",
    "images": [],
    "options": [
      "EtherChannel",
      "STP",
      "VTP",
      "DTP"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 102
  },
  {
    "title": "104. What are two reasons a network administrator would\n                    segment a network with a Layer 2 switch? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "to create fewer collision domains",
      "to enhance user\n                    bandwidth",
      "to create more broadcast domains",
      "to eliminate virtual circuits",
      "to isolate traffic\n                    between segments",
      "to isolate ARP request messages from\n                    the rest of the network"
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "A switch has the ability of creating temporary point-to-point connections between the\n                    directly-attached transmitting and receiving network devices. The two devices have full-bandwidth\n                    full-duplex connectivity during the transmission.",
    "id": 103
  },
  {
    "title": "105. What command will enable a router to begin sending\n                    messages that allow it to configure a link-local address without using an IPv6 DHCP server?",
    "text": "",
    "images": [],
    "options": [
      "a static route",
      "the ipv6 route ::/0 command",
      "the ipv6 unicast-routing\n                    command",
      "the ip routing command"
    ],
    "correct": [
      2
    ],
    "explanation": "To enable IPv6 on a router you must use the ipv6 unicast-routing global configuration command or use\n                    the ipv6 enable interface configuration command. This is equivalent to entering ip routing to enable\n                    IPv4 routing on a router when it has been turned off. Keep in mind that IPv4 is enabled on a router\n                    by default. IPv6 is not enabled by default.",
    "id": 104
  },
  {
    "title": "106. A network administrator is using the\n                    router-on-a-stick model to configure a switch and a router for inter-VLAN routing. What\n                    configuration should be made on the switch port that connects to the router?",
    "text": "",
    "images": [],
    "options": [
      "Configure it as a trunk port and allow\n                    only untagged traffic.",
      "Configure the port as an access port\n                    and a member of VLAN1.",
      "Configure the port as an\n                    802.1q trunk port.",
      "Configure the port as a trunk port and\n                    assign it to VLAN1."
    ],
    "correct": [
      2
    ],
    "explanation": "The port on the switch that connects to the router interface should be configured as a trunk port.\n                    Once it becomes a trunk port, it does not belong to any particular VLAN and will forward traffic\n                    from various VLANs.",
    "id": 105
  },
  {
    "title": "107. What are three techniques for mitigating VLAN\n                    attacks? (Choose three.)",
    "text": "",
    "images": [],
    "options": [
      "Use private VLANs.",
      "Enable BPDU guard.",
      "Enable trunking\n                    manually",
      "Enable Source Guard.",
      "Disable DTP.",
      "Set the native VLAN to an\n                    unused VLAN."
    ],
    "correct": [
      2,
      4,
      5
    ],
    "explanation": "Mitigating a VLAN attack can be done by disabling Dynamic Trunking Protocol (DTP), manually setting\n                    ports to trunking mode, and by setting the native VLAN of trunk links to VLANs not in use.",
    "id": 106
  },
  {
    "type": "matching",
    "title": "108. Match the DHCP message types to the order of the DHCPv4 process. (Not all options are used.)",
    "text": "",
    "pairs": [
      {
        "left": "Step 1",
        "right": "DHCPDISCOVER"
      },
      {
        "left": "Step 2",
        "right": "DHCPOFFER"
      },
      {
        "left": "Step 3",
        "right": "DHCPREQUEST"
      },
      {
        "left": "Step 4",
        "right": "DHCPACK"
      }
    ],
    "distractors": [
      "DHCPREPLY",
      "DHCPINFORMATION-REQUEST"
    ],
    "explanation": "The DHCPv4 process follows the DORA sequence: 1) DHCPDISCOVER - client broadcasts to find servers, 2) DHCPOFFER - server offers an IP, 3) DHCPREQUEST - client requests the offered IP, 4) DHCPACK - server acknowledges and finalizes the lease.",
    "id": 107
  },
  {
    "title": "109. In which situation would a technician use the show\n                    interfaces switch command?",
    "text": "",
    "images": [],
    "options": [
      "to determine if remote access is\n                    enabled",
      "when packets are being\n                    dropped from a particular directly attached host",
      "when an end device can reach local\n                    devices, but not remote devices",
      "to determine the MAC address of a\n                    directly attached network device on a particular interface"
    ],
    "correct": [
      1
    ],
    "explanation": "The show interfaces command is useful to detect media errors, to see if packets are being sent and\n                    received, and to determine if any runts, giants, CRCs, interface resets, or other errors have\n                    occurred. Problems with reachability to a remote network would likely be caused by a misconfigured\n                    default gateway or other routing issue, not a switch issue. The show mac address-table command shows\n                    the MAC address of a directly attached device.",
    "id": 108
  },
  {
    "title": "110. What is a drawback of the local database method of\n                    securing device access that can be solved by using AAA with centralized servers?",
    "text": "",
    "images": [],
    "options": [
      "There is no ability to provide\n                    accountability.",
      "User accounts must be\n                    configured locally on each device, which is an unscalable authentication solution.",
      "It is very susceptible to brute-force\n                    attacks because there is no username.",
      "The passwords can only be stored in\n                    plain text in the running configuration."
    ],
    "correct": [
      1
    ],
    "explanation": "The local database method of securing device access utilizes usernames and passwords that are\n                    configured locally on the router. This allows administrators to keep track of who logged in to the\n                    device and when. The passwords can also be encrypted in the configuration. However, the account\n                    information must be configured on each device where that account should have access, making this\n                    solution very difficult to scale.",
    "id": 109
  },
  {
    "title": "111. What action does a DHCPv4 client take if it receives\n                    more than one DHCPOFFER from multiple DHCP servers?",
    "text": "",
    "images": [],
    "options": [
      "It sends a\n                    DHCPREQUEST that identifies which lease offer the client is accepting.",
      "It sends a DHCPNAK and begins the DHCP\n                    process over again.",
      "It discards both offers and sends a new\n                    DHCPDISCOVER.",
      "It accepts both DHCPOFFER messages and\n                    sends a DHCPACK."
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 110
  },
  {
    "title": "112. Refer to the exhibit. The network administrator is\n                    configuring the port security feature on switch SWC. The administrator issued the command show\n                    port-security interface fa 0/2 to verify the configuration. What can be concluded from the output\n                    that is shown? (Choose three.)",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2019/12/112_2022-06-24_113833.jpg"
    ],
    "options": [
      "Three security violations have been\n                    detected on this interface.",
      "This port is currently\n                    up.",
      "The port is configured as a trunk\n                    link.",
      "Security violations will\n                    cause this port to shut down immediately.",
      "There is no device currently connected\n                    to this port.",
      "The switch port mode for\n                    this interface is access mode."
    ],
    "correct": [
      1,
      3,
      5
    ],
    "explanation": "Because\n                    the security violation count is at 0, no violation has occurred. The system shows that 3 MAC\n                    addresses are allowed on port fa0/2, but only one has been configured and no sticky MAC addresses\n                    have been learned. The port is up because of the port status of secure-up. The violation mode is\n                    what happens when an unauthorized device is attached to the port. A port must be in access mode in\n                    order to activate and use port security.",
    "id": 111
  },
  {
    "title": "113. What method of wireless authentication is dependent\n                    on a RADIUS authentication server?",
    "text": "",
    "images": [],
    "options": [
      "WEP",
      "WPA Personal",
      "WPA2 Personal",
      "WPA2 Enterprise"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 112
  },
  {
    "title": "114. A network administrator has found a user sending a\n                    double-tagged 802.1Q frame to a switch. What is the best solution to prevent this type of\n                    attack?",
    "text": "",
    "images": [],
    "options": [
      "The native VLAN number used on any\n                    trunk should be one of the active data VLANs.",
      "The VLANs for user access\n                    ports should be different VLANs than any native VLANs used on trunk ports.",
      "Trunk ports should be configured with\n                    port security.",
      "Trunk ports should use the default VLAN\n                    as the native VLAN number."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 113
  },
  {
    "title": "115. Refer to the exhibit. Which two conclusions can be\n                    drawn from the output? (Choose two.)",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2017/03/i221267v1n1_item2.jpg"
    ],
    "options": [
      "The EtherChannel is\n                    down.",
      "The port channel ID is\n                    2.",
      "The port channel is a Layer 3\n                    channel.",
      "The bundle is fully operational.",
      "The load-balancing method used is\n                    source port to destination port."
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "",
    "id": 114
  },
  {
    "type": "matching",
    "title": "116. Match the step number to the sequence of stages that occur during the HSRP failover process. (Not all options are used.)",
    "text": "",
    "pairs": [
      {
        "left": "Step 1",
        "right": "The forwarding router fails."
      },
      {
        "left": "Step 2",
        "right": "The standby router stops seeing hello messages from the forwarding router."
      },
      {
        "left": "Step 3",
        "right": "The standby router assumes the role of the forwarding router using both the IP and MAC addresses of the virtual router."
      }
    ],
    "distractors": [
      "The host initiates an ARP request for the MAC address of the new forwarding router."
    ],
    "explanation": "HSRP failover: 1) The active/forwarding router fails, 2) The standby router detects the failure by missing hello messages, 3) The standby assumes the forwarding role with the virtual IP and MAC, so hosts don't need to update their ARP cache.",
    "id": 115
  },
  {
    "title": "117. On a Cisco 3504 WLC Summary page ( Advanced >\n                    Summary ), which tab allows a network administrator to configure a particular WLAN with a WPA2\n                    policy?",
    "text": "",
    "images": [],
    "options": [
      "WLANs",
      "SECURITY",
      "WIRELESS",
      "MANAGEMENT"
    ],
    "correct": [
      0
    ],
    "explanation": "The WLANs tab in the Cisco\n                    3504 WLC advanced Summary page allows a user to access the configuration of WLANs\n                    including security, QoS, and policy-mapping.",
    "id": 116
  },
  {
    "title": "118. Refer to the exhibit. A network engineer is configuring\n                    IPv6 routing on the network. Which command issued on router HQ will configure a default route to the\n                    Internet to forward packets to an IPv6 destination network that is not listed in the routing\n                    table?​",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/2020-04-28_073221.jpg"
    ],
    "options": [
      "ipv6 route ::/0 serial 0/0/0",
      "ip route 0.0.0.0 0.0.0.0 serial\n                    0/1/1",
      "ipv6 route ::1/0 serial 0/1/1",
      "ipv6 route ::/0 serial\n                    0/1/1"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 117
  },
  {
    "title": "119. Users are complaining of sporadic access to the internet\n                    every afternoon. What should be done or checked?",
    "text": "",
    "images": [],
    "options": [
      "Create static routes to all internal\n                    networks and a default route to the internet.",
      "Verify that there is not a default\n                    route in any of the edge router routing tables.",
      "Create a floating static route to that\n                    network.",
      "Check the statistics on\n                    the default route for oversaturation."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 118
  },
  {
    "title": "120. What action takes place when the source MAC address of a\n                    frame entering a switch appears in the MAC address table associated with a different port?",
    "text": "",
    "images": [],
    "options": [
      "The switch purges the entire MAC\n                    address table.",
      "The switch replaces the\n                    old entry and uses the more current port.",
      "The switch updates the refresh timer\n                    for the entry.",
      "The switch forwards the frame out of\n                    the specified port."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 119
  },
  {
    "title": "121. A network administrator is configuring a WLAN. Why would\n                    the administrator use a WLAN controller?",
    "text": "",
    "images": [],
    "options": [
      "to centralize management of multiple\n                    WLANs",
      "to provide privacy and integrity to\n                    wireless traffic by using encryption",
      "to facilitate group\n                    configuration and management of multiple WLANs through a WLC",
      "to provide prioritized service for\n                    time-sensitive applications"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 120
  },
  {
    "title": "122. A new Layer 3 switch is connected to a router and is being\n                    configured for interVLAN routing. What are three of the five steps required for the configuration?\n                    (Choose three.)",
    "text": "Case 7 (NEW):",
    "images": [],
    "options": [
      "creating SVI interfaces",
      "adjusting the route metric",
      "enabling IP routing",
      "assigning ports to VLANs",
      "deleting the default VLAN",
      "assigning the ports to the native\n                    VLAN",
      "modifying the default VLAN"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explanation": "",
    "id": 121
  },
  {
    "title": "122. A new Layer 3 switch is connected to a router and is being\n                    configured for interVLAN routing. What are three of the five steps required for the configuration?\n                    (Choose three.)",
    "text": "Case 1",
    "images": [],
    "options": [
      "installing a static route",
      "assigning the ports to the native\n                    VLAN",
      "entering “no\n                    switchport” on the port connected to the router",
      "modifying the default VLAN",
      "assigning ports to VLANs",
      "enabling IP routing",
      "adjusting the route metric"
    ],
    "correct": [
      2,
      4,
      5
    ],
    "explanation": "",
    "id": 122
  },
  {
    "title": "122. A new Layer 3 switch is connected to a router and is being\n                    configured for interVLAN routing. What are three of the five steps required for the configuration?\n                    (Choose three.)",
    "text": "Case 2",
    "images": [],
    "options": [
      "establishing adjacencies",
      "adjusting the route metric",
      "assigning ports to VLANs",
      "implementing a routing protocol",
      "creating SVI interfaces",
      "installing a static route",
      "creating VLANs"
    ],
    "correct": [
      2,
      4,
      6
    ],
    "explanation": "",
    "id": 123
  },
  {
    "title": "122. A new Layer 3 switch is connected to a router and is being\n                    configured for interVLAN routing. What are three of the five steps required for the configuration?\n                    (Choose three.)",
    "text": "Case 3",
    "images": [],
    "options": [
      "assigning ports to VLANs",
      "assigning the ports to the native\n                    VLAN",
      "modifying the default VLAN",
      "deleting the default VLAN",
      "enabling IP routing",
      "installing a static route",
      "entering “no\n                    switchport” on the port connected to the router"
    ],
    "correct": [
      0,
      4,
      6
    ],
    "explanation": "",
    "id": 124
  },
  {
    "title": "122. A new Layer 3 switch is connected to a router and is being\n                    configured for interVLAN routing. What are three of the five steps required for the configuration?\n                    (Choose three.)",
    "text": "Case 4",
    "images": [],
    "options": [
      "installing a static route",
      "enabling IP routing",
      "modifying the default VLAN",
      "implementing a routing protocol",
      "assigning ports to VLANs",
      "assigning the ports to the native\n                    VLAN",
      "creating SVI interfaces"
    ],
    "correct": [
      1,
      4,
      6
    ],
    "explanation": "",
    "id": 125
  },
  {
    "title": "122. A new Layer 3 switch is connected to a router and is being\n                    configured for interVLAN routing. What are three of the five steps required for the configuration?\n                    (Choose three.)",
    "text": "Case 5",
    "images": [],
    "options": [
      "assigning ports to VLANs",
      "assigning the ports to the native\n                    VLAN",
      "enabling IP routing",
      "modifying the default VLAN",
      "installing a static route",
      "implementing a routing protocol",
      "creating SVI interfaces"
    ],
    "correct": [
      0,
      2,
      6
    ],
    "explanation": "",
    "id": 126
  },
  {
    "title": "122. A new Layer 3 switch is connected to a router and is being\n                    configured for interVLAN routing. What are three of the five steps required for the configuration?\n                    (Choose three.)",
    "text": "Case 6",
    "images": [],
    "options": [
      "establishing adjacencies",
      "enabling IP routing",
      "assigning the ports to the native\n                    VLAN",
      "adjusting the route metric",
      "modifying the default VLAN",
      "entering “no\n                    switchport” on the port connected to the router",
      "assigning ports to VLANs"
    ],
    "correct": [
      1,
      5,
      6
    ],
    "explanation": "Steps to\n                    configure Layer 3 switch to route with a router:\nStep 1. Configure the routed port.\n\nStep 2. Enable routing.\nStep 3. Configure routing.\nStep 4. Verify routing.\nStep 5. Verify connectivity.\nReference:\n4.3.8 Packet Tracer Configure Layer\n                    3 Switching and inter VLAN Routing",
    "id": 127
  },
  {
    "title": "123. Which three statements accurately describe duplex and\n                    speed settings on Cisco 2960 switches? (Choose three.)",
    "text": "",
    "images": [],
    "options": [
      "An autonegotiation\n                    failure can result in connectivity issues.",
      "When the speed is set to\n                    1000 Mb/s, the switch ports will operate in full-duplex mode.",
      "The duplex and speed\n                    settings of each switch port can be manually configured.",
      "Enabling autonegotiation on a hub will\n                    prevent mismatched port speeds when connecting the hub to the switch.",
      "By default, the speed is set to 100\n                    Mb/s and the duplex mode is set to autonegotiation.",
      "By default, the autonegotiation feature\n                    is disabled."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "",
    "id": 128
  },
  {
    "title": "124. Refer to the exhibit. A network administrator configures\n                    R1 for inter-VLAN routing between VLAN 10 and VLAN 20. However, the devices in VLAN 10 and VLAN 20\n                    cannot communicate. Based on the configuration in the exhibit, what is a possible cause for the\n                    problem?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/2021-12-19_221231.jpg"
    ],
    "options": [
      "A. The port Gi0/0 should be configured\n                    as trunk port.",
      "B. The encapsulation is\n                    misconfigured on a subinterface.",
      "C. A no shutdown command should be\n                    added in each subinterface configuration.",
      "D. The command interface\n                    gigabitEthernet 0/0.1 is wrong."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 129
  },
  {
    "title": "125. A network administrator uses the spanning-tree portfast\n                    bpduguard default global configuration command to enable BPDU guard on a switch. However, BPDU guard\n                    is not activated on all access ports. What is the cause of the issue?",
    "text": "",
    "images": [],
    "options": [
      "BPDU guard needs to be activated in the\n                    interface configuration command mode.",
      "Access ports configured with root guard\n                    cannot be configured with BPDU guard.",
      "Access ports belong to different\n                    VLANs.",
      "PortFast is not\n                    configured on all access ports."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 130
  },
  {
    "title": "126. Which two types of spanning tree protocols can cause\n                    suboptimal traffic flows because they assume only one spanning-tree instance for the entire bridged\n                    network? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "MSTP",
      "RSTP",
      "Rapid PVST+",
      "PVST+",
      "STP"
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "",
    "id": 131
  },
  {
    "title": "127. Refer to the exhibit. A network administrator is\n                    configuring the router R1 for IPv6 address assignment. Based on the partial configuration, which\n                    IPv6 global unicast address assignment scheme does the administrator intend to implement?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/i282171v1n1_282171.png"
    ],
    "options": [
      "stateful",
      "stateless",
      "manual configuration",
      "SLAAC"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 132
  },
  {
    "title": "128. A WLAN engineer deploys a WLC and five wireless APs\n                    using the CAPWAP protocol with the DTLS feature to secure the control plane of the network devices.\n                    While testing the wireless network, the WLAN engineer notices that data traffic is being exchanged\n                    between the WLC and the APs in plain-text and is not being encrypted. What is the most likely reason\n                    for this?",
    "text": "",
    "images": [],
    "options": [
      "DTLS only provides data security\n                    through authentication and does not provide encryption for data moving between a wireless LAN\n                    controller (WLC) and an access point (AP).",
      "Although DTLS is\n                    enabled by default to secure the CAPWAP control channel, it is disabled by default for the data\n                    channel.",
      "DTLS is a protocol that only provides\n                    security between the access point (AP) and the wireless client.",
      "Data encryption requires a DTLS license\n                    to be installed on each access point (AP) prior to being enabled on the wireless LAN controller\n                    (WLC)."
    ],
    "correct": [
      1
    ],
    "explanation": "DTLS is a protocol which provides security between the AP and the WLC. It allows them to communicate\n                    using encryption and prevents eavesdropping or tampering.\n\nDTLS is enabled by default to secure the CAPWAP control channel but is disabled\n                    by default for the data channel. All CAPWAP management and control traffic exchanged between an AP\n                    and WLC is encrypted and secured by default to provide control plane privacy and prevent\n                    Man-In-the-Middle (MITM) attacks.",
    "id": 133
  },
  {
    "title": "129. A new switch is to be added to an existing network in\n                    a remote office. The network administrator does not want the technicians in the remote office to be\n                    able to add new VLANs to the switch, but the switch should receive VLAN updates from the VTP domain.\n                    Which two steps must be performed to configure VTP on the new switch to meet these conditions?\n                    (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "Configure the new\n                    switch as a VTP client.",
      "Configure the\n                    existing VTP domain name on the new switch.",
      "Configure an IP address on the new\n                    switch.",
      "Configure all ports of both switches to\n                    access mode.",
      "Enable VTP pruning."
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Before the\n                    switch is put in the correct VTP domain and in client mode, the switch must be connected to any\n                    other switch in the VTP domain through a trunk in order to receive/transmit VTP information.",
    "id": 134
  },
  {
    "title": "130. Refer to the exhibit. Consider that the main power\n                    has just been restored. PC3 issues a broadcast IPv4 DHCP request. To which port will SW1 forward\n                    this request?​",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2020/01/i245718v1n1_1.png"
    ],
    "options": [
      "to Fa0/1, Fa0/2, and\n                    Fa0/3 only",
      "to Fa0/1, Fa0/2, Fa0/3, and Fa0/4",
      "to Fa0/1 only​",
      "to Fa0/1, Fa0/2, and Fa0/4 only​",
      "to Fa0/1 and Fa0/2 only"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 135
  },
  {
    "title": "131. What action takes place when the source MAC address\n                    of a frame entering a switch is not in the MAC address table?",
    "text": "Case 1",
    "images": [],
    "options": [
      "The switch forwards the frame out of\n                    the specified port.",
      "The switch will forward the frame out\n                    all ports except the incoming port.",
      "The switch adds the MAC\n                    address and incoming port number to the table.",
      "The switch adds a MAC address table\n                    entry mapping for the destination MAC address and the ingress port."
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 136
  },
  {
    "title": "131. What action takes place when the source MAC address\n                    of a frame entering a switch is not in the MAC address table?",
    "text": "Case 2",
    "images": [],
    "options": [
      "The switch adds a MAC address table\n                    entry for the destination MAC address and the egress port.",
      "The switch adds the\n                    MAC address and incoming port number to the table.",
      "The switch replaces the old entry and\n                    uses the more current port.",
      "The switch updates the refresh timer\n                    for the entry."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 137
  },
  {
    "title": "132. Employees are unable to connect to servers on one of the\n                    internal networks. What should be done or checked?",
    "text": "",
    "images": [],
    "options": [
      "Use the\n                    “show ip interface brief” command to see if an interface is down.",
      "Verify that there is not a default\n                    route in any of the edge router routing tables.",
      "Create static routes to all internal\n                    networks and a default route to the internet.",
      "Check the statistics on the default\n                    route for oversaturation."
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 138
  },
  {
    "title": "133. What is the effect of entering the ip dhcp snooping\n                    configuration command on a switch?",
    "text": "",
    "images": [],
    "options": [
      "It enables DHCP\n                    snooping globally on a switch.",
      "It enables PortFast globally on a\n                    switch.",
      "It disables DTP negotiations on\n                    trunking ports.",
      "It manually enables a trunk link."
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 139
  },
  {
    "title": "134. An administrator notices that large numbers of packets are\n                    being dropped on one of the branch routers. What should be done or checked?",
    "text": "",
    "images": [],
    "options": [
      "Create static routes to all internal\n                    networks and a default route to the internet.",
      "Create extra static routes to the same\n                    location with an AD of 1.",
      "Check the statistics on the default\n                    route for oversaturation.",
      "Check the routing\n                    table for a missing static route."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 140
  },
  {
    "title": "135. What are two switch characteristics that could help\n                    alleviate network congestion? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "fast internal\n                    switching",
      "large frame\n                    buffers",
      "store-and-forward switching",
      "low port density",
      "frame check sequence (FCS) check"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "",
    "id": 141
  },
  {
    "title": "136. What is a result of connecting two or more switches\n                    together?",
    "text": "",
    "images": [],
    "options": [
      "The number of broadcast domains is\n                    increased.",
      "The size of the\n                    broadcast domain is increased.",
      "The number of collision domains is\n                    reduced.",
      "The size of the collision domain is\n                    increased."
    ],
    "correct": [
      1
    ],
    "explanation": ": When two or\n                    more switches are connected together, the size of the broadcast domain is increased and so is the\n                    number of collision domains. The number of broadcast domains is increased only when routers are\n                    added.",
    "id": 142
  },
  {
    "title": "138. Branch users were able to access a site in the\n                    morning but have had no connectivity with the site since lunch time. What should be done or\n                    checked?",
    "text": "",
    "images": [],
    "options": [
      "Verify that the static route to the\n                    server is present in the routing table.",
      "Use the\n                    “show ip interface brief” command to see if an interface is down.",
      "Check the configuration on the floating\n                    static route and adjust the AD.",
      "Create a floating static route to that\n                    network."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 143
  },
  {
    "title": "139. What is the effect of entering the switchport\n                    port-security configuration command on a switch?",
    "text": "",
    "images": [],
    "options": [
      "It dynamically learns the L2 address\n                    and copies it to the running configuration.",
      "It enables port\n                    security on an interface.",
      "It enables port security globally on\n                    the switch.",
      "It restricts the number of discovery\n                    messages, per second, to be received on the interface."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 144
  },
  {
    "title": "140. A network administrator is configuring a WLAN. Why\n                    would the administrator use multiple lightweight APs?",
    "text": "",
    "images": [],
    "options": [
      "to centralize management of multiple\n                    WLANs",
      "to monitor the operation of the\n                    wireless network",
      "to provide prioritized service for\n                    time-sensitive applications",
      "to facilitate group\n                    configuration and management of multiple WLANs through a WLC"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 145
  },
  {
    "title": "141. Refer to the exhibit. PC-A and PC-B are both in VLAN\n                    60. PC-A is unable to communicate with PC-B. What is the problem?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2016/02/i211586v1n1_Question-5.png"
    ],
    "options": [
      "The native VLAN should be VLAN 60.",
      "The native VLAN is being pruned from\n                    the link.",
      "The trunk has been configured with the\n                    switchport nonegotiate command.",
      "The VLAN that is used by PC-A is not in the list of allowed VLANs on\n                    the trunk."
    ],
    "correct": [
      3
    ],
    "explanation": "Because\n                    PC-A and PC-B are connected to different switches, traffic between them must flow over the trunk\n                    link. Trunks can be configured so that they only allow traffic for particular VLANs to cross the\n                    link. In this scenario, VLAN 60, the VLAN that is associated with PC-A and PC-B, has not been\n                    allowed across the link, as shown by the output of show interfaces trunk.",
    "id": 146
  },
  {
    "title": "142. A network administrator is configuring a WLAN. Why\n                    would the administrator use RADIUS servers on the network?",
    "text": "",
    "images": [],
    "options": [
      "to centralize management of multiple\n                    WLANs",
      "to restrict access to\n                    the WLAN by authorized, authenticated users only",
      "to facilitate group configuration and\n                    management of multiple WLANs through a WLC",
      "to monitor the operation of the\n                    wireless network"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 147
  },
  {
    "title": "143. What is the effect of entering the switchport mode access\n                    configuration command on a switch?",
    "text": "",
    "images": [],
    "options": [
      "It enables BPDU guard on a specific\n                    port.",
      "It manually enables a trunk link.",
      "It disables an unused port.",
      "It disables DTP on a\n                    non-trunking interface."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 148
  },
  {
    "title": "144. A network administrator has configured a router for\n                    stateless DHCPv6 operation. However, users report that workstations are not receiving DNS server\n                    information. Which two router configuration lines should be verified to ensure that stateless DHCPv6\n                    service is properly configured? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "The domain-name line is included in the\n                    ipv6 dhcp pool\n                    section.",
      "The dns-server line\n                    is included in the ipv6 dhcp pool section.",
      "The ipv6 nd other-config-flag is entered for the interface that faces the LAN\n                    segment.",
      "The address prefix line is included in\n                    the ipv6 dhcp pool section.",
      "The ipv6 nd managed-config-flag is entered for the interface that faces the LAN\n                    segment."
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "To use the\n                    stateless DHCPv6 method, the router must inform DHCPv6 clients to configure a SLAAC IPv6 address and\n                    contact the DHCPv6 server for additional configuration parameters, such as the DNS server address.\n                    This is done through the command ipv6 nd\n                    other-config-flag entered at the interface\n                    configuration mode. The DNS server address is indicated in the ipv6 dhcp pool configuration.",
    "id": 149
  },
  {
    "title": "145. A network administrator is configuring a WLAN. Why would\n                    the administrator disable the broadcast feature for the SSID?",
    "text": "",
    "images": [],
    "options": [
      "to eliminate\n                    outsiders scanning for available SSIDs in the area",
      "to centralize management of multiple\n                    WLANs",
      "to facilitate group configuration and\n                    management of multiple WLANs through a WLC",
      "to provide prioritized service for\n                    time-sensitive applications"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 150
  },
  {
    "title": "146. Refer to the exhibit. An administrator is attempting\n                    to install an IPv6 static route on router R1 to reach the network attached to router R2. After the\n                    static route command is entered, connectivity to the network is still failing. What error has been\n                    made in the static route configuration?",
    "text": "",
    "images": [
      "https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-17_100010.jpg"
    ],
    "options": [
      "The next hop address is incorrect.",
      "The interface is incorrect.",
      "The destination network is\n                    incorrect.",
      "The network prefix is incorrect."
    ],
    "correct": [
      1
    ],
    "explanation": "In this\n                    example the interface in the static route is incorrect. The interface should be the exit interface\n                    on R1, which is s0/0/0.",
    "id": 151
  },
  {
    "title": "147. What action takes place when a frame entering a\n                    switch has a unicast destination MAC address that is not in the MAC address table?",
    "text": "",
    "images": [],
    "options": [
      "The switch updates the refresh timer\n                    for the entry.",
      "The switch resets the refresh timer on\n                    all MAC address table entries.",
      "The switch replaces the old entry and\n                    uses the more current port.",
      "The switch will\n                    forward the frame out all ports except the incoming port."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 152
  },
  {
    "title": "148. A junior technician was adding a route to a LAN router. A\n                    traceroute to a device on the new network revealed a wrong path and unreachable status. What should\n                    be done or checked?",
    "text": "",
    "images": [],
    "options": [
      "Create a floating static route to that\n                    network.",
      "Check the configuration on the floating\n                    static route and adjust the AD.",
      "Check the\n                    configuration of the exit interface on the new static route.",
      "Verify that the static route to the\n                    server is present in the routing table."
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 153
  },
  {
    "title": "149. What is the effect of entering the ip arp inspection vlan\n                    10 configuration command on a switch?",
    "text": "",
    "images": [],
    "options": [
      "It specifies the maximum number of L2\n                    addresses allowed on a port.",
      "It enables DAI on\n                    specific switch interfaces previously configured with DHCP snooping.",
      "It enables DHCP snooping globally on a\n                    switch.",
      "It globally enables BPDU guard on all\n                    PortFast-enabled ports."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 154
  },
  {
    "title": "150. What protocol or technology manages trunk negotiations\n                    between switches?",
    "text": "",
    "images": [],
    "options": [
      "VTP",
      "EtherChannel",
      "DTP",
      "STP"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 155
  },
  {
    "title": "151. A network administrator is configuring a WLAN. Why\n                    would the administrator apply WPA2 with AES to the WLAN?",
    "text": "",
    "images": [],
    "options": [
      "to reduce the risk of unauthorized APs\n                    being added to the network",
      "to centralize management of multiple\n                    WLANs",
      "to provide prioritized service for\n                    time-sensitive applications",
      "to provide privacy\n                    and integrity to wireless traffic by using encryption"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 156
  },
  {
    "title": "152. Users on a LAN are unable to get to a company web\n                    server but are able to get elsewhere. What should be done or checked?",
    "text": "",
    "images": [],
    "options": [
      "Ensure that the old default route has\n                    been removed from the company edge routers.",
      "Verify that the\n                    static route to the server is present in the routing table.",
      "Check the configuration on the floating\n                    static route and adjust the AD.",
      "Create a floating static route to that\n                    network."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 157
  },
  {
    "title": "153. What IPv6 prefix is designed for link-local\n                    communication?",
    "text": "",
    "images": [],
    "options": [
      "2001::/3",
      "ff00::/8",
      "fc::/07",
      "fe80::/10"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 158
  },
  {
    "title": "154. What is the effect of entering the ip dhcp snooping limit rate 6 configuration command on a switch?",
    "text": "",
    "images": [],
    "options": [
      "It displays the IP-to-MAC address\n                    associations for switch interfaces.",
      "It enables port security globally on\n                    the switch.",
      "It restricts the\n                    number of discovery messages, per second, to be received on the interface.",
      "It dynamically learns the L2 address\n                    and copies it to the running configuration."
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 159
  },
  {
    "title": "155. A network administrator is configuring a WLAN. Why\n                    would the administrator change the default DHCP IPv4 addresses on an AP?",
    "text": "",
    "images": [],
    "options": [
      "to eliminate outsiders scanning for\n                    available SSIDs in the area",
      "to reduce the risk of unauthorized APs\n                    being added to the network",
      "to reduce outsiders\n                    intercepting data or accessing the wireless network by using a well-known address range",
      "to reduce the risk of interference by\n                    external devices such as microwave ovens"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 160
  },
  {
    "title": "156. What is the effect of entering the ip arp inspection\n                    validate src-mac configuration command on a switch?",
    "text": "",
    "images": [],
    "options": [
      "It checks the source\n                    L2 address in the Ethernet header against the sender L2 address in the ARP body.",
      "It disables all trunk ports.",
      "It displays the IP-to-MAC address\n                    associations for switch interfaces.",
      "It enables portfast on a specific\n                    switch interface."
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 161
  },
  {
    "title": "157. What protocol or technology is a Cisco proprietary\n                    protocol that is automatically enabled on 2960 switches?",
    "text": "",
    "images": [],
    "options": [
      "DTP",
      "STP",
      "VTP",
      "EtherChannel"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 162
  },
  {
    "title": "158. What address and prefix length is used when\n                    configuring an IPv6 default static route?",
    "text": "",
    "images": [],
    "options": [
      "::/0",
      "FF02::1/8",
      "0.0.0.0/0",
      "::1/128"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 163
  },
  {
    "title": "159. What are two characteristics of Cisco Express\n                    Forwarding (CEF)? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "When a packet arrives on a router\n                    interface, it is forwarded to the control plane where the CPU matches the destination address with a\n                    matching routing table entry.",
      "This is the fastest\n                    forwarding mechanism on Cisco routers and multilayer switches.",
      "With this switching method, flow\n                    information for a packet is stored in the fast-switching cache to forward future packets to the same\n                    destination without CPU intervention.",
      "Packets are forwarded\n                    based on information in the FIB and an adjacency table.",
      "When a packet arrives on a router\n                    interface, it is forwarded to the control plane where the CPU searches for a match in the\n                    fast-switching cache."
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "",
    "id": 164
  },
  {
    "title": "160. Which term describes the role of a Cisco switch in\n                    the 802.1X port-based access control?",
    "text": "",
    "images": [],
    "options": [
      "agent",
      "supplicant",
      "authenticator",
      "authentication server"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 165
  },
  {
    "title": "161. Which Cisco solution helps prevent ARP spoofing and\n                    ARP poisoning attacks?",
    "text": "",
    "images": [],
    "options": [
      "Dynamic ARP\n                    Inspection",
      "IP Source Guard",
      "DHCP Snooping",
      "Port Security"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "id": 166
  },
  {
    "title": "162. What is an advantage of PVST+?",
    "text": "",
    "images": [],
    "options": [
      "PVST+ optimizes performance on the\n                    network through autoselection of the root bridge.",
      "PVST+ reduces bandwidth consumption\n                    compared to traditional implementations of STP that use CST.",
      "PVST+ requires fewer CPU cycles for all\n                    the switches in the network.",
      "PVST+ optimizes\n                    performance on the network through load sharing."
    ],
    "correct": [
      3
    ],
    "explanation": "PVST+ results in optimum\n                    load balancing. However, this is accomplished by manually configuring switches to be elected as root\n                    bridges for different VLANs on the network. The root bridges are not automatically selected.\n                    Furthermore, having spanning-tree instances for each VLAN actually consumes more bandwidth and it\n                    increases the CPU cycles for all the switches in the network.",
    "id": 167
  },
  {
    "title": "163. What protocol or technology uses a standby router to\n                    assume packet-forwarding responsibility if the active router fails?",
    "text": "",
    "images": [],
    "options": [
      "EtherChannel",
      "DTP",
      "HSRP",
      "VTP"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 168
  },
  {
    "title": "164. What is the effect of entering the show ip dhcp snooping\n                    binding configuration command on a switch?",
    "text": "",
    "images": [],
    "options": [
      "It switches a trunk port to access\n                    mode.",
      "It checks the source L2 address in the\n                    Ethernet header against the sender L2 address in the ARP body.",
      "It restricts the number of discovery\n                    messages, per second, to be received on the interface.",
      "It displays the\n                    IP-to-MAC address associations for switch interfaces."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 169
  },
  {
    "title": "165. What action takes place when the source MAC address of a\n                    frame entering a switch is in the MAC address table?",
    "text": "",
    "images": [],
    "options": [
      "The switch forwards the frame out of\n                    the specified port.",
      "The switch updates\n                    the refresh timer for the entry.",
      "The switch replaces the old entry and\n                    uses the more current port.",
      "The switch adds a MAC address table\n                    entry for the destination MAC address and the egress port."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "id": 170
  },
  {
    "title": "166. A small publishing company has a network design such\n                    that when a broadcast is sent on the LAN, 200 devices receive the transmitted broadcast. How can the\n                    network administrator reduce the number of devices that receive broadcast traffic?",
    "text": "",
    "images": [],
    "options": [
      "Add more switches so that fewer devices\n                    are on a particular switch.",
      "Replace the switches with switches that\n                    have more ports per switch. This will allow more devices on a particular switch.",
      "Segment the LAN into\n                    smaller LANs and route between them.*",
      "Replace at least half of the switches\n                    with hubs to reduce the size of the broadcast domain."
    ],
    "correct": [
      2
    ],
    "explanation": "Explain: By\n                    dividing the one big network into two smaller network, the network administrator has created two\n                    smaller broadcast domains. When a broadcast is sent on the network now, the broadcast will only be\n                    sent to the devices on the same Ethernet LAN. The other LAN will not receive the broadcast.",
    "id": 171
  },
  {
    "title": "167. What defines a host route on a Cisco router?",
    "text": "",
    "images": [],
    "options": [
      "The link-local address is added\n                    automatically to the routing table as an IPv6 host route.",
      "An IPv4 static host\n                    route configuration uses a destination IP address of a specific device and a /32 subnet mask.",
      "A host route is designated with a C in\n                    the routing table.",
      "A static IPv6 host route must include\n                    the interface type and the interface number of the next hop router."
    ],
    "correct": [
      1
    ],
    "explanation": "A host route is an IPv4 address with a 32-bit mask,\n                    or an IPv6 address with a 128-bit mask. When an active interface on a router is configured with an\n                    IPv4 or IPv6 address, a local host route is automatically added to the routing table. A host route\n                    is marked with L in the output of the routing table. For IPv6 static routes, the next-hop address\n                    can be the link-local address of the adjacent router. In this case you must specify the interface\n                    type and the interface number of the local router.",
    "id": 172
  },
  {
    "title": "168. What else is required when configuring an IPv6 static\n                    route using a next-hop link-local address?",
    "text": "",
    "images": [],
    "options": [
      "administrative distance",
      "ip address of the neighbor router",
      "network number and subnet mask on the\n                    interface of the neighbor router",
      "interface number and\n                    type"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "id": 173
  },
  {
    "title": "169. A technician is configuring a wireless network for a\n                    small business using a SOHO wireless router. Which two authentication methods are used, if the\n                    router is configured with WPA2? (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "personal",
      "AES",
      "TKIP",
      "WEP",
      "enterprise"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "",
    "id": 174
  },
  {
    "title": "170. Which mitigation technique would prevent rogue\n                    servers from providing false IPv6 configuration parameters to clients?",
    "text": "",
    "images": [],
    "options": [
      "enabling DHCPv6 Guard",
      "enabling RA Guard",
      "implementing port security on edge\n                    ports",
      "disabling CDP on edge ports"
    ],
    "correct": [
      0
    ],
    "explanation": "DHCPv6\n                    Guard is a feature designed to ensure that rogue DHCPv6 servers are not able to hand out addresses\n                    to clients, redirect client traffic, or starve out the DHCPv6 server and cause a DoS attack. DHCPv6\n                    Guard requires a policy to be configured in DHCP Guard configuration mode, and DHCPv6 Guard is\n                    enabled on an interface-by-interface basis.",
    "id": 175
  },
  {
    "title": "171. A PC has sent an RS message to an IPv6 router\n                    attached to the same network. Which two pieces of information will the router send to the client?\n                    (Choose two.)",
    "text": "",
    "images": [],
    "options": [
      "prefix length",
      "subnet mask in dotted decimal\n                    notation",
      "domain name",
      "administrative distance",
      "prefix",
      "DNS server IP address"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Router is\n                    part of the IPv6 all-routers group and received the RS message. It generates an RA containing the\n                    local network prefix and prefix length (e.g., 2001:db8:acad:1::/64)",
    "id": 176
  },
  {
    "title": "172. While attending a conference, participants are using\n                    laptops for network connectivity. When a guest speaker attempts to connect to the network, the\n                    laptop fails to display any available wireless networks. The access point must be operating in which\n                    mode?",
    "text": "",
    "images": [],
    "options": [
      "mixed",
      "passive",
      "active",
      "open"
    ],
    "correct": [
      2
    ],
    "explanation": "Active is a mode used to configure an access point so that clients must know the SSID to connect to\n                    the access point. APs and wireless routers can operate in a mixed mode meaning that that multiple\n                    wireless standards are supported. Open is an authentication mode for an access point that has no\n                    impact on the listing of available wireless networks for a client. When an access point is\n                    configured in passive mode, the SSID is broadcast so that the name of wireless network will appear\n                    in the listing of available networks for clients.",
    "id": 177
  },
  {
    "title": "173. Which three components are combined to form a bridge\n                    ID?",
    "text": "",
    "images": [],
    "options": [
      "extended system ID",
      "cost",
      "IP address",
      "bridge priority",
      "MAC address",
      "port ID"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "The three\n                    components that are combined to form a bridge ID are bridge priority, extended system ID, and MAC\n                    address.",
    "id": 178
  },
  {
    "title": "174. On a Cisco 3504 WLC Summary page (Advanced >\n                    Summary), which tab allows a network administrator to configure a particular WLAN with a WPA2\n                    policy?",
    "text": "",
    "images": [],
    "options": [
      "SECURITY",
      "WIRELESS",
      "WLANs",
      "MANAGEMENT"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "id": 179
  }
];