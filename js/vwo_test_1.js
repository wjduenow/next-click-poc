var _vis_opt_heatmap = 0;var _vis_opt_settings_loaded = true,_vwo_acc_id = 56181,_vwo_exp_ids = [],_vwo_exp = {};
_vwo_exp_ids.push('1');
_vwo_exp['1'] = {};
_vwo_exp['1'].name = "Madwords";
_vwo_exp['1'].version = 2;
_vwo_exp['1'].clickmap = 1;
_vwo_exp['1'].type = 'VISUAL_AB';
_vwo_exp['1'].status = 'RUNNING';
_vwo_exp['1'].pc_traffic = 100;
_vwo_exp['1'].url = 'http://next-click.appspot.com/vwo1?xxx=yyy';
_vwo_exp['1'].url_pattern = 'http://next-click.appspot.com/vwo1?xxx=yyy*';
_vwo_exp['1'].exclude_url = "";
_vwo_exp['1'].multiple_domains = 0;
_vwo_exp['1'].segment_code = "_vwo_s().f_in(_vwo_s().qP('segment'), 'one')";
_vwo_exp['1'].sections = {};
_vwo_exp['1'].sections['1'] = {};
_vwo_exp['1'].sections['1'].name = "Section 1";
_vwo_exp['1'].sections['1'].path = "";
_vwo_exp['1'].sections['1'].variations = {};
_vwo_exp['1'].sections['1'].variation_names = {};
_vwo_exp['1'].sections['1'].segment = {};
_vwo_exp['1'].sections['1'].variation_names['1'] = "Control";
_vwo_exp['1'].sections['1'].variations['1'] = "";
_vwo_exp['1'].sections['1'].segment['1'] = '1';
_vwo_exp['1'].sections['1'].variation_names['2'] = "Variation 1";
_vwo_exp['1'].sections['1'].variations['2'] = "[{\"xpath\":\"DIV#promo-pagination > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV + DIV > H1:first-child\",\"js\":\"var ctx=vwo_$(x);ctx.html(\\\"The Worlds Greatest Word Game!!!\\\");\"},{\"xpath\":\"DIV#maia-header > DIV:first-child > H1:first-child + H2 > A:first-child\",\"js\":\"var ctx=vwo_$(x);ctx.html(\\\"MadWords\\\");\"}]";
_vwo_exp['1'].sections['1'].segment['2'] = '1';
_vwo_exp['1'].sections['1'].variation_names['3'] = "Variation 2";
_vwo_exp['1'].sections['1'].variations['3'] = "[{\"xpath\":\"DIV#promo-pagination > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV + DIV > H1:first-child + P + DIV > P:first-child > SPAN:first-child\",\"js\":\"var ctx=vwo_$(x);ctx.css({\\\"position\\\":\\\"relative\\\",\\\"top\\\":-72,\\\"left\\\":211,\\\"z-index\\\":\\\"auto\\\"});\"},{\"xpath\":\"DIV#promo-pagination > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child > DIV:first-child + DIV + DIV > H1:first-child\",\"js\":\"var ctx=vwo_$(x);ctx.replaceWith(\\\"<h1 class=\\\\\\\"maia-super\\\\\\\">Get your business on Google<\\\/h1>\\\");\"}]";
_vwo_exp['1'].sections['1'].segment['3'] = '1';
_vwo_exp['1'].combs = {};
_vwo_exp['1'].comb_n = {};
_vwo_exp['1'].combs['1'] = 0;
_vwo_exp['1'].comb_n['1'] = "Control";
_vwo_exp['1'].combs['2'] = 0.5;
_vwo_exp['1'].comb_n['2'] = "Variation-1";
_vwo_exp['1'].combs['3'] = 0.5;
_vwo_exp['1'].comb_n['3'] = "Variation-2";
_vwo_exp['1'].goals = {};
_vwo_exp['1'].goals['1'] = {};
_vwo_exp['1'].goals['1'].url = '*';
_vwo_exp['1'].goals['1'].type = 'ENGAGEMENT';_vwo_exp['1'].third_party = {};