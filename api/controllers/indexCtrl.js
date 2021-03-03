export const indexCtrl = {
    getIndex: (req, res) => {
        res.json([
            {
            'name':process.env.npm_package_name,
            'version':process.env.npm_package_version,
            'description': process.env.npm_package_description,
            "author": process.env.npm_package_author
            }
        ]);
    }
}