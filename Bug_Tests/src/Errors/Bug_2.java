package Errors;


@Override
public double[] computeMean() {
	return points.size() == 1 ? points.get(1) : null;
}
