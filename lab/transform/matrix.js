// Complete the empty methods.
// Dont forget, matrices are in column major form!

class Matrix
{
	static identity()
	{
		return new Float32Array([1, 0, 0, 0,
								 0, 1, 0, 0,
								 0, 0, 1, 0,
								 0, 0, 0, 1]);
	}

	static mul(mat1, mat2)
	{
		return new Float32Array([mat1[0]*mat2[0] + mat1[4]*mat2[1] + mat1[8]*mat2[2] + mat1[12]*mat2[3],
			                     mat1[1]*mat2[0] + mat1[5]*mat2[1] + mat1[9]*mat2[2] + mat1[13]*mat2[3],
			                     mat1[2]*mat2[0] + mat1[6]*mat2[1] + mat1[10]*mat2[2] + mat1[14]*mat2[3],
			                     mat1[3]*mat2[0] + mat1[7]*mat2[1] + mat1[11]*mat2[2] + mat1[15]*mat2[3],
			                     mat1[0]*mat2[4] + mat1[4]*mat2[5] + mat1[8]*mat2[6] + mat1[12]*mat2[7],
			                     mat1[1]*mat2[4] + mat1[5]*mat2[5] + mat1[9]*mat2[6] + mat1[13]*mat2[7],
			                     mat1[2]*mat2[4] + mat1[6]*mat2[5] + mat1[10]*mat2[6] + mat1[14]*mat2[7],
			                     mat1[3]*mat2[4] + mat1[7]*mat2[5] + mat1[11]*mat2[6] + mat1[15]*mat2[7],
			                     mat1[0]*mat2[8] + mat1[4]*mat2[9] + mat1[8]*mat2[10] + mat1[12]*mat2[11],
			                     mat1[1]*mat2[8] + mat1[5]*mat2[9] + mat1[9]*mat2[10] + mat1[13]*mat2[11],
			                     mat1[2]*mat2[8] + mat1[6]*mat2[9] + mat1[10]*mat2[10] + mat1[14]*mat2[11],
			                     mat1[3]*mat2[8] + mat1[7]*mat2[9] + mat1[11]*mat2[10] + mat1[15]*mat2[11],
			                     mat1[0]*mat2[12] + mat1[4]*mat2[13] + mat1[8]*mat2[14] + mat1[12]*mat2[15],
			                     mat1[1]*mat2[12] + mat1[5]*mat2[13] + mat1[9]*mat2[14] + mat1[13]*mat2[15],
			                     mat1[2]*mat2[12] + mat1[6]*mat2[13] + mat1[10]*mat2[14] + mat1[14]*mat2[15],
			                     mat1[3]*mat2[12] + mat1[7]*mat2[13] + mat1[11]*mat2[14] + mat1[15]*mat2[15]]);
	}

	static prod(mats)
	{
		var mat = mats[0];
		for (var i = 1; i < mats.length; i++)
		{
			mat = Matrix.mul(mat, mats[i]);
		}
		return mat;
	}

	static translation(v)
	{
		// TODO construct a 4x4 translation matrix for a translation along
		// the 3D vector v
	}

	static rotation(q)
	{
		// TODO construct a 4x4 rotation matrix for a rotation by the
		// quaternion q
	}

	static scale(v)
	{
		// TODO construct a 4x4 scale matrix for a scale by the
		// 3D vector v
	}

	static equals(mat1, mat2)
	{
		if (! mat1 instanceof Float32Array || ! mat2 instanceof Float32Array 
			|| mat1.length != 16 || mat2.length != 16)
		{
			console.log("%cInvalid inputs for Matrix.equals.","color:red");
			return false;
		}

		let threshold = 0.001;
		for (var i = 0; i < 16; i++)
		{
			if (Math.abs(mat1[i]-mat2[i]) > threshold)
			{
				return false;
			}
		}
		return true;
	}
}