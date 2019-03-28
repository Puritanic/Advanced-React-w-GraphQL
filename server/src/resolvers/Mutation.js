const Mutations = {
	async createItem(parent, args, ctx, info) {
		// TODO: Check if the user is logged in
		// CreateItem returns promise
		const item = await ctx.db.mutation.createItem(
			{
				data: { ...args },
			},
			info
		);

		return item;
	},
};

module.exports = Mutations;
