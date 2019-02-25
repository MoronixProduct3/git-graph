var myTemplateConfig = {
    branch: {
        lineWidth: 5,
        spacingX: 50,
        showLabel: true,                  // display branch names on graph
    },
    commit: {
        spacingY: -40,
        dot: {
        size: 12
        },
        message: {
        displayAuthor: false,
        displayBranch: false,
        displayHash: false,
        font: "normal 12pt Arial"
        },
        shouldDisplayTooltipsInCompactMode: false, // default = true
        tooltipHTMLFormatter: function ( commit ) {
        return "" + commit.sha1 + "" + ": " + commit.message;
        }
    }
};
var myTemplate = new GitGraph.Template( myTemplateConfig );

var git = new GitGraph({
    elementId: 'gitGraph',
    orientation: 'vertical',
    template: myTemplate
});

var master = git.branch('master')
.commit('original commit')
.commit('readme')

var feature1 =  master.branch('feature1')
.commit('added stuff')

var feature2 = master.branch('feature2')
.commit('cool stuff')

feature1.commit('fixed stuff')
.merge(master)

