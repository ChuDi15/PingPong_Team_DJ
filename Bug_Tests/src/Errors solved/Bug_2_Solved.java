package Errors;


@Override
public double[] computeMean() {
	return points.size() == 1 ? points.get(0) : null;
}
