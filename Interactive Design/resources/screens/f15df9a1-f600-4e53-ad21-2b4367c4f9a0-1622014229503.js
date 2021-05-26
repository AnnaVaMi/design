jQuery("#simulation")
  .on("click", ".s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Title_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9ca731da-c86b-4d0b-b141-ef06f4493262"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9ca731da-c86b-4d0b-b141-ef06f4493262"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-Ellipse_2" ],
                    "axis": "scrolly"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-Ellipse_2" ],
                    "axis": "scrolly"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a48a6002-e776-4afb-8357-ac462315ca15"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a48a6002-e776-4afb-8357-ac462315ca15"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_11" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimWindowScrollY"
                        },"71" ]
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuad",
                      "duration": 1
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_7" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_11" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a48a6002-e776-4afb-8357-ac462315ca15"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_11" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimWindowScrollY"
                        },"71" ]
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuad",
                      "duration": 1
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_7" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_11" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_11" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimWindowScrollY"
                        },"71" ]
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "400"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuad",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_7" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Item_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_1": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3ddf61f7-b4b8-4b16-8870-4c3ee9506fd4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Item_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_2": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/06a770da-fb28-4109-9353-099b73b6e1df"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Item_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_3": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f15df9a1-f600-4e53-ad21-2b4367c4f9a0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Item_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_6": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Item_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "login" ],
                    "value": "NO"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Item_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "login"
                },"SI" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Item_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "login"
                },"SI" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Item_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Title_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Title_8": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Title_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Title_8 span": {
                      "attributes": {
                        "color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_2": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_2 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_2": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_2 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_3": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_3 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_3": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_3 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_4": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_4 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_4": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_4 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_5": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_5 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_5": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_5 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_3 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_4 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_5 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_6 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_7 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_8 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Text_9 span": {
                      "attributes": {
                        "color": "#005580"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-privacity_link_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_7 span": {
                      "attributes": {
                        "text-decoration": "underline"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-privacity_link_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_8 span": {
                      "attributes": {
                        "text-decoration": "underline"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-privacity_link_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_9 span": {
                      "attributes": {
                        "text-decoration": "underline"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-privacity_link_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_10 span": {
                      "attributes": {
                        "text-decoration": "underline"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-privacity_link_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_11 span": {
                      "attributes": {
                        "text-decoration": "underline"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-privacity_link_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-privacity_link_12 span": {
                      "attributes": {
                        "text-decoration": "underline"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_21") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_21": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_21": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_21 span": {
                      "attributes": {
                        "color": "#573A2D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_6": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_6 span": {
                      "attributes": {
                        "color": "#573A2D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_22": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_22 span": {
                      "attributes": {
                        "color": "#573A2D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_23") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_23": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_23": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_23 span": {
                      "attributes": {
                        "color": "#573A2D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_24") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_24": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_24": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_24 span": {
                      "attributes": {
                        "color": "#573A2D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_25") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_25": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_25": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_25 span": {
                      "attributes": {
                        "color": "#573A2D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Image_22 svg": {
                      "attributes": {
                        "overlay": "#573A2D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_35") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Image_35 svg": {
                      "attributes": {
                        "overlay": "#573A2D"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_17": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_17 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Rectangle_17 span": {
                      "attributes": {
                        "color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_10": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_10 span": {
                      "attributes": {
                        "color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Image_9 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Image_9 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_10": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Paragraph_10 span": {
                      "attributes": {
                        "color": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 #s-Image_6 svg": {
                      "attributes": {
                        "overlay": "#B38168"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Title_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-privacity_link_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-privacity_link_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-privacity_link_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-privacity_link_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-privacity_link_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-privacity_link_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_35")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_6")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("windowresize", ".s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"400" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e4f95e04-30a3-4638-b521-c3d252426382"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"400" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e4f95e04-30a3-4638-b521-c3d252426382"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"400" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e3a67bca-13fe-41cf-8e64-998bf1d9403b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("windowscroll", ".s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0 .windowscroll", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-f15df9a1-f600-4e53-ad21-2b4367c4f9a0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowScrollY"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_2" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimWindowScrollY"
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_10" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimWindowScrollY"
                        },"500" ]
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "303"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_11" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimWindowScrollY"
                        },"71" ]
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowScrollY"
                },"50" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_10" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowScrollY"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_2" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimWindowScrollY"
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_10" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimWindowScrollY"
                        },"500" ]
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "303"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_11" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimWindowScrollY"
                        },"71" ]
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowScrollY"
                },"50" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_10" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowScrollY"
                },"0" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowScrollY"
                },"100" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });