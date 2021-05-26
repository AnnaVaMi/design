jQuery("#simulation")
  .on("click", ".s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e77fa6e9-bb5b-4de3-bbaf-00ade8ac1e87"
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
    } else if(jFirer.is("#s-Image_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e77fa6e9-bb5b-4de3-bbaf-00ade8ac1e87"
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
    } else if(jFirer.is("#s-Title_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_5" ]
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
    } else if(jFirer.is("#s-Title_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-Text_19" ],
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
                    "target": [ "#s-Group_5" ]
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
    } else if(jFirer.is("#s-Text_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/00f9075e-0df8-4b8a-82ff-d2fa2736ba86"
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
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
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
    } else if(jFirer.is("#s-Rectangle_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d05f88d1-7fa9-4c95-97bd-1852a39f2527"
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
                    "target": "screens/e3887e5d-8bdc-4358-97f0-5f7beeb45344"
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
                    "target": "screens/e3887e5d-8bdc-4358-97f0-5f7beeb45344"
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
                    "target": "screens/00f9075e-0df8-4b8a-82ff-d2fa2736ba86"
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
    } else if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
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
    } else if(jFirer.is("#s-Rectangle_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d05f88d1-7fa9-4c95-97bd-1852a39f2527"
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
  .on("pageload", ".s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86")) {
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
    } else if(jFirer.is("#s-Text_19")) {
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
  .on("mouseenter dragenter", ".s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_8": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_8 span": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_7": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_7 span": {
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
  .on("mouseleave dragleave", ".s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 .mouseleave", function(event, data) {
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
                    "target": [ "#s-Image_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_8": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_8 span": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_7": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-textBlock_7 span": {
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
  .on("mouseenter dragenter", ".s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_42") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_42": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_42": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_42 span": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_4": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_4 span": {
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
    } else if(jFirer.is("#s-Image_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_21 svg": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_33 svg": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_18": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_18 span": {
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
    } else if(jFirer.is("#s-Paragraph_43") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_43": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_43": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_43 span": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_5": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_5 span": {
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
    } else if(jFirer.is("#s-Paragraph_44") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_44": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_44": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_44 span": {
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
    } else if(jFirer.is("#s-Paragraph_45") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_45": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_45": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_45 span": {
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
    } else if(jFirer.is("#s-social_link") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-social_link": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-social_link span": {
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
    } else if(jFirer.is("#s-Paragraph_46") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_2": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_2 > .borderLayer": {
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
    } else if(jFirer.is("#s-Image_31") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_2": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_2 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_2 > .borderLayer": {
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
    } else if(jFirer.is("#s-Paragraph_47") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_3": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_3 > .borderLayer": {
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
    } else if(jFirer.is("#s-Paragraph_48") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_5": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_5 > .borderLayer": {
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
    } else if(jFirer.is("#s-Paragraph_51") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_12": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_12 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_12 > .borderLayer": {
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
    } else if(jFirer.is("#s-Paragraph_49") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_13": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_13 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_13 > .borderLayer": {
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
    } else if(jFirer.is("#s-Paragraph_50") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_14": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_14 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#B38168",
                        "border-right-color": "#B38168",
                        "border-bottom-color": "#B38168",
                        "border-left-color": "#B38168"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_14 > .borderLayer": {
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
    } else if(jFirer.is("#s-Title_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Title_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Title_8 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_3 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_4 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_5 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_6 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_7 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_8 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#F5F5F5"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_9 span": {
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
    } else if(jFirer.is("#s-Title_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Title_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Title_9 span": {
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
    } else if(jFirer.is("#s-Paragraph_41") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_41": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_41": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_41 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_25 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_25 > .borderLayer": {
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
    } else if(jFirer.is("#s-Image_25") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_25 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_25 > .borderLayer": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_41": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_41": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_41 span": {
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
    } else if(jFirer.is("#s-Paragraph_40") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_40": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_40": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_40 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_26 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_26 > .borderLayer": {
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
    } else if(jFirer.is("#s-Image_26") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_26 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_26 > .borderLayer": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_40": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_40": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_40 span": {
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
    } else if(jFirer.is("#s-Paragraph_39") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_39": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_39": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_39 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_27 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_27 > .borderLayer": {
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
    } else if(jFirer.is("#s-Image_27") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_27 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_27 > .borderLayer": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_39": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_39": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_39 span": {
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
    } else if(jFirer.is("#s-Paragraph_38") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_38": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_38": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_38 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_28 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_28 > .borderLayer": {
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
    } else if(jFirer.is("#s-Image_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_28 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_28 > .borderLayer": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_38": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_38": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_38 span": {
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
    } else if(jFirer.is("#s-Paragraph_37") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_37": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_37": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_37 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_29 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_29 > .borderLayer": {
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
    } else if(jFirer.is("#s-Image_29") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_29 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_29 > .borderLayer": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_37": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_37": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_37 span": {
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
    } else if(jFirer.is("#s-Paragraph_36") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_36": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_36": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_36 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_30 > .borderLayer": {
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
    } else if(jFirer.is("#s-Image_30") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_30 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_30 > .borderLayer": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_36": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_36": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_36 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Image_6 svg": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_16 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_17 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_18 span": {
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
    } else if(jFirer.is("#s-Paragraph_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_2": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_2 span": {
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
    } else if(jFirer.is("#s-Rectangle_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_19": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_19 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_19 span": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_23": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_23": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_23 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_23 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_11 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_12 span": {
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
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Text_13 span": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_1": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Paragraph_1 span": {
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
    } else if(jFirer.is("#s-Rectangle_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_16": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_16 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_16 span": {
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
                    "body #s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_24": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_24": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_24 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 #s-Rectangle_24 span": {
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
  .on("mouseleave dragleave", ".s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_42")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_33")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_43")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_44")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_45")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-social_link")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_46")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_31")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_47")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_48")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_51")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_49")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_50")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Title_8")) {
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
    } else if(jFirer.is("#s-Title_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_41")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_40")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_39")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_38")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_37")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_36")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_19")) {
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
    } else if(jFirer.is("#s-Rectangle_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_24")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("windowresize", ".s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"1024" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/baf2356f-d2ae-480b-9aba-c643a8d2b513"
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
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"1024" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/baf2356f-d2ae-480b-9aba-c643a8d2b513"
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
                },"768" ]
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
    }
  })
  .on("windowscroll", ".s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86 .windowscroll", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-00f9075e-0df8-4b8a-82ff-d2fa2736ba86")) {
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
    } else if(jFirer.is("#s-Text_19")) {
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