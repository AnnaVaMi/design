jQuery("#simulation")
  .on("click", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_42")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "f1"
                    },"Pomes (1kg)" ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "f2"
                    },"Plàtans (0.5kg)" ]
                  } ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "action": "jimPlus",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "v1"
                    },{
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "v2"
                      },{
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "v3"
                        },{
                          "datatype": "variable",
                          "element": "v4"
                        } ]
                      } ]
                    } ]
                  },"1" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "cistella" ],
                    "value": "(1)"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
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
                },
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
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-Category_3","#s-Category_1","#s-Category_6","#s-Category_5","#s-Category_2","#s-Category_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-Radio_button_2","#s-Radio_button_4","#s-Radio_button_1","#s-Radio_button_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_4" ]
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
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimLess",
                    "parameter": [ {
                      "action": "jimWindowScrollY"
                    },"100" ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "cistella"
                    },"(1)" ]
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "cistellaControl"
                  },"0" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_25" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 2000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_25" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "cistellaControl" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimGreaterOrEquals",
                    "parameter": [ {
                      "action": "jimWindowScrollY"
                    },"100" ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "cistella"
                    },"(1)" ]
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "cistellaControl"
                  },"0" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 2000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "cistellaControl" ],
                    "value": "1"
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
    } else if(jFirer.is("#s-Radio_button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistella"
                },"(0)" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "subs" ],
                    "value": "Subscripció setmanal"
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
    } else if(jFirer.is("#s-Radio_button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistella"
                },"(0)" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "subs" ],
                    "value": "Subscripció quinzenal"
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
    } else if(jFirer.is("#s-Radio_button_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistella"
                },"(0)" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "subs" ],
                    "value": "Subscripció mensual"
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
    } else if(jFirer.is("#s-Radio_button_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistella"
                },"(0)" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "subs" ],
                    "value": "No hi ha subscripció"
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_3" ]
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_13" ]
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_22": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#573A2D"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_22 span": {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_3": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_3 span": {
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
    } else if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_3" ]
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
                    "target": [ "#s-Group_13" ]
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_22": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_22": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_22 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_22 span": {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_3": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#573A2D"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_3 span": {
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
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_4" ]
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
    } else if(jFirer.is("#s-Rectangle_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_4" ]
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
    } else if(jFirer.is("#s-Image_7")) {
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
  .on("mouseup", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_14 span": {
                      "attributes": {
                        "color": "#CBCBCB"
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
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_15 span": {
                      "attributes": {
                        "color": "#CBCBCB"
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
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_19 span": {
                      "attributes": {
                        "color": "#CBCBCB"
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
    } else if(jFirer.is("#s-Rectangle_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_44": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_44": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_44 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#282828"
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
    } else if(jFirer.is("#s-Rectangle_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_43": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_43": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_43 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#282828"
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
  .on("mousedown", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_14 span": {
                      "attributes": {
                        "color": "#515356"
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
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_15 span": {
                      "attributes": {
                        "color": "#515356"
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
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_19 span": {
                      "attributes": {
                        "color": "#515356"
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
    } else if(jFirer.is("#s-Rectangle_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_44": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_44": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_44 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#999999"
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
    } else if(jFirer.is("#s-Rectangle_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_43": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_43": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_43 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#999999"
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
  .on("pageload", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8")) {
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistella"
                },"(0)" ]
              },
              "actions": [
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": [ "#s-Category_3","#s-Category_1","#s-Category_6","#s-Category_5","#s-Category_2","#s-Category_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": [ "#s-Radio_button_2","#s-Radio_button_4","#s-Radio_button_1","#s-Radio_button_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-Category_3","#s-Category_1","#s-Category_6","#s-Category_5","#s-Category_2","#s-Category_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-Radio_button_2","#s-Radio_button_4","#s-Radio_button_1","#s-Radio_button_3" ]
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
    } else if(jFirer.is("#s-Text_20")) {
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
    } else if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistellaControl"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "verd1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_1",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistellaControl"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "verd2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_2",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistellaControl"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "verd3" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_3",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistellaControl"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "verd4" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_4",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistellaControl"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "f1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_5",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cistellaControl"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "f2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_6",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("change", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_1",
                  "property": "jimGetSelectedValue"
                },"Tomàquets (0.5kg)" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "v1" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "v1" ],
                    "value": "0"
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
                    "variable": [ "verd1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_1",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_2",
                  "property": "jimGetSelectedValue"
                },"Enciam (1 unitat)" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "v2" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "v2" ],
                    "value": "0"
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
                    "variable": [ "verd2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_2",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_3",
                  "property": "jimGetSelectedValue"
                },"Carxofes (4 unitats)" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "v3" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "v3" ],
                    "value": "0"
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
                    "variable": [ "verd3" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_3",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_4",
                  "property": "jimGetSelectedValue"
                },"Pastanagues (0.5kg)" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "v4" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "v4" ],
                    "value": "0"
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
                    "variable": [ "verd4" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_4",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "f1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_5",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "f2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_6",
                      "property": "jimGetSelectedValue"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_3": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#74B9EF",
                        "border-right-color": "#74B9EF",
                        "border-bottom-color": "#74B9EF",
                        "border-left-color": "#74B9EF"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_3 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#74B9EF",
                        "border-right-color": "#74B9EF",
                        "border-bottom-color": "#74B9EF",
                        "border-left-color": "#74B9EF"
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
  .on("focusout", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_3": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_3 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
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
  .on("mouseenter dragenter", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .mouseenter", function(event, data) {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_8": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_8 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_7": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_7 span": {
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
  .on("mouseleave dragleave", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .mouseleave", function(event, data) {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_8": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_8 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_7": {
                      "attributes": {
                        "min-height": "20.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-textBlock_7 span": {
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
  .on("mouseenter dragenter", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .mouseenter", function(event, data) {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_13": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_13 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_4": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_4 span": {
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Image_15 svg": {
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Image_33 svg": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_11": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_11 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_14": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_14 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_5": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_5 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_16": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_16 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_17": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_17 span": {
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
    } else if(jFirer.is("#s-Rectangle_42") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_42": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_42": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_42 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#B38168"
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Title_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Title_8 span": {
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
    } else if(jFirer.is("#s-Rectangle_44") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_44": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_44": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_44 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
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
    } else if(jFirer.is("#s-Rectangle_43") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_43": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_43": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_43 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
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
    } else if(jFirer.is("#s-Rectangle_45") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_45": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_45": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_45 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#B38168"
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
    } else if(jFirer.is("#s-Image_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-patates" ]
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-cebolla" ]
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-alls" ]
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Image_4 svg": {
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
    } else if(jFirer.is("#s-Rectangle_46") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_46": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_46": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_46 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#B38168"
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Image_7 svg": {
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_16 span": {
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_17": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_17 span": {
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_18 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_18": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_18": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_18 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_18 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_23": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_23": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_23 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_23 span": {
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_11 span": {
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_12 span": {
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
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Text_13 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_1": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Paragraph_1 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_15": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_15 span": {
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
                    "body #s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_24": {
                      "attributes": {
                        "min-height": "-1.0px"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_24": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_24 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 #s-Rectangle_24 span": {
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
  .on("mouseleave dragleave", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .mouseleave", function(event, data) {
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
    } else if(jFirer.is("#s-Rectangle_42")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Title_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_44")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_43")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_45")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_46")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_7")) {
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
  .on("windowresize", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8")) {
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
                    "target": "screens/e77fa6e9-bb5b-4de3-bbaf-00ade8ac1e87"
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
    } else if(jFirer.is("#s-Text_20")) {
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
                    "target": "screens/e77fa6e9-bb5b-4de3-bbaf-00ade8ac1e87"
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
    }
  })
  .on("windowscroll", ".s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8 .windowscroll", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8")) {
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
    } else if(jFirer.is("#s-Text_20")) {
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