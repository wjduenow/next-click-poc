var _vis_opt_domain = vwo_config.vis.opt_domain;
var _vis_opt_heatmap = vwo_config.vis.opt_heatmap;
var _vis_opt_settings_loaded = vwo_config.vis.opt_settings_loaded;
var _vwo_acc_id = vwo_config.vwo.account_id;
var _vwo_exp_ids = [];
var _vwo_exp = {};
for (var i = 0, l = vwo_config.vwo.experiments.length; i < l; i++) {
  var experiment = vwo_config.vwo.experiments[i];
  var num = String(experiment.id);
  _vwo_exp_ids.push(num);
  _vwo_exp[num] = {};
  _vwo_exp[num].name = experiment.name;
  _vwo_exp[num].version = experiment.version;
  _vwo_exp[num].clickmap = experiment.clickmap;
  _vwo_exp[num].type = experiment.type;
  _vwo_exp[num].status = experiment.status;
  _vwo_exp[num].pc_traffic = experiment.pc_traffic;
  _vwo_exp[num].url = experiment.url;
  _vwo_exp[num].url_pattern = experiment.url_pattern;
  _vwo_exp[num].exclude_url = experiment.exclude_url;
  _vwo_exp[num].multiple_domains = experiment.multiple_domains;
  _vwo_exp[num].segment_code = experiment.segment_code; 
  _vwo_exp[num].third_party = experiment.third_party;
  _vwo_exp[num].sections = {};
  _vwo_exp[num].combs = {};
  _vwo_exp[num].comb_n = {};
  _vwo_exp[num].goals = {};
  for (var j = 0, sections = experiment.sections.length; j < sections; j++) {
    var section = experiment.sections[j];
    var pointer = String(j + 1);
    _vwo_exp[num].sections[pointer] = {};
    _vwo_exp[num].sections[pointer].name = section.name;
    _vwo_exp[num].sections[pointer].path = section.path;
    _vwo_exp[num].sections[pointer].variations = {};
    _vwo_exp[num].sections[pointer].variation_names = {};
    _vwo_exp[num].sections[pointer].segment = {};  
    for (var k = 0, variations = section.variations.length; k < variations; k++) {  
      _vwo_exp[num].sections[pointer].variations[String(k+1)] = section.variations[k];
    }
    for (var k = 0, names = section.variation_names.length; k < names; k++) {  
      _vwo_exp[num].sections[pointer].variation_names[String(k+1)] = section.variation_names[k];
    }
    for (var k = 0, segments = section.segments.length; k < segments; k++) {  
      _vwo_exp[num].sections[pointer].segment[String(k+1)] = section.segments[k];
    }        
  }
  for (var j = 0, combs = experiment.combs.length; j < combs; j++) {
    _vwo_exp[num].combs[String(j + 1)] = experiment.combs[j];
  }
  for (var j = 0, ncombs = experiment.comb_n.length; j < ncombs; j++) {
    _vwo_exp[num].comb_n[String(j + 1)] = experiment.comb_n[j];
  }  
  for (var j = 0, goals = experiment.goals.length; j < goals; j++) {
    var goal = experiment.goals[j];
    var pointer = String(j + 1);
    _vwo_exp[num].goals[pointer] = {};
    _vwo_exp[num].goals[pointer].url = goal.url;
    _vwo_exp[num].goals[pointer].type = goal.type;
  }  
  if (experiment.GA) {
    _vwo_exp[num].GA = {};
    _vwo_exp[num].GA.s = experiment.GA.s;
    _vwo_exp[num].GA.p = experiment.GA.p;
  }

}
console.log(JSON.stringify(_vwo_exp));
console.log(_vwo_exp_ids)