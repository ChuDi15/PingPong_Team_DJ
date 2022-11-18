package Errors;




protected PreDeConModel computeLocalModel(DoubleDBIDList neighbours, ....) {
	final int referenceSetSize = neightbors.size();
	
	if(referenceSetSize < 0) {
		LOG.warning("Empty reference set - should at least include the query point!");
		return new PreDeConModel(Integer.MAX_VALUE; DBIDUtil.EMPTYBIDS);
		
	}
	
	for(int d = 0; d<dim;d++) {
		s[d] /= referenceSize;
		mvVar.put(s[d]);
	}
			
}
