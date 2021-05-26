(function(window, undefined) {
  var dictionary = {
    "5560a919-fc3a-46ab-8987-36f0e8f2ec5f": "Home2",
    "e0b11bd5-2404-482e-b45c-203b84b7809f": "Compte usuari tablet",
    "e77fa6e9-bb5b-4de3-bbaf-00ade8ac1e87": "Cistella2",
    "a1a76f35-44bf-48eb-b0f3-400b912acc57": "Carret",
    "9ca731da-c86b-4d0b-b141-ef06f4493262": "Cistella mobil",
    "35c8da71-52a7-43bc-9c17-9d38b4e3f693": "Cistella",
    "baf2356f-d2ae-480b-9aba-c643a8d2b513": "Cistelles",
    "e3887e5d-8bdc-4358-97f0-5f7beeb45344": "Carret2",
    "e3a67bca-13fe-41cf-8e64-998bf1d9403b": "Home tablet",
    "de8dc09a-9a88-4b7c-8d02-82cb8efcd7d8": "Cistella tablet",
    "06a770da-fb28-4109-9353-099b73b6e1df": "Carret mobil",
    "8856b03f-b8aa-4fc0-b993-3b2221907631": "Compte usuari",
    "3ddf61f7-b4b8-4b16-8870-4c3ee9506fd4": "Compte usuari mobil",
    "d05f88d1-7fa9-4c95-97bd-1852a39f2527": "Compte usuari2",
    "a48a6002-e776-4afb-8357-ac462315ca15": "Home mobil",
    "f15df9a1-f600-4e53-ad21-2b4367c4f9a0": "Cistelles mobil",
    "00f9075e-0df8-4b8a-82ff-d2fa2736ba86": "Cistelles2",
    "bae5e082-26d3-479f-9f93-f68ae6d0c15c": "Home",
    "e4f95e04-30a3-4638-b521-c3d252426382": "Cistelles tablet",
    "10da884c-788c-45b6-a17e-85fd0e615d51": "Carret tablet",
    "fe0099ed-2f96-44fe-ad69-a5116ed24107": "capcal_footer",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);