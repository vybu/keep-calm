import prerenderPath from './prerenderPath';

class HtmlPluginServerSideRenderExtensions {
    apply(compiler) {
        compiler.plugin('compilation', function(compilation) {
            compilation.plugin('html-webpack-plugin-before-html-generation', function(htmlPluginData, callback) {
                if (htmlPluginData.plugin.options.prerenderPath) {
                    prerenderPath(htmlPluginData.plugin.options.prerenderPath, html => {
                        htmlPluginData.plugin.options.prerenderPath = html;
                        callback(null, htmlPluginData);
                    });
                } else {
                    callback(null, htmlPluginData);
                }
            });
        });

    }
}

export default HtmlPluginServerSideRenderExtensions;

