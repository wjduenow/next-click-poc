var vwo_config = {
	"vis": {
    "opt_domain": "next-click.appspot.com",
    "opt_heatmap": 0,
    "opt_settings_loaded": true
  },
  "vwo": {
    "account_id": 56181,
    "experiments" : [
      {
        "id" : 1,
        "name":"Madwords",
        "version":2,
        "clickmap":1,
        "type": "VISUAL_AB",
        "status": "RUNNING",
        "pc_traffic": 100,
        "url": "http://next-click.appspot.com/vwo1?xxx=yyy",
        "url_pattern": "http://next-click.appspot.com/vwo1?xxx=yyy*",
        "exclude_url": "",
        "multiple_domains": 0,
        "segment_code": "_vwo_s().f_in(_vwo_s().qP('segment'), 'one')",
        "sections":[
          {
            "name" : "Section 1",
            "path" : "",
            "variations" : [
              "",
              "[{\"xpath\":\"DIV#promo-pagination > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV + DIV > H1:first-child\",\"js\":\"var ctx=vwo_$(x);ctx.html(\\\"The Worlds Greatest Word Game!!!\\\");\"},{\"xpath\":\"DIV#maia-header > DIV:first-child > H1:first-child + H2 > A:first-child\",\"js\":\"var ctx=vwo_$(x);ctx.html(\\\"MadWords\\\");\"}]",
              "[{\"xpath\":\"DIV#promo-pagination > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV + DIV > H1:first-child + P + DIV > P:first-child > SPAN:first-child\",\"js\":\"var ctx=vwo_$(x);ctx.css({\\\"position\\\":\\\"relative\\\",\\\"top\\\":-72,\\\"left\\\":211,\\\"z-index\\\":\\\"auto\\\"});\"},{\"xpath\":\"DIV#promo-pagination > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV + DIV > H1:first-child\",\"js\":\"var ctx=vwo_$(x);ctx.replaceWith(\\\"<h1 class=\\\\\\\"maia-super\\\\\\\">Get your business on Google<\\\/h1>\\\");\"}]"
            ],
            "variation_names" : [
              "Control",
              "Variation 1",
              "Variation 2"
            ],
            "segments" : [
              1,
              1,
              1
            ]
          }
        ],
        "combs" : [
          0,
          0.5,
          0.5
        ],
        "comb_n" : [
          "Control",
          "Variation-1",
          "Variation-2"
        ],
        "goals" : [
          {
            "url": "*",
            "type": "ENGAGEMENT"
          }
        ],
        "third_party" : {}
      }
    ]
  }
}
