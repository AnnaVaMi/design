jQuery("#simulation")
  .on("click", ".s-e3a67bca-13fe-41cf-8e64-998bf1d9403b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_16")) {
      cases = [
        {
          "blocks": [
            {
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
    } else if(jFirer.is("#s-Image_22")) {
      cases = [
        {
          "blocks": [
            {
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
    } else if(jFirer.is("#s-Rectangle_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e0b11bd5-2404-482e-b45c-203b84b7809f"
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
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/10da884c-788c-45b6-a17e-85fd0e615d51"
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
    } else if(jFirer.is("#s-Rectangle_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
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
                    "target": [ "#s-Rectangle_23" ]
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
    } else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/10da884c-788c-45b6-a17e-85fd0e615d51"
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
    } else if(jFirer.is("#s-Text_11")) {
      cases = [
        {
          "blocks": [
            {
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
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
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
    } else if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
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
    } else if(jFirer.is("#s-Rectangle_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e0b11bd5-2404-482e-b45c-203b84b7809f"
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
    } else if(jFirer.is("#s-Rectangle_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
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
                    "target": [ "#s-Rectangle_24" ]
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
  .on("pageload", ".s-e3a67bca-13fe-41cf-8e64-998bf1d9403b .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-textBlock_7" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cistella"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-textBlock_8" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cistella"
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
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "login"
                  },"SI" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimWindowScrollY"
                  },"100" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_24" ]
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
                    "target": [ "#s-Rectangle_24" ]
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
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-textBlock_7" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cistella"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-textBlock_8" ],
                    "value": {
                      "datatype": "variable",
                      "element": "cistella"
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
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "login"
                  },"SI" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "action": "jimWindowScrollY"
                  },"100" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_24" ]
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
                    "target": [ "#s-Rectangle_24" ]
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
  .on("mouseenter dragenter", ".s-e3a67bca-13fe-41cf-8e64-998bf1d9403b .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_23" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_8": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_8 span": {
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_19" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_7": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_7 span": {
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-e3a67bca-13fe-41cf-8e64-998bf1d9403b .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_20") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Image_20").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Image_20") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_23" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_8": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_8 span": {
                      "attributes": {
                        "color": "#FFFFFF"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_17") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Image_17").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Image_17") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_19" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_7": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-textBlock_7 span": {
                      "attributes": {
                        "color": "#714B39"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-e3a67bca-13fe-41cf-8e64-998bf1d9403b .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_13": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_13 span": {
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
    } else if(jFirer.is("#s-Paragraph_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_4": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_4 span": {
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
    } else if(jFirer.is("#s-Image_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Image_15 svg": {
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
    } else if(jFirer.is("#s-Image_33") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Image_33 svg": {
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
    } else if(jFirer.is("#s-Rectangle_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_11": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_11 span": {
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
    } else if(jFirer.is("#s-Paragraph_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_14": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_14 span": {
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
    } else if(jFirer.is("#s-Paragraph_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_5": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_5 span": {
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
    } else if(jFirer.is("#s-Paragraph_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_16": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_16 span": {
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
    } else if(jFirer.is("#s-Paragraph_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_17": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_17 span": {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_10": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_10 span": {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Image_9 > .borderLayer": {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Image_9 > .borderLayer": {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_10": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_10 span": {
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
    } else if(jFirer.is("#s-Paragraph_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_12": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_12 span": {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Image_2 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Image_2 > .borderLayer": {
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
    } else if(jFirer.is("#s-Image_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Image_2 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Image_2 > .borderLayer": {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_12": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_12 span": {
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
    } else if(jFirer.is("#s-Text_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_16 span": {
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
    } else if(jFirer.is("#s-Text_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_17 span": {
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
    } else if(jFirer.is("#s-Text_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_18 span": {
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
    } else if(jFirer.is("#s-Rectangle_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_18": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_18 span": {
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
    } else if(jFirer.is("#s-Rectangle_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_23": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_23": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_23 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_23 span": {
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
    } else if(jFirer.is("#s-Text_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_11 span": {
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
    } else if(jFirer.is("#s-Text_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_12 span": {
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
    } else if(jFirer.is("#s-Text_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Text_13 span": {
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
    } else if(jFirer.is("#s-Paragraph_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_1": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Paragraph_1 span": {
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
    } else if(jFirer.is("#s-Rectangle_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_15": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_15 span": {
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
    } else if(jFirer.is("#s-Rectangle_24") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_24": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_24": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_24 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b #s-Rectangle_24 span": {
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
    }
  })
  .on("mouseleave dragleave", ".s-e3a67bca-13fe-41cf-8e64-998bf1d9403b .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_33")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_24")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("windowresize", ".s-e3a67bca-13fe-41cf-8e64-998bf1d9403b .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"768" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5560a919-fc3a-46ab-8987-36f0e8f2ec5f"
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
                },"768" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5560a919-fc3a-46ab-8987-36f0e8f2ec5f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"400" ]
              },
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
    }
  })
  .on("windowscroll", ".s-e3a67bca-13fe-41cf-8e64-998bf1d9403b .windowscroll", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-e3a67bca-13fe-41cf-8e64-998bf1d9403b")) {
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
                    "target": [ "#s-Group_30" ],
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
                },"100" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_29" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_28" ]
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
                    "target": [ "#s-Group_29" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_28" ]
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
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "login"
                  },"SI" ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimWindowScrollY"
                  },"100" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_23" ]
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
                    "target": [ "#s-Rectangle_23" ]
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
                  "action": "jimWindowScrollY"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_30" ],
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
                },"100" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_29" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_28" ]
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
                    "target": [ "#s-Group_29" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_28" ]
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
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "login"
                  },"SI" ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "action": "jimWindowScrollY"
                  },"100" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_23" ]
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
                    "target": [ "#s-Rectangle_23" ]
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
  });