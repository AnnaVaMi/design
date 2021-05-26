jQuery("#simulation")
  .on("mouseenter dragenter", ".t-fe0099ed-2f96-44fe-ad69-a5116ed24107 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-privacity_link") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-privacity_link": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-privacity_link span": {
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
    } else if(jFirer.is("#t-carret_link") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-carret_link": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-carret_link span": {
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
    } else if(jFirer.is("#t-home_link") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-home_link": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-home_link span": {
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
    } else if(jFirer.is("#t-compte_link") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-compte_link": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-compte_link span": {
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
    } else if(jFirer.is("#t-cistelles_link") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-cistelles_link": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-cistelles_link span": {
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
    } else if(jFirer.is("#t-about_link") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-about_link": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-about_link span": {
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
    } else if(jFirer.is("#t-contacte_link") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-contacte_link": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#t-fe0099ed-2f96-44fe-ad69-a5116ed24107 #t-contacte_link span": {
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
    }
  })
  .on("mouseleave dragleave", ".t-fe0099ed-2f96-44fe-ad69-a5116ed24107 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-privacity_link")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-carret_link")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-home_link")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-compte_link")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-cistelles_link")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-about_link")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-contacte_link")) {
      jEvent.undoCases(jFirer);
    }
  });